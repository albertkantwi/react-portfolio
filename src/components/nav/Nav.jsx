import React from 'react';
import './Nav.css';
import { MdOutlineHome, MdLaptopChromebook } from 'react-icons/md';
import { LuUser2 } from 'react-icons/lu';
import { RiServiceLine } from 'react-icons/ri';
import { FaRegMessage } from 'react-icons/fa6';

const Nav = () => (
  <nav>
    <a href="#"><MdOutlineHome /></a>
    <a href="#about"><LuUser2 /></a>
    <a href="#experience"><MdLaptopChromebook /></a>
    <a href="#services"><RiServiceLine /></a>
    <a href="#contact"><FaRegMessage /></a>
  </nav>
);

export default Nav;
