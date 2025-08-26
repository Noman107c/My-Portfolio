import React, { useState } from "react";
import Navbar from "./Navbar";

export default function Admin() {
  // ======== STATE ========
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");

  // Skills
  const [skills, setSkills] = useState(["React", "Node.js", "MongoDB"]);
  const [newSkill, setNewSkill] = useState("");

  // Experience
  const [experience, setExperience] = useState([
    { role: "Frontend Developer", company: "ABC Corp", years: "2021-2023" },
  ]);
  const [newRole, setNewRole] = useState("");
  const [newCompany, setNewCompany] = useState("");
  const [newYears, setNewYears] = useState("");

  // Projects
  const [projects, setProjects] = useState([
    { title: "Portfolio Website", link: "https://myportfolio.com" },
  ]);
  const [newProjectTitle, setNewProjectTitle] = useState("");
  const [newProjectLink, setNewProjectLink] = useState("");

  // ======== LOGIN ========
  const handleLogin = (e) => {
    if (e.key === "Enter" && password === "Nomi") {
      setIsLoggedIn(true);
    }
  };

  // ======== ADD HANDLERS ========
  const addSkill = () => {
    if (newSkill.trim()) {
      setSkills([...skills, newSkill]);
      setNewSkill("");
    }
  };

  const addExperience = () => {
    if (newRole && newCompany && newYears) {
      setExperience([
        ...experience,
        { role: newRole, company: newCompany, years: newYears },
      ]);
      setNewRole("");
      setNewCompany("");
      setNewYears("");
    }
  };

  const addProject = () => {
    if (newProjectTitle && newProjectLink) {
      setProjects([
        ...projects,
        { title: newProjectTitle, link: newProjectLink },
      ]);
      setNewProjectTitle("");
      setNewProjectLink("");
    }
  };

  // ======== REMOVE HANDLERS ========
  const removeSkill = (index) =>
    setSkills(skills.filter((_, i) => i !== index));
  const removeExperience = (index) =>
    setExperience(experience.filter((_, i) => i !== index));
  const removeProject = (index) =>
    setProjects(projects.filter((_, i) => i !== index));

  // ======== LOGIN SCREEN ========
  if (!isLoggedIn) {
    return (
      <div className="admin-login">
        <h2>🔑 Admin Login</h2>
        <input
          type="password"
          placeholder="Enter password and press Enter"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleLogin}
        />
      </div>
    );
  }

  // ======== ADMIN DASHBOARD ========
  return (
    <div className="admin-dashboard">
      <h2>📋 Admin Dashboard</h2>

      {/* SKILLS SECTION */}
      <section>
        <h3>🛠 Skills</h3>
        <ul>
          {skills.map((s, i) => (
            <li key={i}>
              {s} <button onClick={() => removeSkill(i)}>❌</button>
            </li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="New Skill"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
        />
        <button onClick={addSkill}>➕ Add Skill</button>
      </section>

      {/* EXPERIENCE SECTION */}
      <section>
        <h3>💼 Experience</h3>
        <ul>
          {experience.map((exp, i) => (
            <li key={i}>
              {exp.role} at {exp.company} ({exp.years}){" "}
              <button onClick={() => removeExperience(i)}>❌</button>
            </li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="Role"
          value={newRole}
          onChange={(e) => setNewRole(e.target.value)}
        />
        <input
          type="text"
          placeholder="Company"
          value={newCompany}
          onChange={(e) => setNewCompany(e.target.value)}
        />
        <input
          type="text"
          placeholder="Years (e.g. 2020-2022)"
          value={newYears}
          onChange={(e) => setNewYears(e.target.value)}
        />
        <button onClick={addExperience}>➕ Add Experience</button>
      </section>

      {/* PROJECTS SECTION */}
      <section>
        <h3>📂 Projects</h3>
        <ul>
          {projects.map((p, i) => (
            <li key={i}>
              <a href={p.link} target="_blank" rel="noopener noreferrer">
                {p.title}
              </a>{" "}
              <button onClick={() => removeProject(i)}>❌</button>
            </li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="Project Title"
          value={newProjectTitle}
          onChange={(e) => setNewProjectTitle(e.target.value)}
        />
        <input
          type="url"
          placeholder="Project Link"
          value={newProjectLink}
          onChange={(e) => setNewProjectLink(e.target.value)}
        />
        <input 
  type="text" 
  placeholder="Project Description" 
  value={description} 
  onChange={(e) => setDescription(e.target.value)} 
/>

        <button onClick={addProject}>➕ Add Project</button>
      </section>
    </div>
  );
}
