const navItems = [
  { label: "Yoga", href: "#yoga" },
  { label: "Flexibility", href: "#flexibility" },
  { label: "About", href: "#about" },
  { label: "Schedule", href: "#schedule" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-amber-50/90 backdrop-blur-md border-b border-amber-100/60 shadow-sm">
      <div className="mx-auto max-w-[1600px] px-4 py-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-emerald-700 shadow-lg">
              <span className="text-2xl font-bold text-white">FF</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-stone-800">Forever Flexible</h1>
              <p className="text-xs text-amber-700 font-light">Yoga • Pilates • Flexibility</p>
            </div>
          </div>
          
          <button
            className="md:hidden p-2 rounded-lg text-stone-600 hover:bg-amber-100/50 transition-colors"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-stone-700 hover:text-green-700 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#schedule"
              className="rounded-full bg-green-700 px-7 py-3 text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all hover:bg-green-800"
            >
              Join Now
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
