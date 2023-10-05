import React, { useEffect, useState } from 'react';
import About from "./About"
import Skills from './Skills';
import Experience from './Experience';
import Contact from './Contact';

function Dots() {
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = () => {
    const sections = document.querySelectorAll('.sec');
    const navbarLinks = document.querySelectorAll('.navbar a.dot');

    sections.forEach((section) => {
      const id = section.id;
      const offset = section.offsetTop - 150;
      const height = section.offsetHeight;

      if (window.scrollY >= offset && window.scrollY < offset + height) {
        setActiveSection(id);
      }
    });

    navbarLinks.forEach((link) => {
      const linkId = link.getAttribute('data-scroll');
      if (linkId === activeSection) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  return (
    <div className='dots'>
    <nav className='navbar'>
<ul>

<li>
  <a href="#home" className="dot active" data-scroll="home">
    <span>{/*Home*/}</span>
  </a>
</li>

<li>
  <a href="#about" className="dot" data-scroll="about">
    <span>{/*About*/}</span>
  </a>
</li>

<li>
  <a href="#experience" className="dot" data-scroll="experience">
    <span>{/*Experience*/}</span>
  </a>
</li>

<li>
  <a href="#skills" className="dot" data-scroll="skills">
    <span>{/*Skills*/}</span>
  </a>
</li>

<li>
  <a href="#contact" className="dot" data-scroll="contact">
    <span>{/*Contact*/}</span>
  </a>
</li>

</ul>
      
</nav>
    <section className="sec" id="about"><About /></section>
    <section className="sec" id="experience"><Experience /></section>
    <section className="sec" id="skills"><Skills /></section>
    <section className="sec" id="contact"><Contact /></section>
</div>
  );
}

export default Dots;