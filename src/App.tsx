import { useState, useRef, useCallback } from "react";
import ReactPageScroller from "react-page-scroller";
import { SectionContainer } from "react-page-scroller";
import { ProjectsScrollContext } from "./contexts/ProjectsScrollContext";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

const PROJECTS_PAGE_INDEX = 3;
const ANIMATION_DURATION = 600;
const ANIMATION_BUFFER = 250;

export default function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [blockScroll, setBlockScroll] = useState(false);
  const [projectsScrollState, setProjectsScrollState] = useState({ atStart: true, atEnd: true });
  const blockTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleBeforePageScroll = useCallback(() => {
    if (blockTimerRef.current) clearTimeout(blockTimerRef.current);
    setBlockScroll(true);
    blockTimerRef.current = setTimeout(() => {
      setBlockScroll(false);
      blockTimerRef.current = null;
    }, ANIMATION_DURATION + ANIMATION_BUFFER);
  }, []);

  const blockScrollDown =
    blockScroll || (currentPage === PROJECTS_PAGE_INDEX && !projectsScrollState.atEnd);
  const blockScrollUp =
    blockScroll || (currentPage === PROJECTS_PAGE_INDEX && !projectsScrollState.atStart);

  return (
    <>
      <ProjectsScrollContext.Provider value={{ setScrollState: setProjectsScrollState }}>
        <div className="app-scroller" role="main">
          <ReactPageScroller
            containerHeight="100vh"
            containerWidth="100vw"
            animationTimer={ANIMATION_DURATION}
            animationTimerBuffer={ANIMATION_BUFFER}
            transitionTimingFunction="ease-in-out"
            pageOnChange={setCurrentPage}
            onBeforePageScroll={handleBeforePageScroll}
            blockScrollDown={blockScrollDown}
            blockScrollUp={blockScrollUp}
            renderAllPagesOnFirstRender
          >
          <SectionContainer height={100}>
            <HeroSection />
          </SectionContainer>
          <SectionContainer height={100}>
            <AboutSection />
          </SectionContainer>
          <SectionContainer height={100}>
            <SkillsSection />
          </SectionContainer>
          <SectionContainer height={100}>
            <ProjectsSection />
          </SectionContainer>
          <SectionContainer height={100}>
            <ContactSection />
          </SectionContainer>
          </ReactPageScroller>
        </div>
      </ProjectsScrollContext.Provider>
    </>
  );
}
