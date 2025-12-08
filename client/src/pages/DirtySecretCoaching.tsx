import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function DirtySecretCoaching() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="min-h-screen" role="main">
        <section
          aria-labelledby="dirty-secret-heading"
          className="relative min-h-screen pt-24 pb-20"
          style={{ backgroundColor: "#0a0a12" }}
        >
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" aria-hidden="true"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#FFD700]/10 rounded-full blur-3xl" aria-hidden="true"></div>
          
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto">
              <p className="text-red-400 text-sm font-bold uppercase tracking-wider mb-6">The Truth They Won't Tell You</p>

              <h1 id="dirty-secret-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-10 leading-tight">
                The Dirty Secret of <span className="text-primary">Business Coaching</span>
              </h1>

              <div className="prose prose-lg prose-invert max-w-none space-y-6 text-white/90 text-lg leading-relaxed">
                <p className="text-xl md:text-2xl text-white font-medium">
                  Let's be honest about what happens after you hang up the phone.
                </p>

                <p>
                  You just finished a session. You were on fire. You gave the client the perfect strategy, the exact script, and the clear roadmap to scale. They were nodding. They were taking notes. They were "committed."
                </p>

                <p>
                  Then, they clicked <span className="text-primary font-bold">"Leave Meeting."</span>
                </p>

                <p>
                  And in that exact second, <span className="text-[#FFD700] font-bold">The Riptide</span> grabbed them.
                </p>

                <p>
                  An employee called out sick. A customer demanded a refund. The server crashed. The inbox pinged 50 times.
                </p>

                <p className="text-white font-semibold text-xl">
                  They didn't <em>choose</em> to ignore your advice. They were dragged back out into the Ocean of Overwhelm before they could even write down their next step.
                </p>

                <div className="border-l-4 border-[#FFD700] pl-6 py-4 my-10">
                  <p className="text-2xl md:text-3xl font-bold text-white m-0">
                    You Are Selling Maps to People Who Are Drowning
                  </p>
                </div>

                <p>
                  Most business coaches are selling "clarity" to people who are fighting for survival. You tell them to "build a referral network." They agree.
                </p>

                <p className="text-xl font-bold text-white">
                  But when Monday morning hits, operations eat strategy for breakfast.
                </p>

                <p>
                  Because they don't have a system to catch them, they default to their old habits. They don't send the email. They don't track the lead. They don't document the process.
                </p>

                <p>
                  Three weeks later, you get on the call, and they have done <span className="font-bold text-white">zero</span>. They feel guilty. You feel frustrated.
                </p>

                <p className="text-red-400 text-xl font-bold">
                  And eventually? They fire you.
                </p>

                <p>
                  Not because your advice was bad. But because <span className="text-white font-semibold">they couldn't execute it</span>.
                </p>

                <div className="border-l-4 border-primary pl-6 py-4 my-10">
                  <p className="text-2xl md:text-3xl font-bold text-white m-0">
                    Stop Fighting the Riptide. Build the Boat.
                  </p>
                </div>

                <p className="text-xl font-semibold text-white">
                  You cannot "coach" someone out of chaos. You have to build the machine that pulls them out.
                </p>

                <p>
                  <span className="text-primary font-bold">Manumation</span> is not just another framework. It is the operational anchor. When you become a Certified Manumation Partner, you stop relying on your client's willpower. You start installing systems that work even when your client is overwhelmed.
                </p>

                <p>
                  Don't hope they follow up—<span className="font-bold text-white">install the automation that does it</span>.
                </p>

                <p>
                  Don't pray they track KPIs—<span className="font-bold text-white">install the dashboard that forces it</span>.
                </p>

                <p>
                  Don't wait for them to change—<span className="font-bold text-white">change their environment</span>.
                </p>

                <div className="py-12 my-8 text-center">
                  <p className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Your clients don't need more advice on how to swim.
                  </p>
                  <p className="text-2xl md:text-3xl text-[#FFD700] font-bold">
                    They need you to build them the raft.
                  </p>
                </div>

                <div 
                  className="bg-white/5 border border-primary/30 rounded-xl p-8 text-center my-12"
                  style={{ boxShadow: "8px 8px 0 rgba(59, 130, 246, 0.2)" }}
                >
                  <p className="text-[#FFD700] text-sm font-bold uppercase tracking-wider mb-4">Coming Soon</p>
                  <h3 className="text-2xl font-bold text-white mb-4">Become a Certified Manumation Partner</h3>
                  <p className="text-white/80 mb-8">
                    Be the first to know when applications open. Join an elite group of coaches who deliver results, not just advice.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      size="lg" 
                      className="bg-[#FFD700] text-gray-900 font-bold px-8"
                      style={{ boxShadow: "4px 4px 0 rgba(255, 215, 0, 0.4)" }}
                      asChild
                    >
                      <a href="/become-a-coach">
                        Get Notified <ArrowRight className="ml-2" size={18} />
                      </a>
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="bg-white/10 text-white border-white/30 px-8"
                      asChild
                    >
                      <a href="/jeremys-calendar">
                        Book a Call
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="text-center pt-8">
                  <Link href="/">
                    <Button 
                      variant="outline" 
                      className="bg-white/10 text-white border-white/30"
                    >
                      <ArrowLeft className="mr-2" size={16} />
                      Back to Home
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
