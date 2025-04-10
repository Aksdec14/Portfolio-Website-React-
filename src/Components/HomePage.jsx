import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
import './HomePagecss.css';

const HomePage = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true,
        });
    }, []);

    return (
        <>
            {/* Header */}
            <header className="header" data-aos="fade-down">
                <div className="header-content">
                    <div className="intro-text">
                        <h1>Akshat Shukla</h1>
                        <h2>Front End Developer</h2>
                    </div>
                </div>
            </header>

            {/* About Me */}
            <section>
                <h1>👨‍💻 About Me</h1>
                <div id="about" data-aos="fade-up">
                    <p>
                        Hi, I'm Akshat Shukla, a passionate Front-End Developer based in Noida with expertise in HTML, CSS, JavaScript, React, and Tailwind CSS. I focus on building responsive, user-friendly interfaces and have hands-on experience with API integration and deployment using Vercel and Render.
                    </p>
                    <p>
                        I’ve developed projects like a Career Guidance Website with real-time job listings and a Cooking Recipe App that fetches recipes based on user input. I'm currently enhancing an AI chatbot with TensorFlow.js to offer more intelligent interaction.
                    </p>
                    <p>
                        I'm interning at Happy Employees as a Management Trainee, handling data management, client communication, and market research. I also interned at CodSoft, gaining real-world experience in front-end development.
                    </p>
                    <p>
                        I hold a B.Tech in Computer Science and Engineering from Galgotias University, and I’m certified in Power BI, Business Analysis, Full Stack Development, and AI Tools including ChatGPT.
                    </p>
                    <h3>Skills & Tools:</h3>
                    <p>HTML, CSS, JavaScript, React.js, Node.js, Tailwind, Bootstrap</p>
                </div>
            </section>

            {/* Projects Section */}
            <section>
                <h1
                    className="animate__animated animate__bounce"
                    data-aos="fade-down"
                    data-aos-once="false"
                    data-aos-duration="800"
                >
                    🧩 Projects
                </h1>

                <div className="project-grid">
                    {/* Project 1 */}
                    <div className="project-card" data-aos="fade-up" data-aos-delay="100">
                        <h2>🎯 Career Guidance Website</h2>
                        <div className="project-details">
                            <p>
                                A quiz-based career guidance platform that also fetches real-time job listings via external APIs.
                            </p>
                            <p><strong>Tech Stack:</strong> React, Node.js, Express, Tailwind CSS, REST API</p>
                            <p><strong>Live Demo:</strong> <a href="https://career-guidance-2.vercel.app/">Link</a></p>
                            <p><strong>GitHub:</strong> <a href="https://github.com/Aksdec14/Career_Guidance">Repository</a></p>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="project-card" data-aos="fade-up" data-aos-delay="200">
                        <h2>🍳 Cooking Recipe App</h2>
                        <div className="project-details">
                            <p>
                                Enter ingredients and fetch matching recipes using an external recipe API.
                            </p>
                            <p><strong>Tech Stack:</strong> HTML, CSS, JavaScript, Fetch API, Vercel</p>
                            <p><strong>Live Demo:</strong> <a href="https://cooking-website-ochre.vercel.app/">Link</a></p>
                            <p><strong>GitHub:</strong> <a href="https://github.com/Aksdec14/Cooking-WebSite-Basic-Project-4">Repository</a></p>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="project-card" data-aos="fade-up" data-aos-delay="300">
                        <h2>🔐 Password Generator App</h2>
                        <div className="project-details">
                            <p>
                                Customizable password generator with adjustable length and character types.
                            </p>
                            <p><strong>Tech Stack:</strong> React, Tailwind CSS, Vite</p>
                            <p><strong>Live Demo:</strong> <a href="https://github.com/Aksdec14/React-Basic-Project-">Link</a></p>
                            <p><strong>GitHub:</strong> <a href="https://github.com/Aksdec14/React-Basic-Project-">Repository</a></p>
                        </div>
                    </div>

                    {/* Project 4 */}
                    <div className="project-card" data-aos="fade-up" data-aos-delay="400">
                        <h2>🤖 AI Chatbot</h2>
                        <div className="project-details">
                            <p>
                                A chatbot using vanilla JS, now being enhanced with TensorFlow.js for intelligent conversation.
                            </p>
                            <p><strong>Tech Stack:</strong> HTML, CSS, JavaScript, TensorFlow.js (in progress)</p>
                            <p><strong>Live Demo:</strong> <a href="https://github.com/Aksdec14/Chat-Bot-Basic-Project-2">Link</a></p>
                            <p><strong>GitHub:</strong> <a href="https://github.com/Aksdec14/Chat-Bot-Basic-Project-2">Repository</a></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;
