import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Navigation from "@/components/Navigation";
import { 
  Loader2, 
  Sparkles, 
  Send, 
  Eye, 
  FileText, 
  CheckCircle2,
  ArrowLeft,
  Search,
  ListFilter,
  FileEdit,
  Zap,
  Mail,
  Circle,
  Check
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
}

interface ProgressEvent {
  stage: string;
  message: string;
  data?: any;
}

const STAGES = [
  { key: "starting", label: "Initializing", icon: Zap },
  { key: "researching", label: "Researching Trends", icon: Search },
  { key: "analyzing", label: "Analyzing Sources", icon: ListFilter },
  { key: "ranking", label: "Selecting Top 10", icon: Sparkles },
  { key: "writing", label: "Writing Content", icon: FileEdit },
  { key: "finalizing", label: "Generating Email", icon: Mail },
  { key: "complete", label: "Complete", icon: Check },
];

export default function NewsletterCreator() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminKey, setAdminKey] = useState("");
  const [authError, setAuthError] = useState("");
  const [newsletters, setNewsletters] = useState<Newsletter[]>([]);
  const [selectedNewsletter, setSelectedNewsletter] = useState<Newsletter | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentStage, setCurrentStage] = useState<string>("");
  const [progressMessages, setProgressMessages] = useState<ProgressEvent[]>([]);
  const [showPreview, setShowPreview] = useState(false);
  const [testEmail, setTestEmail] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState<"idle" | "success" | "error">("idle");
  const eventSourceRef = useRef<EventSource | null>(null);

  const apiFetch = (url: string, options: RequestInit = {}) => {
    return fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        "Authorization": `Bearer ${adminKey}`,
        "Content-Type": "application/json",
      },
    });
  };

  const handleLogin = async () => {
    setAuthError("");
    try {
      const res = await fetch("/api/newsletters", {
        headers: { "Authorization": `Bearer ${adminKey}` },
      });
      if (res.ok) {
        setIsAuthenticated(true);
        sessionStorage.setItem("newsletter_auth", adminKey);
      } else {
        setAuthError("Invalid admin key");
      }
    } catch {
      setAuthError("Connection failed");
    }
  };

  useEffect(() => {
    const savedKey = sessionStorage.getItem("newsletter_auth");
    if (savedKey) {
      setAdminKey(savedKey);
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated && adminKey) {
      fetchNewsletters();
    }
  }, [isAuthenticated, adminKey]);

  const fetchNewsletters = async () => {
    try {
      const res = await apiFetch("/api/newsletters");
      const data = await res.json();
      setNewsletters(data);
    } catch (error) {
      console.error("Failed to fetch newsletters:", error);
    }
  };

  const createAndGenerate = async () => {
    setIsGenerating(true);
    setProgressMessages([]);
    setCurrentStage("starting");
    setShowPreview(false);

    try {
      const res = await apiFetch("/api/newsletters", {
        method: "POST",
        body: JSON.stringify({ title: "New Newsletter" }),
      });
      const newsletter = await res.json();
      setSelectedNewsletter(newsletter);
      setNewsletters([newsletter, ...newsletters]);

      if (eventSourceRef.current) {
        eventSourceRef.current.close();
      }

      const eventSource = new EventSource(
        `/api/newsletters/${newsletter.id}/auto-generate?auth=${encodeURIComponent(adminKey)}`
      );
      eventSourceRef.current = eventSource;

      eventSource.onmessage = (event) => {
        const data: ProgressEvent = JSON.parse(event.data);
        setCurrentStage(data.stage);
        setProgressMessages((prev) => [...prev, data]);

        if (data.stage === "complete" && data.data) {
          setSelectedNewsletter({
            ...newsletter,
            title: data.data.title,
            tldr: data.data.tldr,
            topTenItems: data.data.topTen,
            htmlContent: data.data.htmlContent,
          });
          setIsGenerating(false);
          eventSource.close();
          fetchNewsletters();
        }

        if (data.stage === "error") {
          setIsGenerating(false);
          eventSource.close();
        }
      };

      eventSource.onerror = () => {
        setIsGenerating(false);
        eventSource.close();
      };
    } catch (error) {
      console.error("Failed to create newsletter:", error);
      setIsGenerating(false);
    }
  };

  const selectNewsletter = async (id: number) => {
    try {
      const res = await apiFetch(`/api/newsletters/${id}`);
      const data = await res.json();
      setSelectedNewsletter(data);
      setShowPreview(false);
      setProgressMessages([]);
      setCurrentStage("");
    } catch (error) {
      console.error("Failed to fetch newsletter:", error);
    }
  };

  const sendTestEmail = async () => {
    if (!selectedNewsletter || !testEmail.trim()) return;
    setIsSending(true);
    setSendStatus("idle");
    try {
      const res = await apiFetch(`/api/newsletters/${selectedNewsletter.id}/send`, {
        method: "POST",
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

  const getStageStatus = (stageKey: string) => {
    const stageIndex = STAGES.findIndex((s) => s.key === stageKey);
    const currentIndex = STAGES.findIndex((s) => s.key === currentStage);
    
    if (stageIndex < currentIndex) return "complete";
    if (stageIndex === currentIndex) return "active";
    return "pending";
  };

  if (!isAuthenticated) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen pt-20 flex items-center justify-center" style={{ backgroundColor: "#0f172a" }}>
          <Card className="w-full max-w-md bg-white/5 border-white/10">
            <CardHeader className="text-center">
              <CardTitle className="text-white text-2xl">Newsletter Admin</CardTitle>
              <p className="text-white/60">Enter your admin key to continue</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                type="password"
                placeholder="Admin Key"
                value={adminKey}
                onChange={(e) => setAdminKey(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
              />
              {authError && (
                <p className="text-red-400 text-sm text-center">{authError}</p>
              )}
              <Button onClick={handleLogin} className="w-full bg-primary hover:bg-primary/90">
                Access Newsletter Creator
              </Button>
            </CardContent>
          </Card>
        </main>
      </>
    );
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20" style={{ backgroundColor: "#0f172a" }}>
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
              <p className="text-white/60">One-click AI-powered newsletter generation</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-6">
            {/* Sidebar */}
            <div className="lg:col-span-3">
              <Card className="bg-white/5 border-white/10 mb-6">
                <CardContent className="pt-6">
                  <Button 
                    onClick={createAndGenerate}
                    disabled={isGenerating}
                    className="w-full h-14 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    {isGenerating ? (
                      <>
                        <Loader2 className="mr-2 animate-spin" size={20} />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Sparkles className="mr-2" size={20} />
                        Generate Newsletter
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10">
                <CardHeader className="pb-3">
                  <CardTitle className="text-white text-lg flex items-center gap-2">
                    <FileText size={18} />
                    Past Newsletters
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 max-h-[400px] overflow-y-auto">
                  {newsletters.map((nl) => (
                    <button
                      key={nl.id}
                      onClick={() => selectNewsletter(nl.id)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        selectedNewsletter?.id === nl.id
                          ? "bg-primary/20 border border-primary/40"
                          : "bg-white/5 hover:bg-white/10 border border-transparent"
                      }`}
                    >
                      <p className="text-white text-sm font-medium truncate">{nl.title}</p>
                      <p className="text-white/40 text-xs">
                        {new Date(nl.createdAt).toLocaleDateString()}
                      </p>
                    </button>
                  ))}
                  {newsletters.length === 0 && (
                    <p className="text-white/40 text-sm text-center py-4">
                      No newsletters yet
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-9">
              {isGenerating ? (
                <Card className="bg-white/5 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Loader2 className="animate-spin" size={20} />
                      Generating Your Newsletter
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {/* Progress Timeline */}
                    <div className="space-y-4 mb-8">
                      {STAGES.map((stage, index) => {
                        const status = getStageStatus(stage.key);
                        const Icon = stage.icon;
                        
                        return (
                          <div key={stage.key} className="flex items-center gap-4">
                            <div className={`
                              w-10 h-10 rounded-full flex items-center justify-center
                              ${status === "complete" ? "bg-green-600" : ""}
                              ${status === "active" ? "bg-blue-600 animate-pulse" : ""}
                              ${status === "pending" ? "bg-white/10" : ""}
                            `}>
                              {status === "complete" ? (
                                <CheckCircle2 size={20} className="text-white" />
                              ) : status === "active" ? (
                                <Loader2 size={20} className="text-white animate-spin" />
                              ) : (
                                <Icon size={20} className="text-white/40" />
                              )}
                            </div>
                            <div className="flex-1">
                              <p className={`font-medium ${
                                status === "pending" ? "text-white/40" : "text-white"
                              }`}>
                                {stage.label}
                              </p>
                              {status === "active" && progressMessages.length > 0 && (
                                <p className="text-blue-400 text-sm">
                                  {progressMessages[progressMessages.length - 1]?.message}
                                </p>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Live Log */}
                    <div className="bg-black/30 rounded-lg p-4 max-h-48 overflow-y-auto font-mono text-sm">
                      {progressMessages.map((msg, i) => (
                        <div key={i} className="text-green-400">
                          <span className="text-white/40">[{msg.stage}]</span> {msg.message}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ) : selectedNewsletter ? (
                <div className="space-y-6">
                  {/* Newsletter Preview */}
                  <Card className="bg-white/5 border-white/10">
                    <CardHeader className="flex flex-row items-center justify-between">
                      <CardTitle className="text-white">{selectedNewsletter.title}</CardTitle>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setShowPreview(!showPreview)}
                          className="text-white border-white/20 hover:bg-white/10"
                        >
                          <Eye size={16} className="mr-1" />
                          {showPreview ? "Hide Preview" : "Preview Email"}
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {showPreview && selectedNewsletter.htmlContent ? (
                        <div className="bg-white rounded-lg p-4 max-h-[600px] overflow-y-auto">
                          <iframe
                            srcDoc={selectedNewsletter.htmlContent}
                            className="w-full h-[500px] border-0"
                            title="Email Preview"
                          />
                        </div>
                      ) : (
                        <div className="space-y-6">
                          {/* TLDR */}
                          {selectedNewsletter.tldr && (
                            <div className="bg-blue-900/30 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                              <p className="text-yellow-500 text-xs font-bold uppercase tracking-wider mb-2">TL;DR</p>
                              <p className="text-white/90">{selectedNewsletter.tldr}</p>
                            </div>
                          )}

                          {/* Top 10 */}
                          {selectedNewsletter.topTenItems && selectedNewsletter.topTenItems.length > 0 && (
                            <div>
                              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                                <Sparkles size={18} className="text-blue-400" />
                                Top 10 Insights
                              </h3>
                              <div className="space-y-3">
                                {selectedNewsletter.topTenItems.map((item, i) => (
                                  <div key={i} className="bg-white/5 p-4 rounded-lg border border-white/10">
                                    <p className="text-white/90">{item}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {!selectedNewsletter.tldr && !selectedNewsletter.topTenItems && (
                            <p className="text-white/40 text-center py-8">
                              This newsletter hasn't been generated yet.
                            </p>
                          )}
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  {/* Send Test Email */}
                  {selectedNewsletter.htmlContent && (
                    <Card className="bg-white/5 border-white/10">
                      <CardHeader>
                        <CardTitle className="text-white text-lg flex items-center gap-2">
                          <Send size={18} />
                          Send Test Email
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex gap-3">
                          <Input
                            type="email"
                            placeholder="your@email.com"
                            value={testEmail}
                            onChange={(e) => setTestEmail(e.target.value)}
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                          />
                          <Button 
                            onClick={sendTestEmail}
                            disabled={isSending || !testEmail.trim()}
                          >
                            {isSending ? (
                              <Loader2 className="animate-spin" size={18} />
                            ) : (
                              <>
                                <Mail size={18} className="mr-2" />
                                Send Test
                              </>
                            )}
                          </Button>
                        </div>
                        {sendStatus === "success" && (
                          <p className="text-green-400 text-sm mt-2 flex items-center gap-1">
                            <CheckCircle2 size={16} /> Test email sent!
                          </p>
                        )}
                        {sendStatus === "error" && (
                          <p className="text-red-400 text-sm mt-2">Failed to send. Check your Resend configuration.</p>
                        )}
                      </CardContent>
                    </Card>
                  )}
                </div>
              ) : (
                <Card className="bg-white/5 border-white/10">
                  <CardContent className="py-20 text-center">
                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
                      <Sparkles size={32} className="text-white/40" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Ready to Create a Newsletter?
                    </h3>
                    <p className="text-white/60 mb-6 max-w-md mx-auto">
                      Click the "Generate Newsletter" button and watch as AI researches trends, 
                      selects the top insights, and creates your newsletter automatically.
                    </p>
                    <Button 
                      onClick={createAndGenerate}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      <Sparkles className="mr-2" size={18} />
                      Generate Newsletter
                    </Button>
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
