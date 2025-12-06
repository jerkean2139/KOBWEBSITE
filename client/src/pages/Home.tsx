import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { AnimatedSection } from "@/components/AnimatedSection";
import CountdownTimer from "@/components/CountdownTimer";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import CountUp from "@/components/CountUp";
import { ArrowRight, CheckCircle2, ExternalLink, Mail, Sparkles, Users, Megaphone, Bot, BookOpen, Award } from "lucide-react";

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      <ExitIntentPopup />
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 max-w-full"
        style={{
          background: "linear-gradient(135deg, oklch(0.20 0.08 250) 0%, oklch(0.15 0.06 255) 50%, oklch(0.18 0.07 245) 100%)",
        }}
      >
        <div className="absolute inset-0 opacity-20">
          <img
            src="/jeremy-main-hero.webp"
            alt="Jeremy Kean"
            className="w-full h-full object-cover object-center"
            style={{ transform: "scaleX(-1)", objectPosition: "center 20%" }}
          />
        </div>
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFD700]/20 rounded-full mb-6">
                <BookOpen className="text-[#FFD700]" size={16} />
                <p className="text-[#FFD700] text-sm font-bold uppercase tracking-wider">New Book • Launching Dec 15th</p>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
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
                      <a href="https://manumation.ai" target="_blank" rel="noopener noreferrer">
                        Pre-Order • Dec 15th
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative max-w-md mx-auto">
                <div className="absolute -inset-6 bg-[#FFD700]/20 rounded-2xl blur-3xl"></div>
                <img
                  src="/manumation-book-cover.png"
                  alt="The Manumation Method - Launching December 15th"
                  className="relative rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-full">
                  <Button size="lg" className="w-full bg-[#FFD700] hover:bg-[#FFD700]/90 text-gray-900 font-bold shadow-xl" asChild>
                    <a href="https://manumation.ai" target="_blank" rel="noopener noreferrer">
                      Pre-Order Now • Dec 15th
                    </a>
                  </Button>
                </div>
              </div>
              {/* Countdown Timer */}
              <div className="mt-8 flex justify-center">
                <CountdownTimer />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-background relative" style={{ clipPath: "polygon(0 0, 100% 0, 100% 95%, 0 100%)" }}>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-left" className="order-2 md:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-2xl"></div>
                <img
                  src="/jeremy-hero-photo.webp"
                  alt="Jeremy Kean"
                  className="relative rounded-2xl shadow-2xl w-full h-auto object-cover object-top"
                  style={{ maxHeight: '600px' }}
                />
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-right" className="order-1 md:order-2">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                <p className="text-primary text-sm font-bold uppercase tracking-wider">Meet Jeremy</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
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
      <section className="py-24 relative overflow-hidden -mt-16" style={{
        background: "linear-gradient(135deg, oklch(0.25 0.08 250) 0%, oklch(0.20 0.06 255) 100%)",
        clipPath: "polygon(0 5%, 100% 0, 100% 95%, 0 100%)",
        paddingTop: "8rem"
      }}>
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-primary/20 rounded-full mb-6">
              <p className="text-primary text-sm font-bold uppercase tracking-wider">The Ecosystem</p>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight animate-float">
              Strategy. Method. Machine.
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white/5 backdrop-blur-sm border-2 border-primary/30 rounded-2xl p-8 hover:bg-white/10 transition-all">
                <div className="text-6xl font-bold text-primary mb-4">01</div>
                <h3 className="text-2xl font-bold text-white mb-2">KeanOnBiz</h3>
                <p className="text-white/80 font-semibold mb-2">gives you the strategy.</p>
                <p className="text-white/60 text-sm">Personal coaching and strategic guidance</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border-2 border-primary/30 rounded-2xl p-8 hover:bg-white/10 transition-all">
                <div className="text-6xl font-bold text-primary mb-4">02</div>
                <h3 className="text-2xl font-bold text-white mb-2">Manumation</h3>
                <p className="text-white/80 font-semibold mb-2">gives you the method.</p>
                <p className="text-white/60 text-sm">The framework that blends human + automation</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border-2 border-primary/30 rounded-2xl p-8 hover:bg-white/10 transition-all">
                <div className="text-6xl font-bold text-primary mb-4">03</div>
                <h3 className="text-2xl font-bold text-white mb-2">Zenoflo</h3>
                <p className="text-white/80 font-semibold mb-2">gives you the machine.</p>
                <p className="text-white/60 text-sm">The tech platform that powers it all</p>
              </div>
            </div>
            <p className="text-xl text-white font-semibold max-w-3xl mx-auto leading-relaxed">
              Together, they're how modern businesses stop duct-taping tools and finally operate with clarity, speed, and soul.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Ecosystem Section */}
      <section id="tech-ecosystem" className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              <p className="text-primary text-sm font-bold uppercase tracking-wider">Tech Brands</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Purpose-Built Platforms
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our tech ecosystem leverages industry-leading automation and AI platforms to build custom solutions that actually work for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center max-w-6xl mx-auto">
            <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
              <img src="/zapier-logo.png" alt="Zapier" className="h-12 w-auto" />
            </div>
            <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
              <img src="/make-logo.png" alt="Make.com" className="h-12 w-auto" />
            </div>
            <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
              <img src="/n8n-logo.png" alt="n8n" className="h-12 w-auto" />
            </div>
            <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
              <img src="/replit-logo.png" alt="Replit" className="h-12 w-auto" />
            </div>
            <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
              <img src="/lovable-logo.png" alt="Lovable" className="h-12 w-auto" />
            </div>
            <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
              <img src="/chatgpt-logo.png" alt="ChatGPT" className="h-12 w-auto" />
            </div>
            <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
              <img src="/claude-logo.png" alt="Claude AI" className="h-12 w-auto" />
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We combine these powerful platforms with custom development to create automation solutions tailored to your specific business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              <p className="text-primary text-sm font-bold uppercase tracking-wider">Services</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              How We Work Together
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three distinct pathways designed to transform your business operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Service 1: 1:1 Coaching */}
            <AnimatedSection animation="slide-up" delay={0}>
            <Card className="relative overflow-hidden border-2 border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 bg-gradient-to-br from-background to-muted/20">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary"></div>
              <CardHeader className="pb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4">
                  <Users className="text-primary" size={28} />
                </div>
                <CardTitle className="text-xl mb-2">1:1 Coaching</CardTitle>
                <CardDescription className="text-sm">
                  For entrepreneurs and their teams
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                    <span>Personalized strategy sessions</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                    <span>Custom system design</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                    <span>Ongoing support & optimization</span>
                  </li>
                </ul>
                <Button className="w-full" onClick={() => scrollToSection("contact")}>
                  Learn More
                </Button>
              </CardContent>
            </Card>
            </AnimatedSection>

            {/* Service 2: Digital Marketing Agency */}
            <AnimatedSection animation="slide-up" delay={200}>
            <Card className="relative overflow-hidden border-2 border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 bg-gradient-to-br from-background to-muted/20">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary"></div>
              <CardHeader className="pb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4">
                  <Megaphone className="text-primary" size={28} />
                </div>
                <CardTitle className="text-xl mb-2">Digital Marketing</CardTitle>
                <CardDescription className="text-sm">
                  Full-service marketing that drives results
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                    <span>Website design & development</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                    <span>SEO/AEO/GEO optimization</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                    <span>Paid ads & retargeting</span>
                  </li>
                </ul>
                <Button className="w-full" onClick={() => scrollToSection("contact")}>
                  Learn More
                </Button>
              </CardContent>
            </Card>
            </AnimatedSection>

            {/* Service 3: Tech Ecosystem */}
            <AnimatedSection animation="slide-up" delay={400}>
            <Card className="relative overflow-hidden border-2 border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 bg-gradient-to-br from-background to-muted/20">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary"></div>
              <CardHeader className="pb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4">
                  <Bot className="text-primary" size={28} />
                </div>
                <CardTitle className="text-xl mb-2">Tech Ecosystem</CardTitle>
                <CardDescription className="text-sm">
                  AI-powered automation & custom solutions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                    <span>AI agents & voice automation</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                    <span>AgentMob.ai orchestration</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={16} />
                    <span>Custom AI projects</span>
                  </li>
                </ul>
                <Button className="w-full" onClick={() => scrollToSection("tech-ecosystem")}>
                  Learn More
                </Button>
              </CardContent>
            </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Brand Showcase Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              <p className="text-primary text-sm font-bold uppercase tracking-wider">Tech Brands</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              Purpose-Built Platforms
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardHeader>
                <img src="/zenoflo-logo.png" alt="Zenoflo" className="h-12 mb-4 object-contain object-left" />
                <CardDescription className="text-base">
                  Your Business Command Center
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 text-sm">
                  Complete business operating system featuring AI agents, voice automation, and intelligent workflows that adapt to your needs.
                </p>
                <Button className="w-full" asChild>
                  <a href="https://zenoflo.com" target="_blank" rel="noopener noreferrer">
                    Visit Zenoflo.com <ExternalLink className="ml-2" size={16} />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative">
              <div className="absolute top-4 right-4 px-3 py-1 bg-yellow-500 text-black text-xs font-bold rounded-full">
                COMING SOON
              </div>
              <CardHeader>
                <img src="/agentmob-logo.png" alt="AgentMob.ai" className="h-12 mb-4 object-contain object-left" />
                <CardDescription className="text-base">
                  AI Agent Orchestration Platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 text-sm">
                  Central hub for AI agents that connect through intelligent orchestration, enabling seamless automation across your entire business.
                </p>
                <Button className="w-full" variant="outline" asChild>
                  <a href="https://agentmob.ai" target="_blank" rel="noopener noreferrer">
                    Visit AgentMob.ai <ExternalLink className="ml-2" size={16} />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              <p className="text-primary text-sm font-bold uppercase tracking-wider">Testimonials</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              Real Results
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <AnimatedSection animation="fade-in" delay={1}>
            <Card className="border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary text-lg">★</span>
                  ))}
                </div>
                <h3 className="font-bold text-foreground text-base mb-2">Beth Prince</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  "Jeremy's automation strategies transformed our agency operations completely."
                </p>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">• Cut policy processing time by 60%</p>
                  <p className="text-xs text-muted-foreground">• Automated client follow-up sequences</p>
                </div>
              </CardContent>
            </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={2}>
            <Card className="border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary text-lg">★</span>
                  ))}
                </div>
                <h3 className="font-bold text-foreground text-base mb-2">Danielle M.</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  "Finally have systems that work WITH my brain, not against it."
                </p>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">• Increased client retention by 35%</p>
                  <p className="text-xs text-muted-foreground">• Reclaimed 15 hours per week</p>
                </div>
              </CardContent>
            </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={3}>
            <Card className="border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary text-lg">★</span>
                  ))}
                </div>
                <h3 className="font-bold text-foreground text-base mb-2">Lauren S.</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  "The AI tools Jeremy implemented saved our team countless hours every week."
                </p>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">• Automated quote generation process</p>
                  <p className="text-xs text-muted-foreground">• Reduced errors by 80%</p>
                </div>
              </CardContent>
            </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={4}>
            <Card className="border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary text-lg">★</span>
                  ))}
                </div>
                <h3 className="font-bold text-foreground text-base mb-2">Heather K.</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  "Jeremy helped us scale from 2 to 8 agents without adding administrative overhead."
                </p>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">• Streamlined onboarding process</p>
                  <p className="text-xs text-muted-foreground">• 4x team growth in 12 months</p>
                </div>
              </CardContent>
            </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={5}>
            <Card className="border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary text-lg">★</span>
                  ))}
                </div>
                <h3 className="font-bold text-foreground text-base mb-2">Ashley R.</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  "The coaching gave me clarity on what to automate and what to keep personal."
                </p>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">• Doubled client satisfaction scores</p>
                  <p className="text-xs text-muted-foreground">• Cut response time from 24hrs to 2hrs</p>
                </div>
              </CardContent>
            </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={6}>
            <Card className="border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary text-lg">★</span>
                  ))}
                </div>
                <h3 className="font-bold text-foreground text-base mb-2">Erica T.</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  "Best investment I've made in my business. Systems that actually stick."
                </p>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">• Eliminated manual data entry</p>
                  <p className="text-xs text-muted-foreground">• Increased revenue by 28%</p>
                </div>
              </CardContent>
            </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={7}>
            <Card className="border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary text-lg">★</span>
                  ))}
                </div>
                <h3 className="font-bold text-foreground text-base mb-2">Amy L.</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  "Jeremy's approach to automation is practical and immediately actionable."
                </p>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">• Automated renewal reminders</p>
                  <p className="text-xs text-muted-foreground">• Retention rate up to 94%</p>
                </div>
              </CardContent>
            </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={8}>
            <Card className="border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary text-lg">★</span>
                  ))}
                </div>
                <h3 className="font-bold text-foreground text-base mb-2">Ryan P.</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  "Went from drowning in admin work to focusing on what I do best—selling."
                </p>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">• Freed up 20+ hours monthly</p>
                  <p className="text-xs text-muted-foreground">• Closed 40% more policies</p>
                </div>
              </CardContent>
            </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={9}>
            <Card className="border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary text-lg">★</span>
                  ))}
                </div>
                <h3 className="font-bold text-foreground text-base mb-2">Anissa W.</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  "The systems we built together have been game-changing for our agency growth."
                </p>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">• Scaled to 3 locations</p>
                  <p className="text-xs text-muted-foreground">• Consistent processes across all offices</p>
                </div>
              </CardContent>
            </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={10}>
            <Card className="border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary text-lg">★</span>
                  ))}
                </div>
                <h3 className="font-bold text-foreground text-base mb-2">Paula G.</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  "Jeremy understands insurance agencies. His solutions are built for our reality."
                </p>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">• Automated claims tracking</p>
                  <p className="text-xs text-muted-foreground">• Customer complaints down 65%</p>
                </div>
              </CardContent>
            </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={11}>
            <Card className="border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary text-lg">★</span>
                  ))}
                </div>
                <h3 className="font-bold text-foreground text-base mb-2">Nicci D.</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  "Finally have the work-life balance I've been chasing for years."
                </p>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">• Left office by 5pm daily</p>
                  <p className="text-xs text-muted-foreground">• Revenue actually increased 22%</p>
                </div>
              </CardContent>
            </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={12}>
            <Card className="border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary text-lg">★</span>
                  ))}
                </div>
                <h3 className="font-bold text-foreground text-base mb-2">Cody M.</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  "The AI voice agents Jeremy set up handle 70% of our inbound calls now."
                </p>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">• 24/7 customer support coverage</p>
                  <p className="text-xs text-muted-foreground">• Staff focused on complex cases</p>
                </div>
              </CardContent>
            </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={13}>
            <Card className="border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary text-lg">★</span>
                  ))}
                </div>
                <h3 className="font-bold text-foreground text-base mb-2">Missy H.</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  "Jeremy helped us transition from chaos to clarity. Our team is thriving."
                </p>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">• Employee satisfaction up 45%</p>
                  <p className="text-xs text-muted-foreground">• Zero turnover in 18 months</p>
                </div>
              </CardContent>
            </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Manumation Assessment CTA */}
      <section id="assessment" className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              <p className="text-primary text-sm font-bold uppercase tracking-wider">Assessment</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              Discover Your Automation Readiness
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Identify exactly where intelligent automation will free up your time, grow your revenue, and simplify your operations.
            </p>
            <Card className="border-2 border-primary/20 p-6">
              <div className="space-y-6">
                <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground flex-wrap">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary" size={18} />
                    <span>5-10 Minutes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary" size={18} />
                    <span>Personalized Results</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary" size={18} />
                    <span>Actionable Insights</span>
                  </div>
                </div>
                <div className="bg-muted/50 rounded-lg p-6">
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong className="text-foreground">Paste your GoHighLevel assessment embed code below:</strong>
                  </p>
                  <div className="bg-background/50 rounded border-2 border-dashed border-primary/30 p-8 text-center">
                    <p className="text-muted-foreground text-sm">GHL Assessment Embed Code Goes Here</p>
                  </div>
                </div>
                <Button size="lg" className="text-base px-8 py-5">
                  Start Your Assessment <ArrowRight className="ml-2" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                    <p className="text-primary text-sm font-bold uppercase tracking-wider">Newsletter</p>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 leading-tight">
                    Stay Ahead of the Curve
                  </h2>
                  <p className="text-base text-muted-foreground">
                    Biweekly insights on AI, automation, and business systems.
                  </p>
                </div>
                <div className="bg-muted/50 rounded-lg p-6 mb-6">
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong className="text-foreground">Paste your GoHighLevel newsletter signup embed code below:</strong>
                  </p>
                  <div className="bg-background/50 rounded border-2 border-dashed border-primary/30 p-8 text-center">
                    <p className="text-muted-foreground text-sm">GHL Newsletter Embed Code Goes Here</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground flex-wrap">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary" size={14} />
                    <span>Biweekly Updates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary" size={14} />
                    <span>AI & Automation Insights</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary" size={14} />
                    <span>Unsubscribe Anytime</span>
                  </div>
                </div>
              </CardContent>
            </Card>
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
    </div>
  );
}
