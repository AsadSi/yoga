import Image from "next/image";

export default function Contact() {
  return (
    <section className="relative overflow-hidden py-32 sm:py-40">
      <div className="absolute inset-0">
        <Image
          src="/images/yoga-pose-10.jpg"
          alt="Contact background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-800/90 via-emerald-800/85 to-green-900/90"></div>
      </div>
      
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center z-10">
        <h2 className="text-6xl sm:text-7xl font-extralight text-white mb-12 drop-shadow-lg">Ready to Start?</h2>
        <p className="text-green-50 mb-16 text-2xl font-light leading-relaxed max-w-3xl mx-auto drop-shadow-md">
          Join today and experience a smarter, safer way to achieve lasting flexibility and strength.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <a
            href="mailto:you@example.com"
            className="inline-block rounded-full bg-white px-12 py-5 text-base font-medium text-green-700 shadow-2xl hover:shadow-3xl transition-all hover:bg-amber-50 transform hover:scale-105"
          >
            Email to Book
          </a>
          <a
            href="#schedule"
            className="inline-block rounded-full border-2 border-white/70 bg-white/15 backdrop-blur-sm px-12 py-5 text-base font-medium text-white hover:bg-white/25 transition-all drop-shadow-md"
          >
            View Schedule
          </a>
        </div>
      </div>
    </section>
  );
}
