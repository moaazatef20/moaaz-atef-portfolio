import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import myImage from '../assets/images/photo.jpeg'; 

function About() {
  return (
    <Container> 
      <Row className="align-items-center justify-content-center g-5"> 
        <Col xs={12} md={5} className="text-center"> 
          <Image 
            src={myImage} 
            alt="Moaaz Atef - Front-End Developer" 
            fluid 
            style={{ 
              maxWidth: '350px',
              height: 'auto',
              filter: 'drop-shadow(5px 5px 10px rgba(0,0,0,0.3))',
            }}
          />
        </Col>

        <Col xs={12} md={6} className="text-center text-md-start"> 
          <h1 className="display-4 fw-bold text-light mb-3">
            Hi, I'm <span className="text-primary">Moaaz Atef</span>
          </h1>
          <h2 className="h4 text-primary mb-4">
            Front-End Developer
          </h2>
          <p className="lead text-light-color mb-5">
            I build modern, responsive, and fast web applications. 
            I am passionate about turning beautiful designs into clean, high-performance code.
          </p>
          
          <div className="d-flex justify-content-center justify-content-md-start gap-3"> 
            <a 
              href="#projects" 
              className="btn btn-custom-primary"
            >
              View My Projects
            </a>
            <a 
              href="#contact" 
              className="btn btn-custom-outline"
            >
              Let's Connect
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;