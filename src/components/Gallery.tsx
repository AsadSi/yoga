import Image from "next/image";

export default function Gallery() {
  const images = [3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <section id="gallery" className="py-20 sm:py-32 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Minimalist Header */}
        <div className="mb-12">
          <h2 className="text-sm uppercase tracking-[0.4em] text-stone-400 mb-2">Gallery</h2>
          <p className="text-xl font-light text-stone-800">The Practice</p>
        </div>

        {/* --- Mobile: Smooth Horizontal Scroller --- */}
        <div className="md:hidden">
          <div className="flex gap-4 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-6 px-6">
            {images.map((num) => (
              <div 
                key={num} 
                className="relative min-w-[85%] aspect-square overflow-hidden bg-stone-50 snap-center rounded-2xl shadow-sm"
              >
                <Image
                  src={`/images/yoga-pose-${num}.jpg`}
                  alt={`Yoga practice ${num}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* --- Desktop: Symmetrical 4-Column Grid --- */}
        <div className="hidden md:grid grid-cols-4 gap-4">
          {images.map((num) => (
            <div 
              key={num} 
              className="relative aspect-square overflow-hidden bg-stone-50 group rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-500"
            >
              <Image
                src={`/images/yoga-pose-${num}.jpg`}
                alt={`Yoga practice ${num}`}
                fill
                sizes="25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}