import React from 'react';
import './Footer.css';
import { IoLogoGithub, IoLogoMedium } from 'react-icons/io5';
import { TfiLinkedin } from 'react-icons/tfi';
import { FaAngellist } from 'react-icons/fa';

const Footer = () => (
  <footer>
    <div className="footer-label-container">
      <hr className="line" />
      <ul className="footer-label">
        <li><a href="#home">Home</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
    <div className="footer-social">
      <a href="https://github.com/albertkantwi" aria-label="GitHub" target="_blank" rel="noreferrer"><IoLogoGithub /></a>
      <a href="https://www.linkedin.com/in/albertkantwi/" aria-label="LinkedIn" target="_blank" rel="noreferrer"><TfiLinkedin /></a>
      <a href="https://wellfound.com/u/albert-antwi-1" aria-label="AngelList" target="_blank" rel="noreferrer"><FaAngellist /></a>
      <a href="medium.com/@albertkantwi" aria-label="Medium" target="_blank" rel="noreferrer"><IoLogoMedium /></a>
    </div>
  </footer>
);

export default Footer;
