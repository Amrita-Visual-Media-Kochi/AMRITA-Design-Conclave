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
        const controlNavbar = () => {
            if (typeof window !== "undefined") {
                if (window.scrollY > lastScrollY && window.scrollY > 80) {
                    // if scroll down hide the navbar
                    setShow(false);
                } else {
                    // if scroll up show the navbar
                    setShow(true);
                }
                setLastScrollY(window.scrollY);
            }
        };

        window.addEventListener("scroll", controlNavbar);

        // cleanup function
        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, [lastScrollY]);

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
