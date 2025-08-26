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
        I’m a Frontend Developer skilled in HTML, CSS, JavaScript, and React.js, passionate about building 
        responsive and user-friendly web applications.I love turning ideas into clean, interactive, and engaging digital experiences.
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
Software Engineering student with hands-on frontend development experience in HTML, CSS, JavaScript, 
React, and Node.js. Completed multiple academic projects emphasizing responsive and user-friendly 
interfaces. Currently developing a React-based project, showcasing strong problem-solving skills and 
a passion for building interactive web applications
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
role: "MERN Stack Intern",
company: "Globium Clouds",
year: "2025 - Present",
description: 
  "Developing responsive React applications using Tailwind CSS and Bootstrap, integrating RESTful APIs with Node.js and Express.js, and collaborating on MongoDB-based projects while following best practices in Git and deployment."
    },
    {
role: "Sales Representative",
company: "MStek",
year: "Aug 2023 - Dec 2023",
description: 
  "Assisted clients with product inquiries, built customer relationships, and supported the sales team in achieving monthly targets. Gained experience in communication, negotiation, and customer service."

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
dcfunction Contact() {
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
      {/* <p>© {new Date().getFullYear()} Noman. All rights reserved.</p> */}
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
      link: "https://my-portfolio-five-tau-91.vercel.app/",
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
