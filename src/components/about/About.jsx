import React from 'react';
import './About.css';
import Myself from '../../assets/Myself.jpeg';
import { FaAward } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => (
  <section>
    <h5>Get to know</h5>
    <h2>About me</h2>
    <div>
      <div>
        <div>
          <img src={Myself} alt="myself" />
        </div>
      </div>
      <div>
        <div>
        <article>
          <FaAward />
            <h2>Experience</h2>
            <small>1+ years working</small>
          </article>
          <article>
          <MdWork />
            <h2>Job type</h2>
            <small>Remote collaboration</small>
          </article>
          <article>
          <VscFolderLibrary />
            <h2>Project</h2>
            <small>40+ completed</small>
          </article>
        </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quo repudiandae odio quod molestias adipisci assumenda, sed iste omnis fuga? Eligendi autem eveniet sed nam! Nesciunt est earum nemo a.
          </p>
          <a href="#contact"className='btn'>Get in Touch</a>
      </div>
    </div>
  </section>
);

export default About;
