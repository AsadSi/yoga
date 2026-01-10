import Image from "next/image";

export default function Video() {
  return (
    <section id="studio" className="py-20 sm:py-24 relative overflow-hidden section-brown">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        
        {/* Header: Focused on the space and atmosphere */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-extralight text-brown tracking-tight mb-4">
            Inside the Studio
          </h2>
          <p className="text-lg text-brown-muted font-light max-w-md">
            Step into a space designed for clarity and calm. Explore where we breathe, move, and grow together.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid gap-8 md:grid-cols-2 items-start">

          {/* Image Card 1 */}
          <div className="group">
            <div className="relative aspect-video bg-stone-100 rounded-2xl overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-500">
              <Image
                src="/images/yoga-studio-1.jpg"
                alt="The Practice Space"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
              />
            </div>
            <div className="pt-6 px-2">
              <h3 className="text-xl font-medium text-brown leading-tight">The Space</h3>
              <p className="text-sm text-brown-muted font-light mt-1">A sanctuary for mindful movement and quiet reflection.</p>
            </div>
          </div>

          {/* Image Card 2: Subtle Offset */}
          <div className="group md:mt-12">
            <div className="relative aspect-video bg-stone-100 rounded-2xl overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-500">
              <Image
                src="/images/yoga-studio-2.jpg"
                alt="Close up of yoga practice"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
              />
            </div>
            <div className="pt-6 px-2">
              <h3 className="text-xl font-medium text-brown leading-tight">The Energy</h3>
              <p className="text-sm text-brown-muted font-light mt-1">Small groups and personalized attention for every body.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}