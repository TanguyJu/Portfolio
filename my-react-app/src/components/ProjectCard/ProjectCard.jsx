import "./ProjectCard.scss";

export default function ProjectCard({ project, onClick }) {
  return (
    <div className="project-card" onClick={onClick}>
      <img src={project.thumbnail} alt={project.title} />
      <h3>{project.title}</h3>
    </div>
  );
}