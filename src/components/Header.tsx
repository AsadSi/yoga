"use client";

import { useEffect, useState, useRef } from "react";

const services = [
  { label: "Yoga", href: "#yoga" },
  { label: "Pilates", href: "#pilates" },
  { label: "Mobility", href: "#mobility" },
];

const secondaryNav = [
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Schedule", href: "#schedule" },
  { label: "Memberships", href: "#membership" },
  { label: "Contact", href: "#contact" },
];

const allNavItems = [...services, ...secondaryNav];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
  }, [open]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(false);
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100]">
      {/* Glass Background */}
      <div className="absolute inset-0 bg-white/90 backdrop-blur-md border-b border-stone-200/50 shadow-sm" />

      <div className="relative mx-auto max-w-[1400px] px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <button onClick={scrollToTop} className="flex items-center gap-3 group">
            <div className="h-10 w-10 transition-transform group-hover:scale-105">
              <img src="/images/logo.png" alt="Logo" className="h-full w-full object-cover" />
            </div>
            <span className="text-lg font-bold text-[#5b3426] tracking-tight">Forever Flexible</span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`flex items-center gap-1 text-sm font-semibold transition-colors ${dropdownOpen ? 'text-[#5b3426]' : 'text-stone-500 hover:text-[#5b3426]'}`}>
                Classes
                <svg className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <div className={`absolute top-full -left-4 pt-4 transition-all duration-200 ${dropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                <div className="w-48 bg-white rounded-2xl shadow-xl border border-stone-100 p-2">
                  {services.map((s) => (
                    <a key={s.href} href={s.href} className="block px-4 py-2.5 text-sm font-medium text-stone-600 hover:bg-stone-50 hover:text-[#5b3426] rounded-xl transition-colors">
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {secondaryNav.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-semibold text-stone-500 hover:text-[#5b3426] transition-colors">
                {item.label}
              </a>
            ))}

            <a 
              href="https://momence.com/u/forever-flexible-bTWuXJ?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn8HkjvOGHkcGeMv7Ar05NihdoC9BL7Dqs-hpucbPW1zCeGNsIyWPMRNZLBb0_aem_1m1-neF-BrfjHzXvHtz-TQ"
              target="_blank" 
              rel="noopener noreferrer"
              className="rounded-full bg-[#5b3426] px-6 py-2.5 text-white text-sm font-bold shadow-lg hover:bg-[#4a2a1f] hover:scale-105 transition-all active:scale-95"
            >
              Book Now
            </a>
          </nav>

          {/* Mobile Burger */}
          <button onClick={() => setOpen(!open)} className="lg:hidden relative z-[110] p-2">
            <div className="flex flex-col gap-1.5 w-6">
              <span className={`h-0.5 w-full bg-[#5b3426] rounded-full transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`h-0.5 w-full bg-[#5b3426] rounded-full transition-all ${open ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-full bg-[#5b3426] rounded-full transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[105] lg:hidden transition-all duration-500 ${open ? "visible" : "invisible"}`}>
        <div className={`absolute inset-0 bg-stone-900/40 backdrop-blur-sm transition-opacity ${open ? "opacity-100" : "opacity-0"}`} onClick={() => setOpen(false)} />
        <div className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-[2.5rem] p-8 pb-10 transition-transform duration-500 ${open ? "translate-y-0" : "translate-y-full"}`}>
          <div className="w-12 h-1.5 bg-stone-200 rounded-full mx-auto mb-8" />
          
          <div className="grid grid-cols-2 gap-3 mb-8">
            {allNavItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-center py-4 rounded-2xl bg-stone-50 border border-stone-100 text-[#5b3426] font-bold text-sm active:bg-stone-100 transition-all"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a 
            href="https://momence.com/u/forever-flexible-bTWuXJ?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn8HkjvOGHkcGeMv7Ar05NihdoC9BL7Dqs-hpucbPW1zCeGNsIyWPMRNZLBb0_aem_1m1-neF-BrfjHzXvHtz-TQ"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center rounded-full bg-[#5b3426] py-4 text-white font-bold text-lg shadow-xl hover:bg-[#4a2a1f] transition-all"
          >
            Book Now
          </a>
        </div>
      </div>
    </header>
  );
}