import React, { useEffect } from 'react';
import './App.css';
import HeaderComponent from './components/Header/HeaderComponent';
import AboutMe from './components/AboutMe/AboutMe';
import ContactBar from './components/ContactBar/ContactBar';
import TopButton from './components/TopButton';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import './styles/Header.css';
import './styles/AboutMe.css';
import './styles/ContactBar.css';
import './styles/TopButton.css';
import './styles/Skills.css';
import './styles/Projects.css';
import lenis from "./utils/lenis";
import link from "./utils/link";

function App() {
  useEffect(() => {
    lenis();
    link();

    const mouseCursor = document.querySelector(".cursor");
    
    if (mouseCursor) {
      const cursor = (e) => {
        mouseCursor.style.left = e.pageX + "px";
        mouseCursor.style.top = e.pageY + "px";
      };
      
      window.addEventListener("scroll", cursor);
      window.addEventListener("mousemove", cursor);

      return () => {
        window.removeEventListener("scroll", cursor);
        window.removeEventListener("mousemove", cursor);
      };
    }
  }, []);

  return (
    <>
      <div className='cursor'></div>
      <HeaderComponent />
      <main>
        <AboutMe />
        <Projects />
        <Skills />
      </main>
      <ContactBar />
      <TopButton />
    </>
  );
}

export default App;
