import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaCode, FaBriefcase, FaEnvelope, FaBars } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Hamburger Icon (hidden on desktop, shown only on mobile) */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <FaBars />
      </div>

      {/* Links */}
      <ul className={`nav-links ${open ? "active" : ""}`}>
        <li><Link to="/"><FaHome /> Home</Link></li>
        <li><a href="#about"><FaUser /> About</a></li>
        <li><a href="#projects"><FaCode /> Projects</a></li>
        <li><a href="#experience"><FaBriefcase /> Experience</a></li>
        <li><a href="#contact"><FaEnvelope /> Contact</a></li>
      </ul>
    </nav>
  );
}
