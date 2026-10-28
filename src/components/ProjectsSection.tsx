import BuddyScene from "./BuddyScene";
import PortfolioCase from "./PortfolioCase";
import LokkiScene from "./LokkiScene";
import buddyScreenshot from "../assets/buddy-screenshot.png";
import lokkiScreenshot from "../assets/lokki-screenshot.webp";

export default function ProjectsSection() {
  return (
    <section className="work-section page-width" id="work" aria-labelledby="work-title">
      <div className="section-heading">
        <p className="eyebrow">01 / SELECTED WORK</p>
        <h2 id="work-title">서로 다른 서비스,<br />같은 기준.</h2>
        <p>업무의 흐름을 잇는 화면부터<br />일상의 선택을 돕는 도구까지.</p>
      </div>
      <nav className="project-index" aria-label="프로젝트 바로 탐색">
        <a href="#work-buddy"><span>01 / TEAM CONTRIBUTION</span><strong>우리 Buddy</strong><span aria-hidden="true">↘</span></a>
        <a href="#work-lokki"><span>02 / INDEPENDENT PROJECT</span><strong>Lokki</strong><span aria-hidden="true">↘</span></a>
        <a href="#work-portfolio"><span>03 / THIS WEBSITE</span><strong>Portfolio</strong><span aria-hidden="true">↘</span></a>
      </nav>
      <article className="case-study" id="work-buddy" aria-labelledby="buddy-title">
        <div className="case-overview">
          <div className="case-category"><span>01</span> PROFESSIONAL EXPERIENCE</div>
          <h3 id="buddy-title">우리 Buddy<span>Woori Buddy</span></h3>
          <p className="case-lead">매일의 업무가<br />끊김 없이 이어지도록.</p>
          <p>임직원을 위한 사내 그룹웨어 PWA. 사업장과 직원 정보 탐색부터 인증, 알림, 출퇴근까지 업무에 필요한 화면과 운영 이슈 대응에 참여했습니다.</p>
          <dl className="project-meta">
            <div><dt>기간</dt><dd>2025.09 — 현재</dd></div>
            <div><dt>협업</dt><dd>프론트엔드 2명 · 팀 내 개발 기여</dd></div>
            <div><dt>기여</dt><dd>검색·상세·이력, 인증, 운영 오류와 UI 상태 처리</dd></div>
            <div><dt>개선 사례</dt><dd>이미지 자산 3개 합계 109KB → 16.8KB</dd></div>
            <div><dt>공개 범위</dt><dd>담당 업무와 문제 해결 과정 · 내부 소스 비공개</dd></div>
          </dl>
          <ul className="tech-list" aria-label="우리 Buddy 기술"><li>Vue 3</li><li>TypeScript</li><li>Quasar 2</li><li>Pinia</li><li>Vite</li><li>Workbox</li><li>Axios / REST API</li><li>Vitest</li></ul>
          <p className="disclosure">업무상 공개 가능한 기여 범위만 정리했습니다.<br />내부 소스와 상세 구조는 공개하지 않습니다.</p>
        </div>
        <figure className="project-visual buddy-visual">
          <div className="visual-topline"><span>WORKPLACE, CONNECTED.</span><span>PWA / MOBILE</span></div>
          <img src={buddyScreenshot} alt="우리 Buddy 모바일 로그인 화면. 아이디·비밀번호 입력과 계정 찾기, 비밀번호 재설정 메뉴" width={1170} height={2532} loading="lazy" />
          <figcaption>우리 Buddy · 임직원 업무 포털의 시작 화면</figcaption>
        </figure>
        <BuddyScene />
      </article>
      <article className="case-study lokki-case" id="work-lokki" aria-labelledby="lokki-title">
        <div className="case-overview">
          <div className="case-category"><span>02</span> PUBLIC PERSONAL PROJECT</div>
          <h3 id="lokki-title">Lokki<span>로스트아크 플레이 도구</span></h3>
          <p className="case-lead">여러 정보를 모아,<br />다음 선택을 더 쉽게.</p>
          <p>로스트아크 캐릭터 조회·비교·시뮬레이션·계획 도구를 제공하는 공개 개인 프로젝트입니다. 다양한 도구를 모바일에서도 사용할 수 있는 반응형 UI로 구성했습니다.</p>
          <dl className="project-meta">
            <div><dt>역할</dt><dd>공개 개인 프로젝트 · 단독 개발</dd></div>
            <div><dt>범위</dt><dd>반응형 UI · API 프록시 · 계산 유틸리티 · 테스트 · CI</dd></div>
            <div><dt>검증</dt><dd>프록시 보안·프론트엔드 테스트와 프로덕션 빌드 자동화</dd></div>
            <div><dt>검색 유입</dt><dd>Naver 1,971회 · Google 55회 노출 (최근 집계)</dd></div>
            <div><dt>설계 조건</dt><dd>외부 Open API 변화와 계산식의 입력 조건 관리</dd></div>
          </dl>
          <ul className="tech-list" aria-label="Lokki 기술"><li>React 19</li><li>TypeScript</li><li>Tailwind CSS</li><li>React Router DOM</li><li>Vercel Functions</li><li>Vitest / RTL</li><li>GitHub Actions</li></ul>
          <div className="project-links"><a className="text-link" href="https://lokki.vercel.app/" target="_blank" rel="noopener noreferrer">서비스 보기 <span aria-hidden="true">↗</span><span className="sr-only"> (새 탭)</span></a><a className="text-link" href="https://github.com/ricky0601/React_LostArk" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span><span className="sr-only"> (새 탭)</span></a></div>
        </div>
        <figure className="project-visual lokki-visual">
          <div className="visual-topline"><span>TOOLS FOR THE NEXT STEP.</span><span>WEB / RESPONSIVE</span></div>
          <div className="browser-frame"><div className="browser-bar"><span aria-hidden="true">● ● ●</span><span>lokki.vercel.app</span></div><img src={lokkiScreenshot} alt="Lokki 대시보드. 주간 골드와 재련 계산, 시세 랭킹, 캐릭터 비교 도구와 게임 일정" width={1169} height={1801} loading="lazy" /></div>
          <figcaption>Lokki · 성장에 필요한 도구를 모은 대시보드</figcaption>
        </figure>
        <LokkiScene />
      </article>
      <PortfolioCase />
    </section>
  );
}
