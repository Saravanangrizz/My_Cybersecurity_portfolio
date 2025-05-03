import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Password Strength Checker",
    description: "Checks password strength in real-time, highlights weak patterns using platform-specific analysis.",
    tech: "React, Flask, Python, Bootstrap",
    link: "#"
  },
  {
    title: "Log Analysis Tool",
    description: "Web-based tool that analyzes logs for suspicious patterns and security threats in real time.",
    tech: "Flask, Socket.IO, React, Matplotlib, MySQL",
    link: "#"
  },
  {
    title: "Simple Network Scanner",
    description: "Scans local networks and detects active hosts; stores results in a PostgreSQL database.",
    tech: "Flask, React, Render PostgreSQL",
    link: "#"
  }
];

const Projects = () => {
  return (
    <div className="projects-page">
      <h1 className="projects-title">Cybersecurity Projects</h1>
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <div className="project-card" key={idx}>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <p><strong>Technologies:</strong> {proj.tech}</p>
            <a href={proj.link} target="_blank" rel="noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
