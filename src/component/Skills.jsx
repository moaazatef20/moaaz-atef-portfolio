import React from 'react';
import { Container } from 'react-bootstrap';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaGitAlt, FaGithub } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiVite } from 'react-icons/si';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 size={50} style={{ color: '#E34F26' }} /> },
  { name: 'CSS', icon: <FaCss3Alt size={50} style={{ color: '#1572B6' }} /> },
  { name: 'Bootstrap', icon: <FaBootstrap size={50} style={{ color: '#7952B3' }} /> },
  { name: 'JavaScript', icon: <IoLogoJavascript size={50} style={{ color: '#F7DF1E' }} /> },
  { name: 'React', icon: <FaReact size={50} style={{ color: '#61DAFB' }} /> },
  { name: 'Next.js', icon: <TbBrandNextjs size={50} style={{ color: '#FFFFFF' }} /> },
  { name: 'Vite', icon: <SiVite size={50} style={{ color: '#646CFF' }} /> },
  { name: 'Git', icon: <FaGitAlt size={50} style={{ color: '#F05032' }} /> },
  { name: 'GitHub', icon: <FaGithub size={50} style={{ color: '#FFFFFF' }} /> },
];

function Skills() {
  return (
    <Container>
      <h2 class="section-title" data-text="Skills">My Skills</h2>
      
      <div className="skills-slider-container">
        <div className="skills-slider-track">
          {skills.map((skill, index) => (
            <div className="skill-card-slider" key={`skill1-${index}`}>
              {skill.icon}
              <span className="skill-name-slider">{skill.name}</span>
            </div>
          ))}
          {skills.map((skill, index) => (
            <div className="skill-card-slider" key={`skill2-${index}`}>
              {skill.icon}
              <span className="skill-name-slider">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Skills;