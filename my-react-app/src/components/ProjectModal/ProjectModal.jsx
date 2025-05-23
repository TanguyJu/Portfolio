import { useState, useEffect } from "react";
import "./ProjectModal.scss";
import { useCallback } from "react";

export default function ProjectModal({ project, onClose }) {
  const [closing, setClosing] = useState(false);

  const handleClose = useCallback(() => {
  setClosing(true);
  setTimeout(() => {
    onClose();
  }, 200);
}, [onClose]);

useEffect(() => {
  const handleEsc = (e) => {
    if (e.key === "Escape") handleClose();
  };

  document.addEventListener("keydown", handleEsc);

  // Ajout de la classe qui bloque le scroll global
  document.body.classList.add("no-scroll");

  return () => {
    document.removeEventListener("keydown", handleEsc);
    document.body.classList.remove("no-scroll");
  };
}, [handleClose]);

  return (
    <div className="project-modal__overlay" onClick={handleClose}>
      <div
        className={`project-modal ${closing ? "closing" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="project-modal__close" onClick={handleClose}>
          X
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