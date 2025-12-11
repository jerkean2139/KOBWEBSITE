import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import { 
  Plus, 
  Loader2, 
  Sparkles, 
  Send, 
  Eye, 
  Save, 
  FileText, 
  Link as LinkIcon,
  Trash2,
  CheckCircle2,
  Mail,
  ArrowLeft
} from "lucide-react";
import { Link } from "wouter";

interface Newsletter {
  id: number;
  title: string;
  status: string;
  tldr: string | null;
  topTenItems: string[] | null;
  htmlContent: string | null;
  createdAt: string;
  sources?: ResearchSource[];
}

interface ResearchSource {
  id: number;
  url: string | null;
  title: string | null;
  content: string | null;
  summary: string | null;
}

export default function NewsletterCreator() {
  const [newsletters, setNewsletters] = useState<Newsletter[]>([]);
  const [selectedNewsletter, setSelectedNewsletter] = useState<Newsletter | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSummarizing, setIsSummarizing] = useState(false);
  const [isGeneratingHtml, setIsGeneratingHtml] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const [testEmail, setTestEmail] = useState("");
  const [sendStatus, setSendStatus] = useState<"idle" | "success" | "error">("idle");
  
  const [newSource, setNewSource] = useState({ url: "", title: "", content: "" });

  useEffect(() => {
    fetchNewsletters();
  }, []);

  const fetchNewsletters = async () => {
    try {
      const res = await fetch("/api/newsletters");
      const data = await res.json();
      setNewsletters(data);
    } catch (error) {
      console.error("Failed to fetch newsletters:", error);
    }
  };

  const createNewsletter = async () => {
    if (!newTitle.trim()) return;
    setIsLoading(true);
    try {
      const res = await fetch("/api/newsletters", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: newTitle }),
      });
      const data = await res.json();
      setNewsletters([data, ...newsletters]);
      setSelectedNewsletter({ ...data, sources: [] });
      setNewTitle("");
    } catch (error) {
      console.error("Failed to create newsletter:", error);
    }
    setIsLoading(false);
  };

  const selectNewsletter = async (id: number) => {
    try {
      const res = await fetch(`/api/newsletters/${id}`);
      const data = await res.json();
      setSelectedNewsletter(data);
      setShowPreview(false);
    } catch (error) {
      console.error("Failed to fetch newsletter:", error);
    }
  };

  const addSource = async () => {
    if (!selectedNewsletter || !newSource.title.trim()) return;
    try {
      const res = await fetch(`/api/newsletters/${selectedNewsletter.id}/sources`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newSource),
      });
      const source = await res.json();
      setSelectedNewsletter({
        ...selectedNewsletter,
        sources: [...(selectedNewsletter.sources || []), source],
      });
      setNewSource({ url: "", title: "", content: "" });
    } catch (error) {
      console.error("Failed to add source:", error);
    }
  };

  const summarize = async () => {
    if (!selectedNewsletter) return;
    setIsSummarizing(true);
    try {
      const res = await fetch(`/api/newsletters/${selectedNewsletter.id}/summarize`, {
        method: "POST",
      });
      const data = await res.json();
      setSelectedNewsletter({
        ...selectedNewsletter,
        tldr: data.tldr,
        topTenItems: data.topTen,
      });
    } catch (error) {
      console.error("Failed to summarize:", error);
    }
    setIsSummarizing(false);
  };

  const generateHtml = async () => {
    if (!selectedNewsletter) return;
    setIsGeneratingHtml(true);
    try {
      const res = await fetch(`/api/newsletters/${selectedNewsletter.id}/generate-html`, {
        method: "POST",
      });
      const data = await res.json();
      setSelectedNewsletter({
        ...selectedNewsletter,
        htmlContent: data.htmlContent,
      });
      setShowPreview(true);
    } catch (error) {
      console.error("Failed to generate HTML:", error);
    }
    setIsGeneratingHtml(false);
  };

  const sendTestEmail = async () => {
    if (!selectedNewsletter || !testEmail.trim()) return;
    setIsSending(true);
    setSendStatus("idle");
    try {
      const res = await fetch(`/api/newsletters/${selectedNewsletter.id}/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ testEmail }),
      });
      if (res.ok) {
        setSendStatus("success");
      } else {
        setSendStatus("error");
      }
    } catch (error) {
      console.error("Failed to send:", error);
      setSendStatus("error");
    }
    setIsSending(false);
  };

  const updateNewsletter = async (updates: Partial<Newsletter>) => {
    if (!selectedNewsletter) return;
    try {
      await fetch(`/api/newsletters/${selectedNewsletter.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updates),
      });
      setSelectedNewsletter({ ...selectedNewsletter, ...updates });
    } catch (error) {
      console.error("Failed to update:", error);
    }
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20" style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #172554 100%)" }}>
        <div className="container py-8">
          <div className="flex items-center gap-4 mb-8">
            <Link href="/">
              <Button variant="ghost" className="text-white/60 hover:text-white hover:bg-white/10">
                <ArrowLeft size={18} className="mr-2" />
                Back to Site
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-white">Newsletter Creator</h1>
              <p className="text-white/60">Create and send your biweekly business insights</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-6">
            {/* Newsletter List */}
            <div className="lg:col-span-3">
              <Card className="bg-white/5 border-white/10">
                <CardHeader className="pb-3">
                  <CardTitle className="text-white text-lg flex items-center gap-2">
                    <FileText size={18} />
                    Newsletters
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex gap-2">
                    <Input
                      placeholder="New newsletter title..."
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                      onKeyDown={(e) => e.key === "Enter" && createNewsletter()}
                    />
                    <Button 
                      onClick={createNewsletter} 
                      disabled={isLoading || !newTitle.trim()}
                      className="bg-primary hover:bg-primary/90"
                    >
                      {isLoading ? <Loader2 className="animate-spin" size={16} /> : <Plus size={16} />}
                    </Button>
                  </div>
                  
                  <div className="space-y-2 max-h-[400px] overflow-y-auto">
                    {newsletters.map((nl) => (
                      <button
                        key={nl.id}
                        onClick={() => selectNewsletter(nl.id)}
                        className={`w-full text-left p-3 rounded-lg transition-all ${
                          selectedNewsletter?.id === nl.id
                            ? "bg-primary/20 border border-primary/50"
                            : "bg-white/5 hover:bg-white/10 border border-transparent"
                        }`}
                      >
                        <p className="text-white font-medium truncate">{nl.title}</p>
                        <p className="text-white/40 text-xs mt-1">
                          {nl.status === "sent" ? (
                            <span className="text-green-400">Sent</span>
                          ) : (
                            <span className="text-yellow-400">Draft</span>
                          )}
                          {" • "}
                          {new Date(nl.createdAt).toLocaleDateString()}
                        </p>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Editor */}
            <div className="lg:col-span-9">
              {selectedNewsletter ? (
                <div className="space-y-6">
                  {/* Research Sources */}
                  <Card className="bg-white/5 border-white/10">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center gap-2">
                        <LinkIcon size={18} />
                        Research Sources
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-3 gap-3">
                        <Input
                          placeholder="Article URL (optional)"
                          value={newSource.url}
                          onChange={(e) => setNewSource({ ...newSource, url: e.target.value })}
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                        />
                        <Input
                          placeholder="Title / Topic"
                          value={newSource.title}
                          onChange={(e) => setNewSource({ ...newSource, title: e.target.value })}
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                        />
                        <Button onClick={addSource} className="bg-primary hover:bg-primary/90">
                          <Plus size={16} className="mr-2" />
                          Add Source
                        </Button>
                      </div>
                      <Textarea
                        placeholder="Paste article content, notes, or key points here..."
                        value={newSource.content}
                        onChange={(e) => setNewSource({ ...newSource, content: e.target.value })}
                        rows={4}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                      />
                      
                      {selectedNewsletter.sources && selectedNewsletter.sources.length > 0 && (
                        <div className="space-y-2 pt-2">
                          {selectedNewsletter.sources.map((source) => (
                            <div key={source.id} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                              <CheckCircle2 className="text-green-400 mt-0.5" size={16} />
                              <div className="flex-1">
                                <p className="text-white font-medium">{source.title}</p>
                                {source.url && (
                                  <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-primary text-sm hover:underline">
                                    {source.url}
                                  </a>
                                )}
                                {source.content && (
                                  <p className="text-white/60 text-sm mt-1 line-clamp-2">{source.content}</p>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      <Button 
                        onClick={summarize} 
                        disabled={isSummarizing || !selectedNewsletter.sources?.length}
                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                      >
                        {isSummarizing ? (
                          <>
                            <Loader2 className="animate-spin mr-2" size={18} />
                            AI is analyzing...
                          </>
                        ) : (
                          <>
                            <Sparkles className="mr-2" size={18} />
                            Generate TLDR + Top 10 with AI
                          </>
                        )}
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Generated Content */}
                  {(selectedNewsletter.tldr || selectedNewsletter.topTenItems) && (
                    <Card className="bg-white/5 border-white/10">
                      <CardHeader>
                        <CardTitle className="text-white flex items-center gap-2">
                          <Sparkles size={18} className="text-yellow-400" />
                          Generated Content
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        {selectedNewsletter.tldr && (
                          <div>
                            <label className="text-white/60 text-sm font-medium mb-2 block">TL;DR</label>
                            <Textarea
                              value={selectedNewsletter.tldr}
                              onChange={(e) => updateNewsletter({ tldr: e.target.value })}
                              rows={3}
                              className="bg-white/10 border-white/20 text-white"
                            />
                          </div>
                        )}

                        {selectedNewsletter.topTenItems && (
                          <div>
                            <label className="text-white/60 text-sm font-medium mb-2 block">Top 10 Things You Need to Know</label>
                            <div className="space-y-2">
                              {selectedNewsletter.topTenItems.map((item, index) => (
                                <Textarea
                                  key={index}
                                  value={item}
                                  onChange={(e) => {
                                    const updated = [...(selectedNewsletter.topTenItems || [])];
                                    updated[index] = e.target.value;
                                    updateNewsletter({ topTenItems: updated });
                                  }}
                                  rows={2}
                                  className="bg-white/10 border-white/20 text-white"
                                />
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="flex gap-3">
                          <Button 
                            onClick={generateHtml}
                            disabled={isGeneratingHtml}
                            className="flex-1 bg-primary hover:bg-primary/90"
                          >
                            {isGeneratingHtml ? (
                              <Loader2 className="animate-spin mr-2" size={18} />
                            ) : (
                              <Eye className="mr-2" size={18} />
                            )}
                            Generate Preview
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Preview & Send */}
                  {showPreview && selectedNewsletter.htmlContent && (
                    <Card className="bg-white/5 border-white/10">
                      <CardHeader>
                        <CardTitle className="text-white flex items-center gap-2">
                          <Mail size={18} />
                          Preview & Send
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="bg-white rounded-lg overflow-hidden">
                          <iframe
                            srcDoc={selectedNewsletter.htmlContent}
                            className="w-full h-[600px] border-0"
                            title="Newsletter Preview"
                          />
                        </div>

                        <div className="flex gap-3 items-end">
                          <div className="flex-1">
                            <label className="text-white/60 text-sm mb-2 block">Send Test Email</label>
                            <Input
                              type="email"
                              placeholder="test@example.com"
                              value={testEmail}
                              onChange={(e) => setTestEmail(e.target.value)}
                              className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                            />
                          </div>
                          <Button 
                            onClick={sendTestEmail}
                            disabled={isSending || !testEmail.trim()}
                            className="bg-green-600 hover:bg-green-700"
                          >
                            {isSending ? (
                              <Loader2 className="animate-spin mr-2" size={18} />
                            ) : (
                              <Send className="mr-2" size={18} />
                            )}
                            Send Test
                          </Button>
                        </div>

                        {sendStatus === "success" && (
                          <div className="flex items-center gap-2 p-3 bg-green-500/20 border border-green-500/30 rounded-lg">
                            <CheckCircle2 className="text-green-400" size={18} />
                            <span className="text-green-300">Test email sent successfully!</span>
                          </div>
                        )}

                        {sendStatus === "error" && (
                          <div className="flex items-center gap-2 p-3 bg-red-500/20 border border-red-500/30 rounded-lg">
                            <span className="text-red-300">Failed to send. Check your Resend configuration.</span>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  )}
                </div>
              ) : (
                <Card className="bg-white/5 border-white/10">
                  <CardContent className="py-20 text-center">
                    <FileText className="mx-auto text-white/20 mb-4" size={48} />
                    <p className="text-white/60 text-lg">Select a newsletter or create a new one to get started</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
