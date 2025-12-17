import Image from "next/image";

export default function Yoga() {
  return (
    <section id="yoga" className="relative overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Image
          src="/images/yoga-pose-5.jpg"
          alt="Yoga practice background"
          fill
          className="object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-stone-50/90 to-amber-50/95"></div>
      </div>
      
      <div className="relative mx-auto max-w-[1600px] px-4 py-32 sm:px-6 lg:px-8 z-10">
        <div className="mb-24">
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-extralight text-stone-900 mb-12">Yoga</h2>
          <p className="text-2xl text-stone-700 max-w-2xl font-light leading-relaxed">
            Classes for all levels. Whether you want deep relaxation, better flexibility, or a dynamic practice, there's something here for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32 max-w-4xl">
          <div>
            <h3 className="text-3xl font-light text-stone-900 mb-3">Live Online Classes</h3>
            <p className="text-lg text-stone-700 leading-relaxed font-light">Interactive sessions with real-time guidance on technique and alignment</p>
          </div>
          <div>
            <h3 className="text-3xl font-light text-stone-900 mb-3">On-Demand Videos</h3>
            <p className="text-lg text-stone-700 leading-relaxed font-light">Practice anytime with pre-recorded sessions for different needs</p>
          </div>
          <div>
            <h3 className="text-3xl font-light text-stone-900 mb-3">Workshops</h3>
            <p className="text-lg text-stone-700 leading-relaxed font-light">Focus on advanced poses, posture work, and targeted flexibility training</p>
          </div>
          <div>
            <h3 className="text-3xl font-light text-stone-900 mb-3">In-Person Classes</h3>
            <p className="text-lg text-stone-700 leading-relaxed font-light">Group sessions in Malmö & Copenhagen with hands-on adjustments</p>
          </div>
          <div>
            <h3 className="text-3xl font-light text-stone-900 mb-3">Private Coaching</h3>
            <p className="text-lg text-stone-700 leading-relaxed font-light">One-on-one sessions tailored to your goals, online or in person</p>
          </div>
          <div>
            <h3 className="text-3xl font-light text-stone-900 mb-3">Progressive Practice</h3>
            <p className="text-lg text-stone-700 leading-relaxed font-light">Focus on alignment, mindful movement, and building flexibility over time</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div>
              <h3 className="text-5xl font-extralight text-stone-900 mb-8">Hatha Yoga</h3>
              <p className="text-xl text-stone-700 leading-relaxed font-light mb-8">
                Slow, steady practice focusing on alignment and breath. Great for beginners and anyone wanting a grounded, mindful class.
              </p>
              <ul className="space-y-4 text-lg text-stone-700">
                <li className="flex items-start gap-4">
                  <span className="text-green-700 mt-1 text-xl">✓</span>
                  <span className="font-light">Build strength safely</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-green-700 mt-1 text-xl">✓</span>
                  <span className="font-light">Learn pose fundamentals</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-green-700 mt-1 text-xl">✓</span>
                  <span className="font-light">Perfect for beginners</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-5xl font-extralight text-stone-900 mb-8">Ashtanga Flow</h3>
              <p className="text-xl text-stone-700 leading-relaxed font-light mb-8">
                Dynamic, flowing sequences that build heat and energy. Challenge yourself with modifications for every level.
              </p>
              <ul className="space-y-4 text-lg text-stone-700">
                <li className="flex items-start gap-4">
                  <span className="text-green-700 mt-1 text-xl">✓</span>
                  <span className="font-light">Build stamina</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-green-700 mt-1 text-xl">✓</span>
                  <span className="font-light">Energizing practice</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-green-700 mt-1 text-xl">✓</span>
                  <span className="font-light">Improve balance</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="sticky top-32">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                <Image
                  src="/images/yoga-pose-6.jpg"
                  alt="Yin Yoga"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="mt-12">
                <h3 className="text-5xl font-extralight text-stone-900 mb-8">Yin Yoga</h3>
                <p className="text-xl text-stone-700 leading-relaxed font-light mb-8">
                  Deep, supported holds that target deeper tissues. Release tension, increase range of motion, and slow down.
                </p>
                <ul className="space-y-4 text-lg text-stone-700">
                  <li className="flex items-start gap-4">
                    <span className="text-green-700 mt-1 text-xl">✓</span>
                    <span className="font-light">Support joint health</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-green-700 mt-1 text-xl">✓</span>
                    <span className="font-light">Calm the mind</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-green-700 mt-1 text-xl">✓</span>
                    <span className="font-light">Better sleep</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
