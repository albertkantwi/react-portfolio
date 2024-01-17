import React from 'react';
import './Header.css';
import CTA from './CTA';
import Myself from '../../assets/Myself.jpeg';
import HeaderSocials from './HeaderSocials';

const Header = () => (
  <header>
    <div className="container header-container">
      <h5 className="intro">Hey there</h5>
      <h1 className="intro1">Im Albert</h1>
      <h5 className="intro2">Full-stack Developer</h5>
      <CTA />
      <HeaderSocials />

      <div>
        <img src={Myself} alt="my-img" className="myself" />
      </div>
      <a href="#contact" className="scroll-down">Scroll Down</a>
    </div>
  </header>
);

export default Header;
