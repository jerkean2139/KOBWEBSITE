import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { ArrowRight, CheckCircle2, Mail, Phone, Sparkles, Target, TrendingUp, Users, Zap } from "lucide-react";

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
          background: "linear-gradient(135deg, oklch(0.25 0.08 265) 0%, oklch(0.15 0.05 280) 50%, oklch(0.20 0.06 250) 100%)",
        }}
      >
        <div className="absolute inset-0 opacity-20">
          <img
            src="/hero-speaking.jpeg"
            alt="Professional coaching"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10 text-center py-32">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-fade-in">
            TRANSFORM YOUR VISION
          </h1>
          <p className="text-xl md:text-3xl text-secondary font-semibold mb-8 animate-fade-in-delay-1">
            FOR LEADERS, ENTREPRENEURS & VISIONARIES
          </p>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-12 animate-fade-in-delay-2">
            Unlock your full potential with personalized coaching and strategic consulting designed to accelerate your success, amplify your impact, and elevate your leadership.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
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
              Book a Call
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Elevate Your Leadership Journey
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                With over 15 years of experience working with executives, entrepreneurs, and high-performing teams, I specialize in transforming potential into measurable results.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                My approach combines strategic thinking, proven methodologies, and personalized guidance to help you break through barriers, scale your impact, and achieve sustainable success.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Proven Track Record</h3>
                    <p className="text-muted-foreground">Helped 500+ leaders achieve breakthrough results</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Customized Approach</h3>
                    <p className="text-muted-foreground">Tailored strategies that fit your unique goals and challenges</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Long-Term Partnership</h3>
                    <p className="text-muted-foreground">Average client relationship spans 5+ years</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/leadership-consulting.webp"
                alt="Leadership consulting"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              How We Work Together
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three distinct pathways designed to meet you where you are and take you where you want to go.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <Card className="relative overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-xl">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary to-secondary"></div>
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Sparkles className="text-primary" size={32} />
                </div>
                <CardTitle className="text-2xl mb-2">Strategic Foundations</CardTitle>
                <CardDescription className="text-base">
                  Perfect for emerging leaders and entrepreneurs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Build a solid foundation for sustainable growth with focused coaching sessions, strategic planning, and actionable frameworks.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-sm">Monthly 1:1 coaching sessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-sm">Strategic planning & goal setting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-sm">Email support between sessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-sm">Resource library access</span>
                  </li>
                </ul>
                <Button className="w-full" onClick={() => scrollToSection("contact")}>
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Service 2 - Featured */}
            <Card className="relative overflow-hidden border-2 border-primary shadow-xl transform md:scale-105">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-secondary to-primary"></div>
              <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full">
                MOST POPULAR
              </div>
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="text-primary" size={32} />
                </div>
                <CardTitle className="text-2xl mb-2">Executive Mastery</CardTitle>
                <CardDescription className="text-base">
                  For established leaders ready to scale
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Comprehensive coaching program combining strategic guidance, leadership development, and accountability to drive exponential growth.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-sm">Bi-weekly 1:1 intensive sessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-sm">Quarterly strategic planning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-sm">Priority support & direct access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-sm">Mastermind group access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-sm">Custom frameworks & tools</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90" onClick={() => scrollToSection("contact")}>
                  Apply Now
                </Button>
              </CardContent>
            </Card>

            {/* Service 3 */}
            <Card className="relative overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-xl">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-secondary to-primary"></div>
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="text-primary" size={32} />
                </div>
                <CardTitle className="text-2xl mb-2">Elite Partnership</CardTitle>
                <CardDescription className="text-base">
                  Exclusive for C-suite executives & founders
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  White-glove consulting and coaching partnership for leaders managing complex organizations and high-stakes decisions.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-sm">Weekly 1:1 sessions + on-demand access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-sm">Team & organizational consulting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-sm">Crisis management support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-sm">Board presentation preparation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-sm">Exclusive retreat invitations</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline" onClick={() => scrollToSection("contact")}>
                  Inquire
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Partner With Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform your leadership, amplify your impact, and achieve results that matter.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-primary" size={40} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Accelerated Growth</h3>
              <p className="text-muted-foreground">
                Fast-track your progress with proven strategies and focused execution that deliver measurable results.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Target className="text-primary" size={40} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Clarity & Focus</h3>
              <p className="text-muted-foreground">
                Cut through the noise and gain crystal-clear direction on what matters most for your success.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary" size={40} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Elite Network</h3>
              <p className="text-muted-foreground">
                Connect with a community of high-achieving leaders and expand your circle of influence.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="text-primary" size={40} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Sustainable Success</h3>
              <p className="text-muted-foreground">
                Build lasting systems and mindsets that ensure continued growth long after our work together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              What Leaders Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real results from real leaders who transformed their vision into reality.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-secondary text-xl">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "Working together has been transformational. The clarity and strategic direction I gained helped me scale my business by 300% in just 18 months."
                </p>
                <div>
                  <p className="font-semibold text-foreground">Sarah Mitchell</p>
                  <p className="text-sm text-muted-foreground">CEO, TechVentures Inc.</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-secondary text-xl">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "The most impactful investment I've made in my leadership journey. Every session delivers actionable insights that move the needle."
                </p>
                <div>
                  <p className="font-semibold text-foreground">Marcus Chen</p>
                  <p className="text-sm text-muted-foreground">VP of Operations, Global Solutions</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-secondary text-xl">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "I've worked with many consultants, but this partnership stands out. The combination of strategic thinking and genuine care is unmatched."
                </p>
                <div>
                  <p className="font-semibold text-foreground">Jennifer Rodriguez</p>
                  <p className="text-sm text-muted-foreground">Founder, Impact Collective</p>
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
          background: "linear-gradient(135deg, oklch(0.25 0.08 265) 0%, oklch(0.15 0.05 280) 50%, oklch(0.20 0.06 250) 100%)",
        }}
      >
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Leadership?
            </h2>
            <p className="text-xl text-white/90 mb-12">
              Let's discuss how we can work together to achieve your most ambitious goals. Book a complimentary discovery call to explore the possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              >
                Schedule Discovery Call <ArrowRight className="ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 bg-white/10 hover:bg-white/20 text-white border-white/30"
              >
                Download Free Guide
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
              <h3 className="text-2xl font-bold mb-4">Professional Coach & Consultant</h3>
              <p className="text-background/70">
                Empowering leaders to achieve extraordinary results through strategic coaching and consulting.
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
                  Testimonials
                </button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Get In Touch</h4>
              <div className="flex flex-col gap-3">
                <a href="mailto:hello@yourcoach.com" className="flex items-center gap-2 text-background/70 hover:text-background transition-colors">
                  <Mail size={18} />
                  hello@yourcoach.com
                </a>
                <a href="tel:+1234567890" className="flex items-center gap-2 text-background/70 hover:text-background transition-colors">
                  <Phone size={18} />
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-background/70">
            <p>&copy; {new Date().getFullYear()} Professional Coach & Consultant. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
