import Image from "next/image";

export default function Benefits() {
  return (
    <section className="py-32 sm:py-40 relative overflow-hidden section-brown brown-overlay">
      <div className="absolute inset-0">
        <Image
          src="/images/yoga-pose-4.jpg"
          alt="Yoga practice background"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(245,239,230,0.95)] via-[rgba(245,239,230,0.9)] to-[rgba(91,52,38,0.02)]"></div>
      </div>
      
      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-20">
          <div className="space-y-6">
            <h3 className="font-medium text-brown text-3xl">Better Mobility</h3>
            <p className="text-lg text-brown-muted leading-relaxed font-light">Move with more freedom and ease in daily life and activities</p>
          </div>
          
          <div className="space-y-6 sm:mt-20">
            <h3 className="font-medium text-brown text-3xl">Stronger Posture</h3>
            <p className="text-lg text-brown-muted leading-relaxed font-light">Improved alignment reduces tension and discomfort</p>
          </div>
          
          <div className="space-y-6">
            <h3 className="font-medium text-brown text-3xl">More Calm</h3>
            <p className="text-lg text-brown-muted leading-relaxed font-light">Gentle movement calms your nervous system and aids recovery</p>
          </div>
        </div>
      </div>
    </section>
  );
}
