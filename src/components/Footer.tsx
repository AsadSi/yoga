export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-light">© {new Date().getFullYear()} Forever Flexible. All rights reserved.</p>
          <p className="text-xs text-stone-500 mt-3 font-light">Yoga • Pilates • Flexibility • Strength • Mobility</p>
        </div>
      </div>
    </footer>
  );
}

