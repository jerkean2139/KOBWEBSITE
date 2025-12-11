import { Router, json } from "express";
import { db } from "./db";
import { newsletters, researchSources } from "../shared/schema";
import { eq, desc } from "drizzle-orm";
import OpenAI from "openai";
import { Resend } from "resend";

const router = Router();
router.use(json());

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
      return res.status(400).json({ error: "No sources to summarize" });
    }

    const sourcesText = sources.map(s => `Title: ${s.title}\nContent: ${s.content}`).join("\n\n---\n\n");

    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: `You are a business newsletter writer for Jeremy Kean's "Kean on Biz" newsletter. 
Your audience is business owners, coaches, and insurance agency owners interested in AI, automation, and business growth.
Write in a conversational, engaging tone. Be practical and actionable.`
        },
        {
          role: "user",
          content: `Based on these research sources, create:

1. A TLDR (2-3 sentences capturing the main theme)
2. Top 10 Things You Need to Know (numbered list, each item should be a compelling insight with a brief explanation)

Sources:
${sourcesText}

Format your response as JSON:
{
  "tldr": "...",
  "topTen": ["1. Item one - explanation", "2. Item two - explanation", ...]
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
              <div style="background: linear-gradient(135deg, #1e3a5f 0%, #172554 100%); border-radius: 12px; padding: 24px; border-left: 4px solid #FFD700;">
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
              <div style="margin-bottom: 16px; padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px;">
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
