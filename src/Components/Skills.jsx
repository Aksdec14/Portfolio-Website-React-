// Skills.jsx
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import './SkillsCSS.css'; // Optional: for your custom CSS

const Skills = () => {
    const skills = [
        { icon: <FaHtml5 />, label: 'HTML' },
        { icon: <FaCss3Alt />, label: 'CSS' },
        { icon: <FaJsSquare />, label: 'JavaScript' },
        { icon: <FaReact />, label: 'React' },
        { icon: <FaNodeJs />, label: 'Node.js' },
        { icon: <SiTailwindcss />, label: 'Tailwind' },
    ];

    return (
        <section className="skills-section" data-aos="zoom-in">
            <h2 className="skills-title">Skills</h2>
            <div className="skills-grid" data-aos="fade-up">
                {skills.map((skill, index) => (
                    <div className="skill-card" data-aos="fade-up" key={index}>
                        <div className="skill-icon" data-aos="fade-up">{skill.icon}</div>
                        <p className="skill-label" data-aos="fade-up">{skill.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
