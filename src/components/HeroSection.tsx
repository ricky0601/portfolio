import { useRef, useState } from "react";

const modes = [
  { name: "화면 구현", word: "BUILD", description: "검색에서 상세까지. 복잡한 정보를 다음 행동으로 연결합니다." },
  { name: "오류 대응", word: "RECOVER", description: "정상 흐름뿐 아니라, 사용이 멈추는 순간의 UI도 다룹니다." },
  { name: "검증", word: "VERIFY", description: "테스트와 CI로 변경 사항을 확인하고, 공개 이후도 살핍니다." },
];

export default function HeroSection() {
  const [mode, setMode] = useState(0);
  const [recovered, setRecovered] = useState(false);
  const [checks, setChecks] = useState(0);
  const canvasRef = useRef<HTMLDivElement>(null);

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="page-width hero-layout">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> HAN DONGGEON / FRONTEND DEVELOPER</p>
          <h1 id="hero-title">화면 너머의<br /><span>흐름을</span><br />만듭니다<span className="hero-period">.</span></h1>
          <p className="hero-description">안녕하세요, 한동건입니다.<br /> Vue로 사내 업무를 연결하고,<br /> React로 공개 서비스 Lokki를 만듭니다.</p>
          <div className="hero-actions">
            <a className="solid-link" href="#work">프로젝트 탐색 <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="/han-donggeon-resume.pdf" target="_blank" rel="noopener noreferrer">이력서 <span aria-hidden="true">↗</span><span className="sr-only"> (PDF, 새 탭)</span></a>
          </div>
        </div>
        <div className="hero-lab">
          <div className="lab-heading"><span>INTERFACE LAB</span><span>01 — 03</span></div>
          <div className="lab-modes" aria-label="작업 방식 선택">
            {modes.map((item, index) => <button type="button" key={item.word} aria-pressed={mode === index} onClick={() => { setMode(index); setRecovered(false); setChecks(0); }}><span>0{index + 1}</span>{item.name}</button>)}
          </div>
          <div className="lab-canvas" ref={canvasRef}
            onPointerMove={(event) => {
              if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
              const rect = event.currentTarget.getBoundingClientRect();
              canvasRef.current?.style.setProperty("--tilt-x", `${((event.clientY - rect.top) / rect.height - .5) * -6}deg`);
              canvasRef.current?.style.setProperty("--tilt-y", `${((event.clientX - rect.left) / rect.width - .5) * 6}deg`);
            }}
            onPointerLeave={() => { canvasRef.current?.style.setProperty("--tilt-x", "0deg"); canvasRef.current?.style.setProperty("--tilt-y", "0deg"); }}>
            <div className="lab-grid" aria-hidden="true" />
            <span className="lab-watermark" aria-hidden="true">{modes[mode].word}</span>
            <div className="lab-window">
              <div className="lab-window-bar"><span aria-hidden="true">● ● ●</span><span>donggeon / workspace</span><span>UI</span></div>
              <div className="lab-window-content">
                <div className={`lab-mode-panel${mode === 0 ? " is-active" : ""}`} inert={mode !== 0} aria-hidden={mode !== 0}>
                  <div className="lab-screen-label">검색 → 상세 → 다음 행동</div>
                  <div className="lab-search"><span aria-hidden="true">⌕</span> 필요한 정보를 찾습니다<span className="lab-cursor" aria-hidden="true">▍</span></div>
                  <div className="lab-result"><div className="lab-avatar" aria-hidden="true">↗</div><div><strong>이어지는 사용자 경험</strong><span>검색 · 상세 · 이력</span></div><span className="lab-selected" aria-hidden="true">✓</span></div>
                  <div className="lab-flow" aria-hidden="true"><span>입력</span><i /><span>화면</span><i /><span>행동</span></div>
                  <a className="lab-action" href="#work">구현 사례 살펴보기 ↗</a>
                </div>
                <div className={`lab-mode-panel${mode === 1 ? " is-active" : ""}`} inert={mode !== 1} aria-hidden={mode !== 1}>
                  <div className="lab-screen-label">실패 경로도 인터페이스입니다</div>
                  <div className={`lab-diagnostic${recovered ? " is-recovered" : ""}`}><span aria-hidden="true">{recovered ? "✓" : "↻"}</span><strong>{recovered ? "흐름을 이어갑니다" : "진입 경로가 막혔습니다"}</strong><code>{recovered ? "/home" : "/login → /callback → /login"}</code></div>
                  <button type="button" className="lab-action" onClick={() => setRecovered(!recovered)}>{recovered ? "오류 상태 다시 보기 ↻" : "복구 상태로 전환 ↗"}</button>
                </div>
                <div className={`lab-mode-panel${mode === 2 ? " is-active" : ""}`} inert={mode !== 2} aria-hidden={mode !== 2}>
                  <div className="lab-screen-label">한 단계씩, 공개 전 확인</div>
                  <ol className="lab-checks">{["계산 · 사용자 흐름 테스트", "API 프록시 보안 테스트", "프로덕션 빌드"].map((item, index) => <li key={item} className={checks > index ? "is-checked" : ""}><span aria-hidden="true">{checks > index ? "✓" : "○"}</span>{item}<code>{checks > index ? "확인" : "대기"}</code></li>)}</ol>
                  <button type="button" className="lab-action" onClick={() => setChecks(checks === 3 ? 0 : checks + 1)}>{checks === 3 ? "다시 살펴보기 ↻" : "다음 검증 단계 보기 ↗"}</button>
                </div>
              </div>
            </div>
            <span className="lab-sticker" aria-hidden="true">MAKE IT<br />WORK.</span>
          </div>
          <div className="lab-note"><p aria-live="polite">{modes[mode].description}</p><span>조작 가능한 설명용 데모 · 실제 서비스나 테스트 실행이 아닙니다.</span></div>
        </div>
      </div>
      <div className="hero-foot page-width"><span>㈜와이드 · 우리관리 주식회사 정보화추진팀 · 2025.09 — 현재</span><span>Vue / React / TypeScript</span><a href="#work">SCROLL TO EXPLORE ↓</a></div>
      <div className="ticker" aria-hidden="true"><div>{[0, 1].map((n) => <span key={n}>INTERFACE → EXPERIENCE <i>✳</i> BUILD · RECOVER · VERIFY <i>✳</i> </span>)}</div></div>
    </section>
  );
}
