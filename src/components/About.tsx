import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-32 sm:py-40 section-brown brown-overlay">
      <div className="absolute inset-0">
        <Image
          src="/images/yoga-pose-8.jpg"
          alt="About background"
          fill
          className="object-cover opacity-100"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-amber-50/90 to-stone-50/95"></div>
      </div>
      
      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-12">
            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-extralight text-brown">About</h2>
            <div className="space-y-8">
              <p className="text-brown-muted leading-relaxed text-2xl font-light">
                With a carefully curated selection of yoga and Pilates classes, structured programs, and guided tutorials, you'll have access to expert instruction tailored to your goals.
              </p>
              
              <div className="pt-8">
                <h3 className="text-4xl font-light text-brown mb-6">ABOUT KAREN</h3>
                <div className="space-y-6">
                  <p className="text-brown-muted leading-relaxed text-xl font-light">
                    I'm Karen, a passionate and certified yoga teacher originally from France. Guided by a deep appreciation for holistic well-being, I have dedicated my journey to the practice and teaching of yoga and flexibility exercises.
                  </p>
                  <p className="text-brown-muted leading-relaxed text-xl font-light">
                    My yoga journey began in the heart of France, where I discovered the transformative power of yoga in cultivating not only physical strength but also mental clarity and emotional balance.
                  </p>
                  <p className="text-brown-muted leading-relaxed text-xl font-light">
                    In my classes, I emphasize a mindful and inclusive approach, tailoring sessions to accommodate practitioners of all levels and backgrounds.
                  </p>
                  <p className="text-brown-muted leading-relaxed text-xl font-light">
                    With roots in the serene landscapes of France, my teaching style is infused with a touch of elegance and a profound connection to nature.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-5xl font-extralight text-brown mb-2">+5</div>
                <div className="text-sm text-brown-muted font-light uppercase tracking-wider">Years Teaching</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-extralight text-brown mb-2">500+</div>
                <div className="text-sm text-brown-muted font-light uppercase tracking-wider">Hours Certified</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-extralight text-brown mb-2">All</div>
                <div className="text-sm text-brown-muted font-light uppercase tracking-wider">Levels Welcome</div>
              </div>
            </div>
          </div>
          
          {/* Right Image Column - Adjusted for PC Length */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative h-full min-h-[600px] w-full rounded-[3rem] overflow-hidden shadow-2xl">
              <Image
                src="/images/yoga-pose-2.jpg"
                alt="Yoga teacher"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>

          {/* Mobile Image (Visible only on small screens) */}
          <div className="lg:hidden w-full aspect-[4/5] relative rounded-[2rem] overflow-hidden">
             <Image
                src="/images/yoga-pose-2.jpg"
                alt="Yoga teacher"
                fill
                className="object-cover"
              />
          </div>

        </div>
      </div>
    </section>
  );
}