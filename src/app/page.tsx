import { Hero } from "@/components/Hero";
import { Welcome } from "@/components/Welcome";
import { Details } from "@/components/Details";
import { Timeline } from "@/components/Timeline";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-navy pb-[72px] md:pb-0">
      <div id="hero">
        <Hero />
      </div>
      <Welcome />
      <Details />
      <div id="timeline">
        <Timeline />
      </div>
      <Footer />
    </main>
  );
}
