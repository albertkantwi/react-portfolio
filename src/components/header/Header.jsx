import React from 'react';
import './Header.css';
import CTA from './CTA';
import profile from '../../assets/profile.png';
import HeaderSocials from './HeaderSocials';

const Header = () => (
  <header>
    <div className="container header-container">
      <h5 className="intro">Hey there</h5>
      <h1 className="intro1">I&apos;m Albert</h1>
      <h5 className="intro2">Full-stack Developer</h5>
      <CTA />
      <HeaderSocials />

      <div className="image_container">
        <div className="header-image">
          <img src={profile} alt="my-img" className="profile" />
        </div>
      </div>
      <a href="#contact" className="scroll-down">Scroll Down</a>
    </div>
  </header>
);

export default Header;
