import Image from "next/image";
import styles from "./MeetTheVoices.module.css";

const speakers = [
    { name: "Anoop Ambika", role: "CEO", company: "Kerala Startup Mission" },
    { name: "Kavya Baburaj", role: "Founder", company: "Social PR" },
    { name: "Anil Reddy", role: "Founder and Designer", company: "HappyPot" },
    { name: "Ben Thomas", role: "Creative head", company: "EY" },
    { name: "Advin Netto", role: "UX Designer", company: "Google" },
    { name: "Udaya Kumar", role: "Lead UX Designer", company: "Siemens" },
    { name: "Devika Panicker Prasad", role: "Product Designer", company: "Air India" },
    { name: "Govind Janardhanan", role: "Sr. Director of Design", company: "Natquantum Shift Technologies" },
    { name: "Vijay Raj N", role: "Sr Graphic Designer", company: "Webandcrafts" },
    { name: "Hiran Venugopalan", role: "Product Designer", company: "Tata Communications" },
];

export default function MeetTheVoices() {
    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <div className={styles.headerLine}></div>
                    <h2 className={styles.title}>Meet the voices</h2>
                    <div className={styles.headerLine}></div>
                </div>
                <p className={styles.subtitle}>
                    Hear directly from experts who are actively working in the industry
                    <br />
                    across corporations, studios, startups, and independent practices.
                </p>

                <div className={styles.grid}>
                    {speakers.map((speaker, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <div className={styles.placeholderImage}>
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#bbb" strokeWidth="1.5">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                        <circle cx="12" cy="7" r="4" />
                                    </svg>
                                </div>
                            </div>
                            <div className={styles.info}>
                                <h3 className={styles.name}>{speaker.name}</h3>
                                <p className={styles.role}>{speaker.role}</p>
                                <p className={styles.company}>{speaker.company}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
