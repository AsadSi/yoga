"use client";

import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Yoga", href: "#yoga" },
  { label: "Pilates", href: "#pilates" },
  { label: "Flexibility", href: "#flexibility" },
  { label: "About", href: "#about" },
  { label: "Schedule", href: "#schedule" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300">
      {/* Glass Background Layer */}
      <div className="absolute inset-0 bg-[var(--beige-50)]/90 backdrop-blur-md border-b border-[rgba(91,52,38,0.06)] shadow-sm" />

      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full overflow-hidden bg-[var(--beige-100)] shadow-md">
              <img src="/logo.png" alt="Forever Flexible" className="h-10 w-10 object-cover" />
            </div>
            <span className="text-base sm:text-lg font-bold text-brown tracking-tight">Forever Flexible</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-brown-muted hover:text-brown transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#schedule" className="rounded-full btn-brown px-6 py-2.5 text-sm font-semibold">Join Now</a>
          </nav>

          {/* Mobile Burger Button */}
          <button
            onClick={() => setOpen(!open)}
            className="relative z-[110] md:hidden p-2 -mr-2 outline-none"
            aria-label="Toggle Menu"
          >
            <div className="flex flex-col gap-1.5 w-6">
              <span className={`h-0.5 w-full bg-[var(--brown-900)] rounded-full transition-transform duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`h-0.5 w-full bg-[var(--brown-900)] rounded-full transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-full bg-[var(--brown-900)] rounded-full transition-transform duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Pro Mobile Menu Overlay (bottom sheet on mobile) */}
      <div className={`fixed inset-0 z-[105] md:hidden transition-all duration-500 ease-in-out ${open ? "visible" : "invisible pointer-events-none"}`}>
        {/* Dark Backdrop */}
        <div
          className={`absolute inset-0 bg-stone-900/30 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />

        {/* Bottom Sheet Menu Content */}
        <div
          className={`absolute left-0 bottom-0 w-full h-[62vh] bg-[var(--beige-50)]/95 backdrop-blur-2xl shadow-2xl rounded-t-3xl transition-transform duration-400 ease-in-out ${
            open ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="flex flex-col h-full pt-6 px-6 pb-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full overflow-hidden bg-[var(--beige-100)] shadow-sm">
                  <img src="/logo.png" alt="Forever Flexible" className="h-9 w-9 object-cover" />
                </div>
                <span className="font-semibold text-brown">Forever Flexible</span>
              </div>
              <button onClick={() => setOpen(false)} className="p-2 text-brown-muted">Close</button>
            </div>

            <div className="space-y-4 overflow-y-auto">
              {navItems.map((item, i) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  style={{ transitionDelay: `${i * 40}ms` }}
                  className={`block text-2xl font-semibold text-brown transition-all transform ${open ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"}`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="mt-auto">
              <a href="#schedule" onClick={() => setOpen(false)} className="block w-full text-center rounded-2xl btn-brown py-4 text-lg font-bold shadow-xl active:scale-[0.98] transition-transform">
                Join Now
              </a>
              <p className="text-center mt-4 text-brown-muted text-sm italic">Start your journey today.</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}