import { useState } from "react";

export default function PortfolioCase() {
  const [interactive, setInteractive] = useState(true);

  return (
    <article className="case-study portfolio-case" id="work-portfolio" aria-labelledby="portfolio-title">
      <div className="case-overview">
        <div className="case-category"><span>03</span> THIS WEBSITE / INTERACTIVE PORTFOLIO</div>
        <h3 id="portfolio-title">이 포트폴리오<span>Interactive Developer Portfolio</span></h3>
        <p className="case-lead">설명하는 페이지에서,<br />직접 경험하는 인터페이스로.</p>
        <p>지금 보고 있는 사이트입니다. 정적인 소개와 문단 중심의 UI를 작업 캔버스, 스크롤 장면, 선택형 패널로 재구성했습니다. 사이트 자체에서 프론트엔드 구현 방식을 경험할 수 있도록 만들었습니다.</p>
        <dl className="project-meta">
          <div><dt>범위</dt><dd>UI 재설계 · 인터랙션 · 반응형 · 접근성 대응</dd></div>
          <div><dt>구현</dt><dd>React 상태 기반 데모 · 공용 스크롤 장면 · CSS 모션</dd></div>
          <div><dt>사용성</dt><dd>키보드 조작 · 모션 정지 · reduced-motion 지원</dd></div>
          <div><dt>확인</dt><dd>타입 검사 · ESLint · 브라우저 인터랙션 확인</dd></div>
          <div><dt>다음 과제</dt><dd>성능·접근성 측정과 자동화 테스트 보강</dd></div>
        </dl>
        <ul className="tech-list" aria-label="이 포트폴리오 기술"><li>React 19</li><li>TypeScript</li><li>Vite</li><li>CSS</li></ul>
        <div className="project-links">
          <a className="text-link" href="#top">메인 인터랙션 체험 ↗</a>
          <a className="text-link" href="https://github.com/ricky0601/portfolio" target="_blank" rel="noopener noreferrer">GitHub ↗<span className="sr-only"> (새 탭)</span></a>
        </div>
      </div>
      <figure className="project-visual portfolio-visual">
        <div className="visual-topline"><span>READ → EXPERIENCE</span><span>DESIGN / IMPLEMENTATION</span></div>
        <div className="portfolio-compare" aria-label="UI 개편 전후 선택">
          <button type="button" aria-pressed={!interactive} aria-controls="portfolio-preview" onClick={() => setInteractive(false)}>이전 / 문서형</button>
          <button type="button" aria-pressed={interactive} aria-controls="portfolio-preview" onClick={() => setInteractive(true)}>현재 / 경험형</button>
        </div>
        <div id="portfolio-preview" className={`portfolio-preview${interactive ? " is-interactive" : ""}`}>
          <div className="portfolio-preview-bar" aria-hidden="true">● ● ● <span>portfolio / interface</span></div>
          <div className="portfolio-preview-body" key={String(interactive)} aria-hidden="true">
            <span className="portfolio-preview-label">{interactive ? "INTERFACE LAB" : "ABOUT / PROJECTS / SKILLS"}</span>
            <strong>{interactive ? <>직접 탐색하는<br />경험.</> : <>정보를 읽는<br />페이지.</>}</strong>
            {interactive ? <><div className="portfolio-preview-modes"><span>BUILD</span><span>RECOVER</span><span>VERIFY</span></div><div className="lab-flow"><span>입력</span><i /><span>화면</span><i /><span>행동</span></div></> : <div className="portfolio-preview-lines"><i /><i /><i /><i /></div>}
          </div>
        </div>
        <figcaption aria-live="polite">{interactive ? "현재: 선택과 상태 전환으로 탐색하는 UI" : "이전: 제목과 소개 문단을 읽는 UI"}<br />이전·현재 구조를 요약한 설명용 화면입니다.</figcaption>
      </figure>
    </article>
  );
}
