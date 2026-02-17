import Image from "next/image";
import styles from "./sponsors.module.css";
import Footer from "../components/Footer";

export default function SponsorsPage() {
    return (
        <div className={styles.container}>
            {/* Navbar */}
            <nav className={styles.navbar}>
                <a href="/" className={styles.logo}>
                    <Image src="/assets/logoframe.svg" alt="ADC Logo" width={80} height={40} className={styles.logoImage} />
                </a>
                <div className={styles.navLinks}>
                    <a href="/schedule">Event Schedule</a>
                    <a href="/sponsors">Sponsors</a>
                    <a href="/#contact">Contact us</a>
                </div>
            </nav>

            {/* Hero Section */}
            <section className={styles.hero}>
                {/* Replace placeholder: add your hero image to public/assets/sponsors-hero.jpg */}
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Sponsors &amp; Partners</h1>
                    <p className={styles.heroSubtitle}>
                        Building meaningful collaborations to strengthen industry-academia dialogue.
                        Design Conclave is actively engaging with organizations that believe in
                        bolstering the next generation of designers.
                    </p>
                    <a href="#partner" className={styles.partnerButton}>Become a Partner</a>
                </div>
            </section>

            {/* Partner Announcements Section */}
            <section className={styles.announcementSection}>
                <Image
                    src="/assets/frame118.svg"
                    alt=""
                    width={200}
                    height={400}
                    className={styles.decorLeft}
                />
                <div className={styles.announcementContent}>
                    <h2 className={styles.announcementTitle}>
                        Partner Announcements Coming Soon.....
                    </h2>
                    <p className={styles.announcementText}>
                        We are curating partnerships with organizations that share our commitment to
                        bridging academia and industry. Announcements will be made once
                        collaborations are finalized.
                    </p>
                </div>
                <Image
                    src="/assets/frame118.svg"
                    alt=""
                    width={200}
                    height={400}
                    className={styles.decorRight}
                />
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}
