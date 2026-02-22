"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./misc.module.css";
import Navbar from "./components/Navbar";

export default function NotFound() {
    return (
        <div className={styles.container}>
            <Navbar />

            <main className={styles.hero}>
                <div className={styles.blob1}></div>
                <div className={styles.blob2}></div>

                <Image
                    src="/assets/shapes/Vector Star.svg"
                    alt="Star"
                    width={60}
                    height={60}
                    className={styles.floatingIcon1}
                />

                <Image
                    src="/assets/shapes/Vector (1).svg"
                    alt="Shape"
                    width={50}
                    height={50}
                    className={styles.floatingIcon2}
                />

                <Image
                    src="/assets/shapes/Vector.svg"
                    alt="Sparkle"
                    width={40}
                    height={40}
                    className={styles.floatingIcon3}
                />

                <h1 className={styles.heroTitle}>404 — Page Missing</h1>
                <p className={styles.heroSubtitle}>
                    The design file you are looking for seems to have been deleted or moved to another folder. Don't worry, we can get you back on track.
                </p>

                <Link href="/" className={styles.returnButton}>
                    Return to Hub
                </Link>
            </main>
        </div>
    );
}
