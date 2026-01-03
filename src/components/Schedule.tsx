import React from 'react';

function Feature({ icon, children }: { icon: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-brown-muted">
      <span className="w-4 h-4 flex-none" aria-hidden>
        {icon === 'book' && (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20 6.5V17a2 2 0 0 1-2 2H6.5A2.5 2.5 0 0 1 4 16.5V6.5A2.5 2.5 0 0 1 6.5 4H18a2 2 0 0 1 2 2.5z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
        {icon === 'download' && (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7 10l5 5 5-5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 15V3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
        {icon === 'coach' && (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
            <path d="M17 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="7" r="4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
        {icon === 'users' && (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
            <path d="M17 21v-2a4 4 0 0 0-3-3.87" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7 21v-2a4 4 0 0 1 3-3.87" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="7" r="4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      <span className="text-xs tracking-wide uppercase font-light">{children}</span>
    </div>
  );
}

export default function Schedule() {
  const MOMENCE_URL = "https://momence.com/u/forever-flexible-bTWuXJ";

  return (
    <section id="schedule" className="py-24 sm:py-32 section-brown">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24 items-end">
          <div>
            <h2 className="text-5xl sm:text-6xl font-extralight text-brown tracking-tight leading-none">
              Schedule & <br />
              <span className="italic font-light text-brown-muted">Memberships</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-lg text-brown-muted font-light leading-relaxed mb-6">
              Flexible options for every stage of your practice. Pure movement, tailored to your journey.
            </p>
            {/* Direct Link to Schedule */}
            <a 
              href={MOMENCE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-brown border-b border-brown pb-1 hover:opacity-70 transition-opacity"
            >
              Check our live schedule on Momence
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </a>
          </div>
        </div>

        {/* CURRENT SCHEDULE (Greyed Out / Commented)
          ------------------------------------------
          <div className="grid md:grid-cols-3 gap-12 mb-32 opacity-40 grayscale">
            {[
              { day: "Monday", class: "Hatha Foundations", time: "6:00 PM - 7:00 PM", loc: "Online (Zoom)" },
              { day: "Wednesday", class: "Ashtanga Flow", time: "6:30 PM - 7:30 PM", loc: "In-Person • CPH" },
              { day: "Sunday", class: "Yin & Rest", time: "7:00 PM - 8:15 PM", loc: "Online (Zoom)" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-brown-muted text-xs font-semibold mb-3 tracking-[0.2em] uppercase">{item.day}</span>
                <h3 className="text-2xl font-light text-brown mb-2">{item.class}</h3>
                <p className="text-brown-muted font-light text-sm">{item.time}</p>
                <p className="mt-4 text-[10px] text-brown-muted tracking-widest uppercase">{item.loc}</p>
              </div>
            ))}
          </div>
        */}

      </div>
    </section>
  );
}