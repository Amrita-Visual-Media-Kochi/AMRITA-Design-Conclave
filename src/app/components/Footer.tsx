import Image from "next/image";
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
                    <button className={styles.ctaButton}>Register now</button>
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
                            <a href="#" aria-label="Instagram" className={styles.socialIcon}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="2" y="2" width="20" height="20" rx="5" />
                                    <circle cx="12" cy="12" r="5" />
                                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                                </svg>
                            </a>
                            <a href="#" aria-label="LinkedIn" className={styles.socialIcon}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="2" y="2" width="20" height="20" rx="5" />
                                    <path d="M8 11v5M8 8v.01M12 16v-5c0-1 1-2 2-2s2 1 2 2v5" />
                                </svg>
                            </a>
                            <a href="#" aria-label="Email" className={styles.socialIcon}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="2" y="4" width="20" height="16" rx="3" />
                                    <path d="M2 7l10 6 10-6" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className={styles.rightCol}>
                        <div className={styles.linkGroup}>
                            <a href="#">About</a>
                            <a href="#">Register</a>
                            <a href="#">Schedule</a>
                        </div>
                        <div className={styles.linkGroup}>
                            <a href="#">Speakers</a>
                            <a href="#">Sponsors</a>
                        </div>
                        <div className={styles.linkGroup}>
                            <a href="#">Privacy policy</a>
                            <a href="#">Terms and Conditions</a>
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
