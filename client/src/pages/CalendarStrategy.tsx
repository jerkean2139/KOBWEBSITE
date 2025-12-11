import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { Calendar as CalendarIcon, Clock, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function CalendarStrategy() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Strategy <span className="text-primary">Session</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Deep strategic planning and focused execution work with Jeremy.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20">
              <CardHeader className="bg-primary/5">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <CalendarIcon className="text-primary" size={24} />
                      </div>
                      <CardTitle className="text-2xl">Strategy & Working Sessions</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      Deep strategic planning or focused execution
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock size={18} />
                    <span className="text-sm">60 min</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-6">
                  This 60-minute session is designed for deep strategic planning or focused execution work. Whether you're mapping out a new automation strategy, building systems together, or tackling complex business challenges, this is where transformation happens.
                </p>
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-foreground">Session Focus Areas:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Comprehensive business automation strategy development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>System design and workflow mapping sessions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Hands-on implementation and technical setup</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Marketing strategy and campaign planning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>AI integration and custom solution design</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-muted/50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Note:</strong> Come prepared with specific goals or challenges you want to address. The more context you provide beforehand, the more value we can extract from our time together.
                  </p>
                </div>
                <div className="rounded-lg overflow-hidden min-h-[600px]">
                  <iframe 
                    src="https://api.leadconnectorhq.com/widget/booking/uslCIRV9xwkJQlHC1Rl7" 
                    style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "600px" }}
                    scrolling="no" 
                    id="uslCIRV9xwkJQlHC1Rl7_1765457335823"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-8 border-t">
        <div className="container">
          <div className="flex justify-center gap-4">
            <Link href="/jeremys-calendar">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                <ArrowLeft className="mr-2" size={16} />
                All Booking Options
              </Button>
            </Link>
            <Link href="/">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
