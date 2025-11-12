import { Button } from "@/components/ui/button";
import { APP_TITLE } from "@/const";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
          >
            {APP_TITLE}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("benefits")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Benefits
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Testimonials
            </button>
            <Button onClick={() => scrollToSection("contact")} size="lg">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("benefits")}
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Benefits
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Testimonials
              </button>
              <Button onClick={() => scrollToSection("contact")} size="lg" className="w-full">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
