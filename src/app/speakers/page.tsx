"use client";

import Image from "next/image";
import styles from "../misc.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MeetTheVoices from "../components/MeetTheVoices";

export default function Speakers() {
    return (
        <div className={styles.container}>
            <Navbar />

            <main className={styles.hero} style={{ minHeight: '40vh', paddingBottom: '0' }}>
                <div className={styles.blob1}></div>

                <Image
                    src="/assets/shapes/Vector Star.svg"
                    alt="Star"
                    width={40}
                    height={40}
                    className={styles.floatingIcon3}
                />

                <h1 className={styles.heroTitle}>Our Speakers</h1>
                <p className={styles.heroSubtitle}>
                    Industry veterans, startup founders, and design leaders bringing their real-world experience directly to you.
                </p>
            </main>

            <MeetTheVoices />

            <Footer />
        </div>
    );
}
