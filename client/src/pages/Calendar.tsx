import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Calendar as CalendarIcon, Clock, Users, Zap, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Calendar() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Book with <span className="text-primary">Jeremy</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Find the right session for your needs and schedule a time that works for you.
            </p>
          </div>
        </div>
      </section>

      {/* Session Types */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-8 max-w-5xl mx-auto">
            
            {/* 1:1 Coaching Call */}
            <Card className="border-2 border-primary/20 hover:border-primary transition-all duration-300">
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
                <div className="bg-muted/50 rounded-lg p-6 mb-6">
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong className="text-foreground">Paste your GoHighLevel 1:1 Coaching embed code below:</strong>
                  </p>
                  <div className="bg-background/50 rounded border-2 border-dashed border-primary/30 p-8 text-center">
                    <p className="text-muted-foreground">GHL 1:1 Coaching Embed Code Goes Here</p>
                    <p className="text-sm text-muted-foreground/70 mt-2">(Replace this placeholder in the code)</p>
                  </div>
                </div>
                <Button size="lg" className="w-full md:w-auto">
                  <CalendarIcon className="mr-2" size={18} />
                  Schedule 1:1 Coaching Call
                </Button>
              </CardContent>
            </Card>

            {/* Quick Connect */}
            <Card className="border-2 border-primary/20 hover:border-primary transition-all duration-300">
              <CardHeader className="bg-primary/5">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Zap className="text-primary" size={24} />
                      </div>
                      <CardTitle className="text-2xl">Quick Connect</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      Brief check-in for idea exchange or introductions
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock size={18} />
                    <span className="text-sm">15-20 min</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-6">
                  Need a quick check-in, want to exchange ideas, or looking to make an introduction? This short session is perfect for rapid-fire questions, brief consultations, or exploring potential collaboration opportunities without the commitment of a full strategy session.
                </p>
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-foreground">Ideal For:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Quick questions about automation or systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Exploring whether coaching or services are right for you</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Getting pointed in the right direction for your challenge</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Making introductions or discussing partnership opportunities</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-muted/50 rounded-lg p-6 mb-6">
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong className="text-foreground">Paste your GoHighLevel Quick Connect embed code below:</strong>
                  </p>
                  <div className="bg-background/50 rounded border-2 border-dashed border-primary/30 p-8 text-center">
                    <p className="text-muted-foreground">GHL Quick Connect Embed Code Goes Here</p>
                    <p className="text-sm text-muted-foreground/70 mt-2">(Replace this placeholder in the code)</p>
                  </div>
                </div>
                <Button size="lg" variant="outline" className="w-full md:w-auto">
                  <CalendarIcon className="mr-2" size={18} />
                  Schedule Quick Connect
                </Button>
              </CardContent>
            </Card>

            {/* Strategy & Working Sessions */}
            <Card className="border-2 border-primary/20 hover:border-primary transition-all duration-300">
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
                <div className="bg-muted/50 rounded-lg p-6 mb-6">
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong className="text-foreground">Paste your GoHighLevel Strategy Session embed code below:</strong>
                  </p>
                  <div className="bg-background/50 rounded border-2 border-dashed border-primary/30 p-8 text-center">
                    <p className="text-muted-foreground">GHL Strategy Session Embed Code Goes Here</p>
                    <p className="text-sm text-muted-foreground/70 mt-2">(Replace this placeholder in the code)</p>
                  </div>
                </div>
                <Button size="lg" className="w-full md:w-auto">
                  <CalendarIcon className="mr-2" size={18} />
                  Schedule Strategy Session
                </Button>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Not Sure Which Session Is Right?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Start with a Quick Connect call and we'll figure out the best path forward together.
            </p>
            <Button size="lg" variant="outline">
              Schedule Quick Connect
            </Button>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-8 border-t">
        <div className="container">
          <div className="text-center">
            <Link href="/">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                <ArrowLeft className="mr-2" size={16} />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
