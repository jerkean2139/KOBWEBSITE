import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { APP_TITLE } from "@/const";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
          >
            <span className="text-primary">KEAN</span>
            <span className="text-foreground ml-1">ON BIZ</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors font-medium text-sm uppercase tracking-wide"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors font-medium text-sm uppercase tracking-wide"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-foreground hover:text-primary transition-colors font-medium text-sm uppercase tracking-wide"
            >
              Results
            </button>
            <a
              href="/jeremys-calendar"
              className="text-foreground hover:text-primary transition-colors font-medium text-sm uppercase tracking-wide"
            >
              Book a Call
            </a>
            <Button onClick={() => scrollToSection("contact")} size="lg" className="ml-4">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container py-6 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("about")}
              className="text-left text-foreground hover:text-primary transition-colors font-medium py-2 text-sm uppercase tracking-wide"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-left text-foreground hover:text-primary transition-colors font-medium py-2 text-sm uppercase tracking-wide"
            >
              Services
            </button>
            <a
              href="/jeremys-calendar"
              className="text-left text-foreground hover:text-primary transition-colors font-medium py-2 text-sm uppercase tracking-wide"
            >
              Book a Call
            </a>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-left text-foreground hover:text-primary transition-colors font-medium py-2 text-sm uppercase tracking-wide"
            >
              Results
            </button>
            <Button onClick={() => scrollToSection("contact")} size="lg" className="mt-2">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
