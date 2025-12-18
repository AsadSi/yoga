import Image from "next/image";

const BenefitItem = ({ text }: { text: string }) => (
  <li className="flex items-start gap-3 group">
    <span className="text-brown-700 mt-1 shrink-0">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
    </span>
    <span className="text-brown-muted leading-snug">{text}</span>
  </li>
);

export default function Pilates() {
  return (
    <section id="pilates" className="relative overflow-hidden section-brown brown-overlay">
      {/* Hero Background */}
      <div className="absolute inset-0 h-[70vh] lg:h-full">
        <Image
          src="/images/pilates-practice.jpg" // Ensure you have this image path
          alt="Pilates practice background"
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
            Pilates
          </h2>
          <p className="text-xl md:text-2xl text-brown-muted max-w-2xl font-normal leading-relaxed">
            Core strength, flexibility, and mindful movement. Programs focused on building a strong foundation and enhancing mobility.
          </p>
        </div>

        {/* Main Disciplines / Types */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          
          {/* In-Person Private */}
          <div className="flex flex-col">
            <span className="text-brown-700 font-semibold tracking-widest text-xs uppercase mb-4">Tactile & Precise</span>
            <h3 className="text-4xl font-light text-brown mb-6 italic">In-Person Private</h3>
            <p className="text-lg text-brown-muted leading-relaxed mb-8">
              Experience the full benefit of tactile feedback and personalized equipment adjustments. These sessions are ideal for refining technique and addressing specific physical goals.
            </p>
            <ul className="space-y-4 mb-8">
              <BenefitItem text="60-Minute Focused Sessions" />
              <BenefitItem text="Hands-on Alignment Cues" />
              <BenefitItem text="Studio or In-Home Availability" />
              <BenefitItem text="Equipment & Prop Integration" />
            </ul>
            <a href="#contact" className="inline-block self-start border-b border-brown text-brown font-semibold pb-1 hover:opacity-70 transition-opacity">
              Request In-Person
            </a>
          </div>

          {/* Online Private */}
          <div className="flex flex-col">
            <span className="text-brown-700 font-semibold tracking-widest text-xs uppercase mb-4">Flexible & Focused</span>
            <h3 className="text-4xl font-light text-brown mb-6 italic">Online Private</h3>
            <p className="text-lg text-brown-muted leading-relaxed mb-8">
              High-quality instruction from the comfort of your home. We use clear verbal cueing and visual demonstrations to ensure you progress safely and effectively.
            </p>
            <ul className="space-y-4 mb-8">
              <BenefitItem text="45–60 Minute Sessions" />
              <BenefitItem text="Personalized Homework Plans" />
              <BenefitItem text="Digital Progress Tracking" />
              <BenefitItem text="Zero Commute Time" />
            </ul>
            <a href="#contact" className="inline-block self-start border-b border-brown text-brown font-semibold pb-1 hover:opacity-70 transition-opacity">
              Request Online Session
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}