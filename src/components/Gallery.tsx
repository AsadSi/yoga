import Image from "next/image";

export default function Gallery() {
  return (
    <section id="gallery" className="py-32 sm:py-40 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="mb-24">
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-extralight text-stone-900 mb-12">Gallery</h2>
          <p className="text-2xl text-stone-600 font-light">A glimpse into our practice</p>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-3 lg:grid-cols-4">
          {[3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <div 
              key={num} 
              className="relative aspect-square rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:scale-[1.03] group"
            >
              <Image
                src={`/images/yoga-pose-${num}.jpg`}
                alt={`Yoga practice ${num}`}
                width={400}
                height={400}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
