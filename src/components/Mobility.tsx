import Image from "next/image";

export default function Mobility() {
  return (
    <section id="mobility" className="relative overflow-hidden py-32 sm:py-40 section-brown brown-overlay">
      <div className="absolute inset-0">
        <Image
          src="/images/yoga-pose-7.jpg"
          alt="Mobility training background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(245,239,230,0.95)] via-[rgba(245,239,230,0.9)] to-[rgba(91,52,38,0.02)]"></div>
      </div>
      
      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-12 gap-20 items-start mb-32">
          <div className="lg:col-span-5">
            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-extralight text-brown mb-12">Mobility Training</h2>
            <p className="text-2xl text-brown-muted font-light leading-relaxed">
              Structured sessions to increase mobility and improve range of motion with safe, guided stretching for all levels.
            </p>
          </div>
          
          <div className="lg:col-span-7 space-y-16">
            <div>
              <h3 className="text-4xl font-light text-brown mb-6">Mobility Classes</h3>
              <p className="text-xl text-brown-muted leading-relaxed font-light">
                Increase mobility and range of motion with safe, guided stretching techniques.
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-light text-brown mb-6">Workshops</h3>
              <p className="text-xl text-brown-muted leading-relaxed font-light">
                Specialized training for splits, backbends, and hamstring mobility with step-by-step progressions.
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-light text-brown mb-6">Private Coaching</h3>
              <p className="text-xl text-brown-muted leading-relaxed font-light">
                One-on-one training with a personalized plan for steady progress and injury prevention.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <p className="text-brown text-3xl font-light leading-relaxed">
            Regular mobility training helps you feel stronger, more mobile, and confident as you reach new milestones.
          </p>
        </div>
      </div>
    </section>
  );
}
