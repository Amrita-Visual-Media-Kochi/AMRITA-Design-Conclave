import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import WhatYouGain from "./components/WhatYouGain";
import MeetTheVoices from "./components/MeetTheVoices";
import WhatAreTheEvents from "./components/WhatAreTheEvents";
import VenueSection from "./components/VenueSection";
import GlimpsesSection from "./components/GlimpsesSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />

      <main className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Welcome to the <br /> Confluence of Creativity
          </h1>
          <p className={styles.heroSubtitle}>
            A two day immersive conclave bringing students, designers, and industry professionals together to confront the real world of design beyond portfolios, beyond aesthetics, beyond theory.
          </p>
          <button className={styles.ctaButton}>Register Now</button>
        </div>
      </main>

      {/* Sponsors Ticker */}
      <section className={styles.sponsors}>
        <div className={styles.tickerWrapper}>
          <div className={styles.tickerTrack}>
            {[...Array(6)].map((_, index) => (
              <div key={index} className={styles.tickerGroup}>
                <Image src="/logo/nasscom.svg" alt="Nasscom" width={200} height={60} className={styles.sponsorLogo} />
                <Image src="/logo/ksum.png" alt="KSUM" width={160} height={80} className={styles.sponsorLogo} />
              </div>
            ))}
          </div>
        </div>
      </section>

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
              Bridging design education with real-world industry practice.
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
