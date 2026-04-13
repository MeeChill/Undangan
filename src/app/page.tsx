import { Hero } from "@/components/Hero";
import { Couple } from "@/components/Couple";
import { Welcome } from "@/components/Welcome";
import { Details } from "@/components/Details";
import { Timeline } from "@/components/Timeline";
import { Gallery } from "@/components/Gallery";
import { RSVP } from "@/components/RSVP";
import { Gift } from "@/components/Gift";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MusicPlayer } from "@/components/MusicPlayer";

export default function Home() {
  return (
    <main className="bg-surface-lowest pb-[72px] md:pb-0 w-full overflow-hidden">
      <div id="hero">
        <Hero />
      </div>
      <Couple />
      <Welcome />
      <Details />
      <div id="timeline">
        <Timeline />
      </div>
      <Gallery />
      <div id="rsvp">
        <RSVP />
      </div>
      <Gift />
      <Footer />
      <WhatsAppButton />
      <MusicPlayer />
    </main>
  );
}

