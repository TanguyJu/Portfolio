import React, { useState, useEffect, useRef } from "react";
import { skillWheelData } from "../../data/skillWheelData";
import "./SkillWheel.scss";

export default function SkillWheel() {
  const [selectedSkill, setSelectedSkill] = useState(skillWheelData[0]);
  const [isHovering, setIsHovering] = useState(false);
  const [angle, setAngle] = useState(0);
  const requestRef = useRef();
  const rotationSpeed = 0.005;

    useEffect(() => {
    let lastTime = performance.now();
    

    const rotate = (time) => {
        const delta = time - lastTime;
        lastTime = time;

        if (!isHovering) {
        setAngle((prev) => prev + rotationSpeed * delta);
        }

        requestRef.current = requestAnimationFrame(rotate);
    };

    requestRef.current = requestAnimationFrame(rotate);
    return () => cancelAnimationFrame(requestRef.current);
    }, [isHovering]);

  return (
    <div className="skillwheel">
      <div
        className="skillwheel__circle"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        style={{ transform: `rotate(${angle}deg)` }}
      >
        {skillWheelData.map((skill, index) => (
          <div
            key={skill.name}
            className={`skillwheel__branch ${selectedSkill.name === skill.name ? "active" : ""}`}
            style={{ transform: `rotate(${(360 / skillWheelData.length) * index}deg)` }}
            onClick={() => setSelectedSkill(skill)}
          >
            <div className="skillwheel__bubble">
              <img src={skill.logo} alt={skill.name} />
            </div>
          </div>
        ))}
      </div>

      <div className="skillwheel__center">
        <div className="skillwheel__center-logo">
          <img src={selectedSkill.logo} alt={selectedSkill.name} />
        </div>
        <h3>{selectedSkill.name}</h3>
        <p>{selectedSkill.description}</p>
      </div>
    </div>
  );
}