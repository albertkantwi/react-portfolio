import React from 'react';
import { CiLinkedin } from 'react-icons/ci';
import { FaGithub, FaAngellist } from 'react-icons/fa';

const HeaderSocials = () => (
  <div className="header-socials">
    <a href="https://www.linkedin.com/in/albertkantwi/" target="_blank" rel="noreferrer"><CiLinkedin /></a>
    <a href="https://github.com/albertkantwi" target="_blank" rel="noreferrer"><FaGithub /></a>
    <a href="https://wellfound.com/u/albert-antwi-1" target="_blank" rel="noreferrer"><FaAngellist /></a>
  </div>
);

export default HeaderSocials;
