import "./Projects.scss";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import ProjectModal from "../components/ProjectModal/ProjectModal";
import { useState } from "react";

import projets from "../data/projectsData"; // fichier JSON avec tes projets

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="projects">
      <h2>MES RÉALISATIONS</h2>
      <div className="home__separator"></div>
      <div className="projects__grid">
        {projets.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}