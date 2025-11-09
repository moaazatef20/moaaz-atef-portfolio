import React, { useState, useEffect, useRef } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, scrollSpy } from 'react-scroll';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

function MainNavbar() {
  const [activeLink, setActiveLink] = useState('about');
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const navRef = useRef(null);

  const updateIndicator = (element) => {
    if (element) {
      setIndicatorStyle({
        opacity: 1,
        width: element.offsetWidth + 'px',
        left: element.offsetLeft + 'px',
      });
    }
  };

  const handleSetActive = (to) => {
    setActiveLink(to);
    if (navRef.current) {
      const activeElement = navRef.current.querySelector(`.pill-nav-link[data-to="${to}"]`);
      updateIndicator(activeElement);
    }
  };

  useEffect(() => {
    scrollSpy.update();
    setTimeout(() => {
        const firstElement = navRef.current?.querySelector('.pill-nav-link[data-to="about"]');
        if (firstElement) {
            setActiveLink('about');
            updateIndicator(firstElement);
        }
    }, 100);
  }, []);

  return (
    <Navbar expand="lg" fixed="top" className="transparent-navbar">
      <Container>
        <Navbar.Brand 
          as={Link} 
          to="about" 
          smooth={true}
          duration={500}
          spy={true}
          offset={-100}
          className="navbar-brand-custom"
          onSetActive={() => handleSetActive('about')}
        >
          Moaaz Atef
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav className="mx-auto pill-nav-links-wrapper" ref={navRef}>
            <div className="nav-indicator" style={indicatorStyle}></div>
            <Nav.Link 
              as={Link} 
              to="about"
              data-to="about"
              spy={true} 
              smooth={true} 
              offset={-100} 
              duration={0}
              className={`pill-nav-link ${activeLink === 'about' ? 'active-link-custom' : ''}`}
              onSetActive={() => handleSetActive('about')}
            >
              About
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="skills" 
              data-to="skills"
              spy={true} 
              smooth={true} 
              offset={-100} 
              duration={0} 
              className={`pill-nav-link ${activeLink === 'skills' ? 'active-link-custom' : ''}`}
              onSetActive={() => handleSetActive('skills')}
            >
              Skills
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="projects" 
              data-to="projects"
              spy={true} 
              smooth={true} 
              offset={-100} 
              duration={0} 
              className={`pill-nav-link ${activeLink === 'projects' ? 'active-link-custom' : ''}`}
              onSetActive={() => handleSetActive('projects')}
            >
              Projects
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="contact" 
              data-to="contact"
              spy={true} 
              smooth={true} 
              offset={-100} 
              duration={0} 
              className={`pill-nav-link ${activeLink === 'contact' ? 'active-link-custom' : ''}`}
              onSetActive={() => handleSetActive('contact')}
            >
              Contact
            </Nav.Link>
          </Nav>

          <Nav className="align-items-center social-icons-wrapper">
            <Nav.Link href='https://www.linkedin.com/in/moaaz-atef-9404472a2/' target="_blank" className="social-icon">
              <FaLinkedin size={20} />
            </Nav.Link>
            <Nav.Link href="https://github.com/moaazatef20" target="_blank" className="social-icon">
              <FaGithub size={20} />
            </Nav.Link>
            <Nav.Link href="https://wa.me/01153997317" target="_blank" className="social-icon">
              <FaWhatsapp size={20} />
            </Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;

