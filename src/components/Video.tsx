export default function Video() {
  return (
    <section id="video" className="py-20 sm:py-24 relative overflow-hidden section-brown">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        
        {/* Header: More balanced and elegant */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-extralight text-brown tracking-tight mb-4">
            Practice With Me
          </h2>
          <p className="text-lg text-brown-muted font-light max-w-md">
            Find your flow. Watch a sample class to experience the pace and energy of my teaching.
          </p>
        </div>

        {/* Video Grid: More compact with refined corners */}
        <div className="grid gap-8 md:grid-cols-2 items-start">
          
          {/* Video Card 1 */}
          <div className="group">
            <div className="aspect-video bg-stone-100 rounded-2xl overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-500">
              <video
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                controls
                playsInline
                preload="metadata"
                poster="/images/yoga-pose-1.jpg"
              >
                <source src="/videos/intro-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="pt-6 px-2">
              <h3 className="text-xl font-medium text-brown leading-tight">Introduction</h3>
              <p className="text-sm text-brown-muted font-light mt-1">Teaching style & philosophy</p>
            </div>
          </div>

          {/* Video Card 2: Subtle Offset for visual interest */}
          <div className="group md:mt-12">
            <div className="aspect-video bg-stone-100 rounded-2xl overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-500">
              <video
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                controls
                playsInline
                preload="metadata"
                poster="/images/yoga-pose-2.jpg"
              >
                <source src="/videos/sample-class.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="pt-6 px-2">
              <h3 className="text-xl font-medium text-brown leading-tight">Sample Class</h3>
              <p className="text-sm text-brown-muted font-light mt-1">A 20-minute gentle flow</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}