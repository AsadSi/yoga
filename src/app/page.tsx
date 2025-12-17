import Image from "next/image";

const navItems = [
  { label: "Yoga", href: "#yoga" },
  { label: "Flexibility", href: "#flexibility" },
  { label: "About", href: "#about" },
  { label: "Schedule", href: "#schedule" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-amber-50 to-orange-50">
      {/* Mobile-First Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-orange-100 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-rose-400 shadow-md">
                <span className="text-lg font-bold text-white">FF</span>
              </div>
              <div>
                <h1 className="text-base font-bold text-stone-800">Forever Flexible</h1>
                <p className="text-xs text-stone-500">Yoga • Pilates • Flexibility</p>
              </div>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg text-stone-600 hover:bg-orange-50"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-stone-700 hover:text-orange-600 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#schedule"
                className="rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-5 py-2 text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all hover:from-orange-600 hover:to-rose-600"
              >
                Join Now
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* Enhanced Hero Section */}
        <section className="relative overflow-hidden">
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-100/50 via-rose-50/30 to-purple-50/20"></div>
          
          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="text-center lg:text-left">
                <div className="inline-block mb-6">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm border border-orange-200 px-4 py-2 text-sm font-semibold text-orange-700 shadow-sm">
                    <span>✨</span>
                    <span>Online Yoga Studio</span>
                  </span>
                </div>
                
                <h1 className="text-4xl font-bold text-stone-900 mb-6 sm:text-5xl lg:text-6xl leading-tight">
                  Forever Flexible
                  <span className="block mt-2 bg-gradient-to-r from-orange-600 via-rose-600 to-purple-600 bg-clip-text text-transparent">
                    Strength & Mobility
                  </span>
                </h1>
                
                <p className="text-lg text-stone-700 mb-4 sm:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  More than just a flexibility program—it's a <strong>movement, a mindset, and a commitment</strong> to unlocking your body's full potential.
                </p>
                
                <p className="text-base text-stone-600 mb-8 sm:text-lg max-w-2xl mx-auto lg:mx-0">
                  Science-based yoga and Pilates approach designed to <strong>increase flexibility, build strength, and improve mobility</strong>—no matter your starting point.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a
                    href="#schedule"
                    className="inline-block rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-8 py-4 text-base font-semibold text-white shadow-xl hover:shadow-2xl transition-all hover:from-orange-600 hover:to-rose-600 transform hover:scale-105"
                  >
                    Join Now & Start Your Transformation
                  </a>
                  <a
                    href="#yoga"
                    className="inline-block rounded-full border-2 border-orange-300 bg-white/80 backdrop-blur-sm px-8 py-4 text-base font-semibold text-orange-700 hover:bg-orange-50 transition-all"
                  >
                    Explore Classes
                  </a>
                </div>
                
                {/* Key Benefits */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2 text-stone-700">
                    <span className="text-orange-500 text-xl">✓</span>
                    <span>Structured Programs</span>
                  </div>
                  <div className="flex items-center gap-2 text-stone-700">
                    <span className="text-rose-500 text-xl">✓</span>
                    <span>Expert-Led Classes</span>
                  </div>
                  <div className="flex items-center gap-2 text-stone-700">
                    <span className="text-purple-500 text-xl">✓</span>
                    <span>Sustainable Results</span>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Hero Image */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-200/40 to-rose-200/40 rounded-3xl blur-3xl transform rotate-6"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src="/images/yoga-pose-1.jpg"
                    alt="Yoga practice - Forever Flexible"
                    width={800}
                    height={900}
                    className="w-full h-[500px] sm:h-[600px] object-cover"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent p-6">
                    <p className="text-white font-semibold text-lg mb-1">Expert-Led Classes</p>
                    <p className="text-orange-100 text-sm">Live & On-Demand • Online & In-Person</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Value Proposition */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-lg text-stone-700 leading-relaxed mb-4">
              Through <strong>structured, expert-led classes</strong>, I guide you step by step toward <strong>deeper mobility, better posture, and effortless movement</strong>. This isn't about quick fixes—it's about <strong>sustainable flexibility training</strong>, moving with intention, and feeling <strong>strong, balanced, and free in your body</strong> every single day.
            </p>
            <p className="text-base text-stone-600">
              With Forever Flexible, you're not just stretching—you're transforming the way you <strong>move, train, and connect with your body</strong>.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-gradient-to-b from-white to-orange-50/30 py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-rose-50 border border-orange-100 shadow-sm">
                <div className="text-4xl mb-4">🧘</div>
                <h3 className="font-bold text-stone-900 mb-2 text-lg">Improved Mobility</h3>
                <p className="text-sm text-stone-600">Move with greater freedom and ease, enhancing both athletic performance and daily comfort</p>
              </div>
              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-orange-100 shadow-sm">
                <div className="text-4xl mb-4">💪</div>
                <h3 className="font-bold text-stone-900 mb-2 text-lg">Better Posture & Alignment</h3>
                <p className="text-sm text-stone-600">Increased flexibility promotes natural body alignment, reducing tension and discomfort</p>
              </div>
              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-rose-50 to-pink-50 border border-orange-100 shadow-sm">
                <div className="text-4xl mb-4">😌</div>
                <h3 className="font-bold text-stone-900 mb-2 text-lg">Stress Relief & Recovery</h3>
                <p className="text-sm text-stone-600">Gentle stretching calms the nervous system, reduces muscle tightness, and aids relaxation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Yoga Section */}
        <section id="yoga" className="py-12 sm:py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-stone-900 mb-4 sm:text-4xl">Yoga</h2>
              <p className="text-lg text-stone-600 max-w-3xl mx-auto">
                Enhance your <strong>mobility, strength, and well-being</strong> with expert-led yoga classes designed for all levels. Whether you're looking for <strong>deep relaxation, improved flexibility, or a dynamic practice</strong>, my offerings provide a structured and effective approach to help you progress.
              </p>
            </div>

            {/* Yoga Offerings */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-100 shadow-sm">
                <div className="text-3xl mb-3">💻</div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">Live Online Classes</h3>
                <p className="text-stone-600 text-sm">Join interactive sessions with real-time guidance on technique and alignment</p>
              </div>
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6 border border-rose-100 shadow-sm">
                <div className="text-3xl mb-3">📹</div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">On-Demand Videos</h3>
                <p className="text-stone-600 text-sm">Practice anytime with a library of pre-recorded sessions tailored to different needs</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-100 shadow-sm">
                <div className="text-3xl mb-3">🎓</div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">Workshops & Tutorials</h3>
                <p className="text-stone-600 text-sm">Focus on advanced poses, posture refinement, and targeted flexibility training</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-rose-50 rounded-2xl p-6 border border-orange-100 shadow-sm">
                <div className="text-3xl mb-3">🏢</div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">In-Person Classes</h3>
                <p className="text-stone-600 text-sm">Group sessions in Malmö & Copenhagen with hands-on adjustments and personalized feedback</p>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-orange-100 shadow-sm">
                <div className="text-3xl mb-3">👤</div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">Private Coaching</h3>
                <p className="text-stone-600 text-sm">One-on-one instruction customized to your goals, available online or in person</p>
              </div>
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6 border border-rose-100 shadow-sm">
                <div className="text-3xl mb-3">🌿</div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">Sustainable Practice</h3>
                <p className="text-stone-600 text-sm">Focus on alignment, mindful movement, and progressive flexibility for lasting results</p>
              </div>
            </div>

            {/* Yoga Styles */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-orange-100">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-amber-400 flex items-center justify-center mb-4">
                  <span className="text-xl">🌿</span>
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">Hatha Yoga</h3>
                <p className="text-stone-600 mb-4 text-sm leading-relaxed">
                  Strong, steady & alignment-based. A slower, more intentional practice that focuses on posture foundations, breath, and safe alignment—ideal for beginners and anyone wanting a mindful, grounded class.
                </p>
                <ul className="space-y-2 text-sm text-stone-600">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">✓</span>
                    <span>Build strength safely</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">✓</span>
                    <span>Learn fundamentals of key poses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">✓</span>
                    <span>Great entry point if you're new to yoga</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-orange-100">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-400 to-pink-400 flex items-center justify-center mb-4">
                  <span className="text-xl">🔥</span>
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">Ashtanga-Inspired Flow</h3>
                <p className="text-stone-600 mb-4 text-sm leading-relaxed">
                  Dynamic & energising flow. A flowing, breath-led practice inspired by the Ashtanga sequence, with intelligent modifications and options so you can challenge yourself without burning out.
                </p>
                <ul className="space-y-2 text-sm text-stone-600">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 mt-1">✓</span>
                    <span>Build heat & stamina</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 mt-1">✓</span>
                    <span>Support strength and cardiovascular health</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 mt-1">✓</span>
                    <span>Explore playful transitions & balance</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-orange-100 sm:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-indigo-400 flex items-center justify-center mb-4">
                  <span className="text-xl">🌙</span>
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">Yin Yoga</h3>
                <p className="text-stone-600 mb-4 text-sm leading-relaxed">
                  Deep release & nervous system reset. Long, supported holds that target the deeper tissues of the body, helping you to release tension, increase range of motion, and truly slow down.
                </p>
                <ul className="space-y-2 text-sm text-stone-600">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">✓</span>
                    <span>Support joint health & mobility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">✓</span>
                    <span>Calm the mind & improve sleep</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">✓</span>
                    <span>Perfect complement to stronger practices</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Flexibility Training Section */}
        <section id="flexibility" className="py-12 sm:py-16 bg-gradient-to-b from-orange-50/50 to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-stone-900 mb-4 sm:text-4xl">Flexibility Training</h2>
              <p className="text-lg text-stone-600 max-w-3xl mx-auto">
                Structured sessions to <strong>increase mobility, improve range of motion, and enhance flexibility</strong> with safe, guided stretching techniques for all levels.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 mb-12">
              <div className="bg-white rounded-2xl p-6 shadow-md border border-orange-100">
                <h3 className="text-xl font-bold text-stone-900 mb-3">Flexibility Classes</h3>
                <p className="text-stone-600 text-sm mb-4">
                  Structured sessions to increase mobility, improve range of motion, and enhance flexibility with safe, guided stretching techniques for all levels.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md border border-orange-100">
                <h3 className="text-xl font-bold text-stone-900 mb-3">Workshops & Tutorials</h3>
                <p className="text-stone-600 text-sm mb-4">
                  Specialized training for front splits, backbends, and hamstring mobility, with step-by-step progressions for safe and effective improvement.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md border border-orange-100">
                <h3 className="text-xl font-bold text-stone-900 mb-3">Customized Coaching</h3>
                <p className="text-stone-600 text-sm mb-4">
                  One-on-one training with a personalized flexibility plan to match your unique needs, ensuring steady progress and injury prevention.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-rose-50 rounded-2xl p-8 border border-orange-200 text-center">
              <p className="text-stone-700 text-lg mb-2">
                By incorporating <strong>flexibility training</strong> into your routine, you'll not only feel <strong>stronger and more mobile</strong> but also gain confidence as you reach new milestones and see lasting results.
              </p>
            </div>
          </div>
        </section>

        {/* Pilates Section - Coming Soon */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-stone-900 mb-4 sm:text-4xl">Pilates</h2>
              <p className="text-lg text-stone-600 max-w-3xl mx-auto">
                Experience the <strong>perfect blend of core strength, flexibility, and mindful movement</strong> with expert-led Pilates training. Designed for all levels, these programs focus on <strong>building a strong foundation, improving posture, and enhancing mobility</strong> through structured, results-driven sessions.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-200 text-center">
              <p className="text-xl font-semibold text-stone-900 mb-2">Pilates & More Coming Soon!</p>
              <p className="text-stone-600">Stay tuned for Pilates classes, custom programs, and Barre & Conditioning sessions.</p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 sm:py-16 bg-gradient-to-b from-white to-orange-50/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold text-stone-900 mb-4 sm:text-4xl">About Your Teacher</h2>
                <p className="text-stone-600 mb-4 leading-relaxed text-lg">
                  I'm a yoga teacher specializing in Hatha, Ashtanga-inspired vinyasa, and Yin yoga. My approach is rooted in <strong>functional movement and practical anatomy</strong>, so that what you do on the mat translates into how you move through everyday life.
                </p>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  Whether you're here to touch your toes, build strength, or finally find a moment to breathe in a busy week, you'll get <strong>clear guidance, personalised options, and a supportive space</strong> to explore your practice—online or in person.
                </p>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  Classes weave together <strong>alignment, breathwork, and mindfulness</strong> so you leave feeling not just more flexible, but more grounded, present, and connected to your body.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-orange-50 rounded-xl border border-orange-100">
                    <div className="text-2xl font-bold text-orange-600">+5</div>
                    <div className="text-xs text-stone-600 mt-1">Years Teaching</div>
                  </div>
                  <div className="text-center p-4 bg-rose-50 rounded-xl border border-rose-100">
                    <div className="text-2xl font-bold text-rose-600">200h+</div>
                    <div className="text-xs text-stone-600 mt-1">Certified</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-xl border border-purple-100">
                    <div className="text-2xl font-bold text-purple-600">All</div>
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

        {/* Schedule & Pricing */}
        <section id="schedule" className="py-12 sm:py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-stone-900 mb-3 sm:text-4xl">Schedule & Pricing</h2>
              <p className="text-stone-600">Find a class that fits your schedule</p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Schedule */}
              <div className="bg-white rounded-2xl p-6 shadow-md border border-orange-100">
                <h3 className="text-xl font-bold text-stone-900 mb-4">Weekly Schedule</h3>
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-orange-50 rounded-xl border border-orange-100">
                    <div>
                      <div className="font-semibold text-stone-900">Monday</div>
                      <div className="text-sm text-stone-600">Hatha Foundations</div>
                    </div>
                    <div className="text-sm text-stone-700 mt-2 sm:mt-0">
                      <div className="font-medium">6:00 PM - 7:00 PM</div>
                      <div className="text-stone-500">Online (Zoom)</div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-rose-50 rounded-xl border border-rose-100">
                    <div>
                      <div className="font-semibold text-stone-900">Wednesday</div>
                      <div className="text-sm text-stone-600">Ashtanga Flow</div>
                    </div>
                    <div className="text-sm text-stone-700 mt-2 sm:mt-0">
                      <div className="font-medium">6:30 PM - 7:30 PM</div>
                      <div className="text-stone-500">In-Person • Malmö / Copenhagen</div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-purple-50 rounded-xl border border-purple-100">
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

              {/* Pricing */}
              <div className="bg-white rounded-2xl p-6 shadow-md border border-orange-100">
                <h3 className="text-xl font-bold text-stone-900 mb-4">Pricing</h3>
                <div className="space-y-4">
                  <div className="p-4 border-2 border-orange-200 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="font-bold text-stone-900">Drop-In Class</div>
                        <div className="text-sm text-stone-600">Single class</div>
                      </div>
                      <div className="text-xl font-bold text-orange-600">€18</div>
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
                  className="mt-6 block w-full text-center rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-6 py-3 text-base font-semibold text-white shadow-md hover:shadow-lg transition-all"
                >
                  Book Your Class
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Membership Section */}
        <section className="py-12 sm:py-16 bg-gradient-to-br from-orange-500 via-rose-500 to-purple-500">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-2xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-stone-900 mb-4 sm:text-4xl">Become a Member</h2>
                <p className="text-lg text-stone-700">
                  Take your <strong>yoga and Pilates practice</strong> to the next level with <strong>Forever Flexible Membership</strong>. Gain exclusive access to <strong>expert-designed classes, progressive flexibility and strength programs, and a supportive community</strong> to keep you motivated.
                </p>
              </div>
              
              <div className="grid gap-4 mb-8">
                <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-xl">
                  <span className="text-2xl text-orange-600">✓</span>
                  <div>
                    <div className="font-semibold text-stone-900">Unlimited Access</div>
                    <div className="text-sm text-stone-600">Train anytime with expert-led sessions designed for all levels</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-rose-50 rounded-xl">
                  <span className="text-2xl text-rose-600">✓</span>
                  <div>
                    <div className="font-semibold text-stone-900">Step-by-Step Progression</div>
                    <div className="text-sm text-stone-600">Follow proven programs that improve flexibility, posture, and strength</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-xl">
                  <span className="text-2xl text-purple-600">✓</span>
                  <div>
                    <div className="font-semibold text-stone-900">Personalized Guidance</div>
                    <div className="text-sm text-stone-600">Stay on track with expert instruction and a community that supports your goals</div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-stone-700 mb-6">
                  If you're ready to <strong>increase flexibility, improve mobility, and move with confidence</strong>, this is where it happens. <strong>Commit to your progress, invest in yourself, and start transforming your body today.</strong>
                </p>
                <a
                  href="#schedule"
                  className="inline-block rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                >
                  Join Now & Begin Your Journey
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
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

        {/* Video Section */}
        <section id="video" className="py-12 sm:py-16 bg-gradient-to-b from-white to-orange-50/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-stone-900 mb-3 sm:text-4xl">Practice With Me</h2>
              <p className="text-stone-600">Watch a sample class to see what to expect</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-orange-100">
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
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-orange-100">
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

        {/* Contact CTA */}
        <section className="py-12 sm:py-16 bg-gradient-to-r from-orange-500 to-rose-500">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4 sm:text-4xl">Ready to Start Your Transformation?</h2>
            <p className="text-orange-50 mb-8 text-lg">
              Join today and experience a <strong>smarter, safer, and more effective way</strong> to achieve lasting flexibility and strength.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:you@example.com"
                className="inline-block rounded-full bg-white px-8 py-4 text-base font-semibold text-orange-600 shadow-lg hover:shadow-xl transition-all hover:bg-orange-50"
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

      {/* Footer */}
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
