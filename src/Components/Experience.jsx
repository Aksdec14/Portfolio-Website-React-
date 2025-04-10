import React from 'react';
import './ExperienceCSS.css'; // Assuming you have a CSS file for styling

const Experience = () => {
    return (
        <section>
            <h1 data-aos="fade-right" className="animate__animated animate__fadeInRight">📋 Experience</h1>

            {/* Happy Employees */}
            <div id="experience-happy-employees" data-aos="fade-up" data-aos-delay="100">
                <h2 data-aos="zoom-in">🧑‍💼 Management Trainee – Happy Employees</h2>
                <p data-aos="fade-up"><strong>Location:</strong> Noida, India</p>
                <p data-aos="fade-up"><strong>Duration:</strong> February 2025 – Present</p>
                <ul data-aos="fade-up">
                    <li>Managed data and improved communication with artists and clients.</li>
                    <li>Created optimized communication strategies for audience engagement.</li>
                    <li>Coordinated logistics for meetings, events, and corporate workshops.</li>
                    <li>Contributed to project planning and performance tracking.</li>
                    <li>Performed market research and provided trend-based insights.</li>
                </ul>
            </div>

            {/* CodSoft */}
            <div id="experience-codsoft" data-aos="fade-up" data-aos-delay="200">
                <h2 data-aos="zoom-in">💻 Front-End Intern – CodSoft</h2>
                <p data-aos="fade-up"><strong>Location:</strong> Kolkata, West Bengal</p>
                <p data-aos="fade-up"><strong>Duration:</strong> October 2025 – December 2025</p>
                <ul data-aos="fade-up">
                    <li>Collaborated with developers to build UI components.</li>
                    <li>Translated design specs into responsive, accessible interfaces.</li>
                    <li>Worked with HTML, CSS, and JavaScript on real client projects.</li>
                    <li>Gained hands-on experience with frontend development workflows.</li>
                </ul>
            </div>

            {/* Personal Projects */}
            <div id="experience-personal-projects" data-aos="fade-up" data-aos-delay="300">
                <h2 data-aos="zoom-in">🛠️ Front-End Developer – Personal Projects</h2>
                <p data-aos="fade-up"><strong>Location:</strong> Noida, India</p>
                <p data-aos="fade-up"><strong>Duration:</strong> March 2024 – April 2025</p>
                <ul data-aos="fade-up">
                    <li>Developed a Career Guidance Website with real-time job APIs and quiz-based guidance.</li>
                    <li>Built a Cooking Recipe App using external APIs for dynamic recipe discovery.</li>
                    <li>Created a React-based Password Generator with custom rules and clipboard copy.</li>
                    <li>Currently enhancing an AI Chatbot with TensorFlow.js for smarter interactions.</li>
                </ul>
            </div>
        </section>
    );
};

export default Experience;
