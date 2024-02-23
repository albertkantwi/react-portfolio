import React from 'react';
import './Nav.css';
import { MdOutlineHome, MdLaptopChromebook } from 'react-icons/md';
import { GiShoppingBag } from 'react-icons/gi';
import { SiAboutdotme } from 'react-icons/si';
import { FaRegMessage } from 'react-icons/fa6';

const Nav = () => (
  <nav>
    <a href="#"><MdOutlineHome /></a>
    <a href="#portfolio"><GiShoppingBag /></a>
    <a href="#about"><SiAboutdotme className="me" /></a>
    <a href="#experience"><MdLaptopChromebook /></a>
    <a href="#contact"><FaRegMessage /></a>
  </nav>
);

export default Nav;
