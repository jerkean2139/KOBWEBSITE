import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, BookOpen, Users, Sparkles, Clock, Award, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";
import { AnimatedSection } from "@/components/AnimatedSection";
import { TiltCard } from "@/components/TiltCard";
import { NeuralBackground } from "@/components/NeuralBackground";
import CountdownTimer from "@/components/CountdownTimer";
import CountUp from "@/components/CountUp";

export default function Book() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20">
        <section
          className="relative min-h-[90vh] flex items-center overflow-hidden"
          style={{
            background: "linear-gradient(135deg, oklch(0.20 0.08 250) 0%, oklch(0.15 0.06 255) 50%, oklch(0.18 0.07 245) 100%)",
          }}
        >
          <NeuralBackground />
          <div className="container relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="slide-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFD700]/20 rounded-full mb-6">
                  <BookOpen className="text-[#FFD700]" size={16} />
                  <p className="text-[#FFD700] text-sm font-bold uppercase tracking-wider">New Book • Launching Dec 15th</p>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  The Manumation <span className="text-primary">Method</span>
                </h1>
                <p className="text-xl text-white/90 mb-6 leading-relaxed">
                  The strategic fusion of human ingenuity and AI automation that transforms business experiences while creating true freedom for innovative thinkers.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                    <CheckCircle2 className="text-primary" size={20} />
                    <span className="text-white font-semibold text-sm"><CountUp end={100} suffix="+" /> Businesses Helped</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                    <Award className="text-primary" size={20} />
                    <span className="text-white font-semibold text-sm">35 Years Experience</span>
                  </div>
                </div>

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
                    className="text-lg px-8 py-6 bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm"
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
                <TiltCard 
                  className="p-0 overflow-hidden"
                  glowColor="rgba(255, 215, 0, 0.4)"
                  borderGradient="from-[#FFD700] via-primary to-[#FFD700]"
                >
                  <div className="relative">
                    <div className="absolute -inset-4 bg-[#FFD700]/20 rounded-3xl blur-3xl"></div>
                    <img
                      src="/manumation-book-cover.png"
                      alt="The Manumation Method Book Cover"
                      className="relative w-full rounded-lg"
                    />
                  </div>
                </TiltCard>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className="py-24 bg-background relative" style={{ clipPath: "polygon(0 0, 100% 0, 100% 95%, 0 100%)" }}>
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

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <AnimatedSection animation="slide-up" delay={0}>
                <TiltCard 
                  className="h-full p-6"
                  glowColor="rgba(59, 130, 246, 0.3)"
                  borderGradient="from-primary via-blue-400 to-primary"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center mb-6 backdrop-blur-sm border border-primary/20">
                    <Clock className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Reclaim Your Time</h3>
                  <p className="text-white/70">
                    Learn how to identify and automate the tasks that drain your energy, freeing up hours every week for high-value work.
                  </p>
                </TiltCard>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={150}>
                <TiltCard 
                  className="h-full p-6"
                  glowColor="rgba(251, 191, 36, 0.3)"
                  borderGradient="from-[#FFD700] via-amber-400 to-[#FFD700]"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FFD700]/30 to-primary/10 flex items-center justify-center mb-6 backdrop-blur-sm border border-[#FFD700]/20">
                    <Sparkles className="text-[#FFD700]" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">AI That Works For You</h3>
                  <p className="text-white/70">
                    Discover practical AI applications that enhance (not replace) human connection in your business.
                  </p>
                </TiltCard>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={300}>
                <TiltCard 
                  className="h-full p-6"
                  glowColor="rgba(139, 92, 246, 0.3)"
                  borderGradient="from-purple-500 via-primary to-purple-500"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/30 to-primary/10 flex items-center justify-center mb-6 backdrop-blur-sm border border-purple-500/20">
                    <Users className="text-purple-400" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Scale With Soul</h3>
                  <p className="text-white/70">
                    Build systems that grow your business while maintaining the personal touch your clients love.
                  </p>
                </TiltCard>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section 
          className="py-24 relative overflow-hidden -mt-16"
          style={{
            background: "linear-gradient(135deg, oklch(0.25 0.08 250) 0%, oklch(0.20 0.06 255) 100%)",
            clipPath: "polygon(0 5%, 100% 0, 100% 95%, 0 100%)",
            paddingTop: "8rem"
          }}
        >
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection animation="fade-in">
                <div className="text-center mb-12">
                  <div className="inline-block px-4 py-2 bg-primary/20 rounded-full mb-4">
                    <p className="text-primary text-sm font-bold uppercase tracking-wider">Inside The Book</p>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    What's Covered
                  </h2>
                </div>
              </AnimatedSection>

              <div className="grid md:grid-cols-2 gap-4">
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
                  <AnimatedSection key={index} animation="slide-up" delay={index * 50}>
                    <div className="flex items-start gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="text-primary" size={14} />
                      </div>
                      <span className="text-white/90 text-sm">{item}</span>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className="py-20 relative overflow-hidden -mt-16"
          style={{
            background: "linear-gradient(135deg, oklch(0.20 0.08 250) 0%, oklch(0.15 0.06 255) 50%, oklch(0.18 0.07 245) 100%)",
            paddingTop: "6rem"
          }}
        >
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <AnimatedSection animation="fade-in">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-lg text-white/90 mb-10">
                  Pre-order The Manumation Method now and be the first to receive it when it launches December 15th.
                </p>
              </AnimatedSection>
              <AnimatedSection animation="slide-up" delay={100}>
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
                    className="text-lg px-8 py-6 bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm"
                    asChild
                  >
                    <a href="/">
                      Learn More About Jeremy
                    </a>
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <footer className="bg-foreground text-background py-12">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  <span className="text-primary">KEAN</span> ON BIZ
                </h3>
                <p className="text-background/70 text-sm">
                  Building better systems for modern businesses. Strategy, method, and machine – all in one ecosystem.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
                <div className="flex flex-col gap-2">
                  <a href="/#about" className="text-background/70 hover:text-background transition-colors text-sm">
                    About
                  </a>
                  <a href="/#services" className="text-background/70 hover:text-background transition-colors text-sm">
                    Services
                  </a>
                  <a href="/#testimonials" className="text-background/70 hover:text-background transition-colors text-sm">
                    Results
                  </a>
                  <a href="/jeremys-calendar" className="text-background/70 hover:text-background transition-colors text-sm">
                    Book a Call
                  </a>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Get In Touch</h4>
                <div className="flex flex-col gap-3">
                  <a href="mailto:support@keanonbiz.com" className="flex items-center gap-2 text-background/70 hover:text-background transition-colors text-sm">
                    <Mail size={16} />
                    support@keanonbiz.com
                  </a>
                  <div className="flex gap-4 mt-2">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-primary transition-colors text-sm">
                      Facebook
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-primary transition-colors text-sm">
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-background/20 pt-8 text-center text-background/70 text-sm">
              <p>&copy; {new Date().getFullYear()} Kean on Biz. All rights reserved. | Headquarters in Indiana</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
