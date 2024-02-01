import React, { useState } from 'react';
import otherProjects from '../../data/projectsData';
import './Portfolio.css';

const Portfolio = () => {
  const [selectProject, setSelectProject] = useState({
    title: '',
    image: '',
    description: '',
    technologies: [],
    link: [],
  });

  return (

    <section>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        {
        otherProjects.length > 0 && otherProjects.map((project, index) => (
          <article key={{ index }} className="portfolio-item">
            <div className="portfolio-img">
              <img src={project.image} alt={project.title} />
            </div>
            <h3>{project.title}</h3>
            <div className="btn-container">
              <button type="submit" className="btn project-btn">See Project</button>
            </div>
          </article>
        ))
      }
      </div>

    </section>
  );
};
export default Portfolio;
