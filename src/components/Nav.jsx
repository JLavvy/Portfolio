
import React, { useState, useEffect } from 'react';
import "./Nav.css";


export const Nav = () => {

  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollNav, setScrollNav] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 40) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor);
  }, []);

  return <nav className={scrollNav ? 'nav-scroll' : ''}>
    <img src="/logo.png" alt="Logo" className="logo" />
    <div className='menu' onClick={() => {
      setMenuOpen(!menuOpen);
    }}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>

    <ul className={menuOpen ? "open" : ""}>
      <li>
        <a href='/'>Home</a>
      </li>

      <li>
        <a href='#about'>About</a>
      </li>

      <li>
        <a href='#stack'>Skills</a>
      </li>

      <li>
        <a href='#projects'>Projects</a>
      </li>

      <li>
        <a href='/'>Contact</a>
      </li>

    </ul>
  </nav>
}