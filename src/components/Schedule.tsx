import React from 'react';

function Feature({ icon, children }: { icon: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-stone-500">
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
  const plans = [
    { name: "Super Basic", price: "9,99", features: ["users"] },
    { name: "Silver", price: "29,99", features: ["book", "download", "users"] },
    { name: "Gold", price: "39,99", features: ["book", "download", "users"] },
    { name: "Platinum", price: "49,99", features: ["book", "download", "coach", "users"] },
    { name: "Diamond", price: "69,99", features: ["book", "download", "coach", "users"] },
    { name: "Ultra VIP", price: "79,99", features: ["book", "download", "coach", "users"] },
  ];

  return (
    <section id="schedule" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24 items-end">
          <div>
            <h2 className="text-5xl sm:text-6xl font-extralight text-stone-900 tracking-tight leading-none">
              Schedule & <br />
              <span className="italic font-light text-stone-400">Memberships</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-lg text-stone-600 font-light leading-relaxed">
              Transparent pricing for every stage of your practice. No hidden fees, just pure movement.
            </p>
          </div>
        </div>

        {/* Schedule Symmetrical Grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-32">
          {[
            { day: "Monday", class: "Hatha Foundations", time: "6:00 PM - 7:00 PM", loc: "Online (Zoom)" },
            { day: "Wednesday", class: "Ashtanga Flow", time: "6:30 PM - 7:30 PM", loc: "In-Person • CPH" },
            { day: "Sunday", class: "Yin & Rest", time: "7:00 PM - 8:15 PM", loc: "Online (Zoom)" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-stone-400 text-xs font-semibold mb-3 tracking-[0.2em] uppercase">{item.day}</span>
              <h3 className="text-2xl font-light text-stone-900 mb-2">{item.class}</h3>
              <p className="text-stone-500 font-light text-sm">{item.time}</p>
              <p className="mt-4 text-[10px] text-stone-400 tracking-widest uppercase">{item.loc}</p>
            </div>
          ))}
        </div>

        {/* Memberships Symmetrical Grid */}
        <div className="space-y-12">
          <h3 className="text-3xl font-light text-stone-900">Memberships</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div key={plan.name} className="flex flex-col p-8">
                <div className="mb-8">
                  <h4 className="text-sm font-medium text-stone-400 uppercase tracking-widest">{plan.name}</h4>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-4xl font-extralight text-stone-900">€{plan.price}</span>
                    <span className="text-sm text-stone-400">/mo</span>
                  </div>
                </div>

                <div className="flex-grow space-y-5 mb-10">
                  {plan.features.map((feat) => (
                    <Feature key={feat} icon={feat}>
                      {feat === 'users' ? 'Community Access' : 
                       feat === 'book' ? '1 Course' : 
                       feat === 'download' ? 'Downloads' : 'Coaching'}
                    </Feature>
                  ))}
                </div>

                <a
                  href="#"
                  className="block w-full text-center py-3.5 px-6 rounded-xl text-xs font-bold tracking-widest uppercase transition-all bg-stone-900 text-white hover:bg-stone-800"
                >
                  Start Free Trial
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Link */}
        <div className="mt-16 text-center">
          <p className="text-stone-400 text-sm font-light">
            All memberships include a 7-day free trial. 
            <a href="#" className="ml-2 text-stone-900 font-medium underline underline-offset-4">Manage billing</a>
          </p>
        </div>
      </div>
    </section>
  );
}