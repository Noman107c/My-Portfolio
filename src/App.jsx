import React from "react";
import "./App.css";

// Navbar Component
function Navbar() {
  return (
    <nav className="navbar">
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#experience">Experience</a>
      <a href="#contact">Contact</a>
    </nav>
  );
}

// Hero Section
function Hero() {
  return (
    <section className="hero">
      <p className="hero-subtitle">Hey, I’m</p>
      <h1 className="hero-title">Muhammad Noman Alam</h1>
      <p className="hero-text">
        A full-stack developer passionate about building dynamic, user-friendly web apps.
      </p>
      <a href="#projects" className="hero-button">View My Work</a>
    </section>
  );
}

// About Section
function About() {
  const techStack = [
    { name: "HTML" },
    { name: "CSS" },
    { name: "JavaScript" },
    { name: "React" },
    { name: "Java" },
    { name: "Tailwind" },
    { name: "Node.js" },
    { name: "Git" },
    { name: "Python" },
    { name: "Machine Learning" },
  ];

  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>
        Software Engineering student with frontend development experience using HTML, CSS,
        JavaScript, React, and Node.js. Completed multiple academic projects focused on
        responsive and user-friendly interfaces. Currently working on a React-based project.      </p>
      <div className="tech-grid">
        {techStack.map((tech) => (
          <div key={tech.name} className="tech-card">
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

// Projects Section
function Projects() {
  const projects = [
    {
      title: "QUIZ APP",
      link: "https://globium-cloud-quiz-app.vercel.app/",
    },
    {
      title: "My-Portfolio",
      link: "https://my-portfolio-noman.vercel.app/",
}
      
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a 
              href={project.link} 
              className="project-button" 
              target="_blank" 
              rel="noreferrer"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

// Experience Section
function Experience() {
  const experiences = [
    {
      role: "Mern Stack (Internship)",
      company: "Globium Clouds",
      year: "2025 - Present",
      description: "Developed responsive React applications with Tailwind CSS and Bootstrap."
    },
    {
      role: "Sales Representative",
      company: "MStek",
      year: "Aug, 2023 - Dec, 2023",
      description: "Sales Representative at MStek.",
    }
  ];

  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="tech-card experience-card">
          <h3>{exp.role} - <span className="company-name">{exp.company}</span></h3>
          <p className="experience-year">{exp.year}</p>
          <p>{exp.description}</p>
        </div>
      ))}
    </section>
  );
}

// Contact Section
function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>I'd love to hear from you! Fill out the form below or reach me via social links.</p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit" className="hero-button">Send Message</button>
      </form>
      <div className="contact-info text-center mt-8">

</div>

    </section>
    
  );
}

// Footer
function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Noman. All rights reserved.</p>
      <div className="footer-links">
        <a href="https://github.com/Noman107c" target="Github" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/muhammad-noman-alam-ba7234379?utm_source=share&utm_campaign=share_via&utm_content=
                        profile&utm_medium=android_app" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="mailto:nomanirshad0324@gmail.com">Email</a>
        <a href="https://wa.me/923429037282 " target="_blank" rel="noreferrer">whatsapp</a>
      </div>
      
    </footer>
  );
}

// Main App
export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="content">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}



