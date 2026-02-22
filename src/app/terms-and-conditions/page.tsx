"use client";

import Image from "next/image";
import styles from "../misc.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TermsAndConditions() {
    return (
        <div className={styles.container}>
            <Navbar />

            <main className={styles.hero} style={{ minHeight: '40vh' }}>
                <div className={styles.blob2}></div>

                <Image
                    src="/assets/shapes/Vector (1).svg"
                    alt="Star"
                    width={50}
                    height={50}
                    className={styles.floatingIcon2}
                />

                <h1 className={styles.heroTitle}>Terms & Conditions</h1>
                <p className={styles.heroSubtitle}>
                    The legal framework surrounding your attendance and interaction with our program.
                </p>
            </main>

            <section className={styles.contentWrapper}>
                <div className={styles.content}>
                    <h2>1. Agreement to Terms</h2>
                    <p>By purchasing a ticket or attending any event hosted by Amrita Design Conclave, you agree to be bound by these terms and conditions. If you do not agree with any part of these terms, you may not attend the event.</p>

                    <h2>2. Event Attendance</h2>
                    <p>The organizers reserve the right to refuse admission or to eject any person whose conduct is deemed by management to be disorderly, who uses vulgar or abusive language, or who fails to comply with these rules.</p>

                    <h2>3. Refunds and Cancellations</h2>
                    <ul>
                        <li>All ticket sales are final and non-refundable unless the event is cancelled in its entirety.</li>
                        <li>In the event of a cancellation, ticket holders will be offered a full refund.</li>
                    </ul>

                    <h2>4. Photography & Recording</h2>
                    <p>By attending the event, you consent to interview(s), photography, audio recording, video recording and its/their release to be used for news, web casts, promotional purposes, telecasts, advertising, inclusion on websites, social media, or any other purpose by Amrita Design Conclave and its affiliates.</p>
                </div>
            </section>

            <Footer />
        </div>
    );
}
