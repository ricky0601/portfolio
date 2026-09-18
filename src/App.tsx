import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import "./App.css";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">본문으로 건너뛰기</a>
      <header className="site-header">
        <div className="header-inner">
          <a className="wordmark" href="#top" aria-label="한동건, 처음으로">한동건<span aria-hidden="true">.</span></a>
          <nav aria-label="주요 메뉴">
            <a href="#work">프로젝트</a>
            <a href="#about">소개</a>
            <a href="#contact">연락하기 <span aria-hidden="true">↗</span></a>
          </nav>
        </div>
      </header>
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <footer className="site-footer page-width">
        <span>© {new Date().getFullYear()} 한동건</span>
        <span>이해하기 쉽게, 믿고 쓸 수 있게.</span>
        <a href="#top">맨 위로 ↑</a>
      </footer>
    </>
  );
}
