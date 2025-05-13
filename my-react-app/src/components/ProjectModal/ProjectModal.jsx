import { useState, useEffect } from "react";
import "./ProjectModal.scss";

export default function ProjectModal({ project, onClose }) {
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      onClose();
    }, 200);
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="project-modal__overlay" onClick={handleClose}>
      <div
        className={`project-modal ${closing ? "closing" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="project-modal__close" onClick={handleClose}>
          ×
        </button>
        <img src={project.fullImage} alt={project.title} />
        <h2>{project.title}</h2>
        <div className="home__separator"></div>
        <p>{project.description}</p>
        <div className="home__separator"></div>
        <ul>
          {project.tech.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}