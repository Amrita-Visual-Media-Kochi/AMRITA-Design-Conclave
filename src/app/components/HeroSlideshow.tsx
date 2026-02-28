"use client";

import { useState, useEffect } from "react";
import styles from "../page.module.css";
import { AnimatePresence, motion } from "framer-motion";

const slides = [
    {
        title: "Welcome to the\nConfluence of Creativity",
        subtitle: "A two day immersive conclave bringing students, designers, and industry professionals together to confront the real world of design beyond portfolios, beyond aesthetics, beyond theory."
    },
    {
        title: "Real Conversations.\nReal Practice.",
        subtitle: "Keynotes, panel discussions, workshops, and research presentations designed to expose the realities of working in design."
    },
    {
        title: "Built for Future\nDesigners",
        subtitle: "Created for students and aspiring designers seeking clarity before entering the industry."
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
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    className={styles.heroContent}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className={styles.heroTitle} style={{ whiteSpace: "pre-line" }}>
                        {slides[currentSlide].title}
                    </h1>
                    <p className={styles.heroSubtitle}>
                        {slides[currentSlide].subtitle}
                    </p>
                    <button className={styles.ctaButton}>Register Now</button>
                </motion.div>
            </AnimatePresence>

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
