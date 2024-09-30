import React, { useEffect } from "react";
import './App.css';
import './components/Header/Header.css';
import './components/Project/Project.css';
import Header from './components/Header/Header';
import Project from './components/Project/Project';
import Footer from './components/Footer/Footer';
import HeroSection from './components/HeroSection/HeroSection';
import Skills from './components/Skills/Skills';
import lenis from "./utils/lenis";
import link from "./utils/link";

function App(){

  useEffect(() => {
    lenis();
    link();
  }, [])

  return (
    <div className="App">
        <Header/>
        <HeroSection/>
        <Project/>
        <Skills/>
        <Footer/>
    </div>
  );
}

export default App;
