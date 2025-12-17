"use client";

import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Yoga", href: "#yoga" },
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
      <div className="absolute inset-0 bg-white/40 backdrop-blur-md border-b border-white/20 shadow-sm" />

      <div className="relative mx-auto max-w-[1600px] px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-700 shadow-md">
              <span className="text-lg font-bold text-white">FF</span>
            </div>
            <span className="text-lg font-bold text-stone-900 tracking-tight">Forever Flexible</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-stone-800 hover:text-green-700 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#schedule" className="rounded-full bg-green-700 px-6 py-2.5 text-sm font-semibold text-white hover:bg-green-800 transition-all">
              Join Now
            </a>
          </nav>

          {/* Mobile Burger Button */}
          <button
            onClick={() => setOpen(!open)}
            className="relative z-[110] md:hidden p-2 -mr-2 outline-none"
            aria-label="Toggle Menu"
          >
            <div className="flex flex-col gap-1.5 w-6">
              <span className={`h-0.5 w-full bg-stone-900 rounded-full transition-transform duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`h-0.5 w-full bg-stone-900 rounded-full transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-full bg-stone-900 rounded-full transition-transform duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Pro Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[105] md:hidden transition-all duration-500 ease-in-out ${
          open ? "visible" : "invisible pointer-events-none"
        }`}
      >
        {/* Dark Backdrop */}
        <div 
          className={`absolute inset-0 bg-stone-900/20 backdrop-blur-sm transition-opacity duration-500 ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />

        {/* Menu Content */}
        <div
          className={`absolute top-0 right-0 h-[70vh] w-full bg-white/95 backdrop-blur-2xl shadow-2xl transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${
            open ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="flex flex-col h-full pt-24 px-8 pb-10">
            <div className="space-y-6">
              {navItems.map((item, i) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  style={{ transitionDelay: `${i * 50}ms` }}
                  className={`block text-3xl font-semibold text-stone-900 transition-all transform ${
                    open ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className={`mt-auto transition-all duration-500 delay-300 ${open ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
              <a
                href="#schedule"
                onClick={() => setOpen(false)}
                className="block w-full text-center rounded-2xl bg-green-700 py-5 text-lg font-bold text-white shadow-xl shadow-green-900/20 active:scale-[0.98] transition-transform"
              >
                Join Now
              </a>
              <p className="text-center mt-6 text-stone-500 text-sm italic">
                Start your journey today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}