import Image from "next/image";

const BenefitItem = ({ text }: { text: string }) => (
  <li className="flex items-start gap-3 group">
    <span className="text-brown-700 mt-1 shrink-0">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
    </span>
    <span className="text-brown-muted leading-snug">{text}</span>
  </li>
);

export default function Yoga() {
  return (
    <section id="yoga" className="relative overflow-hidden section-brown brown-overlay">
      {/* Hero Background - Higher contrast overlay */}
      <div className="absolute inset-0 h-[70vh] lg:h-full">
        <Image
          src="/images/yoga-pose-5.jpg"
          alt="Yoga practice background"
          fill
          priority
          className="object-cover opacity-30 lg:opacity-40" 
        />
        <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-br from-stone-50 via-stone-50/90 to-transparent"></div>
      </div>
      
      <div className="relative mx-auto max-w-[1400px] px-6 py-24 lg:py-40 z-10">
        
        {/* Header Section */}
        <div className="mb-20 lg:mb-32">
          <h2 className="text-6xl md:text-8xl font-light text-brown tracking-tight mb-8">
            Yoga
          </h2>
          <p className="text-xl md:text-2xl text-brown-muted max-w-2xl font-normal leading-relaxed">
            From deep relaxation to dynamic movement—tailored practices for every body, at every stage of the journey.
          </p>
        </div>

        {/* Offerings Grid - Stronger Text */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 mb-40 border-y border-[rgba(91,52,38,0.06)] py-20">
          {[
            { title: "Live Online", desc: "Interactive sessions with real-time technique guidance from anywhere." },
            { title: "On-Demand", desc: "Practice on your own schedule with our full library of sessions." },
            { title: "Workshops", desc: "Focused intensives on posture, breathwork, and advanced flexibility." },
            { title: "In-Person", desc: "Small group sessions held in Malmö & Copenhagen studios." },
            { title: "Private Coaching", desc: "One-on-one sessions strictly tailored to your specific goals." },
            { title: "Mindful Progress", desc: "Alignment-based movement designed to build lasting strength." }
          ].map((item, i) => (
            <div key={i} className="space-y-3">
              <h3 className="text-sm font-bold text-brown uppercase tracking-[0.2em]">{item.title}</h3>
              <p className="text-brown-muted font-normal leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Main Disciplines */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-20 items-start">
          
          {/* Hatha */}
          <div className="flex flex-col">
            <span className="text-brown-700 font-semibold tracking-widest text-xs uppercase mb-4">Grounded & Mindful</span>
            <h3 className="text-4xl font-light text-brown mb-6 italic">Hatha Yoga</h3>
            <p className="text-lg text-brown-muted leading-relaxed mb-8">
              A steady, foundational practice focusing on structural alignment and breath. Ideal for those looking to build a sustainable, lifelong practice.
            </p>
            <ul className="space-y-4">
              <BenefitItem text="Safe Strength Building" />
              <BenefitItem text="Pose Fundamentals" />
              <BenefitItem text="Beginner Friendly" />
              <BenefitItem text="Stress Reduction" />
            </ul>
          </div>

          {/* Ashtanga */}
          <div className="flex flex-col">
            <span className="text-brown-700 font-semibold tracking-widest text-xs uppercase mb-4">Vibrant & Strong</span>
            <h3 className="text-4xl font-light text-brown mb-6 italic">Ashtanga Flow</h3>
            <p className="text-lg text-brown-muted leading-relaxed mb-8">
              Build heat and focus through dynamic sequences. This practice challenges your stamina while clearing the mind through rhythmic movement.
            </p>
            <ul className="space-y-4">
              <BenefitItem text="Physical Stamina" />
              <BenefitItem text="Metabolic Fire" />
              <BenefitItem text="Mental Clarity" />
              <BenefitItem text="Core Stability" />
            </ul>
          </div>

          {/* Yin */}
          <div className="flex flex-col">
            <span className="text-brown-700 font-semibold tracking-widest text-xs uppercase mb-4">Restorative & Deep</span>
            <h3 className="text-4xl font-light text-brown mb-6 italic">Yin Yoga</h3>
            <p className="text-lg text-brown-muted leading-relaxed mb-8">
              Deep, passive holds targeting the connective tissues. The perfect antidote to a busy lifestyle and essential for joint mobility.
            </p>
            <ul className="space-y-4">
              <BenefitItem text="Joint & Tissue Health" />
              <BenefitItem text="Nervous System Calm" />
              <BenefitItem text="Improved Sleep Quality" />
              <BenefitItem text="Mindful Stillness" />
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}