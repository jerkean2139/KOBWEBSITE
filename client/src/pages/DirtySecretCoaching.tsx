import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ArrowLeft, ArrowRight, Anchor, Waves, Ship, AlertTriangle, Target, Wrench, Users } from "lucide-react";
import { Link } from "wouter";

export default function DirtySecretCoaching() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="min-h-screen" role="main">
        {/* Hero Section */}
        <section
          aria-labelledby="dirty-secret-heading"
          className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
          style={{ backgroundColor: "#0a0a12" }}
        >
          {/* Chromatic accent orbs */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" aria-hidden="true"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#FFD700]/10 rounded-full blur-3xl" aria-hidden="true"></div>
          
          <div className="container relative z-10 py-16">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection animation="fade-in">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 rounded-full mb-6">
                  <AlertTriangle className="text-red-400" size={16} />
                  <p className="text-red-400 text-sm font-bold uppercase tracking-wider">The Truth They Won't Tell You</p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={100}>
                <h1 id="dirty-secret-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                  The Dirty Secret of <span className="text-primary">Business Coaching</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={200}>
                <p className="text-xl md:text-2xl text-white/90 mb-6 leading-relaxed font-medium">
                  Let's be honest about what happens after you hang up the phone.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="fade-in" delay={300}>
                <Card 
                  className="bg-white/5 border-0 mb-8"
                  style={{ boxShadow: "8px 8px 0 rgba(59, 130, 246, 0.15)" }}
                >
                  <CardContent className="p-8">
                    <p className="text-white/90 text-lg leading-relaxed mb-6">
                      You just finished a session. You were on fire. You gave the client the perfect strategy, the exact script, and the clear roadmap to scale. They were nodding. They were taking notes. They were "committed."
                    </p>
                    <p className="text-white/90 text-lg leading-relaxed mb-6">
                      Then, they clicked <span className="text-primary font-bold">"Leave Meeting."</span>
                    </p>
                    <p className="text-white/90 text-lg leading-relaxed">
                      And in that exact second, <span className="text-[#FFD700] font-bold">The Riptide</span> grabbed them.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* The Riptide Section */}
        <section className="py-24 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection animation="slide-up">
                <div className="flex items-center gap-4 mb-8">
                  <div 
                    className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center"
                    style={{ boxShadow: "4px 4px 0 rgba(59, 130, 246, 0.2)" }}
                  >
                    <Waves className="text-primary" size={32} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">The Riptide</h2>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-in" delay={100}>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    An employee called out sick. A customer demanded a refund. The server crashed. The inbox pinged 50 times.
                  </p>
                  <p className="font-semibold text-gray-900">
                    They didn't <em>choose</em> to ignore your advice. They were <span className="text-primary">dragged back out into the Ocean of Overwhelm</span> before they could even write down their next step.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Selling Maps Section */}
        <section 
          className="py-24"
          style={{ backgroundColor: "#0a0a12" }}
        >
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection animation="slide-up">
                <div className="flex items-center gap-4 mb-8">
                  <div 
                    className="w-16 h-16 rounded-2xl bg-[#FFD700]/10 flex items-center justify-center"
                    style={{ boxShadow: "4px 4px 0 rgba(255, 215, 0, 0.3)" }}
                  >
                    <Target className="text-[#FFD700]" size={32} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">You Are Selling Maps to People Who Are Drowning</h2>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-in" delay={100}>
                <div className="space-y-6 text-lg text-white/90 leading-relaxed">
                  <p>
                    Most business coaches are selling "clarity" to people who are fighting for survival. You tell them to "build a referral network." They agree.
                  </p>
                  <p className="text-xl font-bold text-white">
                    But when Monday morning hits, operations eat strategy for breakfast.
                  </p>
                  <p>
                    Because they don't have a system to catch them, they default to their old habits.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={200}>
                <div className="grid md:grid-cols-3 gap-6 mt-12">
                  <Card 
                    className="bg-white/5 border-0"
                    style={{ boxShadow: "6px 6px 0 rgba(239, 68, 68, 0.2)" }}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="text-red-400 text-4xl font-bold mb-2">✗</div>
                      <p className="text-white/80">They don't send the email.</p>
                    </CardContent>
                  </Card>
                  <Card 
                    className="bg-white/5 border-0"
                    style={{ boxShadow: "6px 6px 0 rgba(239, 68, 68, 0.2)" }}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="text-red-400 text-4xl font-bold mb-2">✗</div>
                      <p className="text-white/80">They don't track the lead.</p>
                    </CardContent>
                  </Card>
                  <Card 
                    className="bg-white/5 border-0"
                    style={{ boxShadow: "6px 6px 0 rgba(239, 68, 68, 0.2)" }}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="text-red-400 text-4xl font-bold mb-2">✗</div>
                      <p className="text-white/80">They don't document the process.</p>
                    </CardContent>
                  </Card>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-in" delay={300}>
                <Card 
                  className="bg-red-500/10 border-2 border-red-500/30 mt-12"
                  style={{ boxShadow: "8px 8px 0 rgba(239, 68, 68, 0.15)" }}
                >
                  <CardContent className="p-8 text-center">
                    <p className="text-white text-xl leading-relaxed">
                      Three weeks later, you get on the call, and they have done <span className="font-bold">zero</span>. They feel guilty. You feel frustrated.
                    </p>
                    <p className="text-red-400 text-2xl font-bold mt-4">
                      And eventually? They fire you.
                    </p>
                    <p className="text-white/80 mt-4 text-lg">
                      Not because your advice was bad. But because <span className="text-white font-semibold">they couldn't execute it</span>.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* The Solution Section */}
        <section className="py-24 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection animation="slide-up">
                <div className="flex items-center gap-4 mb-8">
                  <div 
                    className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center"
                    style={{ boxShadow: "4px 4px 0 rgba(59, 130, 246, 0.2)" }}
                  >
                    <Ship className="text-primary" size={32} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Stop Fighting the Riptide. Build the Boat.</h2>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-in" delay={100}>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed mb-12">
                  <p className="text-xl font-semibold text-gray-900">
                    You cannot "coach" someone out of chaos. You have to build the machine that pulls them out.
                  </p>
                  <p>
                    <span className="text-primary font-bold">Manumation</span> is not just another framework. It is the operational anchor. When you become a <span className="font-semibold">Certified Manumation Partner</span>, you stop relying on your client's willpower. You start installing systems that work even when your client is overwhelmed.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={200}>
                <div className="grid md:grid-cols-3 gap-6">
                  <Card 
                    className="border-0 bg-gray-50"
                    style={{ boxShadow: "6px 6px 0 rgba(59, 130, 246, 0.15)" }}
                  >
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <Wrench className="text-primary" size={24} />
                      </div>
                      <p className="text-gray-600 mb-2">Don't hope they follow up.</p>
                      <p className="text-gray-900 font-bold">Install the automation that does it.</p>
                    </CardContent>
                  </Card>
                  <Card 
                    className="border-0 bg-gray-50"
                    style={{ boxShadow: "6px 6px 0 rgba(255, 215, 0, 0.2)" }}
                  >
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-[#FFD700]/10 flex items-center justify-center mb-4">
                        <Target className="text-[#FFD700]" size={24} />
                      </div>
                      <p className="text-gray-600 mb-2">Don't pray they track KPIs.</p>
                      <p className="text-gray-900 font-bold">Install the dashboard that forces it.</p>
                    </CardContent>
                  </Card>
                  <Card 
                    className="border-0 bg-gray-50"
                    style={{ boxShadow: "6px 6px 0 rgba(59, 130, 246, 0.15)" }}
                  >
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <Users className="text-primary" size={24} />
                      </div>
                      <p className="text-gray-600 mb-2">Don't wait for them to change.</p>
                      <p className="text-gray-900 font-bold">Change their environment.</p>
                    </CardContent>
                  </Card>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section 
          className="py-24"
          style={{ backgroundColor: "#0a0a12" }}
        >
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              {/* Chromatic accent orbs */}
              <div className="absolute left-1/4 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" aria-hidden="true"></div>
              <div className="absolute right-1/4 w-48 h-48 bg-[#FFD700]/10 rounded-full blur-3xl" aria-hidden="true"></div>
              
              <AnimatedSection animation="scale">
                <div 
                  className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-8"
                  style={{ boxShadow: "6px 6px 0 rgba(59, 130, 246, 0.3)" }}
                >
                  <Anchor className="text-primary" size={40} />
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={100}>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Your clients don't need more advice on how to swim.
                </h2>
                <p className="text-2xl md:text-3xl text-[#FFD700] font-bold mb-12">
                  They need you to build them the raft.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="fade-in" delay={200}>
                <Card 
                  className="bg-white/5 border-2 border-primary/30 mb-8"
                  style={{ boxShadow: "8px 8px 0 rgba(59, 130, 246, 0.2)" }}
                >
                  <CardContent className="p-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFD700]/20 rounded-full mb-4">
                      <p className="text-[#FFD700] text-sm font-bold uppercase tracking-wider">Coming Soon</p>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Become a Certified Manumation Partner</h3>
                    <p className="text-white/80 mb-6">
                      Be the first to know when applications open. Join an elite group of coaches who deliver results, not just advice.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button 
                        size="lg" 
                        className="bg-[#FFD700] text-gray-900 font-bold px-8"
                        style={{ boxShadow: "4px 4px 0 rgba(255, 215, 0, 0.4)" }}
                        asChild
                      >
                        <a href="/become-a-coach">
                          Get Notified <ArrowRight className="ml-2" size={18} />
                        </a>
                      </Button>
                      <Button 
                        size="lg" 
                        variant="outline"
                        className="bg-white/10 text-white border-white/30 px-8"
                        asChild
                      >
                        <a href="/jeremys-calendar">
                          Book a Call
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-in" delay={300}>
                <Link href="/">
                  <Button 
                    variant="outline" 
                    className="bg-white/10 text-white border-white/30"
                  >
                    <ArrowLeft className="mr-2" size={16} />
                    Back to Home
                  </Button>
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
