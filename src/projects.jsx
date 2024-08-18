import React from 'react';
import Image1 from '../public/assets/project-1.jpg';
import Image2 from '../public/assets/project-2.jpg';
import Image3 from '../public/assets/project-3.jpg';

const projects = [
  {
    title: "Izumi WaBOT",
    description: "Free open source WhatsApp bot using esm type plugin.",
    image: `${Image1}`,
    url: "https://github.com/rlzyy/Izumii-MultiDevice",
  },
  {
    title: "Alya AI",
    description: "WhatsApp chatbot using baileys.",
    image: `${Image2}`,
    url: "https://github.com/rlzyy/alya-ai",
  },
  {
    title: "Base Api's",
    description: "Open source RestAPI use expressjs and swagger.",
    image: `${Image3}`,
    url: "https://github.com/rlzyy/base-api",
  },
];

const Project = () => {
  return (
    <section className="project-section" id="projects">
      <div className="container">
        <h2 className="text-center mb-5">My Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card-project">
                
                <img
                  src={project.image}
                  alt={project.title}
                  className="img-fluid project-image"
                />
                <div className="project-details">
                  <h5>{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-project"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
