import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Mail, Gift } from "lucide-react";

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse leaves from the top of the viewport
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    // Add delay to prevent immediate trigger
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasShown]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Replace with actual GHL form submission
    const email = (e.currentTarget.elements.namedItem("email") as HTMLInputElement).value;
    console.log("Email submitted:", email);
    alert("Thanks! We'll notify you when the book launches on December 10th!");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-in fade-in duration-300"
        onClick={handleClose}
      />
      
      {/* Popup */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-4 animate-in zoom-in-95 duration-300">
        <div className="bg-gradient-to-br from-background to-muted border-2 border-primary/30 rounded-2xl shadow-2xl p-8 relative">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X size={24} />
          </button>

          {/* Icon */}
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-[#FFD700]/20 rounded-full">
              <Gift className="text-[#FFD700]" size={40} />
            </div>
          </div>

          {/* Content */}
          <h3 className="text-2xl font-bold text-center mb-3">
            Wait! Don't Miss the <span className="text-primary">Manumation</span> Launch
          </h3>
          <p className="text-center text-muted-foreground mb-6">
            Get notified when <strong>The Manumation Effect</strong> launches on <strong className="text-[#FFD700]">December 10th</strong> + receive a free automation readiness checklist!
          </p>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full pl-11 pr-4 py-3 bg-background border-2 border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
              />
            </div>
            <Button type="submit" size="lg" className="w-full bg-[#FFD700] hover:bg-[#FFD700]/90 text-gray-900 font-bold">
              Notify Me + Get Free Checklist
            </Button>
          </form>

          <p className="text-xs text-center text-muted-foreground mt-4">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </>
  );
}
