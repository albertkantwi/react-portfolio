import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const experience = () => (
  <session>
    <div className="skill-container">
      <article className="skill">
        <div className="skill-head">
          <h3>Language</h3>
        </div>
        <ul className="skill-list">
          <li>
            <BsPatchCheckFill className="skill-icon" />
            <h4>JavaScript</h4>
          </li>
          <li>
            <BsPatchCheckFill className="skill-icon" />
            <h4>Ruby</h4>
          </li>
          <li>
            <BsPatchCheckFill className="skill-icon" />
            <h4>HTML</h4>
          </li>
          <li>
            <BsPatchCheckFill className="skill-icon" />
            <h4>CSS</h4>
          </li>
        </ul>
      </article>
      <article className="skill">
        <div className="skill-head">
          <h3>Frameworks</h3>
        </div>
        <ul className="skill-list">
          <li>
            <BsPatchCheckFill className="skill-icon" />
            <h4>React</h4>
          </li>
          <li>
            <BsPatchCheckFill className="skill-icon" />
            <h4>Ruby on Rails</h4>
          </li>
          <li>
            <BsPatchCheckFill className="skill-icon" />
            <h4>Bootstrap</h4>
          </li>
          <li>
            <BsPatchCheckFill className="skill-icon" />
            <h4>RSpec</h4>
          </li>
          <li>
            <BsPatchCheckFill className="skill-icon" />
            <h4>Capybars</h4>
          </li>
          <li>
            <BsPatchCheckFill className="skill-icon" />
            <h4>Selenium</h4>
          </li>
        </ul>
      </article>
      <article className="skill">
        <div className="skill-head">
          <h3>Skills</h3>
        </div>
        <ul className="skill-list">
          <li>
            <BsPatchCheckFill className="skill-icon" />
            <h4>Database Management</h4>
          </li>
          <li>
            <BsPatchCheckFill className="skill-icon" />
            <h4>Version Control</h4>
          </li>
          <li>
            <BsPatchCheckFill className="skill-icon" />
            <h4>CLI</h4>
          </li>
          <li>
            <BsPatchCheckFill className="skill-icon" />
            <h4>API Design</h4>
          </li>
          <li>
            <BsPatchCheckFill className="skill-icon" />
            <h4>Web Development</h4>
          </li>
        </ul>
      </article>
    </div>
  </session>
);

export default experience;
