import { useState } from "react";
import "./Skills.scss";
import skillsData from "../data/skillsData";
import SkillWheel from "../components/SkillWheel/SkillWheel";

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="skills">
      <h2>MES COMPÉTENCES</h2>
      <div className="home__separator"></div>
      <div className="skills__grid">
        {skillsData.map((skill, index) => {
          const Icon = skill.icon;
          const isActive = index === activeIndex;

          return (
            <div
              className={`skill-card ${isActive ? "active" : ""}`}
              key={index}
              onClick={() => handleClick(index)}
            >
              <Icon className="skill-icon" />
              <p>{skill.label}</p>
              {isActive && <span className="skill-desc">{skill.description}</span>}
            </div>
          );
        })}
      </div>
      <div className="home__separator"></div>
      <SkillWheel />
    </section>
  );
}