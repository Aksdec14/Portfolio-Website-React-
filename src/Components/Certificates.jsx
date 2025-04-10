// Certificates.jsx
import './CertificatesCSS.css';

const certificates = [
    {
        title: "Power BI",
        provider: "Udemy",
        year: "2024",// Replace with actual link
    },
    {
        title: "Business Analyst",
        provider: "Tata and Forge",
        year: "2024",
    },
    {
        title: "ChatGPT and AI Tools",
        provider: "Udemy",
        year: "2025",

    },
    {
        title: "Web Full Stack Developer",
        provider: "AICTE",
        year: "2025",
    },
    {
        title: "Generative AI by Microsoft and LinkedIn",
        provider: "Microsoft and LinkedIn",
        year: "2024",// Replace with actual URL if available
    },
    {
        title: "Hackathon - Build with India",
        provider: "Build with India",
        year: "2024",
    },
];

const Certificates = () => {
    return (
        <section className="certificates-section" data-aos="fade-up">
            <h2 className="certificates-title">Certificates</h2>
            <div className="certificates-grid" data-aos="fade-up">
                {certificates.map((cert, index) => (
                    <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="certificate-card"
                        key={index}
                    >
                        <h3>{cert.title}</h3>
                        <p className="cert-provider">{cert.provider}</p>
                        <p className="cert-date">{cert.year}</p>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Certificates;
