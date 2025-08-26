import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Admin from "./component/Admin";
import Navbar from "./component/Navbar";

import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaNodeJs,
  FaGitAlt,
  FaPython,
  FaEnvelope,
} from "react-icons/fa";

import { SiTailwindcss, SiMongodb } from "react-icons/si";

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section id="home" className="hero">
      <p className="hero-subtitle">Hey, I’m</p>
      <h1 className="hero-title">Muhammad Noman Alam</h1>
      <p className="hero-text">
        A full-stack developer passionate about building dynamic, user-friendly web apps.
      </p>
      <a href="#projects" className="hero-button">
        View My Work
      </a>
    </section>
  );
}

/* ---------------- About ---------------- */
function About() {
  const techStack = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Java", icon: <FaJava /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Python", icon: <FaPython /> },
  ];

  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>
        Software Engineering student with frontend development experience using HTML, CSS,
        JavaScript, React, and Node.js. Completed multiple academic projects focused on
        responsive and user-friendly interfaces. Currently working on a React-based project.
      </p>
      <div className="tech-grid">
        {techStack.map((tech) => (
          <div key={tech.name} className="tech-card">
            <span className="tech-icon">{tech.icon}</span>
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Projects ---------------- */
function Projects({ projects }) {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p> {/* ✅ Show description */}
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

/* ---------------- Experience ---------------- */
function Experience() {
  const experiences = [
    {
      role: "MERN Stack (Internship)",
      company: "Globium Clouds",
      year: "2025 - Present",
      description:
        "Developed responsive React applications with Tailwind CSS and Bootstrap.",
    },
    {
      role: "Sales Representative",
      company: "MStek",
      year: "Aug 2023 - Dec 2023",
      description: "Worked as Sales Representative at MStek.",
    },
  ];

  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="tech-card experience-card">
          <h3>
            {exp.role} - <span className="company-name">{exp.company}</span>
          </h3>
          <p className="experience-year">{exp.year}</p>
          <p>{exp.description}</p>
        </div>
      ))}
    </section>
  );
}

/* ---------------- Contact ---------------- */
function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>
        I'd love to hear from you! Fill out the form below or reach me via social
        links.
      </p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <input type="text" placeholder="Subject" required />
        <button type="submit" className="hero-button">
          Send Message
        </button>
      </form>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="https://github.com/Noman107c">
          <FaGithub /> Github
        </a>
        <a href="https://www.linkedin.com/in/muhammad-noman-alam-ba7234379">
          <FaLinkedin /> Linkedin
        </a>
        
        <a href="mailto:nomanirshad0324@gmail.com">
          <FaEnvelope /> Email
        </a>
        <a href="https://wa.me/923429037282">
          <FaWhatsapp /> WhatsApp
        </a>
      </div>
            <p>© {new Date().getFullYear()} Noman. All rights reserved.</p>

    </footer>
  );
}


/* ---------------- App ---------------- */
export default function App() {
  const [projects, setProjects] = useState([
    { 
      title: "QUIZ APP", 
      link: "https://globium-cloud-quiz-app.vercel.app/",
      description: "An interactive quiz platform built with React and Node.js." 
    },
    { 
      title: "My Portfolio", 
      link: "https://my-portfolio-noman.vercel.app/",
      description: "A personal portfolio website showcasing my skills, experience, and projects."
    },
    { 
      title: "Pest Control Website", 
      link: "https://pest-control-eight.vercel.app/",
      description: "A responsive pest control business website designed for customer engagement."
    }
  ]);

  const handleAddProject = (newProject) => {
    setProjects([...projects, newProject]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Portfolio Page */}
        <Route
          path="/"
          element={
            <main className="content">
              <Hero />
              <About />
              <Projects projects={projects} />
              <Experience />
              <Contact />
              <Footer />
            </main>
          }
        />

        {/* Admin Page */}
        <Route
          path="/admin"
          element={<Admin onAddProject={handleAddProject} />}
        />
      </Routes>
    </Router>
  );
}
