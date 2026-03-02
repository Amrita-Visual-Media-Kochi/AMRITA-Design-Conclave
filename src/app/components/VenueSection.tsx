import Image from "next/image";
import styles from "./VenueSection.module.css";

export default function VenueSection() {
    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <h2 className={styles.title}>
                        At Amrita Vishwa Vidyapeetham, Kochi
                    </h2>
                    <div className={styles.dateRow}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#333" strokeWidth="1.5">
                            <rect x="2" y="4" width="16" height="14" rx="2" />
                            <path d="M2 8h16M6 2v4M14 2v4" strokeLinecap="round" />
                        </svg>
                        <span className={styles.date}>5th &amp; 6th March</span>
                    </div>
                    <p className={styles.description}>
                        The design conclave will be hosted at the Amrita School of Arts and
                        Sciences, Kochi. The campus offers a professional academic setting
                        equipped with seminar halls, presentation infrastructure, and focused
                        discussion spaces ideal for keynotes, panels, and interactive sessions.
                    </p>
                    <a
                        href="https://maps.app.goo.gl/V3oAdsfHLiEzoTuF9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.button}
                    >
                        Get Directions
                    </a>
                </div>
                <div className={styles.right}>
                    <div className={styles.imageFrame}>
                        <Image
                            src="/assets/images/amrita-campus.jpg"
                            alt="Amrita Vishwa Vidyapeetham, Kochi"
                            fill
                            className={styles.venueImage}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
