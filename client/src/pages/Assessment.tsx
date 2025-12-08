import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import { AnimatedSection } from "@/components/AnimatedSection";
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
        <section className="relative pt-32 pb-20 overflow-hidden bg-[#0a0a12]">
          <div className="absolute inset-0 overflow-hidden">
            <div 
              className="absolute top-10 right-20 w-80 h-80 rounded-full opacity-15"
              style={{ 
                backgroundColor: "#3b82f6",
                filter: "blur(100px)"
              }}
            />
            <div 
              className="absolute bottom-10 left-20 w-64 h-64 rounded-full opacity-10"
              style={{ 
                backgroundColor: "#FFD700",
                filter: "blur(80px)"
              }}
            />
          </div>
          
          <div className="container relative z-10">
            <AnimatedSection animation="fade-in">
              <div className="max-w-3xl mx-auto text-center">
                <div 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border border-[#3b82f6]/30"
                  style={{ backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                >
                  <ClipboardCheck className="text-[#3b82f6]" size={16} />
                  <p className="text-[#3b82f6] text-sm font-bold uppercase tracking-wider">Free Business Assessment</p>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Discover Your Path to <span className="text-[#3b82f6]">Business Freedom</span>
                </h1>
                <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
                  Take this quick assessment to identify the biggest opportunities for growth, efficiency, and automation in your business.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-16 bg-white relative">
          <div className="container">
            <div className="text-center mb-12">
              <AnimatedSection animation="fade-in">
                <div className="inline-block px-4 py-2 bg-[#3b82f6]/10 rounded-full mb-4 border border-[#3b82f6]/20">
                  <p className="text-[#3b82f6] text-sm font-bold uppercase tracking-wider">How It Works</p>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="slide-up" delay={100}>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a12] mb-4">
                  Three Simple Steps
                </h2>
              </AnimatedSection>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
              <AnimatedSection animation="slide-up" delay={0}>
                <div 
                  className="text-center p-8 rounded-2xl bg-white border-2 border-gray-100"
                  style={{
                    boxShadow: "6px 6px 0 rgba(59, 130, 246, 0.15), 0 10px 40px rgba(0,0,0,0.03)"
                  }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#3b82f6]/10 flex items-center justify-center mx-auto mb-4 border border-[#3b82f6]/20">
                    <Clock className="text-[#3b82f6]" size={28} />
                  </div>
                  <div className="text-5xl font-black text-[#3b82f6]/20 mb-2">01</div>
                  <h3 className="text-lg font-bold text-[#0a0a12] mb-2">Answer Questions</h3>
                  <p className="text-gray-500 text-sm">Takes less than 5 minutes to complete</p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={100}>
                <div 
                  className="text-center p-8 rounded-2xl bg-white border-2 border-gray-100"
                  style={{
                    boxShadow: "6px 6px 0 rgba(255, 215, 0, 0.25), 0 10px 40px rgba(0,0,0,0.03)"
                  }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#FFD700]/10 flex items-center justify-center mx-auto mb-4 border border-[#FFD700]/30">
                    <Target className="text-[#d4a800]" size={28} />
                  </div>
                  <div className="text-5xl font-black text-[#FFD700]/30 mb-2">02</div>
                  <h3 className="text-lg font-bold text-[#0a0a12] mb-2">Get Your Score</h3>
                  <p className="text-gray-500 text-sm">See where you stand and what's holding you back</p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={200}>
                <div 
                  className="text-center p-8 rounded-2xl bg-white border-2 border-gray-100"
                  style={{
                    boxShadow: "6px 6px 0 rgba(139, 92, 246, 0.2), 0 10px 40px rgba(0,0,0,0.03)"
                  }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center mx-auto mb-4 border border-purple-200">
                    <Lightbulb className="text-purple-600" size={28} />
                  </div>
                  <div className="text-5xl font-black text-purple-200 mb-2">03</div>
                  <h3 className="text-lg font-bold text-[#0a0a12] mb-2">Get Your Plan</h3>
                  <p className="text-gray-500 text-sm">Receive personalized recommendations</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#0a0a12] relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-8"
              style={{ 
                backgroundColor: "#3b82f6",
                filter: "blur(150px)"
              }}
            />
          </div>
          
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto">
              <AnimatedSection animation="fade-in">
                <div 
                  className="rounded-2xl overflow-hidden border border-white/10"
                  style={{
                    boxShadow: "-8px 8px 0 rgba(59, 130, 246, 0.3), 8px -8px 0 rgba(255, 215, 0, 0.3), 0 25px 60px rgba(0,0,0,0.4)"
                  }}
                >
                  <div className="p-6 bg-[#13131f] border-b border-white/10">
                    <h2 className="text-2xl font-bold text-white text-center">Start Your Assessment</h2>
                    <p className="text-white/50 text-center text-sm mt-2">Answer honestly for the most accurate results</p>
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
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#f8f9fa] relative overflow-hidden">
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <AnimatedSection animation="fade-in">
                <h2 className="text-4xl md:text-5xl font-bold text-[#0a0a12] mb-6 leading-tight">
                  Ready to Take the Next Step?
                </h2>
                <p className="text-lg text-gray-600 mb-10">
                  Book a strategy call with Jeremy to discuss your assessment results and create a personalized action plan.
                </p>
              </AnimatedSection>
              <AnimatedSection animation="slide-up" delay={100}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="text-lg px-8 py-6 bg-[#3b82f6] text-white font-bold border-0"
                    style={{
                      boxShadow: "0 4px 0 #2563eb, 0 8px 20px rgba(59, 130, 246, 0.3)"
                    }}
                    asChild
                  >
                    <a href="/jeremys-calendar">
                      Book with Jeremy <ArrowRight className="ml-2" />
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-6 text-[#0a0a12] border-2 border-gray-300 bg-white"
                    style={{
                      boxShadow: "0 4px 0 rgba(0, 0, 0, 0.1)"
                    }}
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

        <footer className="bg-[#0a0a12] text-white py-12 border-t border-white/10">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  <span className="text-[#3b82f6]">KEAN</span> ON BIZ
                </h3>
                <p className="text-white/60 text-sm">
                  Building better systems for modern businesses. Strategy, method, and machine – all in one ecosystem.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white/80">Quick Links</h4>
                <div className="flex flex-col gap-2">
                  <a href="/#about" className="text-white/60 text-sm">
                    About
                  </a>
                  <a href="/#services" className="text-white/60 text-sm">
                    Services
                  </a>
                  <a href="/#testimonials" className="text-white/60 text-sm">
                    Results
                  </a>
                  <a href="/jeremys-calendar" className="text-white/60 text-sm">
                    Book a Call
                  </a>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white/80">Get In Touch</h4>
                <div className="flex flex-col gap-3">
                  <a href="mailto:support@keanonbiz.com" className="flex items-center gap-2 text-white/60 text-sm">
                    <Mail size={16} />
                    support@keanonbiz.com
                  </a>
                  <div className="flex gap-4 mt-2">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/60 text-sm">
                      Facebook
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/60 text-sm">
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
              <p>&copy; {new Date().getFullYear()} Kean on Biz. All rights reserved. | Headquarters in Indiana</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
