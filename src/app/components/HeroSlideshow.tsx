"use client";

import { useState, useEffect } from "react";
import styles from "../page.module.css";
import { AnimatePresence, motion } from "framer-motion";

const slides = [
    {
        title: "Welcome to the\nConfluence of Creativity",
        subtitle: "A two day immersive conclave bringing students, designers, and industry professionals together to confront the real world of design beyond portfolios, beyond aesthetics, beyond theory.",
        image: "/assets/backgrounds/hero-bg.png"
    },
    {
        title: "Real Conversations.\nReal Practice.",
        subtitle: "Keynotes, panel discussions, workshops, and research presentations designed to expose the realities of working in design.",
        image: "/assets/backgrounds/hero-bg-2.jpg"
    },
    {
        title: "Built for Future\nDesigners",
        subtitle: "Created for students and aspiring designers seeking clarity before entering the industry.",
        image: "/assets/backgrounds/hero-bg-3.jpg"
    }
];

export default function HeroSlideshow() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <main className={styles.hero}>
            <div className={styles.heroBgContainer}>
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={currentSlide}
                        className={styles.heroBgImage}
                        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                    />
                </AnimatePresence>
            </div>

            <div className={styles.heroContent}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
                    >
                        <h1 className={styles.heroTitle} style={{ whiteSpace: "pre-line" }}>
                            {slides[currentSlide].title}
                        </h1>
                        <p className={styles.heroSubtitle}>
                            {slides[currentSlide].subtitle}
                        </p>
                    </motion.div>
                </AnimatePresence>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfU1KuJ8hLbN7cFAVpxaGDLNDk54g6ByO5IzviRra32aJRRFA/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>Register Now</a>
            </div>

            <div className={styles.slideshowIndicators}>
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`${styles.indicator} ${index === currentSlide ? styles.indicatorActive : ''}`}
                        onClick={() => setCurrentSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </main>
    );
}
