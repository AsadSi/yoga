export default function Footer() {
  return (
    <footer className="bg-[var(--beige-100)] text-brown-muted py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-light">© {new Date().getFullYear()} Forever Flexible. All rights reserved.</p>
          <p className="text-xs text-brown-muted mt-3 font-light">Yoga • Pilates • Mobility • Strength</p>
        </div>
      </div>
    </footer>
  );
}




