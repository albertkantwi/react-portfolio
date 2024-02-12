import React from 'react';
import './Footer.css';
import { IoLogoGithub, IoLogoMedium } from 'react-icons/io5';
import { TfiLinkedin } from 'react-icons/tfi';
import { FaAngellist } from 'react-icons/fa';

const Footer = () => (
  <footer>
    <div>
      <hr className="line" />
      <ul className="footer-label">
        <li><a href="#header">Home</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
    <div className="footer-social">
      <a href="https://www.linkedin.com/"><IoLogoGithub /></a>
      <a href="https://www.linkedin.com/"><TfiLinkedin /></a>
      <a href="https://www.linkedin.com/"><FaAngellist /></a>
      <a href="https://www.linkedin.com/"><IoLogoMedium /></a>
    </div>
  </footer>
);

export default Footer;
