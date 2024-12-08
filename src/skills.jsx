import React from "react";

const Skills = () => {
  const skills = [
    { id: 1, logo: "../assets/icons/javascript.svg" },
    { id: 2, logo: "../assets/icons/typescript.svg" },
    { id: 3, logo: "../assets/icons/golang.svg" },
    { id: 4, logo: "../assets/icons/html.svg" },
    { id: 5, logo: "../assets/icons/css.svg" },
    { id: 6, logo: "../assets/icons/reactjs.svg" },
    { id: 7, logo: "../assets/icons/nodejs.svg" },
    { id: 8, logo: "../assets/icons/mongodb.svg" },
    { id: 9, logo: "../assets/icons/docker.svg" },
  ];

  return (
    <section className="skills-section py-5" id="skills">
      <div className="container">
        <h2 className="text-center mb-5">My <span style={{ color: "#00adb5"}}>Skills</span></h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.id} className="skill-card">
              <img
                src={skill.logo}
                alt="Skill Logo"
                className="skill-logo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
