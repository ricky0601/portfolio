import { useCallback, useEffect, useRef } from "react";
import "./ProjectsSection.css";
import { useProjectsScroll } from "../contexts/ProjectsScrollContext";

const PROJECTS = [
  {
    id: "flenders",
    title: "Flenders",
    description: "저시력자들의 오프라인 쇼핑을 보조하는 AI 앱. Vision Camera로 상품을 촬영하면 Gemini AI가 분석해 음성·텍스트로 안내합니다.",
    challenge: "실시간 카메라 스트림과 AI 응답 지연을 맞추는 게 어려웠고, 썸네일 추출 주기 조정과 로딩 상태 처리로 체감 속도를 개선했습니다.",
    tech: ["React Native", "Node.js", "Google Cloud", "Gemini AI"],
    demoUrl: "#",
    repoUrl: "https://github.com/ricky0601/Flenders",
  },
  {
    id: "book-shop",
    title: "Book-Shop",
    description: "[프로그래머스 DevCamp] 도서 쇼핑 백엔드 API. 회원(JWT)·도서·카테고리·좋아요·장바구니·주문·페이징을 REST로 구현했습니다.",
    challenge: "인증을 여러 라우트에 일관되게 적용하는 게 복잡해서, 미들웨어로 JWT 검증을 모듈화한 뒤 필요한 엔드포인트에만 붙였습니다.",
    tech: ["Express", "MySQL", "JWT", "Node.js"],
    demoUrl: "#",
    repoUrl: "https://github.com/ricky0601/Book-Shop",
  },
  {
    id: "puzzle-app",
    title: "오이도 랜드마크 인식 웹앱",
    description: "Teachable Machine으로 오이도 랜드마크를 인식해 정보를 보여주고, 퍼즐을 맞추는 웹앱. 웹캠으로 촬영하면 카드 형태로 안내합니다.",
    challenge: "웹캠 입력과 모델 추론 타이밍이 어긋나 인식이 불안정해서, 프레임 스킵과 디바운스를 두어 과도한 호출을 줄였습니다.",
    tech: ["JavaScript", "jQuery", "Figma", "Teachable Machine"],
    demoUrl: "#",
    repoUrl: "https://github.com/ricky0601/puzzleApp",
  },
  {
    id: "portfolio",
    title: "Portfolio",
    description: "이 포트폴리오 사이트. 한 화면당 한 섹션 스크롤, Hero 명함 스타일, Projects 가로 스크롤·휠 변환.",
    challenge: "react-page-scroller로 페이지 단위 전환하고, Projects 구간만 휠→가로 스크롤·경계에서 세로 전환되도록 분리했습니다.",
    tech: ["React", "TypeScript", "Vite", "react-page-scroller"],
    demoUrl: "https://1dg-portfolio.netlify.app/",
    repoUrl: "https://github.com/ricky0601/portfolio",
  },
];

const WHEEL_SCALE = 1.2;
const LINE_SCROLL_PX = 48;
const SMOOTH_LERP = 0.12;
const BOUNDARY_EPSILON = 8; // 이 거리 안이면 세로 스크롤로 넘김(페이지 전환)

export default function ProjectsSection() {
  const { setScrollState } = useProjectsScroll();
  const scrollRef = useRef<HTMLDivElement>(null);
  const lastStateRef = useRef({ atStart: true, atEnd: true });
  const targetScrollLeftRef = useRef<number>(0);
  const rafIdRef = useRef<number | null>(null);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);
    const atStart = el.scrollLeft <= BOUNDARY_EPSILON;
    const atEnd = maxScroll <= BOUNDARY_EPSILON || el.scrollLeft >= maxScroll - BOUNDARY_EPSILON;
    const prev = lastStateRef.current;
    if (prev.atStart === atStart && prev.atEnd === atEnd) return;
    lastStateRef.current = { atStart, atEnd };
    setScrollState({ atStart, atEnd });
  }, [setScrollState]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    targetScrollLeftRef.current = el.scrollLeft;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState);
    return () => el.removeEventListener("scroll", updateScrollState);
  }, [updateScrollState]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const tick = () => {
      const target = targetScrollLeftRef.current;
      const current = el.scrollLeft;
      const maxScroll = el.scrollWidth - el.clientWidth;
      const clamped = Math.max(0, Math.min(maxScroll, target));
      if (Math.abs(current - clamped) < 0.5) {
        el.scrollLeft = clamped;
        rafIdRef.current = null;
        return;
      }
      el.scrollLeft = current + (clamped - current) * SMOOTH_LERP;
      rafIdRef.current = requestAnimationFrame(tick);
    };

    const onWheel = (e: WheelEvent) => {
      const { scrollLeft, scrollWidth, clientWidth } = el;
      const maxScroll = Math.max(0, scrollWidth - clientWidth);
      let delta = e.deltaY;
      if (e.deltaMode === 1) delta *= LINE_SCROLL_PX;
      else if (e.deltaMode === 2) delta *= clientWidth;
      delta *= WHEEL_SCALE;

      const wouldScrollRight = delta > 0;
      const wouldScrollLeft = delta < 0;
      const canMoveHorizontal =
        (wouldScrollRight && scrollLeft < maxScroll - BOUNDARY_EPSILON) ||
        (wouldScrollLeft && scrollLeft > BOUNDARY_EPSILON);

      if (canMoveHorizontal) {
        e.preventDefault();
        const newTarget = targetScrollLeftRef.current + delta;
        targetScrollLeftRef.current = Math.max(0, Math.min(maxScroll, newTarget));
        if (rafIdRef.current == null) rafIdRef.current = requestAnimationFrame(tick);
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      el.removeEventListener("wheel", onWheel);
      if (rafIdRef.current != null) cancelAnimationFrame(rafIdRef.current);
    };
  }, []);

  return (
    <section id="projects" className="projects-section page-section" aria-label="프로젝트">
      <div className="section-inner">
        <h2 className="section-title">Projects</h2>
        <div className="projects-horizontal-wrapper">
          <div
            ref={scrollRef}
            className="projects-horizontal-scroll"
            role="region"
            aria-label="프로젝트 카드 목록"
          >
            {PROJECTS.map((project) => (
              <div key={project.id} className="projects-card-wrap">
                <div className="project-card">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  {project.challenge && (
                    <p className="project-challenge">{project.challenge}</p>
                  )}
                  <ul className="project-tech">
                    {project.tech.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  <div className="project-links">
                    {project.demoUrl && project.demoUrl !== "#" && (
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                        Live
                      </a>
                    )}
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
