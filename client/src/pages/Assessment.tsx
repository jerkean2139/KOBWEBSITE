import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function Assessment() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Navigation />
      <main id="main-content" className="min-h-screen bg-background" role="main">
        <section className="relative pt-32 pb-16 bg-gray-900 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
          </div>
          
          <div className="container relative z-10">
            <AnimatedSection animation="fade-in">
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-primary font-medium text-sm uppercase tracking-wider mb-4">
                  Free Business Assessment
                </p>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Discover Your Path to Business Freedom
                </h1>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Take this quick assessment to identify the biggest opportunities for growth, efficiency, and automation in your business.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden" style={{ minHeight: "1600px" }}>
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/p7TQrdK8KZEQfC9JWtQT"
                  style={{ width: "100%", height: "1590px", border: "none", borderRadius: "3px" }}
                  id="inline-p7TQrdK8KZEQfC9JWtQT"
                  data-layout='{"id":"INLINE"}'
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Kean On Biz - Customer Assessment Form"
                  data-height="1590"
                  data-layout-iframe-id="inline-p7TQrdK8KZEQfC9JWtQT"
                  data-form-id="p7TQrdK8KZEQfC9JWtQT"
                  title="Kean On Biz - Customer Assessment Form"
                />
              </div>
            </div>
          </div>
        </section>

        <footer className="py-8 bg-gray-900 text-white">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} KeanOnBiz. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <a href="https://manumation.ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Manumation
                </a>
                <a href="https://zenoflo.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Zenoflo
                </a>
                <a href="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Home
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
