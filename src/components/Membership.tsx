import Image from "next/image";

export default function Membership() {
  return (
    <section className="relative overflow-hidden py-32 sm:py-40">
      <div className="absolute inset-0">
        <Image
          src="/images/yoga-pose-9.jpg"
          alt="Membership background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-800/60 via-emerald-800/55 to-green-900/60"></div>
      </div>
      
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-20">
          <h2 className="text-6xl sm:text-7xl font-extralight text-white mb-12 drop-shadow-lg">Membership</h2>
          <p className="text-xl text-green-50 font-light leading-relaxed max-w-3xl mx-auto drop-shadow-md">
            Take your practice further with Forever Flexible Membership. Get unlimited access to classes, progressive programs, and a supportive community.
          </p>
        </div>
        
        <div className="space-y-8 mb-16 max-w-3xl mx-auto">
          <div className="flex items-start gap-6">
            <span className="text-4xl text-green-200 mt-2 drop-shadow-md">✓</span>
            <div>
              <div className="font-medium text-white text-2xl mb-3 drop-shadow-md">Unlimited Access</div>
              <div className="text-base text-green-50 font-light drop-shadow-sm">Train anytime with expert-led sessions for all levels</div>
            </div>
          </div>
          <div className="flex items-start gap-6">
            <span className="text-4xl text-green-200 mt-2 drop-shadow-md">✓</span>
            <div>
              <div className="font-medium text-white text-2xl mb-3 drop-shadow-md">Progressive Programs</div>
              <div className="text-base text-green-50 font-light drop-shadow-sm">Follow structured plans that improve flexibility, posture, and strength</div>
            </div>
          </div>
          <div className="flex items-start gap-6">
            <span className="text-4xl text-green-200 mt-2 drop-shadow-md">✓</span>
            <div>
              <div className="font-medium text-white text-2xl mb-3 drop-shadow-md">Community Support</div>
              <div className="text-base text-green-50 font-light drop-shadow-sm">Stay motivated with expert guidance and a community that supports your goals</div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-green-50 mb-12 font-light leading-relaxed text-xl max-w-2xl mx-auto drop-shadow-md">
            Ready to increase flexibility, improve mobility, and move with confidence? Commit to your progress and start transforming your body today.
          </p>
          <a
            href="#schedule"
            className="inline-block rounded-full bg-white px-14 py-6 text-base font-medium text-green-700 shadow-xl hover:shadow-2xl transition-all hover:bg-amber-50 transform hover:scale-105"
          >
            Join Now
          </a>
        </div>
      </div>
    </section>
  );
}
