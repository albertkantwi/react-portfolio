import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';
import { LuArrowUpRightFromCircle } from "react-icons/lu";
import { PiGithubLogoFill } from "react-icons/pi";

const Modal = ({ projectInfo, onClose }) => (
  <div className="modal-container">
    <div className="modal-page">
      <div className="title-container">
        <h3>{projectInfo.title}</h3>
        <ul>
          {projectInfo.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
        <img src={projectInfo.image} alt={projectInfo.title} />
      </div>
      <div className="description-container">
        <p>{projectInfo.description}</p>
        <div className="popup-btn">
          <button type="button" className="btn">
            <a href={projectInfo.link[0]} rel="noreferrer">
              <span>See Live</span>
              <LuArrowUpRightFromCircle />
            </a>
          </button>
          <button type="button" className="btn">
            <a href={projectInfo.link[1]} rel="noreferrer">
              <span>See Source</span>
              <PiGithubLogoFill />
            </a>
          </button>
        </div>
        <div>
            <button type="button" onClick={onClose}>
              X
            </button>
          </div>
      </div>
    </div>
  </div>
);

Modal.propTypes = {
  projectInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;