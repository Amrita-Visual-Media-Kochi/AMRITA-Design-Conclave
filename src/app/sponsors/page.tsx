import Image from "next/image";
import styles from "./sponsors.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function SponsorsPage() {
    return (
        <div className={styles.container}>
            <Navbar />

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

            {/* Association Section */}
            <section className={styles.associationSection}>
                <h2 className={styles.associationTitle}>In association with</h2>
                <div className={styles.associationLogos}>
                    <Image
                        src="/logo/nasscom.svg"
                        alt="Nasscom AI Logo"
                        width={375}
                        height={120}
                        className={styles.associationLogo}
                    />
                    <Image
                        src="/logo/ksum.png"
                        alt="Kerala Startup Mission Logo"
                        width={300}
                        height={150}
                        className={styles.associationLogo}
                    />
                </div>
            </section>

            {/* Partner Announcements Section }
            <section className={styles.announcementSection}>
                <Image
                    src="/assets/images/frame-decoration.svg"
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
                    src="/assets/images/frame-decoration.svg"
                    alt=""
                    width={200}
                    height={400}
                    className={styles.decorRight}
                />
            </section>
            {*/}

            {/* Footer */}
            <Footer />
        </div>
    );
}
