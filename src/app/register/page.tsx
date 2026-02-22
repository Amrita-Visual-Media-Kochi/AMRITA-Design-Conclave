"use client";

import Image from "next/image";
import styles from "../misc.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Register() {
    return (
        <div className={styles.container}>
            <Navbar />

            <main className={styles.hero}>
                <div className={styles.blob1}></div>

                <Image
                    src="/assets/shapes/Vector (1).svg"
                    alt="Graphic"
                    width={50}
                    height={50}
                    className={styles.floatingIcon2}
                />

                <h1 className={styles.heroTitle}>Register Now</h1>
                <p className={styles.heroSubtitle}>
                    Secure your spot at the Amrita Design Conclave. Join hundreds of other designers for two days of uncompromising insight.
                </p>
            </main>

            <section className={styles.contentWrapper}>
                <div className={styles.content} style={{ textAlign: 'center' }}>
                    <h2>Admissions Opening Soon.</h2>
                    <p>We are currently finalizing our speaker lineup and workshop schedules. Registration links along with early-bird ticketing will be made available on this page shortly.</p>
                    <br />
                    <a href="/" className={styles.returnButton}>Return to Homepage</a>
                </div>
            </section>

            <Footer />
        </div>
    );
}
