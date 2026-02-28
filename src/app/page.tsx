import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import WhatYouGain from "./components/WhatYouGain";
import MeetTheVoices from "./components/MeetTheVoices";
import WhatAreTheEvents from "./components/WhatAreTheEvents";
import VenueSection from "./components/VenueSection";
import GlimpsesSection from "./components/GlimpsesSection";
import Footer from "./components/Footer";
import HeroSlideshow from "./components/HeroSlideshow";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />

      <HeroSlideshow />

      <section className={styles.featureSection}>
        <div className={styles.featureCard}>
          <Image
            src="/assets/images/frame-117.svg"
            alt="Decoration"
            width={120}
            height={240}
            className={styles.featureDecorationLeft}
          />
          <div className={styles.featureContent}>
            <h2 className={styles.featureTitle}>
              Bridging design education<br />
              with real-world industry<br />
              practice.
            </h2>
            <p className={styles.featureText}>
              This conclave is built to expose aspiring designers to how design actually functions inside corporations, studios, startups, and freelance ecosystems. From invisible responsibilities and stakeholder pressure to compromises, constraints, and career trade-offs this is the side of design education that rarely gets discussed.
            </p>
          </div>
          <Image
            src="/assets/images/frame-118.svg"
            alt="Decoration"
            width={120}
            height={240}
            className={styles.featureDecorationRight}
          />
        </div>
      </section>

      <WhatYouGain />
      <MeetTheVoices />
      <WhatAreTheEvents />
      <VenueSection />
      <GlimpsesSection />
      <Footer />
    </div>
  );
}
