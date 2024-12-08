import React, { useState } from 'react';
import Image1 from '../public/assets/project-1.jpg';
import Image2 from '../public/assets/project-2.jpg';
import Image3 from '../public/assets/project-3.jpg';
import Image4 from '../public/assets/project-4.jpg';

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
  {
    title: "Izumii Gen2",
    description: "base script telegram bot izumii (gen2) which is type plugins ESM.",
    image: `${Image4}`,
    url: "https://github.com/rlzyy/izumiibot",
  },
];

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="project-section" id="projects">
      <div className="container">
        <h2 className="text-center mb-5">My <span style={{ color: "#00adb5" }}>Projects</span></h2>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card-project" onClick={() => openModal(project)}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="img-fluid project-image"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>
              &times;
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="modal-image"
            />
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>
            <a
              href={selectedProject.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-project-modal"
            >
              View Project
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;
