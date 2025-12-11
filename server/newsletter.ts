import { Router, json } from "express";
import { db } from "./db";
import { newsletters, researchSources } from "../shared/schema";
import { eq, desc } from "drizzle-orm";
import OpenAI from "openai";
import { Resend } from "resend";

const router = Router();
router.use(json());

const ADMIN_KEY = process.env.NEWSLETTER_ADMIN_KEY;

const authMiddleware = (req: any, res: any, next: any) => {
  if (!ADMIN_KEY) {
    console.error("NEWSLETTER_ADMIN_KEY environment variable is not set");
    return res.status(500).json({ error: "Newsletter admin not configured" });
  }
  
  const authHeader = req.headers.authorization;
  const providedKey = authHeader?.replace("Bearer ", "");
  
  if (providedKey !== ADMIN_KEY) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
};

router.use(authMiddleware);

const openai = new OpenAI({
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY,
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
});

const resend = process.env.RESEND_API_KEY 
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

router.get("/newsletters", async (_req, res) => {
  try {
    const allNewsletters = await db.select().from(newsletters).orderBy(desc(newsletters.createdAt));
    res.json(allNewsletters);
  } catch (error) {
    console.error("Error fetching newsletters:", error);
    res.status(500).json({ error: "Failed to fetch newsletters" });
  }
});

router.post("/newsletters", async (req, res) => {
  try {
    const { title } = req.body;
    const [newsletter] = await db.insert(newsletters).values({ title }).returning();
    res.json(newsletter);
  } catch (error) {
    console.error("Error creating newsletter:", error);
    res.status(500).json({ error: "Failed to create newsletter" });
  }
});

router.get("/newsletters/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const [newsletter] = await db.select().from(newsletters).where(eq(newsletters.id, id));
    if (!newsletter) {
      return res.status(404).json({ error: "Newsletter not found" });
    }
    const sources = await db.select().from(researchSources).where(eq(researchSources.newsletterId, id));
    res.json({ ...newsletter, sources });
  } catch (error) {
    console.error("Error fetching newsletter:", error);
    res.status(500).json({ error: "Failed to fetch newsletter" });
  }
});

router.post("/newsletters/:id/sources", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { url, title, content } = req.body;
    const [source] = await db.insert(researchSources).values({
      newsletterId: id,
      url,
      title,
      content,
    }).returning();
    res.json(source);
  } catch (error) {
    console.error("Error adding source:", error);
    res.status(500).json({ error: "Failed to add source" });
  }
});

router.post("/newsletters/:id/summarize", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const sources = await db.select().from(researchSources).where(eq(researchSources.newsletterId, id));
    
    if (sources.length === 0) {
      return res.status(400).json({ error: "No sources to summarize. Add at least 10-40 sources for best results." });
    }

    const sourcesText = sources.map((s, i) => `[${i+1}] ${s.title}\nURL: ${s.url || 'N/A'}\nContent: ${s.content?.slice(0, 1000) || 'N/A'}`).join("\n\n---\n\n");

    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: `You are the lead content curator for Jeremy Kean's "Kean on Biz" biweekly newsletter.

TARGET AUDIENCE:
- Business coaches and consultants
- Insurance agency owners
- Entrepreneurs interested in AI and automation
- Business owners looking to scale with systems

CONTENT PRIORITIES:
1. AI & automation tools and strategies
2. GoHighLevel updates and tips
3. Business systems and SOPs
4. Coaching/consulting industry trends
5. Insurance industry technology
6. Time-saving automation workflows
7. Leadership and team building
8. Revenue growth strategies

TONE: Conversational, practical, no-fluff. Jeremy has 35 years of business experience - the newsletter should reflect wisdom and real-world application, not hype.`
        },
        {
          role: "user",
          content: `You have ${sources.length} research sources. Your job is to:

1. Analyze all sources for relevance to the target audience
2. Select the TOP 10 most valuable insights (mix of: AI/automation news, business strategy, tools, and trends)
3. Write a compelling TLDR that captures the overall theme
4. Each Top 10 item should be actionable and valuable - not just a headline, but WHY it matters

Sources to analyze:
${sourcesText}

Format your response as JSON:
{
  "tldr": "2-3 sentence executive summary of this issue's theme",
  "topTen": [
    "1. [Headline] - [Why it matters and what to do about it]",
    "2. [Headline] - [Why it matters and what to do about it]",
    ...
  ],
  "sourcesUsed": [1, 3, 5, 7, 12, 15, 18, 22, 28, 31]
}`
        }
      ],
      response_format: { type: "json_object" }
    });

    const result = JSON.parse(completion.choices[0].message.content || "{}");

    await db.update(newsletters)
      .set({ 
        tldr: result.tldr, 
        topTenItems: result.topTen,
        updatedAt: new Date()
      })
      .where(eq(newsletters.id, id));

    res.json(result);
  } catch (error) {
    console.error("Error summarizing:", error);
    res.status(500).json({ error: "Failed to generate summary" });
  }
});

router.post("/newsletters/:id/generate-html", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const [newsletter] = await db.select().from(newsletters).where(eq(newsletters.id, id));
    
    if (!newsletter) {
      return res.status(404).json({ error: "Newsletter not found" });
    }

    const topTenItems = (newsletter.topTenItems as string[]) || [];
    
    const htmlContent = generateEmailHTML({
      title: newsletter.title,
      tldr: newsletter.tldr || "",
      topTen: topTenItems,
    });

    await db.update(newsletters)
      .set({ htmlContent, updatedAt: new Date() })
      .where(eq(newsletters.id, id));

    res.json({ htmlContent });
  } catch (error) {
    console.error("Error generating HTML:", error);
    res.status(500).json({ error: "Failed to generate HTML" });
  }
});

router.post("/newsletters/:id/send", async (req, res) => {
  try {
    if (!resend) {
      return res.status(400).json({ error: "Resend API key not configured" });
    }

    const id = parseInt(req.params.id);
    const { testEmail } = req.body;
    const [newsletter] = await db.select().from(newsletters).where(eq(newsletters.id, id));

    if (!newsletter || !newsletter.htmlContent) {
      return res.status(400).json({ error: "Newsletter not ready to send" });
    }

    const { data, error } = await resend.emails.send({
      from: "Jeremy Kean <newsletter@mail.keanonbiz.co>",
      to: testEmail ? [testEmail] : [],
      subject: newsletter.title,
      html: newsletter.htmlContent,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(500).json({ error: error.message });
    }

    if (!testEmail) {
      await db.update(newsletters)
        .set({ status: "sent", sentAt: new Date() })
        .where(eq(newsletters.id, id));
    }

    res.json({ success: true, id: data?.id });
  } catch (error) {
    console.error("Error sending newsletter:", error);
    res.status(500).json({ error: "Failed to send newsletter" });
  }
});

router.put("/newsletters/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { title, tldr, topTenItems } = req.body;
    
    const [updated] = await db.update(newsletters)
      .set({ 
        title: title || undefined,
        tldr: tldr || undefined,
        topTenItems: topTenItems || undefined,
        updatedAt: new Date()
      })
      .where(eq(newsletters.id, id))
      .returning();
    
    res.json(updated);
  } catch (error) {
    console.error("Error updating newsletter:", error);
    res.status(500).json({ error: "Failed to update newsletter" });
  }
});

router.post("/fetch-article", async (req, res) => {
  try {
    const { url } = req.body;
    if (!url) {
      return res.status(400).json({ error: "URL required" });
    }

    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; KeanOnBiz/1.0)"
      }
    });
    const html = await response.text();
    
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
    const title = titleMatch ? titleMatch[1].trim() : "";
    
    let content = html
      .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
      .replace(/<nav[^>]*>[\s\S]*?<\/nav>/gi, "")
      .replace(/<header[^>]*>[\s\S]*?<\/header>/gi, "")
      .replace(/<footer[^>]*>[\s\S]*?<\/footer>/gi, "")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 5000);

    res.json({ title, content });
  } catch (error) {
    console.error("Error fetching article:", error);
    res.status(500).json({ error: "Failed to fetch article" });
  }
});

function generateEmailHTML({ title, tldr, topTen }: { title: string; tldr: string; topTen: string[] }) {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0f172a; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0f172a;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%;">
          <!-- Header -->
          <tr>
            <td style="padding: 30px; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.1);">
              <h1 style="margin: 0; color: #3b82f6; font-size: 28px; font-weight: bold;">KEAN<span style="color: #94a3b8; font-weight: normal;">ON</span>BIZ</h1>
            </td>
          </tr>
          
          <!-- Title -->
          <tr>
            <td style="padding: 40px 30px 20px;">
              <h2 style="margin: 0; color: #ffffff; font-size: 32px; line-height: 1.3;">${title}</h2>
            </td>
          </tr>
          
          <!-- TLDR -->
          <tr>
            <td style="padding: 0 30px 30px;">
              <div style="background-color: #1e3a5f; border-radius: 12px; padding: 24px; border-left: 4px solid #FFD700;">
                <p style="margin: 0 0 8px; color: #FFD700; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">TL;DR</p>
                <p style="margin: 0; color: #e2e8f0; font-size: 16px; line-height: 1.6;">${tldr}</p>
              </div>
            </td>
          </tr>
          
          <!-- Top 10 -->
          <tr>
            <td style="padding: 0 30px 40px;">
              <h3 style="margin: 0 0 20px; color: #3b82f6; font-size: 20px;">Top 10 Things You Need to Know</h3>
              ${topTen.map((item, i) => `
              <div style="margin-bottom: 16px; padding: 16px; background-color: #172554; border-radius: 8px;">
                <p style="margin: 0; color: #ffffff; font-size: 15px; line-height: 1.5;">${item}</p>
              </div>
              `).join('')}
            </td>
          </tr>
          
          <!-- CTA -->
          <tr>
            <td style="padding: 0 30px 40px; text-align: center;">
              <a href="https://keanonbiz.com/jeremys-calendar" style="display: inline-block; background: #3b82f6; color: #ffffff; text-decoration: none; padding: 16px 32px; border-radius: 8px; font-weight: bold; font-size: 16px;">Book a Strategy Call</a>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 30px; text-align: center; border-top: 1px solid rgba(255,255,255,0.1);">
              <p style="margin: 0 0 10px; color: #64748b; font-size: 14px;">Jeremy Kean | Kean on Biz</p>
              <p style="margin: 0; color: #475569; font-size: 12px;">
                <a href="https://keanonbiz.com" style="color: #3b82f6; text-decoration: none;">keanonbiz.com</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export default router;
