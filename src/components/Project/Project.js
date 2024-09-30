import React from 'react';
import './Project.css';
import { gsap } from 'gsap';

const Project = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website to showcase my projects and skills.',
      technologies: ['React', 'CSS', 'JavaScript'],
      image: 'portfolio.png',
      github: 'https://github.com/yourname/portfolio',
      demo: 'https://yourportfolio.com',
    },
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce application with shopping cart and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'ecommerce.png',
      github: 'https://github.com/yourname/ecommerce-platform',
      demo: 'https://yourecommerce.com',
    },
  ];

  const handleMouseEnter = (e) => {
    gsap.to(e.currentTarget, { scale: 1.05, duration: 0.3 });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, { scale: 1, duration: 0.3 });
  };

  return (
    <section id="PROJECT" className="project-section" aria-labelledby="projects-heading">
      <h2 id="projects-heading">Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div
            className="project-item"
            key={index}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            tabIndex={0} // 키보드 접근성을 위해 포커스 가능
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
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
