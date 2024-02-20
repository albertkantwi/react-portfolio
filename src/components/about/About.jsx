import React from 'react';
import './About.css';
import { FaAward } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import { VscFolderLibrary } from 'react-icons/vsc';
import Myself from '../../assets/Myself.jpeg';

const About = () => (
  <section id="about">
    <h5>Get to know</h5>
    <h2>About me</h2>

    <div className="container about-container">
      <div className="about-me">
        <div className="about-me-img">
          <img src={Myself} alt="myself" />
        </div>
      </div>

      <div className="about-content">
        <div className="about-cards">
          <article className="about-card">
            <FaAward />
            <h2>Experience</h2>
            <small>1+ years working</small>
          </article>
          <article className="about-card">
            <MdWork />
            <h2>Job type</h2>
            <small>Remote collaboration</small>
          </article>
          <article className="about-card">
            <VscFolderLibrary />
            <h2>Projects</h2>
            <small>40+ completed</small>
          </article>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          quo repudiandae odio quod molestias adipisci assumenda, sed iste
          omnis fuga? Eligendi autem eveniet sed nam! Nesciunt est earum nemo
          a.
        </p>
        <a href="#contact" className="btn get-in-touch">
          Get in Touch
        </a> 
      </div>
    </div>
  </section>
);

export default About;
