import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, BookOpen, ArrowRight } from "lucide-react";

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
    }, 1500);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasShown]);

  const handleClose = () => {
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
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg mx-4 animate-in zoom-in-95 duration-300">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-[#FFD700]/40 rounded-2xl shadow-2xl overflow-hidden relative">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors z-10"
          >
            <X size={24} />
          </button>

          {/* Book Cover Section */}
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5 bg-[#FFD700] p-6 flex items-center justify-center">
              <img 
                src="/manumation-book-cover.png" 
                alt="The Manumation Method" 
                className="w-full max-w-[200px] rounded-lg shadow-xl"
              />
            </div>
            
            {/* Content Section */}
            <div className="md:w-3/5 p-8">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="text-[#FFD700]" size={24} />
                <span className="text-[#FFD700] text-sm font-bold uppercase tracking-wider">Launching Dec 15th</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3">
                The Manumation Method
              </h3>
              
              <p className="text-white/80 text-sm mb-6 leading-relaxed">
                Discover the strategic fusion of human ingenuity, AI Agents, and automated systems that transforms business experiences while creating true freedom for innovative thinkers.
              </p>

              <Button 
                size="lg" 
                className="w-full bg-[#FFD700] hover:bg-[#FFD700]/90 text-gray-900 font-bold group"
                asChild
              >
                <a href="/book">
                  Learn More & Pre-Order
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
