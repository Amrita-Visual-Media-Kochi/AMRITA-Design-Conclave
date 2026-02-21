"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        const controlNavbar = () => {
            if (typeof window !== "undefined") {
                const currentScrollY = window.scrollY;

                if (currentScrollY <= 80) {
                    setShow(true);
                } else if (currentScrollY > lastScrollY) {
                    // Scrolling down
                    setShow(false);
                } else {
                    // Scrolling up
                    setShow(true);
                }

                setLastScrollY(currentScrollY);

                // Clear any existing timeout
                if (timeoutId) clearTimeout(timeoutId);

                // Set a new timeout to hide the navbar after 3 seconds of inactivity
                // Only if not at the top of the page and mobile menu is closed
                if (currentScrollY > 80 && !isMenuOpen) {
                    timeoutId = setTimeout(() => {
                        setShow(false);
                    }, 3000);
                }
            }
        };

        window.addEventListener("scroll", controlNavbar);

        return () => {
            window.removeEventListener("scroll", controlNavbar);
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [lastScrollY, isMenuOpen]);

    return (
        <>
            <nav className={`${styles.navbar} ${show ? styles.active : styles.hidden} ${lastScrollY > 50 ? styles.scrolled : ""}`}>
                <Link href="/" className={styles.logo}>
                    <Image src="/assets/icons/adc-logo.svg" alt="ADC Logo" width={80} height={40} className={styles.logoImage} />
                </Link>
                <div className={styles.navLinks}>
                    <Link href="/schedule">Event Schedule</Link>
                    <Link href="/sponsors">Sponsors</Link>
                    <Link href="/contact">Contact us</Link>
                </div>
                <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ""}`}>
                <button className={styles.closeButton} onClick={toggleMenu} aria-label="Close menu">
                    &times;
                </button>
                <Link href="/schedule" onClick={toggleMenu}>Event Schedule</Link>
                <Link href="/sponsors" onClick={toggleMenu}>Sponsors</Link>
                <Link href="/contact" onClick={toggleMenu}>Contact us</Link>
            </div>
        </>
    );
}
