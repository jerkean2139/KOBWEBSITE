import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ArrowRight, CheckCircle2, ExternalLink, Mail, Sparkles, Users, Megaphone, Bot, BookOpen } from "lucide-react";

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        style={{
          background: "linear-gradient(135deg, oklch(0.20 0.08 250) 0%, oklch(0.15 0.06 255) 50%, oklch(0.18 0.07 245) 100%)",
        }}
      >
        <div className="absolute inset-0 opacity-20">
          <img
            src="/jeremy-main-hero.webp"
            alt="Jeremy Kean"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFD700]/20 rounded-full mb-6">
                <BookOpen className="text-[#FFD700]" size={16} />
                <p className="text-[#FFD700] text-sm font-bold uppercase tracking-wider">New Book • Launching Dec 10th</p>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Your Business Deserves Systems <span className="text-primary">That Actually Work</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Strategic coaching and AI-powered automation for insurance agencies and business owners who are done duct-taping solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl"
                  onClick={() => scrollToSection("services")}
                >
                  Explore Services <ArrowRight className="ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm"
                  onClick={() => scrollToSection("contact")}
                >
                  Let's Talk Business
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative max-w-md mx-auto">
                <div className="absolute -inset-6 bg-[#FFD700]/20 rounded-2xl blur-3xl"></div>
                <img
                  src="/manumation-book-cover.png"
                  alt="The Manumation Effect - Launching December 10th"
                  className="relative rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-full">
                  <Button size="lg" className="w-full bg-[#FFD700] hover:bg-[#FFD700]/90 text-gray-900 font-bold shadow-xl" asChild>
                    <a href="https://manumation.ai" target="_blank" rel="noopener noreferrer">
                      Pre-Order Now • Dec 10th
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-left" className="order-2 md:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-xl"></div>
                <img
                  src="/jeremy-hero-photo.webp"
                  alt="Meet Jeremy"
                  className="relative rounded-2xl shadow-xl w-full"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-right" className="order-1 md:order-2">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                <p className="text-primary text-sm font-bold uppercase tracking-wider">Meet Jeremy</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                35 Years. 13 Brands. One Truth.
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
      <section className="py-16 relative overflow-hidden" style={{
        background: "linear-gradient(135deg, oklch(0.25 0.08 250) 0%, oklch(0.20 0.06 255) 100%)",
      }}>
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-primary/20 rounded-full mb-6">
              <p className="text-primary text-sm font-bold uppercase tracking-wider">The Ecosystem</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 leading-tight">
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
            <AnimatedSection animation="slide-up" delay={1}>
            <Card className="relative overflow-hidden border-2 border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 bg-gradient-to-br from-background to-muted/20">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary"></div>
              <CardHeader className="pb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4">
                  <Users className="text-primary" size={28} />
                </div>
                <CardTitle className="text-xl mb-2">1:1 Coaching</CardTitle>
                <CardDescription className="text-sm">
                  Personal guidance for entrepreneurs
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
            <AnimatedSection animation="slide-up" delay={2}>
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
            <AnimatedSection animation="slide-up" delay={3}>
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
                <Button className="w-full" variant="outline" asChild>
                  <a href="https://zenoflo.com" target="_blank" rel="noopener noreferrer">
                    Explore Zenoflo <ExternalLink className="ml-2" size={14} />
                  </a>
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
                <CardTitle className="text-3xl text-primary mb-2">Zenoflo</CardTitle>
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

            <Card className="border-2 border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-3xl text-primary mb-2">AgentMob.ai</CardTitle>
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
                <h3 className="font-bold text-foreground text-base mb-2">Premier Health Advisors</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Broke free from 90-hour workweek with strategic task organization and automated CRM tools.
                </p>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">• Reduced inbound communications by 50%</p>
                  <p className="text-xs text-muted-foreground">• Enjoys guilt-free half-day Fridays</p>
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
                <h3 className="font-bold text-foreground text-base mb-2">Lauralee Hites</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  From corporate job to launching her own consulting venture with strategic planning.
                </p>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">• Transitioned to fulfilling entrepreneurship</p>
                  <p className="text-xs text-muted-foreground">• Successfully launched Stratavize Consulting</p>
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
                <h3 className="font-bold text-foreground text-base mb-2">Sudz Fundraising</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Executed finely tuned digital ad campaigns with record-breaking results.
                </p>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">• Reduced CPL from $12.63 to $3.87</p>
                  <p className="text-xs text-muted-foreground">• 44% conversion rate lead to appointment</p>
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
