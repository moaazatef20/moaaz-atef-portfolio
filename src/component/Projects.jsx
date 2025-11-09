import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaGithub, FaLink } from 'react-icons/fa';
import freshCartImage from '../assets/fresh-cart.png'; 
import myportfolio from '../assets/my-portfolio.png'; 
import crudphoto from '../assets/CRUD.png'; 

const projectsData = [
  {
    title: 'E-commerce Website',
    description: 'A fully responsive e-commerce site built with React, Bootstrap, and using a FakeStore API for product data.',
    image: freshCartImage, // 2. استخدم المتغير هنا
    githubLink: 'https://github.com/moaazatef20/Fresh-Cart.git',
    liveLink: 'https://fresh-cart-eta-green.vercel.app/',
  },
  {
    title: 'Personal Portfolio',
    description: 'The portfolio you are currently viewing. Built with React, React-Bootstrap, and EmailJS for the contact form.',
    image: myportfolio,
    githubLink: 'https://github.com/moaazatef20/your-repo-2',
    liveLink: '#',
  },
  {
    title: 'CRUD App',
    description: 'A classic CRUD application built with vanilla JavaScript, HTML, and CSS to practice DOM manipulation.',
    image: crudphoto,
    githubLink: 'https://github.com/moaazatef20/CRUD-System.git',
    liveLink: 'https://github.com/moaazatef20/CRUD-System.git',
  },
];

function Projects() {
  return (
    <Container className="projects-section-wrapper">
      <h2 class="section-title" data-text="Projects">My Projects</h2>
      <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
        {projectsData.map((project, index) => (
          <Col key={index} className="d-flex align-items-stretch">
            <Card className="project-card">
              <Card.Img variant="top" src={project.image} className="project-card-img" />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="project-title">{project.title}</Card.Title>
                <Card.Text className="project-description">
                  {project.description}
                </Card.Text>
              </Card.Body>
              <Card.Footer className="project-links">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                  <FaGithub /> Code
                </a>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                  <FaLink /> Live Demo
                </a>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;