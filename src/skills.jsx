import React from "react";

const Skills = () => {
  const skills = [
    { id: 1, logo: "../public/assets/ikon/javascript.svg" },
    { id: 2, logo: "../public/assets/ikon/typescript.svg" },
    { id: 3, logo: "../public/assets/ikon/golang.svg" },
    { id: 4, logo: "../public/assets/ikon/html.svg" },
    { id: 5, logo: "../public/assets/ikon/css.svg" },
    { id: 6, logo: "../public/assets/ikon/reactjs.svg" },
    { id: 7, logo: "../public/assets/ikon/nodejs.svg" },
    { id: 8, logo: "../public/assets/ikon/mongodb.svg" },
    { id: 9, logo: "../public/assets/ikon/docker.svg" },
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
