export default function Video() {
  return (
    <section id="video" className="py-32 sm:py-40 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="mb-24">
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-extralight text-stone-900 mb-12">Practice With Me</h2>
          <p className="text-2xl text-stone-600 font-light">Watch a sample class to see what to expect</p>
        </div>
        <div className="grid gap-12 md:grid-cols-2">
          <div className="rounded-[3rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all group">
            <div className="aspect-video bg-stone-100 relative overflow-hidden">
              <video
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                controls
                playsInline
                preload="metadata"
                poster="/images/yoga-pose-1.jpg"
              >
                <source src="/videos/intro-video.mp4" type="video/mp4" />
                <source src="/videos/intro-video.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="p-10">
              <h3 className="font-medium text-stone-900 mb-2 text-2xl">Introduction Video</h3>
              <p className="text-lg text-stone-600 font-light">Get to know my teaching style</p>
            </div>
          </div>
          <div className="rounded-[3rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all group md:mt-16">
            <div className="aspect-video bg-stone-100 relative overflow-hidden">
              <video
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                controls
                playsInline
                preload="metadata"
                poster="/images/yoga-pose-2.jpg"
              >
                <source src="/videos/sample-class.mp4" type="video/mp4" />
                <source src="/videos/sample-class.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="p-10">
              <h3 className="font-medium text-stone-900 mb-2 text-2xl">Sample Class</h3>
              <p className="text-lg text-stone-600 font-light">Experience a full class</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
