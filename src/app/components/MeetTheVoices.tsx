import Image from "next/image";
import styles from "./MeetTheVoices.module.css";

const speakers = [
    {
        name: "Anoop Ambika",
        role: "CEO",
        company: "Kerala Startup Mission",
        image: "/people/Anoop Ambika.jpg"
    },
    {
        name: "Kavya Baburaj",
        role: "Founder & CEO",
        company: "Social PR, Kochi",
        image: "/people/Kavya Baburaj.png"
    },
    {
        name: "Anil Reddy",
        role: "Founder & Designer",
        company: "Happy Pet, Bengaluru",
        image: "/people/Anil Reddy.png"
    },
    {
        name: "Dr. Saikat Saha",
        role: "Technology Director",
        company: "NASCOMM AI",
        image: "/people/Saikat Saha.jpg"
    },
    {
        name: "Ben Thomas Palamoottil",
        role: "Senior Art Director",
        company: "EY, Kochi",
        image: "/people/Ben Thomas.jpeg"
    },
    {
        name: "Advin Netto",
        role: "UX Designer",
        company: "Google, Bengaluru",
        image: "/people/Advin Netto.png"
    },
    {
        name: "Uday Kumar",
        role: "UX Designer",
        company: "Siemens, Bengaluru",
        image: "/people/Udaya Kumar.png"
    },
    {
        name: "Devika Panicker Prasad",
        role: "Product Designer",
        company: "Air India, Kochi",
        image: "/people/Devika Panicker Prasad.png"
    },
    {
        name: "Govind Janardhan",
        role: "Senior Director Design Excellence and Technology At",
        company: "Nxtquantum Shift Technologies, New Delhi",
        image: "/people/Govind Janardhanan.png"
    },
    {
        name: "Vijay Raj N",
        role: "Senior Creative Designer",
        company: "Webandcrafts, Kochi",
        image: "/people/Vijay Raj N.jpeg"
    },
    {
        name: "Hiran Venugopalan",
        role: "Product Designer",
        company: "Tata Communications, Bengaluru",
        image: "/people/Hiran Venugopalan.png"
    },
    {
        name: "Sunil Prabhakar",
        role: "Consultant in AI and",
        company: "Digital Practices",
        image: "/people/Sunil Prabhakar.png"
    },
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
                    Hear directly from experts who are actively working in the industry across corporations, studios, startups, and independent practices.
                </p>

                <div className={styles.grid}>
                    {speakers.map((speaker, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                {speaker.image ? (
                                    <Image
                                        src={speaker.image}
                                        alt={speaker.name}
                                        fill
                                        className={styles.speakerImage}
                                        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                    />
                                ) : (
                                    <div className={styles.placeholderImage}></div>
                                )}
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
