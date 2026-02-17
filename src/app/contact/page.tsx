import Image from "next/image";
import styles from "./contact.module.css";
import Footer from "../components/Footer";

export default function ContactPage() {
    return (
        <div className={styles.container}>
            {/* Navbar */}
            <nav className={styles.navbar}>
                <a href="/" className={styles.logo}>
                    <Image src="/assets/logoframe.svg" alt="ADC Logo" width={80} height={40} className={styles.logoImage} />
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
                    <h1 className={styles.heroTitle}>Contact Us</h1>
                    <p className={styles.heroSubtitle}>
                        Have questions or want to collaborate? We'd love to hear from you.
                        Reach out to the Amrita Design Conclave team for any inquiries.
                    </p>
                </div>
            </section>

            {/* Content Section (Matches Announcement Section Style) */}
            <section className={styles.contentSection}>
                {/* Decor images if desired, currently hidden in CSS but structure kept for parity */}
                {/* 
                <Image
                    src="/assets/frame118.svg"
                    alt=""
                    width={200}
                    height={400}
                    className={styles.decorLeft}
                />
                */}

                <div className={styles.contactInfo}>
                    <div className={styles.infoBlock}>
                        <h3>General Inquiries</h3>
                        <p>Email: designconclave@amrita.edu</p>
                        <p>Phone: +91 123 456 7890</p>
                    </div>

                    <div className={styles.infoBlock}>
                        <h3>Location</h3>
                        <p>
                            Amrita Vishwa Vidyapeetham,<br />
                            Amritapuri Campus,<br />
                            Clappana P.O., Kollam - 690525,<br />
                            Kerala, India
                        </p>
                    </div>

                    <div className={styles.infoBlock}>
                        <h3>Socials</h3>
                        <p>Follow us for updates on Instagram, LinkedIn, and Twitter.</p>
                    </div>
                </div>

                <div className={styles.formContainer}>
                    <h3>Send us a message</h3>
                    <p style={{ marginTop: '1rem', color: '#666' }}>
                        (Form integration coming soon)
                    </p>
                    {/* Placeholder for form fields */}
                    <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <input type="text" placeholder="Name" style={{ padding: '0.75rem', border: '1px solid #ddd', borderRadius: '0.5rem' }} />
                        <input type="email" placeholder="Email" style={{ padding: '0.75rem', border: '1px solid #ddd', borderRadius: '0.5rem' }} />
                        <textarea placeholder="Message" rows={4} style={{ padding: '0.75rem', border: '1px solid #ddd', borderRadius: '0.5rem' }}></textarea>
                        <button style={{
                            padding: '0.75rem 2rem',
                            background: '#000',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '0.5rem',
                            cursor: 'pointer',
                            fontWeight: '600'
                        }}>Send Message</button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}
