import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/yoga-pose-1.jpg"
          alt="Yoga practice background"
          fill
          className="object-cover"
          priority
        />
        
        {/* 1. Base Earthy Tint: Gives the whole image a warm brown wash */}
        <div className="absolute inset-0 bg-[#3d2b1f]/40 mix-blend-multiply" />

        {/* 2. Readability Scrim: Dark brown gradient that fades out to the right */}
        {/* This ensures the text always has a high-contrast background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2a1b15]/90 via-[#2a1b15]/60 to-transparent" />
        
        {/* 3. Subtle Grain/Overlay (Optional): Keeps the "texture" of the brand */}
        <div className="absolute inset-0 bg-[var(--brown-900)]/10 pointer-events-none" />
      </div>
      
      <div className="relative mx-auto max-w-[1600px] px-4 py-20 md:py-24 lg:py-28 sm:px-6 lg:px-8 w-full z-10">
        <div className="max-w-4xl">

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extralight text-white leading-tight tracking-tight mb-6 drop-shadow-xl">
            Forever
            <br />
            <span className="text-[var(--beige-50)] font-light">Flexible</span>
          </h1>

          <div className="space-y-4 mb-8">
            <p className="text-lg sm:text-xl md:text-2xl text-white/95 leading-relaxed font-light max-w-2xl drop-shadow-md">
              A movement and mindset for unlocking your body's potential.
            </p>
            <p className="text-[var(--beige-50)]/80 text-base md:text-lg leading-relaxed font-light max-w-md">
              Science-based yoga and Pilates to build strength, improve mobility, and move better—wherever you're starting from.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
            <a
              href="#schedule"
              className="w-full sm:w-auto text-center rounded-full bg-[#5b3426] px-8 py-4 text-white font-medium shadow-xl hover:bg-[#4a2a1f] transition-all"
            >
              View Schedule
            </a>
            <a
              href="https://momence.com/u/forever-flexible-bTWuXJ?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn8HkjvOGHkcGeMv7Ar05NihdoC9BL7Dqs-hpucbPW1zCeGNsIyWPMRNZLBb0_aem_1m1-neF-BrfjHzXvHtz-TQ"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center rounded-full border-2 border-[var(--beige-50)]/20 bg-[var(--beige-50)]/10 backdrop-blur-md px-8 py-4 text-[var(--beige-50)] hover:bg-[var(--beige-50)]/20 transition-all"
            >
              Book Classes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}