import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-32 sm:py-40 section-brown brown-overlay">
      <div className="absolute inset-0">
        <Image
          src="/images/yoga-pose-10.jpg"
          alt="Contact background"
          fill
          className="object-cover"
        />
        {/* Deep overlay to ensure text contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2a1b15]/90 via-[#2a1b15]/80 to-[rgba(91,52,38,0.85)]"></div>
      </div>
      
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center z-10">
        <span className="text-[var(--beige-50)]/80 font-semibold tracking-[0.3em] text-xs uppercase mb-6 block">
          Get In Touch
        </span>
        
        <h2 className="text-6xl sm:text-7xl font-extralight text-white mb-10 tracking-tight drop-shadow-xl">
          Questions? <br className="hidden sm:block" /> Let’s Connect.
        </h2>
        
        <p className="text-[var(--beige-50)]/90 mb-16 text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto drop-shadow-md">
          Whether you’re curious about our programs or just want to say hello, reach out via email or follow our journey on Instagram.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          {/* Updated Email Link */}
          <a 
            href="mailto:info@forever-flexible.com" 
            className="w-full sm:w-auto text-center rounded-full bg-[#5b3426] px-10 py-4 text-white font-medium shadow-xl hover:bg-[#4a2a1f] transition-all transform hover:-translate-y-1"
          >
            Send an Email
          </a>

          {/* Instagram Link */}
          <a 
            href="https://www.instagram.com/4everflexible_studio/" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center rounded-full border-2 border-[var(--beige-50)]/20 bg-[var(--beige-50)]/10 backdrop-blur-md px-10 py-4 text-[var(--beige-50)] font-medium hover:bg-[var(--beige-50)]/20 transition-all transform hover:-translate-y-1"
          >
            Follow us on Instagram
          </a>
        </div>
        
        <p className="mt-8 text-[var(--beige-50)]/60 text-sm font-light italic">
          We usually reply within 24 hours.
        </p>
      </div>
    </section>
  );
}