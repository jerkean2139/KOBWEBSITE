import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, BookOpen, Users, Sparkles, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import { AnimatedSection } from "@/components/AnimatedSection";
import CountdownTimer from "@/components/CountdownTimer";

export default function Book() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20">
        <section
          className="py-20 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, oklch(0.20 0.08 250) 0%, oklch(0.15 0.06 255) 50%, oklch(0.18 0.07 245) 100%)",
          }}
        >
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="slide-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFD700]/20 rounded-full mb-6">
                  <BookOpen className="text-[#FFD700]" size={16} />
                  <p className="text-[#FFD700] text-sm font-bold uppercase tracking-wider">New Book • Launching Dec 15th</p>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  The Manumation Method
                </h1>
                <p className="text-xl text-white/90 mb-6 leading-relaxed">
                  The strategic fusion of human ingenuity and AI automation that transforms business experiences while creating true freedom for innovative thinkers.
                </p>
                <p className="text-lg text-white/70 mb-8">
                  Stop duct-taping solutions. Learn the framework that has helped over 100 businesses reduce admin work by 50% and automate 70% of customer communication.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button
                    size="lg"
                    className="text-lg px-8 py-6 bg-[#FFD700] hover:bg-[#FFD700]/90 text-gray-900 font-bold shadow-xl"
                    asChild
                  >
                    <a href="/jeremys-calendar">
                      Pre-Order Now <ArrowRight className="ml-2" />
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-6 bg-white/10 hover:bg-white/20 text-white border-white/30"
                    asChild
                  >
                    <a href="/assessment">
                      Take the Assessment
                    </a>
                  </Button>
                </div>

                <CountdownTimer />
              </AnimatedSection>

              <AnimatedSection animation="slide-right" className="hidden lg:block">
                <div className="relative max-w-md mx-auto">
                  <div className="absolute -inset-8 bg-[#FFD700]/20 rounded-3xl blur-3xl"></div>
                  <img
                    src="/manumation-book-cover.png"
                    alt="The Manumation Method Book Cover"
                    className="relative rounded-xl shadow-2xl w-full"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center mb-16">
              <AnimatedSection animation="fade-in">
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                  <p className="text-primary text-sm font-bold uppercase tracking-wider">What You'll Learn</p>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="slide-up" delay={100}>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Transform Your Business
                </h2>
              </AnimatedSection>
              <AnimatedSection animation="slide-up" delay={200}>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  The Manumation Method provides a complete framework for building systems that work—without losing the human touch that makes your business special.
                </p>
              </AnimatedSection>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatedSection animation="slide-up" delay={0}>
                <Card className="h-full border-2 border-primary/20 hover:border-primary/40 transition-all">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Clock className="text-primary" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Reclaim Your Time</h3>
                    <p className="text-muted-foreground">
                      Learn how to identify and automate the tasks that drain your energy, freeing up hours every week for high-value work.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={100}>
                <Card className="h-full border-2 border-primary/20 hover:border-primary/40 transition-all">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Sparkles className="text-primary" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">AI That Works For You</h3>
                    <p className="text-muted-foreground">
                      Discover practical AI applications that enhance (not replace) human connection in your business.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={200}>
                <Card className="h-full border-2 border-primary/20 hover:border-primary/40 transition-all">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Users className="text-primary" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Scale With Soul</h3>
                    <p className="text-muted-foreground">
                      Build systems that grow your business while maintaining the personal touch your clients love.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection animation="fade-in">
                <div className="text-center mb-12">
                  <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                    <p className="text-primary text-sm font-bold uppercase tracking-wider">Inside The Book</p>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                    What's Covered
                  </h2>
                </div>
              </AnimatedSection>

              <div className="space-y-4">
                {[
                  "The Manumation Framework: Understanding the balance between manual expertise and automation",
                  "Identifying automation opportunities without losing the human touch",
                  "Building AI-powered workflows that actually work in the real world",
                  "The phased approach: Quick wins, core processes, and advanced optimization",
                  "Case studies from insurance agencies and service businesses",
                  "Implementation templates and step-by-step guides",
                  "Common pitfalls and how to avoid them",
                  "Measuring ROI and continuous improvement strategies"
                ].map((item, index) => (
                  <AnimatedSection key={index} animation="slide-left" delay={index * 50}>
                    <div className="flex items-start gap-4 p-4 bg-background rounded-lg border border-border">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-foreground">{item}</span>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className="py-20 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, oklch(0.20 0.08 250) 0%, oklch(0.15 0.06 255) 50%, oklch(0.18 0.07 245) 100%)",
          }}
        >
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-white/90 mb-10">
                Pre-order The Manumation Method now and be the first to receive it when it launches December 15th.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 bg-[#FFD700] hover:bg-[#FFD700]/90 text-gray-900 font-bold shadow-xl"
                  asChild
                >
                  <a href="/jeremys-calendar">
                    Pre-Order Now <ArrowRight className="ml-2" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 bg-white/10 hover:bg-white/20 text-white border-white/30"
                  asChild
                >
                  <a href="/">
                    Learn More About Jeremy
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-gray-900 text-white py-8">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} KeanOnBiz. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <a href="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  KeanOnBiz
                </a>
                <a href="https://zenoflo.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Zenoflo
                </a>
                <a href="/blog" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Blog
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
