import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import { AnimatedSection } from "@/components/AnimatedSection";
import { NeuralBackground } from "@/components/NeuralBackground";
import { TiltCard } from "@/components/TiltCard";
import { ClipboardCheck, Clock, Target, Lightbulb, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Assessment() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Navigation />
      <main id="main-content" className="min-h-screen" role="main">
        <section 
          className="relative pt-32 pb-20 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, oklch(0.20 0.08 250) 0%, oklch(0.15 0.06 255) 50%, oklch(0.18 0.07 245) 100%)",
          }}
        >
          <NeuralBackground />
          
          <div className="container relative z-10">
            <AnimatedSection animation="fade-in">
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6">
                  <ClipboardCheck className="text-primary" size={16} />
                  <p className="text-primary text-sm font-bold uppercase tracking-wider">Free Business Assessment</p>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Discover Your Path to <span className="text-primary">Business Freedom</span>
                </h1>
                <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
                  Take this quick assessment to identify the biggest opportunities for growth, efficiency, and automation in your business.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-16 bg-background relative" style={{ clipPath: "polygon(0 0, 100% 0, 100% 95%, 0 100%)" }}>
          <div className="container">
            <div className="text-center mb-12">
              <AnimatedSection animation="fade-in">
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                  <p className="text-primary text-sm font-bold uppercase tracking-wider">How It Works</p>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="slide-up" delay={100}>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Three Simple Steps
                </h2>
              </AnimatedSection>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
              <AnimatedSection animation="slide-up" delay={0}>
                <div className="text-center p-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 border border-primary/20">
                    <Clock className="text-primary" size={28} />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">01</div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Answer Questions</h3>
                  <p className="text-muted-foreground text-sm">Takes less than 5 minutes to complete</p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={100}>
                <div className="text-center p-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#FFD700]/10 flex items-center justify-center mx-auto mb-4 border border-[#FFD700]/20">
                    <Target className="text-[#FFD700]" size={28} />
                  </div>
                  <div className="text-4xl font-bold text-[#FFD700] mb-2">02</div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Get Your Score</h3>
                  <p className="text-muted-foreground text-sm">See where you stand and what's holding you back</p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={200}>
                <div className="text-center p-6">
                  <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mx-auto mb-4 border border-purple-500/20">
                    <Lightbulb className="text-purple-400" size={28} />
                  </div>
                  <div className="text-4xl font-bold text-purple-400 mb-2">03</div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Get Your Plan</h3>
                  <p className="text-muted-foreground text-sm">Receive personalized recommendations</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section 
          className="py-20 relative overflow-hidden -mt-16"
          style={{
            background: "linear-gradient(135deg, oklch(0.12 0.03 250) 0%, oklch(0.08 0.02 260) 50%, oklch(0.10 0.04 240) 100%)",
            paddingTop: "6rem"
          }}
        >
          <NeuralBackground />
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto">
              <AnimatedSection animation="fade-in">
                <TiltCard 
                  className="p-0 overflow-hidden"
                  glowColor="rgba(59, 130, 246, 0.3)"
                  borderGradient="from-primary via-[#FFD700] to-primary"
                >
                  <div className="p-6 bg-white/5 backdrop-blur-sm border-b border-white/10">
                    <h2 className="text-2xl font-bold text-white text-center">Start Your Assessment</h2>
                    <p className="text-white/60 text-center text-sm mt-2">Answer honestly for the most accurate results</p>
                  </div>
                  <div className="bg-white" style={{ minHeight: "1600px" }}>
                    <iframe
                      src="https://api.leadconnectorhq.com/widget/form/p7TQrdK8KZEQfC9JWtQT"
                      style={{ width: "100%", height: "1590px", border: "none" }}
                      id="inline-p7TQrdK8KZEQfC9JWtQT"
                      data-layout='{"id":"INLINE"}'
                      data-trigger-type="alwaysShow"
                      data-trigger-value=""
                      data-activation-type="alwaysActivated"
                      data-activation-value=""
                      data-deactivation-type="neverDeactivate"
                      data-deactivation-value=""
                      data-form-name="Kean On Biz - Customer Assessment Form"
                      data-height="1590"
                      data-layout-iframe-id="inline-p7TQrdK8KZEQfC9JWtQT"
                      data-form-id="p7TQrdK8KZEQfC9JWtQT"
                      title="Kean On Biz - Customer Assessment Form"
                    />
                  </div>
                </TiltCard>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section
          className="py-20 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, oklch(0.20 0.08 250) 0%, oklch(0.15 0.06 255) 50%, oklch(0.18 0.07 245) 100%)",
          }}
        >
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <AnimatedSection animation="fade-in">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Ready to Take the Next Step?
                </h2>
                <p className="text-lg text-white/90 mb-10">
                  Book a strategy call with Jeremy to discuss your assessment results and create a personalized action plan.
                </p>
              </AnimatedSection>
              <AnimatedSection animation="slide-up" delay={100}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl"
                    asChild
                  >
                    <a href="/jeremys-calendar">
                      Book with Jeremy <ArrowRight className="ml-2" />
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-6 bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm"
                    asChild
                  >
                    <a href="/book">
                      Get The Book
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
