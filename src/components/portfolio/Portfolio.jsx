import React, { useState } from 'react';
import PropTypes from 'prop-types';
import otherProjects from '../../data/projectsData';
import Modal from '../modal/Modal';
import './Portfolio.css';

const Portfolio = () => {
  const [selectProject, setSelectProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectProject(project);
  };

  const handleCloseModal = () => {
    setSelectProject(null);
  };

  return (
    <section id="portfolio" className="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio-container">
        {otherProjects.length > 0 
        && otherProjects.map((project, index) => (
            <article key={index} className="portfolio-item">
              <div className="portfolio-img">
                <img src={project.image} alt={project.title} />
              </div>
              <h3>{project.title}</h3>
              <div className="btn-container">
                <button
                  type="button"
                  className="btn project-btn"
                  onClick={() => handleProjectClick(project)}
                >
                  See Project
                </button>
              </div>
            </article>
          ))}
      </div>
      {selectProject && <Modal projectInfo={selectProject} onClose={handleCloseModal} />}
    </section>
  );
};

export default Portfolio;