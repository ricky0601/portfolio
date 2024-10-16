import React, { useEffect }  from 'react';
import './App.css';
import HeaderComponent from './components/Header/HeaderComponent'
import AboutMe from './components/AboutMe/AboutMe';
import ContactBar from './components/ContactBar/ContactBar';
import TopButton from './components/TopButton';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import './styles/Header.css'
import './styles/AboutMe.css'
import './styles/ContactBar.css'
import './styles/TopButton.css'
import './styles/Skills.css'
import './styles/Projects.css'
import lenis from "./utils/lenis";
import link from "./utils/link";


function App() {
  useEffect(() => {
      lenis();
      link();
  }, []);
    // let mouseCursor = document.querySelector(".cursor");
    // window.addEventListener("scroll", cursor);
    // window.addEventListener("mousemove", cursor);
    // function cursor(e) {
    //   mouseCursor.style.left = e.pageX + "px";
    //   mouseCursor.style.top = e.pageY  + "px";
    // }
  return (
    
    <>
      {/* <div className='cursor'></div> */}
      <HeaderComponent />
      <main>
        <AboutMe />
        <Skills />
        <Projects />
      </main>
      <ContactBar />
      <TopButton />
    </>
  );
}

export default App;
