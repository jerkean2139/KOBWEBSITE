import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { ArrowRight, CheckCircle2, ExternalLink, Mail, Phone, Sparkles, Target, TrendingUp, Users, Zap, Code, Megaphone, Bot } from "lucide-react";

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
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, oklch(0.20 0.03 30) 0%, oklch(0.15 0.02 25) 50%, oklch(0.18 0.02 35) 100%)",
        }}
      >
        <div className="absolute inset-0 opacity-30">
          <img
            src="/jeremy-main-hero.webp"
            alt="Jeremy Kean"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <p className="text-primary text-lg md:text-xl font-semibold mb-4 animate-fade-in">HEY THERE!</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-delay-1">
                Stop Wrestling with Systems <span className="text-primary">That Don't Fit</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-in-delay-2">
                Your business deserves better than cookie-cutter solutions. I build custom automation strategies that work the way you do, delivering practical results without the complexity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-3">
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() => scrollToSection("services")}
                >
                  Explore Services <ArrowRight className="ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 bg-white/10 hover:bg-white/20 text-white border-white/30"
                  onClick={() => scrollToSection("contact")}
                >
                  Let's Talk Business
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="/jeremy-main-hero.webp"
                alt="Jeremy Kean - Business Automation Expert"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="/jeremy-hero-photo.webp"
                alt="Meet Jeremy"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Meet Jeremy
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                After 35 years as an entrepreneur and building 13 successful brands, I've learned one universal truth: the difference between struggling and scaling isn't working harder – it's building better systems.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                As a husband, father of three, and business owner with A.D.D., I intimately understand the chaos that comes with juggling multiple priorities. That's exactly what drove me to become obsessed with creating systems that actually work in the real world, not just in theory.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                I've spent thousands of hours testing every business tool, automation platform, and AI solution on the market. But my real expertise isn't in the tools – it's in knowing how to combine them into systems that transform businesses like yours from overwhelmed to optimized.
              </p>
              <div className="flex flex-col gap-4 mt-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">35 Years of Entrepreneurship</h3>
                    <p className="text-muted-foreground">Built 13 successful brands from the ground up</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Battle-Tested Results</h3>
                    <p className="text-muted-foreground">50% reduction in admin work, 70% automation of customer communication</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Systems That Make Sense</h3>
                    <p className="text-muted-foreground">Built for how your brain—and business—actually function</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Philosophy Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
              The Ecosystem
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="border-2 border-primary/20">
                <CardContent className="pt-6">
                  <div className="text-5xl font-bold text-primary mb-4">KeanOnBiz</div>
                  <p className="text-lg text-foreground font-semibold mb-2">gives you the strategy.</p>
                  <p className="text-muted-foreground">Personal coaching and strategic guidance</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/20">
                <CardContent className="pt-6">
                  <div className="text-5xl font-bold text-primary mb-4">Manumation</div>
                  <p className="text-lg text-foreground font-semibold mb-2">gives you the method.</p>
                  <p className="text-muted-foreground">The framework that blends human + automation</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/20">
                <CardContent className="pt-6">
                  <div className="text-5xl font-bold text-primary mb-4">Zenoflo</div>
                  <p className="text-lg text-foreground font-semibold mb-2">gives you the machine.</p>
                  <p className="text-muted-foreground">The tech platform that powers it all</p>
                </CardContent>
              </Card>
            </div>
            <p className="text-xl text-foreground font-semibold">
              Together, they're how modern businesses stop duct-taping tools and finally operate with clarity, speed, and soul.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              How We Work Together
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three distinct pathways designed to transform your business operations and accelerate growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1: 1:1 Coaching */}
            <Card className="relative overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-xl">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary to-secondary"></div>
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="text-primary" size={32} />
                </div>
                <CardTitle className="text-2xl mb-2">1:1 Coaching</CardTitle>
                <CardDescription className="text-base">
                  Personal guidance for entrepreneurs and business owners
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Work directly with me to build systems that fit your workflow, team, and goals. Strategic insight combined with practical implementation.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-sm">Personalized strategy sessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-sm">Custom system design & implementation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-sm">Ongoing support & optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-sm">Direct access for strategic decisions</span>
                  </li>
                </ul>
                <Button className="w-full" onClick={() => scrollToSection("contact")}>
                  Schedule a Call
                </Button>
              </CardContent>
            </Card>

            {/* Service 2: Digital Marketing Agency */}
            <Card className="relative overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-xl">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary to-secondary"></div>
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Megaphone className="text-primary" size={32} />
                </div>
                <CardTitle className="text-2xl mb-2">Digital Marketing Agency</CardTitle>
                <CardDescription className="text-base">
                  Full-service marketing that drives results
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  From website design to SEO, ads, and copywriting – we handle the entire digital marketing ecosystem for your business.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-sm">Website design & development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-sm">SEO/AEO/GEO optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-sm">Paid ads & retargeting campaigns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-sm">Conversion-focused copywriting</span>
                  </li>
                </ul>
                <Button className="w-full" onClick={() => scrollToSection("contact")}>
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Service 3: Tech Ecosystem */}
            <Card className="relative overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-xl">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary to-secondary"></div>
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Bot className="text-primary" size={32} />
                </div>
                <CardTitle className="text-2xl mb-2">Tech Ecosystem</CardTitle>
                <CardDescription className="text-base">
                  AI-powered automation & custom solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Powered by Zenoflo – featuring AI agents, voice automation, and intelligent systems that scale your business operations.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-sm">AI agents & voice automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-sm">AgentMob.ai orchestration platform</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-sm">Micro SaaS & custom AI projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-sm">Full business operating system</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline" asChild>
                  <a href="https://zenoflo.com" target="_blank" rel="noopener noreferrer">
                    Explore Zenoflo <ExternalLink className="ml-2" size={16} />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Brand Showcase Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Tech Brands
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Purpose-built platforms that power modern business automation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl text-primary mb-2">Zenoflo</CardTitle>
                <CardDescription className="text-base">
                  Your Business Command Center
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  More than a CRM – a complete business operating system featuring AI agents, voice automation, and intelligent workflows that adapt to your needs.
                </p>
                <Button className="w-full" asChild>
                  <a href="https://zenoflo.com" target="_blank" rel="noopener noreferrer">
                    Visit Zenoflo.com <ExternalLink className="ml-2" size={16} />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl text-primary mb-2">AgentMob.ai</CardTitle>
                <CardDescription className="text-base">
                  AI Agent Orchestration Platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  The central hub for AI agents that connect through intelligent orchestration, enabling seamless automation across your entire business ecosystem.
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
      <section id="testimonials" className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Real Results
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Battle-tested strategies that deliver measurable outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary text-xl">★</span>
                  ))}
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">Premier Health Advisors</h3>
                <p className="text-muted-foreground mb-4">
                  Overwhelmed by a 90-hour workweek, the owner reclaimed balance with strategic task organization and automated CRM tools.
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-foreground">Key Wins:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Broke free from 90-hour workweek</li>
                    <li>• Reduced inbound communications by 50%</li>
                    <li>• Enjoys guilt-free half-day Fridays</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary text-xl">★</span>
                  ))}
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">Lauralee Hites</h3>
                <p className="text-muted-foreground mb-4">
                  From corporate job to launching her own consulting venture with strategic planning and bravery.
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-foreground">Key Wins:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Transitioned to fulfilling entrepreneurship</li>
                    <li>• Rekindled passion and purpose</li>
                    <li>• Successfully launched Stratavize Consulting</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary text-xl">★</span>
                  ))}
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">Sudz Fundraising</h3>
                <p className="text-muted-foreground mb-4">
                  Executed finely tuned digital ad campaigns with ongoing optimization for record-breaking results.
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-foreground">Key Wins:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 3 appointments in under 5 days</li>
                    <li>• Reduced CPL from $12.63 to $3.87</li>
                    <li>• 44% conversion rate lead to appointment</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        className="py-24 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, oklch(0.20 0.03 30) 0%, oklch(0.15 0.02 25) 50%, oklch(0.18 0.02 35) 100%)",
        }}
      >
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build Systems That Actually Work?
            </h2>
            <p className="text-xl text-white/90 mb-12">
              Let's discuss how we can transform your business operations. Schedule a discovery call to explore the possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground"
                asChild
              >
                <a href="/jeremys-calendar">
                  Book with Jeremy <ArrowRight className="ml-2" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 bg-white/10 hover:bg-white/20 text-white border-white/30"
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
              <h3 className="text-2xl font-bold mb-4 text-primary">Kean on Biz</h3>
              <p className="text-background/70">
                Building better systems for modern businesses. Strategy, method, and machine – all in one ecosystem.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="flex flex-col gap-2">
                <button onClick={() => scrollToSection("about")} className="text-background/70 hover:text-background transition-colors text-left">
                  About
                </button>
                <button onClick={() => scrollToSection("services")} className="text-background/70 hover:text-background transition-colors text-left">
                  Services
                </button>
                <button onClick={() => scrollToSection("testimonials")} className="text-background/70 hover:text-background transition-colors text-left">
                  Results
                </button>
                <a href="/jeremys-calendar" className="text-background/70 hover:text-background transition-colors">
                  Book a Call
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Get In Touch</h4>
              <div className="flex flex-col gap-3">
                <a href="mailto:support@keanonbiz.com" className="flex items-center gap-2 text-background/70 hover:text-background transition-colors">
                  <Mail size={18} />
                  support@keanonbiz.com
                </a>
                <div className="flex gap-4 mt-2">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-primary transition-colors">
                    Facebook
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-primary transition-colors">
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-background/70">
            <p>&copy; {new Date().getFullYear()} Kean on Biz. All rights reserved. | Headquarters in Indiana</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
