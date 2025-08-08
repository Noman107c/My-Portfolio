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
    { name: "Next.js" },
    { name: "Tailwind" },
    { name: "Node.js" },
    { name: "Git" },
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
      // image: "C:\Users\Administrator\Desktop\my-portfolio\my-portfolio\quizap.png",
      link: "https://quizapp-chi-lovat.vercel.app/"
    },
    {
      title: "Project Two",
      description: "Another awesome app built with React.",
      // image: "/images/project2.gif",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <a key={project.title} href={project.link} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} M. Noman. All rights reserved.</p>
      <div className="footer-links">
        <a href="https://github.com/Noman107c" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="nomanirshad0324gmail.com">Email</a>
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
        <Footer />
      </main>
    </div>
  );
}
