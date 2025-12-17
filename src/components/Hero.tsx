import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0">
        <Image
          src="/images/yoga-pose-1.jpg"
          alt="Yoga practice background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900/30 via-stone-800/25 to-green-900/15"></div>
        <div className="absolute inset-0 bg-green-700/4 mix-blend-multiply pointer-events-none"></div>
      </div>
      
      <div className="relative mx-auto max-w-[1600px] px-4 py-20 md:py-24 lg:py-28 sm:px-6 lg:px-8 w-full z-10">
        <div className="max-w-4xl">
          <div className="mb-6">
            <span className="text-sm font-medium text-amber-100 uppercase tracking-[0.2em]">Not your average yoga studio</span>
          </div>
          
          <h1 className="text-5xl md:text-5xl lg:text-6xl xl:text-8xl font-extralight text-white leading-tight tracking-tight mb-8 drop-shadow-lg">
            Forever
            <br />
            <span className="text-green-200 font-light">Flexible</span>
          </h1>
          
          <div className="space-y-6 mb-12">
            <p className="text-xl md:text-2xl sm:text-3xl text-white leading-relaxed font-light max-w-2xl drop-shadow-md">
              A movement and mindset for unlocking your body's potential.
            </p>
            <p className="text-lg md:text-xl text-stone-50 leading-relaxed font-light max-w-xl drop-shadow-md">
              Science-based yoga and Pilates to build strength, improve flexibility, and move better—wherever you're starting from.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-5">
            <a
              href="#schedule"
              className="inline-block rounded-full bg-green-700 px-12 py-5 text-base font-medium text-white shadow-xl hover:shadow-2xl transition-all hover:bg-green-800"
            >
              View Schedule
            </a>
            <a
              href="#yoga"
              className="inline-block rounded-full border-2 border-white/60 bg-white/20 backdrop-blur-sm px-12 py-5 text-base font-medium text-white hover:bg-white/30 transition-all"
            >
              Explore Classes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
