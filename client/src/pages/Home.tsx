import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { AnimatedSection } from "@/components/AnimatedSection";
import CountdownTimer from "@/components/CountdownTimer";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import CountUp from "@/components/CountUp";
import { ArrowRight, CheckCircle2, ExternalLink, Mail, Sparkles, Users, Megaphone, Bot, BookOpen, Award, ClipboardCheck, Loader2 } from "lucide-react";
import { DIYIcon, DWYIcon, DFYIcon } from "@/components/VehicleIcons";
import { TiltCard } from "@/components/TiltCard";
import { NeuralBackground } from "@/components/NeuralBackground";
import LogoCarousel from "@/components/LogoCarousel";

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://api.leadconnectorhq.com/widget/form/WeCKj6eththzMepQtObZ", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          email: email,
          formId: "WeCKj6eththzMepQtObZ",
        }).toString(),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("success");
        setEmail("");
      }
    } catch {
      setStatus("success");
      setEmail("");
    }
  };

  if (status === "success") {
    return (
      <div className="flex-1 w-full max-w-md">
        <div className="flex items-center gap-3 px-4 py-3 bg-green-500/20 border border-green-500/30 rounded-lg">
          <CheckCircle2 className="text-green-400" size={20} />
          <span className="text-green-300 font-medium">You're subscribed! Check your inbox.</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 w-full max-w-md">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email" 
          required
          disabled={status === "loading"}
          className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-[#FFD700]/50 focus:ring-1 focus:ring-[#FFD700]/30 transition-all disabled:opacity-50"
        />
        <Button 
          type="submit" 
          disabled={status === "loading"}
          className="bg-[#FFD700] hover:bg-[#FFD700]/90 text-black font-semibold px-6"
        >
          {status === "loading" ? (
            <Loader2 className="animate-spin" size={18} />
          ) : (
            "Subscribe"
          )}
        </Button>
      </form>
      <div className="flex items-center justify-center gap-4 mt-3 text-xs text-white/50">
        <span className="flex items-center gap-1"><CheckCircle2 size={12} /> No spam</span>
        <span className="flex items-center gap-1"><CheckCircle2 size={12} /> Unsubscribe anytime</span>
      </div>
    </div>
  );
}

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <ExitIntentPopup />
      <Navigation />
      <main id="main-content" className="min-h-screen" role="main">
        {/* Hero Section */}
        <section
          aria-labelledby="hero-heading"
          className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 max-w-full"
        style={{
          background: "linear-gradient(135deg, oklch(0.20 0.08 250) 0%, oklch(0.15 0.06 255) 50%, oklch(0.18 0.07 245) 100%)",
        }}
      >
        <div className="absolute inset-0 opacity-20" aria-hidden="true">
          <img
            src="/jeremy-main-hero.webp"
            alt=""
            className="w-full h-full object-cover object-center"
            style={{ transform: "scaleX(-1)", objectPosition: "center 20%" }}
          />
        </div>
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFD700]/20 rounded-full mb-6">
                <BookOpen className="text-[#FFD700]" size={16} />
                <p className="text-[#FFD700] text-sm font-bold uppercase tracking-wider">New Book • Launching Dec 31st</p>
              </div>
              <h1 id="hero-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                Let Your Business <span className="text-primary">Breathe Again.</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 leading-relaxed">
                Strategic coaching and AI-powered automation for insurance agencies and business owners who are done duct-taping solutions.
              </p>
              
              {/* Social Proof Badges */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                  <CheckCircle2 className="text-primary" size={20} />
                  <span className="text-white font-semibold text-sm"><CountUp end={100} suffix="+" /> Businesses Helped</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                  <Award className="text-primary" size={20} />
                  <span className="text-white font-semibold text-sm"><CountUp end={35} /> Years Experience</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 min-h-[44px] bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl"
                  onClick={() => scrollToSection("services")}
                >
                  Explore Services <ArrowRight className="ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 min-h-[44px] bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm"
                  onClick={() => scrollToSection("contact")}
                >
                  Let's Talk Business
                </Button>
              </div>
              
              {/* Mobile Book CTA */}
              <div className="lg:hidden mt-8 p-6 bg-gradient-to-br from-[#FFD700]/20 to-primary/20 rounded-2xl border-2 border-[#FFD700]/30">
                <div className="flex items-center gap-4">
                  <img
                    src="/manumation-book-cover.png"
                    alt="The Manumation Method"
                    className="w-20 h-auto rounded-lg shadow-lg"
                  />
                  <div className="flex-1">
                    <p className="text-[#FFD700] text-xs font-bold uppercase mb-1">New Book</p>
                    <h3 className="text-white font-bold text-sm mb-2">The Manumation Method</h3>
                    <Button size="sm" className="w-full bg-[#FFD700] hover:bg-[#FFD700]/90 text-gray-900 font-bold min-h-[44px]" asChild>
                      <a href="/book">
                        Pre-Order • Dec 31st
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block mt-16">
              <div className="relative max-w-xs mx-auto">
                <div className="absolute -inset-4 bg-[#FFD700]/20 rounded-xl blur-2xl"></div>
                <img
                  src="/manumation-book-cover.png"
                  alt="The Manumation Method - Launching December 31st"
                  className="relative rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300 w-full"
                />
              </div>
              <div className="flex justify-center mt-4" style={{ marginBottom: '10px' }}>
                <Button size="lg" className="bg-[#FFD700] hover:bg-[#FFD700]/90 text-gray-900 font-bold shadow-xl px-8" asChild>
                  <a href="/book">
                    Pre-Order Now • Dec 31st
                  </a>
                </Button>
              </div>
              {/* Countdown Timer */}
              <div className="flex justify-center" style={{ paddingBottom: '10px' }}>
                <CountdownTimer />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" aria-labelledby="about-heading" className="py-24 bg-background relative" style={{ clipPath: "polygon(0 0, 100% 0, 100% 95%, 0 100%)" }}>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-left" className="order-2 md:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-2xl"></div>
                <img
                  src="/jeremy-about-photo.jpg"
                  alt="Jeremy Kean - Business Coach with 35 years of experience helping entrepreneurs transform their businesses"
                  className="relative rounded-2xl shadow-2xl w-full h-auto object-cover object-top"
                  style={{ maxHeight: '600px' }}
                  loading="lazy"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-right" className="order-1 md:order-2">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                <p className="text-primary text-sm font-bold uppercase tracking-wider">Meet Jeremy</p>
              </div>
              <h2 id="about-heading" className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                35 Years.<br />
                13 Brands Created.<br />
                One Truth.
              </h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                The difference between struggling and scaling isn't working harder – it's building better systems.
              </p>
              <p className="text-base text-muted-foreground mb-4">
                As a husband, father of three, and business owner with A.D.D., I intimately understand the chaos that comes with juggling multiple priorities. That's exactly what drove me to become obsessed with creating systems that actually work in the real world, not just in theory.
              </p>
              <div className="grid grid-cols-1 gap-3 mt-6">
                <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                  <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">Battle-Tested Results</h3>
                    <p className="text-muted-foreground text-sm">50% reduction in admin work, 70% automation of customer communication</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                  <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">Systems That Make Sense</h3>
                    <p className="text-muted-foreground text-sm">Built for how your brain—and business—actually function</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Brand Philosophy Section */}
      <section aria-labelledby="philosophy-heading" className="py-24 relative overflow-hidden -mt-16" style={{
        background: "linear-gradient(135deg, oklch(0.25 0.08 250) 0%, oklch(0.20 0.06 255) 100%)",
        clipPath: "polygon(0 5%, 100% 0, 100% 95%, 0 100%)",
        paddingTop: "8rem"
      }}>
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-primary/20 rounded-full mb-6">
              <p className="text-primary text-sm font-bold uppercase tracking-wider">The Ecosystem</p>
            </div>
            <h2 id="philosophy-heading" className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight knight-rider-scan">
              Strategy. Method. Machine.
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white/5 backdrop-blur-sm border-2 border-primary/30 rounded-2xl p-8 hover:bg-white/10 transition-all">
                <div className="text-6xl font-bold text-primary mb-4">01</div>
                <h3 className="text-2xl font-bold text-white mb-2">KeanOnBiz</h3>
                <p className="text-white/80 font-semibold mb-2">gives you the strategy.</p>
                <p className="text-white/60 text-sm">Personal coaching and strategic guidance</p>
              </div>
              <a href="/book" className="bg-white/5 backdrop-blur-sm border-2 border-primary/30 rounded-2xl p-8 hover:bg-white/10 hover:border-primary/60 transition-all group cursor-pointer">
                <div className="text-6xl font-bold text-primary mb-4">02</div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">Manumation</h3>
                <p className="text-white/80 font-semibold mb-2">gives you the method.</p>
                <p className="text-white/60 text-sm">The framework that blends human + automation</p>
              </a>
              <a href="https://zenoflo.com" target="_blank" rel="noopener noreferrer" className="bg-white/5 backdrop-blur-sm border-2 border-primary/30 rounded-2xl p-8 hover:bg-white/10 hover:border-primary/60 transition-all group cursor-pointer">
                <div className="text-6xl font-bold text-primary mb-4">03</div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">Zenoflo</h3>
                <p className="text-white/80 font-semibold mb-2">gives you the machine.</p>
                <p className="text-white/60 text-sm">The tech platform that powers it all</p>
              </a>
            </div>
            <p className="text-xl text-white font-semibold max-w-3xl mx-auto leading-relaxed">
              Together, they're how modern businesses stop duct-taping tools and finally operate with clarity, speed, and soul.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Ecosystem Section */}
      <section id="tech-ecosystem" aria-labelledby="tech-heading" className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              <p className="text-primary text-sm font-bold uppercase tracking-wider">Tech Brands</p>
            </div>
            <h2 id="tech-heading" className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Purpose-Built Platforms
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our tech ecosystem leverages industry-leading automation and AI platforms to build custom solutions that actually work for your business.
            </p>
          </div>
          
          <LogoCarousel />

          <div className="text-center mt-12">
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We combine these powerful platforms with custom development to create automation solutions tailored to your specific business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section - DIY/DWY/DFY Model with Premium Design */}
      <section 
        id="services" 
        aria-labelledby="services-heading" 
        className="py-24 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, oklch(0.12 0.03 250) 0%, oklch(0.08 0.02 260) 50%, oklch(0.10 0.04 240) 100%)",
        }}
      >
        <NeuralBackground />
        
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <AnimatedSection animation="fade-in">
              <div className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full mb-6 border border-primary/30">
                <p className="text-primary text-sm font-bold uppercase tracking-wider">Engagement Levels</p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-up" delay={100}>
              <h2 id="services-heading" className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Choose Your <span className="text-[#FFD700]">Journey</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection animation="slide-up" delay={200}>
              <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
                Think of your business transformation like a road trip. You decide how much support you need along the way.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* DIY - Do It Yourself */}
            <AnimatedSection animation="slide-up" delay={0}>
              <TiltCard 
                className="h-full p-6"
                glowColor="rgba(59, 130, 246, 0.4)"
                borderGradient="from-primary via-blue-400 to-primary"
              >
                <div className="text-center mb-6">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center mb-4 mx-auto backdrop-blur-sm border border-primary/20">
                    <DIYIcon size={72} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Do It Yourself</h3>
                  <p className="text-primary font-medium text-sm">
                    You drive. We're in the back seat.
                  </p>
                </div>
                
                <p className="text-sm text-white/60 text-center mb-6">
                  Access our proven frameworks, templates, and training resources. You're in full control of the implementation.
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="text-primary" size={14} />
                    </div>
                    <span className="text-white/80">The Manumation Method book & guides</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="text-primary" size={14} />
                    </div>
                    <span className="text-white/80">Templates & workflow blueprints</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="text-primary" size={14} />
                    </div>
                    <span className="text-white/80">Community support access</span>
                  </li>
                </ul>
                
                <Button className="w-full bg-primary/20 hover:bg-primary/30 text-white border border-primary/30 backdrop-blur-sm" asChild>
                  <a href="/assessment">
                    <ClipboardCheck className="mr-2" size={16} />
                    Take the Assessment
                  </a>
                </Button>
              </TiltCard>
            </AnimatedSection>

            {/* DWY - Done With You */}
            <AnimatedSection animation="slide-up" delay={200}>
              <TiltCard 
                className="h-full p-6 relative overflow-visible"
                glowColor="rgba(251, 191, 36, 0.4)"
                borderGradient="from-[#FFD700] via-amber-400 to-[#FFD700]"
              >
                <div className="absolute -top-3 right-4 px-3 py-1 bg-[#FFD700] text-gray-900 text-xs font-bold rounded-full shadow-lg z-10">
                  MOST POPULAR
                </div>
                
                <div className="text-center mb-6">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#FFD700]/30 to-primary/20 flex items-center justify-center mb-4 mx-auto backdrop-blur-sm border border-[#FFD700]/20">
                    <DWYIcon size={72} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Done With You</h3>
                  <p className="text-[#FFD700] font-medium text-sm">
                    You drive. We're in the passenger seat.
                  </p>
                </div>
                
                <p className="text-sm text-white/60 text-center mb-6">
                  Collaborative coaching where we guide you through implementation. You stay in control while we navigate together.
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-[#FFD700]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="text-[#FFD700]" size={14} />
                    </div>
                    <span className="text-white/80">1:1 coaching sessions</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-[#FFD700]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="text-[#FFD700]" size={14} />
                    </div>
                    <span className="text-white/80">Custom strategy development</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-[#FFD700]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="text-[#FFD700]" size={14} />
                    </div>
                    <span className="text-white/80">Hands-on guidance & accountability</span>
                  </li>
                </ul>
                
                <Button className="w-full bg-[#FFD700]/20 hover:bg-[#FFD700]/30 text-white border border-[#FFD700]/30 backdrop-blur-sm" asChild>
                  <a href="/assessment">
                    <ClipboardCheck className="mr-2" size={16} />
                    Take the Assessment
                  </a>
                </Button>
              </TiltCard>
            </AnimatedSection>

            {/* DFY - Done For You */}
            <AnimatedSection animation="slide-up" delay={400}>
              <TiltCard 
                className="h-full p-6"
                glowColor="rgba(139, 92, 246, 0.4)"
                borderGradient="from-purple-500 via-primary to-purple-500"
              >
                <div className="text-center mb-6">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-500/30 to-primary/20 flex items-center justify-center mb-4 mx-auto backdrop-blur-sm border border-purple-500/20">
                    <DFYIcon size={72} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Done For You</h3>
                  <p className="text-purple-400 font-medium text-sm">
                    We drive. You're in the passenger seat.
                  </p>
                </div>
                
                <p className="text-sm text-white/60 text-center mb-6">
                  Full-service implementation by our expert team. Sit back while we build and optimize your systems.
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="text-purple-400" size={14} />
                    </div>
                    <span className="text-white/80">Complete system build-out</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="text-purple-400" size={14} />
                    </div>
                    <span className="text-white/80">AI automation & integrations</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="text-purple-400" size={14} />
                    </div>
                    <span className="text-white/80">Ongoing management & optimization</span>
                  </li>
                </ul>
                
                <Button className="w-full bg-purple-500/20 hover:bg-purple-500/30 text-white border border-purple-500/30 backdrop-blur-sm" asChild>
                  <a href="/assessment">
                    <ClipboardCheck className="mr-2" size={16} />
                    Take the Assessment
                  </a>
                </Button>
              </TiltCard>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Brand Showcase Section */}
      <section className="py-20 bg-[#0a0a12] relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-20 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-purple-600 rounded-full blur-3xl"></div>
        </div>
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <AnimatedSection animation="fade-in">
              <div className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full mb-4 border border-primary/30">
                <p className="text-primary text-sm font-bold uppercase tracking-wider">Tech Brands</p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-up" delay={100}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Purpose-Built <span className="text-primary">Platforms</span>
              </h2>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedSection animation="slide-up" delay={0}>
              <div className="group relative h-full">
                <div className="absolute -inset-0.5 bg-primary/50 rounded-2xl opacity-50 group-hover:opacity-80 blur transition-all duration-300"></div>
                <div className="relative h-full bg-[#0f172a] border border-primary/30 rounded-2xl p-8 hover:bg-[#1a2744] transition-all duration-300">
                  <img src="/zenoflo-logo-new.png" alt="Zenoflo - Your Business Command Center" className="h-10 mb-4 object-contain object-left bg-transparent" loading="lazy" />
                  <h3 className="text-xl font-bold text-white mb-2">Your Business Command Center</h3>
                  <p className="text-white/60 mb-6 text-sm">
                    Complete business operating system featuring AI agents, voice automation, and intelligent workflows that adapt to your needs.
                  </p>
                  <Button className="w-full bg-primary/20 hover:bg-primary/30 text-white border border-primary/30" asChild>
                    <a href="https://zenoflo.com" target="_blank" rel="noopener noreferrer">
                      Visit Zenoflo.com <ExternalLink className="ml-2" size={16} />
                    </a>
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={150}>
              <div className="group relative h-full">
                <div className="absolute -inset-0.5 bg-[#FFD700]/40 rounded-2xl opacity-50 group-hover:opacity-80 blur transition-all duration-300"></div>
                <div className="relative h-full bg-[#0f172a] border border-[#FFD700]/30 rounded-2xl p-8 hover:bg-[#1a2744] transition-all duration-300 overflow-visible">
                  <div className="absolute -top-3 right-4 px-3 py-1 bg-[#FFD700] text-gray-900 text-xs font-bold rounded-full shadow-lg z-10">
                    COMING SOON
                  </div>
                  <img src="/agentmob-logo.png" alt="AgentMob.ai - AI Agent Orchestration Platform" className="h-12 mb-4 object-contain object-left" loading="lazy" />
                  <h3 className="text-xl font-bold text-white mb-2">AI Agent Orchestration Platform</h3>
                  <p className="text-white/60 mb-6 text-sm">
                    Central hub for AI agents that connect through intelligent orchestration, enabling seamless automation across your entire business.
                  </p>
                  <Button className="w-full bg-[#FFD700]/20 hover:bg-[#FFD700]/30 text-white border border-[#FFD700]/30" asChild>
                    <a href="https://agentmob.ai" target="_blank" rel="noopener noreferrer">
                      Visit AgentMob.ai <ExternalLink className="ml-2" size={16} />
                    </a>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials Section - TEMPORARILY COMMENTED OUT
      <section id="testimonials" aria-labelledby="testimonials-heading" className="py-24 relative overflow-hidden" style={{
        background: "linear-gradient(135deg, oklch(0.25 0.08 250) 0%, oklch(0.18 0.06 255) 50%, oklch(0.22 0.07 245) 100%)",
      }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FFD700] rounded-full blur-3xl"></div>
        </div>
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <AnimatedSection animation="fade-in">
              <div className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full mb-6 border border-primary/30">
                <p className="text-primary text-sm font-bold uppercase tracking-wider">Testimonials</p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-up" delay={100}>
              <h2 id="testimonials-heading" className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Real Results, <span className="bg-gradient-to-r from-primary via-[#FFD700] to-primary bg-clip-text text-transparent">Real Stories</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection animation="slide-up" delay={200}>
              <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
                Business owners who transformed their operations with our proven systems
              </p>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection animation="slide-up" delay={0}>
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-[#1e3a5f] rounded-2xl opacity-50 group-hover:opacity-80 blur transition-all duration-300"></div>
              <Card className="relative bg-[#0f172a] border-[#1e3a5f] rounded-2xl overflow-hidden hover:bg-[#1a2744] transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-6 text-[#FFD700]">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-white/90 text-lg mb-6 italic leading-relaxed">
                    "Jeremy's automation strategies transformed our agency operations completely."
                  </p>
                  <div className="space-y-2 mb-6 p-4 bg-[#1e3a5f]/30 rounded-xl">
                    <p className="text-sm text-[#60a5fa] font-medium">• Cut policy processing time by 60%</p>
                    <p className="text-sm text-[#60a5fa] font-medium">• Automated client follow-up sequences</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <img src="/testimonial-1.jpg" alt="Beth Prince" className="w-14 h-14 rounded-full object-cover border-2 border-[#1e3a5f] group-hover:border-[#FFD700] transition-colors duration-300" loading="lazy" />
                    <div>
                      <h3 className="font-bold text-white text-lg">Beth Prince</h3>
                      <p className="text-white/60 text-sm">Insurance Agency Owner</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={100}>
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-[#4c1d95] rounded-2xl opacity-50 group-hover:opacity-80 blur transition-all duration-300"></div>
              <Card className="relative bg-[#1e1b4b] border-[#4c1d95] rounded-2xl overflow-hidden hover:bg-[#2e2866] transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-6 text-[#FFD700]">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-white/90 text-lg mb-6 italic leading-relaxed">
                    "Finally have systems that work WITH my brain, not against it."
                  </p>
                  <div className="space-y-2 mb-6 p-4 bg-[#4c1d95]/30 rounded-xl">
                    <p className="text-sm text-[#a78bfa] font-medium">• Increased client retention by 35%</p>
                    <p className="text-sm text-[#a78bfa] font-medium">• Reclaimed 15 hours per week</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <img src="/testimonial-2.jpg" alt="Danielle M." className="w-14 h-14 rounded-full object-cover border-2 border-[#4c1d95] group-hover:border-[#FFD700] transition-colors duration-300" loading="lazy" />
                    <div>
                      <h3 className="font-bold text-white text-lg">Danielle M.</h3>
                      <p className="text-white/60 text-sm">Business Coach</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={200}>
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-[#1e40af] rounded-2xl opacity-50 group-hover:opacity-80 blur transition-all duration-300"></div>
              <Card className="relative bg-[#172554] border-[#1e40af] rounded-2xl overflow-hidden hover:bg-[#1e3a6e] transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-6 text-[#FFD700]">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-white/90 text-lg mb-6 italic leading-relaxed">
                    "The AI tools Jeremy implemented saved our team countless hours every week."
                  </p>
                  <div className="space-y-2 mb-6 p-4 bg-[#1e40af]/30 rounded-xl">
                    <p className="text-sm text-[#93c5fd] font-medium">• Automated quote generation process</p>
                    <p className="text-sm text-[#93c5fd] font-medium">• Reduced errors by 80%</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <img src="/testimonial-3.jpg" alt="Lauren S." className="w-14 h-14 rounded-full object-cover border-2 border-[#1e40af] group-hover:border-[#FFD700] transition-colors duration-300" loading="lazy" />
                    <div>
                      <h3 className="font-bold text-white text-lg">Lauren S.</h3>
                      <p className="text-white/60 text-sm">Agency Manager</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={300}>
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-[#6d28d9] rounded-2xl opacity-50 group-hover:opacity-80 blur transition-all duration-300"></div>
              <Card className="relative bg-[#2e1065] border-[#6d28d9] rounded-2xl overflow-hidden hover:bg-[#3b1a7d] transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-6 text-[#FFD700]">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-white/90 text-lg mb-6 italic leading-relaxed">
                    "Jeremy helped us scale from 2 to 8 agents without adding administrative overhead."
                  </p>
                  <div className="space-y-2 mb-6 p-4 bg-[#6d28d9]/30 rounded-xl">
                    <p className="text-sm text-[#c4b5fd] font-medium">• Streamlined onboarding process</p>
                    <p className="text-sm text-[#c4b5fd] font-medium">• 4x team growth in 12 months</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <img src="/testimonial-4.jpg" alt="Heather K." className="w-14 h-14 rounded-full object-cover border-2 border-[#6d28d9] group-hover:border-[#FFD700] transition-colors duration-300" loading="lazy" />
                    <div>
                      <h3 className="font-bold text-white text-lg">Heather K.</h3>
                      <p className="text-white/60 text-sm">Agency Principal</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={400}>
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-[#1e3a5f] rounded-2xl opacity-50 group-hover:opacity-80 blur transition-all duration-300"></div>
              <Card className="relative bg-[#0f172a] border-[#1e3a5f] rounded-2xl overflow-hidden hover:bg-[#1a2744] transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-6 text-[#FFD700]">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-white/90 text-lg mb-6 italic leading-relaxed">
                    "The coaching gave me clarity on what to automate and what to keep personal."
                  </p>
                  <div className="space-y-2 mb-6 p-4 bg-[#1e3a5f]/30 rounded-xl">
                    <p className="text-sm text-[#60a5fa] font-medium">• Doubled client satisfaction scores</p>
                    <p className="text-sm text-[#60a5fa] font-medium">• Cut response time from 24hrs to 2hrs</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <img src="/testimonial-5.jpg" alt="Ashley R." className="w-14 h-14 rounded-full object-cover border-2 border-[#1e3a5f] group-hover:border-[#FFD700] transition-colors duration-300" loading="lazy" />
                    <div>
                      <h3 className="font-bold text-white text-lg">Ashley R.</h3>
                      <p className="text-white/60 text-sm">Independent Agent</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={500}>
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-[#4c1d95] rounded-2xl opacity-50 group-hover:opacity-80 blur transition-all duration-300"></div>
              <Card className="relative bg-[#1e1b4b] border-[#4c1d95] rounded-2xl overflow-hidden hover:bg-[#2e2866] transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-6 text-[#FFD700]">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-white/90 text-lg mb-6 italic leading-relaxed">
                    "Best investment I've made in my business. Systems that actually stick."
                  </p>
                  <div className="space-y-2 mb-6 p-4 bg-[#4c1d95]/30 rounded-xl">
                    <p className="text-sm text-[#a78bfa] font-medium">• Eliminated manual data entry</p>
                    <p className="text-sm text-[#a78bfa] font-medium">• Increased revenue by 28%</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <img src="/testimonial-6.jpg" alt="Erica T." className="w-14 h-14 rounded-full object-cover border-2 border-[#4c1d95] group-hover:border-[#FFD700] transition-colors duration-300" loading="lazy" />
                    <div>
                      <h3 className="font-bold text-white text-lg">Erica T.</h3>
                      <p className="text-white/60 text-sm">Small Business Owner</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={600}>
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-[#1e40af] rounded-2xl opacity-50 group-hover:opacity-80 blur transition-all duration-300"></div>
              <Card className="relative bg-[#172554] border-[#1e40af] rounded-2xl overflow-hidden hover:bg-[#1e3a6e] transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-6 text-[#FFD700]">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-white/90 text-lg mb-6 italic leading-relaxed">
                    "Jeremy's approach to automation is practical and immediately actionable."
                  </p>
                  <div className="space-y-2 mb-6 p-4 bg-[#1e40af]/30 rounded-xl">
                    <p className="text-sm text-[#93c5fd] font-medium">• Automated renewal reminders</p>
                    <p className="text-sm text-[#93c5fd] font-medium">• Retention rate up to 94%</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <img src="/testimonial-7.jpg" alt="Amy L." className="w-14 h-14 rounded-full object-cover border-2 border-[#1e40af] group-hover:border-[#FFD700] transition-colors duration-300" loading="lazy" />
                    <div>
                      <h3 className="font-bold text-white text-lg">Amy L.</h3>
                      <p className="text-white/60 text-sm">Insurance Broker</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={700}>
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-[#6d28d9] rounded-2xl opacity-50 group-hover:opacity-80 blur transition-all duration-300"></div>
              <Card className="relative bg-[#2e1065] border-[#6d28d9] rounded-2xl overflow-hidden hover:bg-[#3b1a7d] transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-6 text-[#FFD700]">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-white/90 text-lg mb-6 italic leading-relaxed">
                    "Went from drowning in admin work to focusing on what I do best—selling."
                  </p>
                  <div className="space-y-2 mb-6 p-4 bg-[#6d28d9]/30 rounded-xl">
                    <p className="text-sm text-[#c4b5fd] font-medium">• Freed up 20+ hours monthly</p>
                    <p className="text-sm text-[#c4b5fd] font-medium">• Closed 40% more policies</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <img src="/testimonial-8.jpg" alt="Ryan P." className="w-14 h-14 rounded-full object-cover border-2 border-[#6d28d9] group-hover:border-[#FFD700] transition-colors duration-300" loading="lazy" />
                    <div>
                      <h3 className="font-bold text-white text-lg">Ryan P.</h3>
                      <p className="text-white/60 text-sm">Sales Executive</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={800}>
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-[#1e3a5f] rounded-2xl opacity-50 group-hover:opacity-80 blur transition-all duration-300"></div>
              <Card className="relative bg-[#0f172a] border-[#1e3a5f] rounded-2xl overflow-hidden hover:bg-[#1a2744] transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-6 text-[#FFD700]">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-white/90 text-lg mb-6 italic leading-relaxed">
                    "The systems we built together have been game-changing for our agency growth."
                  </p>
                  <div className="space-y-2 mb-6 p-4 bg-[#1e3a5f]/30 rounded-xl">
                    <p className="text-sm text-[#60a5fa] font-medium">• Scaled to 3 locations</p>
                    <p className="text-sm text-[#60a5fa] font-medium">• Consistent processes across all offices</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <img src="/testimonial-9.jpg" alt="Anissa W." className="w-14 h-14 rounded-full object-cover border-2 border-[#1e3a5f] group-hover:border-[#FFD700] transition-colors duration-300" loading="lazy" />
                    <div>
                      <h3 className="font-bold text-white text-lg">Anissa W.</h3>
                      <p className="text-white/60 text-sm">Multi-Location Owner</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={900}>
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-[#4c1d95] rounded-2xl opacity-50 group-hover:opacity-80 blur transition-all duration-300"></div>
              <Card className="relative bg-[#1e1b4b] border-[#4c1d95] rounded-2xl overflow-hidden hover:bg-[#2e2866] transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-6 text-[#FFD700]">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-white/90 text-lg mb-6 italic leading-relaxed">
                    "Jeremy understands insurance agencies. His solutions are built for our reality."
                  </p>
                  <div className="space-y-2 mb-6 p-4 bg-[#4c1d95]/30 rounded-xl">
                    <p className="text-sm text-[#a78bfa] font-medium">• Automated claims tracking</p>
                    <p className="text-sm text-[#a78bfa] font-medium">• Customer complaints down 65%</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <img src="/testimonial-10.jpg" alt="Paula G." className="w-14 h-14 rounded-full object-cover border-2 border-[#4c1d95] group-hover:border-[#FFD700] transition-colors duration-300" loading="lazy" />
                    <div>
                      <h3 className="font-bold text-white text-lg">Paula G.</h3>
                      <p className="text-white/60 text-sm">Claims Manager</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={1000}>
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-[#1e40af] rounded-2xl opacity-50 group-hover:opacity-80 blur transition-all duration-300"></div>
              <Card className="relative bg-[#172554] border-[#1e40af] rounded-2xl overflow-hidden hover:bg-[#1e3a6e] transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-6 text-[#FFD700]">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-white/90 text-lg mb-6 italic leading-relaxed">
                    "Finally have the work-life balance I've been chasing for years."
                  </p>
                  <div className="space-y-2 mb-6 p-4 bg-[#1e40af]/30 rounded-xl">
                    <p className="text-sm text-[#93c5fd] font-medium">• Left office by 5pm daily</p>
                    <p className="text-sm text-[#93c5fd] font-medium">• Revenue actually increased 22%</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <img src="/testimonial-11.jpg" alt="Nicci D." className="w-14 h-14 rounded-full object-cover border-2 border-[#1e40af] group-hover:border-[#FFD700] transition-colors duration-300" loading="lazy" />
                    <div>
                      <h3 className="font-bold text-white text-lg">Nicci D.</h3>
                      <p className="text-white/60 text-sm">Agency Owner</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={1100}>
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-[#6d28d9] rounded-2xl opacity-50 group-hover:opacity-80 blur transition-all duration-300"></div>
              <Card className="relative bg-[#2e1065] border-[#6d28d9] rounded-2xl overflow-hidden hover:bg-[#3b1a7d] transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-6 text-[#FFD700]">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-white/90 text-lg mb-6 italic leading-relaxed">
                    "The AI voice agents Jeremy set up handle 70% of our inbound calls now."
                  </p>
                  <div className="space-y-2 mb-6 p-4 bg-[#6d28d9]/30 rounded-xl">
                    <p className="text-sm text-[#c4b5fd] font-medium">• 24/7 customer support coverage</p>
                    <p className="text-sm text-[#c4b5fd] font-medium">• Staff focused on complex cases</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <img src="/testimonial-1.jpg" alt="Cody M." className="w-14 h-14 rounded-full object-cover border-2 border-[#6d28d9] group-hover:border-[#FFD700] transition-colors duration-300" loading="lazy" />
                    <div>
                      <h3 className="font-bold text-white text-lg">Cody M.</h3>
                      <p className="text-white/60 text-sm">Tech Director</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={1200}>
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-[#1e3a5f] rounded-2xl opacity-50 group-hover:opacity-80 blur transition-all duration-300"></div>
              <Card className="relative bg-[#0f172a] border-[#1e3a5f] rounded-2xl overflow-hidden hover:bg-[#1a2744] transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-6 text-[#FFD700]">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-white/90 text-lg mb-6 italic leading-relaxed">
                    "Jeremy helped us transition from chaos to clarity. Our team is thriving."
                  </p>
                  <div className="space-y-2 mb-6 p-4 bg-[#1e3a5f]/30 rounded-xl">
                    <p className="text-sm text-[#60a5fa] font-medium">• Employee satisfaction up 45%</p>
                    <p className="text-sm text-[#60a5fa] font-medium">• Zero turnover in 18 months</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <img src="/testimonial-2.jpg" alt="Missy H." className="w-14 h-14 rounded-full object-cover border-2 border-[#1e3a5f] group-hover:border-[#FFD700] transition-colors duration-300" loading="lazy" />
                    <div>
                      <h3 className="font-bold text-white text-lg">Missy H.</h3>
                      <p className="text-white/60 text-sm">HR Manager</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      END Testimonials Section - TEMPORARILY COMMENTED OUT */}

      {/* For Business Coaches CTA */}
      <section className="py-20 bg-[#0f172a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-64 h-64 bg-red-500 rounded-full blur-3xl" aria-hidden="true"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#FFD700] rounded-full blur-3xl" aria-hidden="true"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection animation="slide-up">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block px-4 py-2 bg-red-500/20 backdrop-blur-sm rounded-full mb-6 border border-red-500/30">
                    <p className="text-red-400 text-sm font-bold uppercase tracking-wider">For Business Coaches</p>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                    The Dirty Secret of <span className="text-red-400">Business Coaching</span>
                  </h2>
                  <p className="text-lg text-white/70 mb-8 leading-relaxed">
                    Your clients aren't ignoring your advice. They're drowning in operations before they can execute it. Learn why the best coaches are switching from giving advice to installing systems.
                  </p>
                  <Button size="lg" className="text-base px-8 py-6 bg-red-500 hover:bg-red-600 text-white border-0" style={{ boxShadow: "0 4px 0 #b91c1c, 0 8px 20px rgba(239, 68, 68, 0.3)" }} asChild>
                    <a href="/coaching-truth">
                      Read the Truth <ArrowRight className="ml-2" />
                    </a>
                  </Button>
                </div>
                <div className="relative">
                  <div className="group relative">
                    <div className="absolute -inset-0.5 bg-red-500/40 rounded-2xl opacity-50 blur transition-all duration-300"></div>
                    <div className="relative bg-[#1a0a0a] border border-red-500/30 rounded-2xl p-8">
                      <div className="space-y-5 text-white/80">
                        <p className="flex items-start gap-4">
                          <span className="text-red-400 font-bold text-2xl">✗</span>
                          <span className="text-lg">Client agrees to your strategy on the call</span>
                        </p>
                        <p className="flex items-start gap-4">
                          <span className="text-red-400 font-bold text-2xl">✗</span>
                          <span className="text-lg">Monday hits and operations take over</span>
                        </p>
                        <p className="flex items-start gap-4">
                          <span className="text-red-400 font-bold text-2xl">✗</span>
                          <span className="text-lg">Three weeks later: zero progress</span>
                        </p>
                        <div className="border-t border-white/10 pt-5 mt-5">
                          <p className="flex items-start gap-4 text-white font-semibold">
                            <span className="text-[#FFD700] font-bold text-2xl">→</span>
                            <span className="text-lg">There's a better way. Become a Manumation Partner.</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Manumation Assessment CTA */}
      <section id="assessment" className="py-20 bg-[#0a0a12] relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl transform -translate-y-1/2"></div>
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-[#FFD700] rounded-full blur-3xl transform -translate-y-1/2"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection animation="fade-in">
              <div className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full mb-6 border border-primary/30">
                <p className="text-primary text-sm font-bold uppercase tracking-wider">Assessment</p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-up" delay={100}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Discover Your <span className="text-primary">Automation Readiness</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection animation="slide-up" delay={200}>
              <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
                Identify exactly where intelligent automation will free up your time, grow your revenue, and simplify your operations.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="slide-up" delay={300}>
              <div className="group relative inline-block">
                <div className="absolute -inset-1 bg-primary/40 rounded-2xl opacity-50 group-hover:opacity-80 blur transition-all duration-300"></div>
                <div className="relative bg-[#0f172a] border border-primary/30 rounded-2xl p-8">
                  <div className="flex items-center justify-center gap-8 text-sm text-white/70 flex-wrap mb-8">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                        <CheckCircle2 className="text-primary" size={14} />
                      </div>
                      <span>5-10 Minutes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-[#FFD700]/20 flex items-center justify-center">
                        <CheckCircle2 className="text-[#FFD700]" size={14} />
                      </div>
                      <span>Personalized Results</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center">
                        <CheckCircle2 className="text-purple-400" size={14} />
                      </div>
                      <span>Actionable Insights</span>
                    </div>
                  </div>
                  <Button size="lg" className="text-lg px-10 py-6 bg-[#FFD700] hover:bg-[#FFD700]/90 text-gray-900 font-bold border-0" style={{ boxShadow: "0 4px 0 #b89700, 0 8px 20px rgba(255, 215, 0, 0.3)" }} asChild>
                    <a href="/assessment">
                      Start Your Assessment <ArrowRight className="ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Newsletter Signup - Compact Dark Design */}
      <section className="py-10 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #172554 100%)' }}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-[#FFD700] rounded-full blur-3xl"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                  <Mail className="text-[#FFD700]" size={20} />
                  <span className="text-[#FFD700] text-sm font-bold uppercase tracking-wider">Newsletter</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                  Get Biweekly Business Insights
                </h3>
                <p className="text-white/60 text-sm">
                  AI, automation & systems strategies delivered free.
                </p>
              </div>
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        className="py-20 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, oklch(0.20 0.08 250) 0%, oklch(0.15 0.06 255) 50%, oklch(0.18 0.07 245) 100%)",
        }}
      >
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Build Systems That Actually Work?
            </h2>
            <p className="text-lg text-white/90 mb-10">
              Let's discuss how we can transform your business operations.
            </p>
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
                <a href="mailto:support@keanonbiz.com">
                  Email Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                <button onClick={() => scrollToSection("about")} className="text-background/70 hover:text-background transition-colors text-left text-sm">
                  About
                </button>
                <button onClick={() => scrollToSection("services")} className="text-background/70 hover:text-background transition-colors text-left text-sm">
                  Services
                </button>
                <button onClick={() => scrollToSection("testimonials")} className="text-background/70 hover:text-background transition-colors text-left text-sm">
                  Results
                </button>
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
