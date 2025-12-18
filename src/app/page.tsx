import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Yoga from "@/components/Yoga";
import Flexibility from "@/components/Flexibility";
import Pilates from "@/components/Pilates";
import About from "@/components/About";
import Schedule from "@/components/Schedule";
import Membership from "@/components/Membership";
import Gallery from "@/components/Gallery";
import Video from "@/components/Video";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/20 via-stone-50 to-amber-50/10">
      <Header />
      <main>
        <Hero />
        <Intro />
        <Yoga />
        <Flexibility />
        <Pilates />
        <About />
        <Schedule />
        <Membership />
        <Gallery />
        <Video />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
