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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

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
    <header>
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="/"
            className="hover:opacity-80 transition-opacity"
            aria-label="Go to homepage"
          >
            <span className="text-3xl font-bold knight-rider-glow">
              <span className="text-primary">KEAN</span>
              <span className="text-xs align-middle mx-1 text-primary">ON</span>
              <span className="text-primary">BIZ</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className={`${scrolled ? 'text-foreground' : 'text-white'} hover:text-primary transition-colors font-medium text-sm uppercase tracking-wide`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className={`${scrolled ? 'text-foreground' : 'text-white'} hover:text-primary transition-colors font-medium text-sm uppercase tracking-wide`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className={`${scrolled ? 'text-foreground' : 'text-white'} hover:text-primary transition-colors font-medium text-sm uppercase tracking-wide`}
            >
              Results
            </button>
            <a
              href="/blog"
              className={`${scrolled ? 'text-foreground' : 'text-white'} hover:text-primary transition-colors font-medium text-sm uppercase tracking-wide`}
            >
              Blog
            </a>
            <a
              href="/jeremys-calendar"
              className={`${scrolled ? 'text-foreground' : 'text-white'} hover:text-primary transition-colors font-medium text-sm uppercase tracking-wide`}
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
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border fixed inset-x-0 top-20 bottom-0 overflow-y-auto">
          <div className="container py-6 flex flex-col gap-2">
            <button
              onClick={() => scrollToSection("about")}
              className="text-left text-foreground hover:text-primary transition-colors font-medium py-4 px-2 text-sm uppercase tracking-wide min-h-[44px] flex items-center"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-left text-foreground hover:text-primary transition-colors font-medium py-4 px-2 text-sm uppercase tracking-wide min-h-[44px] flex items-center"
            >
              Services
            </button>
            <a
              href="/blog"
              className="text-left text-foreground hover:text-primary transition-colors font-medium py-4 px-2 text-sm uppercase tracking-wide min-h-[44px] flex items-center"
            >
              Blog
            </a>
            <a
              href="/jeremys-calendar"
              className="text-left text-foreground hover:text-primary transition-colors font-medium py-4 px-2 text-sm uppercase tracking-wide min-h-[44px] flex items-center"
            >
              Book a Call
            </a>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-left text-foreground hover:text-primary transition-colors font-medium py-4 px-2 text-sm uppercase tracking-wide min-h-[44px] flex items-center"
            >
              Results
            </button>
            <Button onClick={() => scrollToSection("contact")} size="lg" className="mt-4 min-h-[44px]">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
    </header>
  );
}
