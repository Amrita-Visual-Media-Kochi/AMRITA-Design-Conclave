import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer id="contact" className={styles.footer}>
            {/* Rounded box containing CTA + footer links + copyright */}
            <div className={styles.box}>
                {/* CTA area */}
                <div className={styles.ctaArea}>
                    <Image src="/assets/shapes/Vector Star.svg" alt="" width={63} height={63} className={styles.decorTopRight} />
                    <h2 className={styles.ctaTitle}>
                        Be part of the conversation shaping<br />tomorrow&rsquo;s designers.
                    </h2>
                    <Image src="/assets/shapes/Vector (1).svg" alt="" width={63} height={63} className={styles.decorLeftIcon} />
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfU1KuJ8hLbN7cFAVpxaGDLNDk54g6ByO5IzviRra32aJRRFA/viewform?usp=sharing&ouid=109509049660037313569" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>Register now</a>
                    <Image src="/assets/shapes/Vector.svg" alt="" width={53} height={53} className={styles.decorRightIcon} />
                </div>

                {/* Dashed separator */}
                <div className={styles.dashedLine}></div>

                {/* Footer links area */}
                <div className={styles.linksArea}>
                    <div className={styles.leftCol}>
                        <div className={styles.logoRow}>
                            <Image src="/assets/icons/adc-logo.svg" alt="ADC Logo" width={60} height={30} />
                            <span className={styles.logoText}>Amrita Design Conclave</span>
                        </div>
                        <p className={styles.description}>
                            This conclave is built to expose aspiring designers to how design
                            actually functions inside corporations, studios, startups, and
                            freelance ecosystems.
                        </p>
                        <div className={styles.socials}>
                            <a href="https://www.instagram.com/amritadesignconclave26" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={styles.socialIcon}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="2" y="2" width="20" height="20" rx="5" />
                                    <circle cx="12" cy="12" r="5" />
                                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                                </svg>
                            </a>

                            <a href="mailto:amritadesignconclave2026@gmail.com" aria-label="Email" className={styles.socialIcon}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="2" y="4" width="20" height="16" rx="3" />
                                    <path d="M2 7l10 6 10-6" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className={styles.rightCol}>
                        <div className={styles.linkGroup}>
                            <Link href="/about">About</Link>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfU1KuJ8hLbN7cFAVpxaGDLNDk54g6ByO5IzviRra32aJRRFA/viewform?usp=sharing&ouid=109509049660037313569" target="_blank" rel="noopener noreferrer">Register</a>
                            <Link href="/schedule">Schedule</Link>
                        </div>
                        <div className={styles.linkGroup}>
                            <Link href="/speakers">Speakers</Link>
                            <Link href="/sponsors">Sponsors</Link>
                        </div>
                        <div className={styles.linkGroup}>
                            <Link href="/privacy-policy">Privacy policy</Link>
                            <Link href="/terms-and-conditions">Terms and Conditions</Link>
                        </div>
                    </div>
                </div>

                <div className={styles.copyright}>
                    <Image src="/assets/asas_logo.png" alt="ASAS Logo" width={120} height={40} className={styles.asasLogo} />
                    <span>© 2026 Design Conclave. All rights reserved.</span>
                </div>
            </div>

            {/* Gradient watermark - outside the box */}
            <div className={styles.watermark}>
                <Image
                    src="/assets/icons/adc-watermark.svg"
                    alt="ADC"
                    width={800}
                    height={220}
                    className={styles.watermarkImage}
                />
            </div>
        </footer>
    );
}
