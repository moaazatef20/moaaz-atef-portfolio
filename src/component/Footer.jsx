import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';

function Footer() {
  return (
    <footer className="footer-wrapper">
      <Container>
        <Row className="gy-4">
          
          <Col lg={4} md={6}>
            <h5 className="footer-title">About</h5>
            <p className="footer-text">
              I'm Moaaz Atef, a Front-End Developer passionate about building fast,
              responsive, and modern web applications.
            </p>
          </Col>

          <Col lg={4} md={6}>
            <h5 className="footer-title">Get In Touch</h5>
            <ul className="list-unstyled footer-contact-list">
              <li>
                <MdEmail className="footer-icon me-2" />
                <a href="moaazatef2020@gmail.com">moaazatef2020@gmail.com</a>
              </li>
              <li>
                <MdPhone className="footer-icon me-2" />
                <span>+20 115 399 7317</span>
              </li>
            </ul>
            <p className="footer-text small">
              Available for freelance projects and collaborations.
            </p>
          </Col>

          <Col lg={4} md={12} className="text-lg-start text-md-center">
            <h5 className="footer-title">Connect</h5>
            <Nav className="social-icons-footer-boxed">
              <Nav.Link
                href='https://www.linkedin.com/in/moaaz-atef-9404472a2/' 
                target="_blank" 
                className="social-icon-box-footer"
              >
                <FaLinkedin size={20} />
              </Nav.Link>
              <Nav.Link 
                href="https://github.com/moaazatef20" 
                target="_blank" 
                className="social-icon-box-footer"
              >
                <FaGithub size={20} />
              </Nav.Link>
              <Nav.Link 
                href="https://wa.me/0115399717" 
                target="_blank" 
                className="social-icon-box-footer"
              >
                <FaWhatsapp size={20} />
              </Nav.Link>
            </Nav>
          </Col>
        </Row>

        <hr className="footer-divider" />

        <Row>
          <Col className="text-center">
            <p className="copyright-text mb-0">
              © {new Date().getFullYear()} Moaaz Atef. All Rights Reserved.
            </p>
            <p className="copyright-text small">
              Crafted with passion and React.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

