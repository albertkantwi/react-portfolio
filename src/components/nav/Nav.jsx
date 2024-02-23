import React from 'react';
import './Nav.css';
import { MdOutlineHome, MdLaptopChromebook } from 'react-icons/md';
import { GiShoppingBag } from 'react-icons/gi';
import { SiAboutdotme } from 'react-icons/si';
import { FaRegMessage } from 'react-icons/fa6';

const Nav = () => (
  <nav>
    <a href="#home" aria-label="hone"><MdOutlineHome /></a>
    <a href="#portfolio" aria-label="portfolio"><GiShoppingBag /></a>
    <a href="#about" aria-label="about"><SiAboutdotme className="me" /></a>
    <a href="#experience" aria-label="experience"><MdLaptopChromebook /></a>
    <a href="#contact" aria-label="contact"><FaRegMessage /></a>
  </nav>
);

export default Nav;
