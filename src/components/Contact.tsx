import Image from "next/image";

export default function Contact() {
  return (
    <section className="relative overflow-hidden py-32 sm:py-40 section-brown brown-overlay">
      <div className="absolute inset-0">
        <Image
          src="/images/yoga-pose-10.jpg"
          alt="Contact background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(91,52,38,0.06)] via-[rgba(245,239,230,0.6)] to-[rgba(245,239,230,0.9)]"></div>
      </div>
      
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center z-10">
        <h2 className="text-6xl sm:text-7xl font-extralight text-brown mb-12">Ready to Start?</h2>
        <p className="text-brown-muted mb-16 text-2xl font-light leading-relaxed max-w-3xl mx-auto">
          Join today and experience a smarter, safer way to achieve lasting flexibility and strength.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <a href="mailto:you@example.com" className="inline-block rounded-full btn-brown px-12 py-5 text-base font-medium shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105">Email to Book</a>
          <a href="#schedule" className="inline-block rounded-full border-2 border-[rgba(91,52,38,0.08)] bg-[rgba(245,239,230,0.6)] px-12 py-5 text-base font-medium text-brown hover:bg-[rgba(245,239,230,0.8)] transition-all">View Schedule</a>
        </div>
      </div>
    </section>
  );
}
