import Image from "next/image";

export default function Gallery() {
  const images = [3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <section id="gallery" className="py-24 sm:py-40 relative overflow-hidden section-brown">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:mb-24">
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-extralight text-brown mb-6 md:mb-12">Gallery</h2>
          <p className="text-xl sm:text-2xl text-brown-muted font-light">A glimpse into our practice</p>
        </div>

        {/* --- Mobile: Horizontal Scroll with Snap --- */}
        <div 
          className="flex gap-4 overflow-x-auto pb-8 md:hidden -mx-4 px-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch' }}
        >
          {images.map((num) => (
            <div 
              key={num} 
              className="relative min-w-[80%] sm:min-w-[48%] aspect-[4/5] rounded-3xl overflow-hidden shadow-lg snap-center flex-shrink-0"
            >
              <Image
                src={`/images/yoga-pose-${num}.jpg`}
                alt={`Yoga practice ${num}`}
                fill
                sizes="80vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* --- Desktop: Grid --- */}
        <div className="hidden md:grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-3 lg:grid-cols-4">
          {images.map((num) => (
            <div 
              key={num} 
              className="relative aspect-square rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:scale-[1.03] group"
            >
              <Image
                src={`/images/yoga-pose-${num}.jpg`}
                alt={`Yoga practice ${num}`}
                fill
                sizes="(max-width: 1024px) 33vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}