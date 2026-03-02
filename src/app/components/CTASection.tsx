import Image from "next/image";
import styles from "./CTASection.module.css";

export default function CTASection() {
    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <Image src="/shapes/Vector Star.svg" alt="" width={48} height={48} className={styles.decorTopRight} />
                    <h2 className={styles.title}>
                        Be part of the conversation shaping tomorrow&rsquo;s designers.
                    </h2>
                    <Image src="/shapes/Vector (1).svg" alt="" width={48} height={48} className={styles.decorLeftIcon} />
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfU1KuJ8hLbN7cFAVpxaGDLNDk54g6ByO5IzviRra32aJRRFA/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className={styles.button}>Register Now</a>
                    <Image src="/shapes/Vector.svg" alt="" width={40} height={40} className={styles.decorRightIcon} />
                </div>
            </div>
        </section>
    );
}
