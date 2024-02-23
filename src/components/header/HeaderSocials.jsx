import React from 'react';
import { CiLinkedin } from 'react-icons/ci';
import { FaGithub, FaAngellist } from 'react-icons/fa';

const HeaderSocials = () => (
  <div className="header-socials">
    <a href="https://www.linkedin.com/in/albertkantwi/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><CiLinkedin /></a>
    <a href="https://github.com/albertkantwi" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
    <a href="https://wellfound.com/u/albert-antwi-1" target="_blank" rel="noreferrer" aria-label="AngelList"><FaAngellist /></a>
  </div>
);

export default HeaderSocials;
