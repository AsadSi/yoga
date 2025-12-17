import Image from "next/image";

const navItems = [
  { label: "Yoga", href: "#yoga" },
  { label: "Flexibility", href: "#flexibility" },
  { label: "About", href: "#about" },
  { label: "Schedule", href: "#schedule" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-neutral-50 to-stone-50">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-emerald-600 shadow-md">
                <span className="text-lg font-bold text-white">FF</span>
              </div>
              <div>
                <h1 className="text-base font-bold text-stone-800">Forever Flexible</h1>
                <p className="text-xs text-stone-500">Yoga • Pilates • Flexibility</p>
              </div>
            </div>
            
            <button
              className="md:hidden p-2 rounded-lg text-stone-600 hover:bg-stone-50"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-stone-700 hover:text-green-700 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#schedule"
                className="rounded-full bg-green-700 px-5 py-2 text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all hover:bg-green-800"
              >
                Join Now
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 via-stone-50/20 to-emerald-50/20"></div>
          
          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl font-bold text-stone-900 mb-6 sm:text-5xl lg:text-6xl leading-tight">
                  Forever Flexible
                  <span className="block mt-2 text-green-700">
                    Strength & Mobility
                  </span>
                </h1>
                
                <p className="text-lg text-stone-700 mb-6 sm:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  A movement and mindset for unlocking your body's potential. Science-based yoga and Pilates to build strength, improve flexibility, and move better—wherever you're starting from.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a
                    href="#schedule"
                    className="inline-block rounded-full bg-green-700 px-8 py-4 text-base font-semibold text-white shadow-xl hover:shadow-2xl transition-all hover:bg-green-800"
                  >
                    View Schedule
                  </a>
                  <a
                    href="#yoga"
                    className="inline-block rounded-full border-2 border-green-300 bg-white px-8 py-4 text-base font-semibold text-green-700 hover:bg-stone-50 transition-all"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-100/40 to-emerald-100/40 rounded-3xl blur-3xl transform rotate-6"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src="/images/yoga-pose-1.jpg"
                    alt="Yoga practice"
                    width={800}
                    height={900}
                    className="w-full h-[500px] sm:h-[600px] object-cover"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent p-6">
                    <p className="text-white font-semibold text-lg mb-1">Expert-Led Classes</p>
                    <p className="text-stone-200 text-sm">Live & On-Demand • Online & In-Person</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-lg text-stone-700 leading-relaxed">
              Through structured classes, I guide you toward better mobility, posture, and movement. This is about sustainable training, moving with intention, and feeling strong and balanced in your body.
            </p>
          </div>
        </section>

        <section className="bg-gradient-to-b from-white to-stone-50/50 py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 shadow-sm">
                <h3 className="font-bold text-stone-900 mb-2 text-lg">Better Mobility</h3>
                <p className="text-sm text-stone-600">Move with more freedom and ease in daily life and activities</p>
              </div>
              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-stone-50 to-neutral-50 border border-stone-200 shadow-sm">
                <h3 className="font-bold text-stone-900 mb-2 text-lg">Stronger Posture</h3>
                <p className="text-sm text-stone-600">Improved alignment reduces tension and discomfort</p>
              </div>
              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 shadow-sm">
                <h3 className="font-bold text-stone-900 mb-2 text-lg">More Calm</h3>
                <p className="text-sm text-stone-600">Gentle movement calms your nervous system and aids recovery</p>
              </div>
            </div>
          </div>
        </section>

        <section id="yoga" className="py-12 sm:py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-stone-900 mb-4 sm:text-4xl">Yoga</h2>
              <p className="text-lg text-stone-600 max-w-3xl mx-auto">
                Classes for all levels. Whether you want deep relaxation, better flexibility, or a dynamic practice, there's something here for you.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100 shadow-sm">
                <h3 className="text-xl font-bold text-stone-900 mb-2">Live Online Classes</h3>
                <p className="text-stone-600 text-sm">Interactive sessions with real-time guidance on technique and alignment</p>
              </div>
              <div className="bg-gradient-to-br from-stone-50 to-neutral-50 rounded-2xl p-6 border border-stone-200 shadow-sm">
                <h3 className="text-xl font-bold text-stone-900 mb-2">On-Demand Videos</h3>
                <p className="text-stone-600 text-sm">Practice anytime with pre-recorded sessions for different needs</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100 shadow-sm">
                <h3 className="text-xl font-bold text-stone-900 mb-2">Workshops</h3>
                <p className="text-stone-600 text-sm">Focus on advanced poses, posture work, and targeted flexibility training</p>
              </div>
              <div className="bg-gradient-to-br from-stone-50 to-neutral-50 rounded-2xl p-6 border border-stone-200 shadow-sm">
                <h3 className="text-xl font-bold text-stone-900 mb-2">In-Person Classes</h3>
                <p className="text-stone-600 text-sm">Group sessions in Malmö & Copenhagen with hands-on adjustments</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100 shadow-sm">
                <h3 className="text-xl font-bold text-stone-900 mb-2">Private Coaching</h3>
                <p className="text-stone-600 text-sm">One-on-one sessions tailored to your goals, online or in person</p>
              </div>
              <div className="bg-gradient-to-br from-stone-50 to-neutral-50 rounded-2xl p-6 border border-stone-200 shadow-sm">
                <h3 className="text-xl font-bold text-stone-900 mb-2">Progressive Practice</h3>
                <p className="text-stone-600 text-sm">Focus on alignment, mindful movement, and building flexibility over time</p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-stone-200">
                <h3 className="text-xl font-bold text-stone-900 mb-2">Hatha Yoga</h3>
                <p className="text-stone-600 mb-4 text-sm leading-relaxed">
                  Slow, steady practice focusing on alignment and breath. Great for beginners and anyone wanting a grounded, mindful class.
                </p>
                <ul className="space-y-2 text-sm text-stone-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-700 mt-1">✓</span>
                    <span>Build strength safely</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-700 mt-1">✓</span>
                    <span>Learn pose fundamentals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-700 mt-1">✓</span>
                    <span>Perfect for beginners</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-stone-200">
                <h3 className="text-xl font-bold text-stone-900 mb-2">Ashtanga Flow</h3>
                <p className="text-stone-600 mb-4 text-sm leading-relaxed">
                  Dynamic, flowing sequences that build heat and energy. Challenge yourself with modifications for every level.
                </p>
                <ul className="space-y-2 text-sm text-stone-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-700 mt-1">✓</span>
                    <span>Build stamina</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-700 mt-1">✓</span>
                    <span>Energizing practice</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-700 mt-1">✓</span>
                    <span>Improve balance</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-stone-200 sm:col-span-2 lg:col-span-1">
                <h3 className="text-xl font-bold text-stone-900 mb-2">Yin Yoga</h3>
                <p className="text-stone-600 mb-4 text-sm leading-relaxed">
                  Deep, supported holds that target deeper tissues. Release tension, increase range of motion, and slow down.
                </p>
                <ul className="space-y-2 text-sm text-stone-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-700 mt-1">✓</span>
                    <span>Support joint health</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-700 mt-1">✓</span>
                    <span>Calm the mind</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-700 mt-1">✓</span>
                    <span>Better sleep</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="flexibility" className="py-12 sm:py-16 bg-gradient-to-b from-stone-50/50 to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-stone-900 mb-4 sm:text-4xl">Flexibility Training</h2>
              <p className="text-lg text-stone-600 max-w-3xl mx-auto">
                Structured sessions to increase mobility and improve range of motion with safe, guided stretching for all levels.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 mb-12">
              <div className="bg-white rounded-2xl p-6 shadow-md border border-stone-200">
                <h3 className="text-xl font-bold text-stone-900 mb-3">Flexibility Classes</h3>
                <p className="text-stone-600 text-sm">
                  Increase mobility and range of motion with safe, guided stretching techniques.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md border border-stone-200">
                <h3 className="text-xl font-bold text-stone-900 mb-3">Workshops</h3>
                <p className="text-stone-600 text-sm">
                  Specialized training for splits, backbends, and hamstring mobility with step-by-step progressions.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md border border-stone-200">
                <h3 className="text-xl font-bold text-stone-900 mb-3">Private Coaching</h3>
                <p className="text-stone-600 text-sm">
                  One-on-one training with a personalized plan for steady progress and injury prevention.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200 text-center">
              <p className="text-stone-700 text-lg">
                Regular flexibility training helps you feel stronger, more mobile, and confident as you reach new milestones.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-stone-900 mb-4 sm:text-4xl">Pilates</h2>
              <p className="text-lg text-stone-600 max-w-3xl mx-auto">
                Core strength, flexibility, and mindful movement. Programs focus on building a strong foundation, improving posture, and enhancing mobility.
              </p>
            </div>
            <div className="bg-gradient-to-br from-stone-50 to-neutral-50 rounded-2xl p-8 border border-stone-200 text-center">
              <p className="text-xl font-semibold text-stone-900 mb-2">Pilates Coming Soon</p>
              <p className="text-stone-600">Stay tuned for Pilates classes, custom programs, and Barre sessions.</p>
            </div>
          </div>
        </section>

        <section id="about" className="py-12 sm:py-16 bg-gradient-to-b from-white to-stone-50/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold text-stone-900 mb-4 sm:text-4xl">About</h2>
                <p className="text-stone-600 mb-4 leading-relaxed text-lg">
                  I teach Hatha, Ashtanga-inspired vinyasa, and Yin yoga. My approach is rooted in functional movement and practical anatomy, so what you learn on the mat translates to everyday life.
                </p>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  Whether you want to build strength, improve flexibility, or find a moment to breathe, you'll get clear guidance, options for different levels, and a supportive space to explore your practice—online or in person.
                </p>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  Classes combine alignment, breathwork, and mindfulness so you leave feeling more flexible, grounded, and connected to your body.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-xl border border-green-100">
                    <div className="text-2xl font-bold text-green-700">+5</div>
                    <div className="text-xs text-stone-600 mt-1">Years Teaching</div>
                  </div>
                  <div className="text-center p-4 bg-stone-50 rounded-xl border border-stone-200">
                    <div className="text-2xl font-bold text-stone-700">200h+</div>
                    <div className="text-xs text-stone-600 mt-1">Certified</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-xl border border-green-100">
                    <div className="text-2xl font-bold text-green-700">All</div>
                    <div className="text-xs text-stone-600 mt-1">Levels Welcome</div>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
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
        </section>

        <section id="schedule" className="py-12 sm:py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-stone-900 mb-3 sm:text-4xl">Schedule & Pricing</h2>
              <p className="text-stone-600">Find a class that fits your schedule</p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="bg-white rounded-2xl p-6 shadow-md border border-stone-200">
                <h3 className="text-xl font-bold text-stone-900 mb-4">Weekly Schedule</h3>
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-green-50 rounded-xl border border-green-100">
                    <div>
                      <div className="font-semibold text-stone-900">Monday</div>
                      <div className="text-sm text-stone-600">Hatha Foundations</div>
                    </div>
                    <div className="text-sm text-stone-700 mt-2 sm:mt-0">
                      <div className="font-medium">6:00 PM - 7:00 PM</div>
                      <div className="text-stone-500">Online (Zoom)</div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-stone-50 rounded-xl border border-stone-200">
                    <div>
                      <div className="font-semibold text-stone-900">Wednesday</div>
                      <div className="text-sm text-stone-600">Ashtanga Flow</div>
                    </div>
                    <div className="text-sm text-stone-700 mt-2 sm:mt-0">
                      <div className="font-medium">6:30 PM - 7:30 PM</div>
                      <div className="text-stone-500">In-Person • Malmö / Copenhagen</div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-green-50 rounded-xl border border-green-100">
                    <div>
                      <div className="font-semibold text-stone-900">Sunday</div>
                      <div className="text-sm text-stone-600">Yin & Rest</div>
                    </div>
                    <div className="text-sm text-stone-700 mt-2 sm:mt-0">
                      <div className="font-medium">7:00 PM - 8:15 PM</div>
                      <div className="text-stone-500">Online (Zoom)</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md border border-stone-200">
                <h3 className="text-xl font-bold text-stone-900 mb-4">Pricing</h3>
                <div className="space-y-4">
                  <div className="p-4 border-2 border-green-200 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="font-bold text-stone-900">Drop-In Class</div>
                        <div className="text-sm text-stone-600">Single class</div>
                      </div>
                      <div className="text-xl font-bold text-green-700">€18</div>
                    </div>
                  </div>
                  <div className="p-4 border border-stone-200 rounded-xl">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="font-bold text-stone-900">5-Class Pass</div>
                        <div className="text-sm text-stone-600">Valid for 8 weeks</div>
                      </div>
                      <div className="text-xl font-bold text-stone-900">€80</div>
                    </div>
                  </div>
                  <div className="p-4 border border-stone-200 rounded-xl">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="font-bold text-stone-900">Monthly Membership</div>
                        <div className="text-sm text-stone-600">2-3 classes per week</div>
                      </div>
                      <div className="text-xl font-bold text-stone-900">€120</div>
                    </div>
                  </div>
                  <div className="p-4 border border-stone-200 rounded-xl">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="font-bold text-stone-900">Private Session</div>
                        <div className="text-sm text-stone-600">1-on-1, 60 minutes</div>
                      </div>
                      <div className="text-xl font-bold text-stone-900">€70</div>
                    </div>
                  </div>
                </div>
                <a
                  href="mailto:you@example.com"
                  className="mt-6 block w-full text-center rounded-full bg-green-700 px-6 py-3 text-base font-semibold text-white shadow-md hover:shadow-lg transition-all hover:bg-green-800"
                >
                  Book Your Class
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 bg-gradient-to-br from-green-700 via-emerald-700 to-green-800">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-2xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-stone-900 mb-4 sm:text-4xl">Membership</h2>
                <p className="text-lg text-stone-700">
                  Take your practice further with Forever Flexible Membership. Get unlimited access to classes, progressive programs, and a supportive community.
                </p>
              </div>
              
              <div className="grid gap-4 mb-8">
                <div className="flex items-start gap-3 p-4 bg-green-50 rounded-xl">
                  <span className="text-2xl text-green-700">✓</span>
                  <div>
                    <div className="font-semibold text-stone-900">Unlimited Access</div>
                    <div className="text-sm text-stone-600">Train anytime with expert-led sessions for all levels</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-stone-50 rounded-xl">
                  <span className="text-2xl text-stone-700">✓</span>
                  <div>
                    <div className="font-semibold text-stone-900">Progressive Programs</div>
                    <div className="text-sm text-stone-600">Follow structured plans that improve flexibility, posture, and strength</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-green-50 rounded-xl">
                  <span className="text-2xl text-green-700">✓</span>
                  <div>
                    <div className="font-semibold text-stone-900">Community Support</div>
                    <div className="text-sm text-stone-600">Stay motivated with expert guidance and a community that supports your goals</div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-stone-700 mb-6">
                  Ready to increase flexibility, improve mobility, and move with confidence? Commit to your progress and start transforming your body today.
                </p>
                <a
                  href="#schedule"
                  className="inline-block rounded-full bg-green-700 px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all hover:bg-green-800"
                >
                  Join Now
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="py-12 sm:py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-stone-900 mb-3 sm:text-4xl">Gallery</h2>
              <p className="text-stone-600">A glimpse into our practice</p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
              {[3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <div key={num} className="relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <Image
                    src={`/images/yoga-pose-${num}.jpg`}
                    alt={`Yoga practice ${num}`}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="video" className="py-12 sm:py-16 bg-gradient-to-b from-white to-stone-50/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-stone-900 mb-3 sm:text-4xl">Practice With Me</h2>
              <p className="text-stone-600">Watch a sample class to see what to expect</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-stone-200">
                <div className="aspect-video bg-stone-100">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    playsInline
                    preload="metadata"
                    poster="/images/yoga-pose-1.jpg"
                  >
                    <source src="/videos/intro-video.mp4" type="video/mp4" />
                    <source src="/videos/intro-video.webm" type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-stone-900 mb-1">Introduction Video</h3>
                  <p className="text-sm text-stone-600">Get to know my teaching style</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-stone-200">
                <div className="aspect-video bg-stone-100">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    playsInline
                    preload="metadata"
                    poster="/images/yoga-pose-2.jpg"
                  >
                    <source src="/videos/sample-class.mp4" type="video/mp4" />
                    <source src="/videos/sample-class.webm" type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-stone-900 mb-1">Sample Class</h3>
                  <p className="text-sm text-stone-600">Experience a full class</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 bg-green-700">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4 sm:text-4xl">Ready to Start?</h2>
            <p className="text-green-50 mb-8 text-lg">
              Join today and experience a smarter, safer way to achieve lasting flexibility and strength.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:you@example.com"
                className="inline-block rounded-full bg-white px-8 py-4 text-base font-semibold text-green-700 shadow-lg hover:shadow-xl transition-all hover:bg-stone-50"
              >
                Email to Book
              </a>
              <a
                href="#schedule"
                className="inline-block rounded-full border-2 border-white px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors"
              >
                View Schedule
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-stone-900 text-stone-300 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm">© {new Date().getFullYear()} Forever Flexible. All rights reserved.</p>
            <p className="text-xs text-stone-500 mt-2">Yoga • Pilates • Flexibility • Strength • Mobility</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
