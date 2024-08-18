import React from 'react';

const Skills = () => {
  return (
    <section className="skills-section py-5" id="skills">
      <div className="container">
        <h2 className="text-center mb-5">My Skills</h2>

        <div className="card-skills">
          <h3 className="card-skills-title">JavaScript</h3>
          <p className="card-skills-content">
            Experienced in building dynamic web applications using JavaScript, React.js, and Node.js.
          </p>
        </div>

        <div className="card-skills">
          <h3 className="card-skills-title">CSS & HTML</h3>
          <p className="card-skills-content">
            Proficient in crafting responsive and visually appealing interfaces using modern CSS techniques.
          </p>
        </div>

        <div className="card-skills">
          <h3 className="card-skills-title">Backend Development</h3>
          <p className="card-skills-content">
            Skilled in building robust server-side applications with Express.js, MongoDB, and SQL databases.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
