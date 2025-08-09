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
      <h1 className="hero-title">M.Noman Alam</h1>
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
        I'm a full-stack developer with a passion for building performant, scalable, and visually appealing web apps.
      </p>
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
      description: "A cool project that solves real problems.",
      link: "https://quizapp-chi-lovat.vercel.app/",
      image: "https://via.placeholder.com/300x180"
    },
    {
      title: "My-Portfolio",
      description: "Another awesome app built with React.",
      link: "https://myportfolio-omega-wine.vercel.app/",
      image: "https://via.placeholder.com/300x180"
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <a key={project.title} href={project.link} className="project-card" target="_blank" rel="noreferrer">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </a>
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
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="mailto:nomanirshad0324@gmail.com">Email</a>
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
