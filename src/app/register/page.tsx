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
                    <h2>Admissions are now open.</h2>
                    <p>Register securely through our official Google Form to secure your spot at the conclave.</p>
                    <br />
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfU1KuJ8hLbN7cFAVpxaGDLNDk54g6ByO5IzviRra32aJRRFA/viewform?usp=sharing&ouid=109509049660037313569" target="_blank" rel="noopener noreferrer" className={styles.returnButton}>Complete Google Form</a>
                </div>
            </section>

            <Footer />
        </div>
    );
}
