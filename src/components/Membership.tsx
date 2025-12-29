import Image from "next/image";

const BenefitItem = ({ title, desc }: { title: string; desc: string }) => (
  <div className="flex items-start gap-4 group">
    <span className="text-brown-700 mt-1 shrink-0 bg-brown-700/5 p-1 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    </span>
    <div>
      <h3 className="font-semibold text-brown text-xl mb-1">{title}</h3>
      <p className="text-brown-muted font-normal leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default function Membership() {
  return (
    <section id="membership" className="relative overflow-hidden bg-stone-50">
      {/* Background Layer with Brown Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/yoga-pose-9.jpg"
          alt="Membership background"
          fill
          priority
          className="object-cover opacity-30 lg:opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-stone-50 via-stone-50/95 to-transparent"></div>
      </div>
      
      <div className="relative mx-auto max-w-[1400px] px-6 py-24 lg:py-40 z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Content */}
          <div className="space-y-12">
            <div>
              <h2 className="text-6xl md:text-8xl font-light text-brown tracking-tight mb-8">
                Membership
              </h2>
              <p className="text-xl md:text-2xl text-brown-muted max-w-xl font-normal leading-relaxed">
                Take your practice further with <span className="text-brown font-medium italic">Forever Flexible</span>. 
                Get unlimited access to classes, progressive programs, and a supportive community.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-10 border-t border-[rgba(91,52,38,0.1)] pt-12">
              <BenefitItem 
                title="Unlimited Access" 
                desc="Train anytime with expert-led sessions for all levels, from foundational hatha to deep yin." 
              />
              <BenefitItem 
                title="Progressive Programs" 
                desc="Follow structured plans designed to build measurable flexibility and lasting strength." 
              />
              <BenefitItem 
                title="Community Support" 
                desc="Stay motivated with expert guidance and direct access to our holistic movement peers." 
              />
            </div>
          </div>

          {/* Right Side: Call to Action Card */}
          <div className="relative">
            {/* Subtle decorative element */}
            <div className="absolute -inset-4 border border-brown/5 rounded-3xl -z-10 transform rotate-2 hidden sm:block"></div>
            
            <div className="bg-white/100 backdrop-blur-xl p-8 md:p-12 rounded-2xl shadow-[0_20px_50px_rgba(91,52,38,0.05)] border border-white/40 text-center">
              <span className="text-brown-700 font-semibold tracking-[0.2em] text-xs uppercase mb-6 block">
                Become a Member
              </span>
              <p className="text-brown-muted mb-10 text-lg md:text-xl font-normal leading-relaxed">
                Commit to your movement. Secure your membership and start transforming your practice today.
              </p>
              
              <a 
                href="https://momence.com/u/forever-flexible-bTWuXJ?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn8HkjvOGHkcGeMv7Ar05NihdoC9BL7Dqs-hpucbPW1zCeGNsIyWPMRNZLBb0_aem_1m1-neF-BrfjHzXvHtz-TQ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full rounded-full bg-brown text-stone-50 px-10 py-5 text-lg font-medium transition-all hover:bg-brown-700 hover:shadow-xl active:scale-[0.98]"
              >
                Sign Up via Momence
              </a>
              
              <div className="mt-8 flex flex-col gap-2">
                <p className="text-sm text-brown-muted italic font-light">
                  Simple booking. Seamless payments. Cancel anytime.
                </p>
                <div className="flex justify-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className="text-brown-700 text-xs">★</span>
                  ))}
                  <span className="text-xs text-brown-muted ml-2 font-medium underline underline-offset-4">4.9/5 student rating</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}