import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { Users, Clock, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function CalendarCoaching() {
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
              1:1 <span className="text-primary">Coaching</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Exclusive sessions for active coaching clients and their teams.
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
                        <Users className="text-primary" size={24} />
                      </div>
                      <CardTitle className="text-2xl">1:1 Coaching Call (Clients Only)</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      Exclusive session for active coaching clients and their team
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
                  This session is available exclusively for active coaching clients and their team members who need additional time outside their regularly scheduled sessions. Perfect for addressing urgent challenges, implementing new strategies, or getting quick feedback on specific initiatives.
                </p>
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-foreground">What to Expect:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Deep dive into specific business challenges or opportunities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Strategic guidance on implementation and execution</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Accountability check-ins and progress reviews</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Team member training and system walkthroughs</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg overflow-hidden min-h-[600px]">
                  <iframe 
                    src="https://api.leadconnectorhq.com/widget/booking/HDMThBdATyMVW7HFteZe" 
                    style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "600px" }}
                    scrolling="no" 
                    id="HDMThBdATyMVW7HFteZe_1765457377264"
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
