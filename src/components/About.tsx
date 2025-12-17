import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-32 sm:py-40 bg-white">
      <div className="absolute inset-0">
        <Image
          src="/images/yoga-pose-8.jpg"
          alt="About background"
          fill
          className="object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-amber-50/90 to-stone-50/95"></div>
      </div>
      
      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-12 gap-20 items-start">
          <div className="lg:col-span-7 space-y-12">
            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-extralight text-stone-900">About</h2>
            <div className="space-y-8">
              <p className="text-stone-700 leading-relaxed text-2xl font-light">
                I teach Hatha, Ashtanga-inspired vinyasa, and Yin yoga. My approach is rooted in functional movement and practical anatomy, so what you learn on the mat translates to everyday life.
              </p>
              <p className="text-stone-700 leading-relaxed text-xl font-light">
                Whether you want to build strength, improve flexibility, or find a moment to breathe, you'll get clear guidance, options for different levels, and a supportive space to explore your practice—online or in person.
              </p>
              <p className="text-stone-700 leading-relaxed text-xl font-light">
                Classes combine alignment, breathwork, and mindfulness so you leave feeling more flexible, grounded, and connected to your body.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-5xl font-extralight text-green-700 mb-4">+5</div>
                <div className="text-sm text-stone-700 font-light">Years Teaching</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-extralight text-amber-800 mb-4">200h+</div>
                <div className="text-sm text-stone-700 font-light">Certified</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-extralight text-green-700 mb-4">All</div>
                <div className="text-sm text-stone-700 font-light">Levels Welcome</div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative">
            <div className="sticky top-32">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                <Image
                  src="/images/yoga-pose-2.jpg"
                  alt="Yoga teacher"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
