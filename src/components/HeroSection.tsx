export default function HeroSection() {
  return (
    <section className="hero page-width" id="top" aria-labelledby="hero-title">
      <p className="eyebrow"><span className="status-dot" /> HAN DONGGEON · FRONTEND DEVELOPER</p>
      <h1 id="hero-title">업무 화면의 구현부터<br /><span className="hero-indent">인증·배포 오류 대응까지.</span></h1>
      <div className="hero-bottom">
        <p className="hero-side-note">인터페이스 너머,<br />실제 사용의 순간까지.</p>
        <div className="hero-intro">
          <p>안녕하세요, 프론트엔드 개발자 <strong>한동건</strong>입니다.<br />Vue 기반 사내 그룹웨어의 개발·운영에 참여하고, React로 공개 서비스 Lokki를 만들었습니다. 검색과 상세 화면뿐 아니라 인증 흐름, 배포 후 오류 처리, 테스트까지 다룹니다.</p>
          <div className="hero-actions">
            <a className="text-link" href="#work">선택한 프로젝트 보기 <span aria-hidden="true">↘</span></a>
            <a className="text-link" href="/han-donggeon-resume.pdf" target="_blank" rel="noopener noreferrer">이력서 보기 <span aria-hidden="true">↗</span><span className="sr-only"> (PDF, 새 탭)</span></a>
          </div>
        </div>
      </div>
      <dl className="experience-summary" aria-label="경험 요약">
        <div><dt>현재 실무</dt><dd>우리관리 정보화추진팀<span>2025.09 — 현재 · Vue / TypeScript</span></dd></div>
        <div><dt>두 가지 개발 환경</dt><dd>사내 팀 기여와 공개 단독 개발<span>우리 Buddy · 프론트엔드 2명 / Lokki · 1인 개발</span></dd></div>
        <div><dt>운영과 검증</dt><dd>인증·배포 오류 대응 / 테스트·CI<span>Buddy 운영 대응 · Lokki 테스트와 빌드 자동화</span></dd></div>
      </dl>
      <div className="hero-index"><span>SELECTED WORK & EXPERIENCE</span><span>Vue · React · TypeScript</span><span aria-hidden="true">SCROLL ↓</span></div>
    </section>
  );
}
