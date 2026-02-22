"use client";

import Image from "next/image";
import styles from "../misc.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
    return (
        <div className={styles.container}>
            <Navbar />

            <main className={styles.hero} style={{ minHeight: '40vh' }}>
                <div className={styles.blob1}></div>

                <Image
                    src="/assets/shapes/Vector Star.svg"
                    alt="Star"
                    width={60}
                    height={60}
                    className={styles.floatingIcon1}
                />

                <h1 className={styles.heroTitle}>Privacy Policy</h1>
                <p className={styles.heroSubtitle}>
                    Your data and privacy, outlined.
                </p>
            </main>

            <section className={styles.contentWrapper}>
                <div className={styles.content}>
                    <h2>1. Information we collect</h2>
                    <p>We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, place an order, fill out a form, respond to a survey, subscribe to the newsletter and in connection with other activities.</p>

                    <h2>2. How we use collected information</h2>
                    <p>Any of the information we collect from you may be used in one of the following ways:</p>
                    <ul>
                        <li>To personalize User experience.</li>
                        <li>To improve our Site.</li>
                        <li>To process payments and registrations.</li>
                        <li>To send periodic emails and updates regarding the event.</li>
                    </ul>

                    <h2>3. How we protect your information</h2>
                    <p>We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.</p>
                </div>
            </section>

            <Footer />
        </div>
    );
}
