import React from 'react';
import './HeroSection.css'; // 스타일 파일을 import

const HeroSection = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm DongGeon</h1>
        <h2 className="hero-subtitle">Frontend Developer</h2>
        <p className="hero-description">
          I create visually stunning and user-friendly web applications. Let's work together to bring your ideas to life.
        </p>
        <a className="cta-button" href="#projects">View My Work</a>
      </div>
      <div className="scroll-indicator"></div>
    </section>
  );
};

export default HeroSection;
