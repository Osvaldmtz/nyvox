import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Manifesto } from "@/components/Manifesto";
import { Marquee } from "@/components/Marquee";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";
import { TechMarquee } from "@/components/TechMarquee";
import { Testimonials } from "@/components/Testimonials";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <Hero />
        <Marquee />
        <Manifesto />
        <Services />
        <TechMarquee />
        <Work />
        <Testimonials />
        <Process />
        <About />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
