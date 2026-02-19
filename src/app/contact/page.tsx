import Image from "next/image";
import styles from "./contact.module.css";
import Footer from "../components/Footer";

export default function ContactPage() {
    return (
        <div className={styles.container}>
            {/* Navbar */}
            <nav className={styles.navbar}>
                <a href="/" className={styles.logo}>
                    <Image src="/assets/icons/adc-logo.svg" alt="ADC Logo" width={80} height={40} className={styles.logoImage} />
                </a>
                <div className={styles.navLinks}>
                    <a href="/schedule">Event Schedule</a>
                    <a href="/sponsors">Sponsors</a>
                    <a href="/contact">Contact us</a>
                </div>
            </nav>

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Contact us</h1>
                </div>
            </section>

            {/* Content Section */}
            <section className={styles.contentSection}>
                <div className={styles.contentContainer}>
                    {/* Left Column: Info */}
                    <div className={styles.infoColumn}>
                        <h2 className={styles.infoTitle}>
                            For Queries &<br />Collaborations
                        </h2>
                        <p className={styles.infoText}>
                            For sponsorship discussions, institutional partnerships, media coverage,
                            speaker inquiries, or any clarifications regarding the event, the organizing team
                            can be reached through the details below.
                        </p>
                        <p className={styles.infoText}>
                            We welcome meaningful collaborations aligned with the vision of Design Conclave.
                        </p>

                        <div className={styles.contactIcons}>
                            {/* Email Icon */}
                            <a href="mailto:designconclave@amrita.edu" className={styles.iconButton}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                </svg>
                            </a>
                            {/* Phone Icon */}
                            <a href="tel:+911234567890" className={styles.iconButton}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                            </a>
                            {/* Instagram Icon */}
                            <a href="#" className={styles.iconButton}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className={styles.formColumn}>
                        <form>
                            <div className={styles.formGrid}>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>First name</label>
                                    <input type="text" placeholder="Enter your first name" className={styles.input} />
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Last name</label>
                                    <input type="text" placeholder="Enter your last name" className={styles.input} />
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>Email</label>
                                <input type="email" placeholder="Enter your email address" className={styles.input} />
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>How can we help you?</label>
                                <textarea placeholder="Enter your message" className={styles.input} rows={4}></textarea>
                            </div>

                            <button type="submit" className={styles.submitButton}>Send message</button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}
