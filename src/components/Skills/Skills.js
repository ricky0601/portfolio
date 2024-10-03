import React from 'react';
import './Skills.css';
import { gsap } from 'gsap';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 900, 
  easing: 'ease-in-out', 
  once: true, 
});


const Skills = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website to showcase my projects and skills.',
      technologies: ['React', 'CSS', 'JavaScript'],
      image: '/img/portfolio.png',
      github: 'https://github.com/ricky0601/portfolio',
    },
    {
      title: 'Flenders',
      description: 'An AI-powered camera app to assist low-vision individuals with offline shopping',
      technologies: ['React Native', 'Node.js', 'GCP'],
      image: '/img/1912804.png',
      github: 'https://github.com/ricky0601/Flenders',
    },
  ];

  const handleMouseEnter = (e) => {
    gsap.to(e.currentTarget, { scale: 1.05, duration: 0.1 });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, { scale: 1, duration: 0.1 });
  };

  return (
    <section id="SKILLS" className="skill-sections" aria-labelledby="projects-heading">
      <h2 data-aos="fade-right" id="skills-heading">Skills</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div
            data-aos="fade-up"
            className="project-item"
            key={index}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            tabIndex={0}
            aria-label={`${project.title} project`}
          >
            <img
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              className="project-image"
            />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>
                <strong>Technologies:</strong> {project.technologies.join(', ')}
              </p>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
