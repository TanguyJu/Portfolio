import "./SkillBars.scss";
import skillsLevelData from "../../data/skillsLevelData";
import devImg from "../../assets/ordi.webp"; // ton image

export default function SkillBars() {
  return (
    <div className="skills-bars__container">
      <div className="skills-bars__image">
        <img src={devImg} alt="Développement web" />
      </div>

      <div className="skill-bars">
        {skillsLevelData.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div className="skill-bar" key={index}>
              <div className="skill-bar__track">
                <div
                  className="skill-bar__fill"
                  style={{ width: `${skill.level}%`, backgroundColor: skill.color }}
                >
                  <div className="skill-bar__label">
                    <Icon className="skill-bar__icon" />
                    <span>{skill.name}</span>
                  </div>
                  <span className="skill-bar__percent">{skill.level}%</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}