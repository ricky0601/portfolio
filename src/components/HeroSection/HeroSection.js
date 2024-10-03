import React from 'react';
import './HeroSection.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 900, 
  easing: 'ease-in-out', 
  once: true, 
});

const HeroSection = () => {
  return (
    <section id="PROFILE" className="hero-container" aria-labelledby="profile-heading">
        <div className="hero-content">
          <h1 data-aos="fade-left" data-aos-once="false" className="hero-title">Hi, I'm DongGeon</h1>
          <h2 data-aos="fade-right" className="hero-subtitle">Frontend Developer</h2>
          <p data-aos="fade-left" className="hero-description">
            I create visually stunning and user-friendly web applications.
            <br/>Let's work together to bring your ideas to life.
          </p>
          <a className="cta-button" href="#PROJECT">View My Work</a>
        </div>
      <div className="scroll-indicator"></div>
    </section>
  );
};

export default HeroSection;
