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
      <article className="case-study" aria-labelledby="buddy-title">
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
        <div className="case-details">
          <div className="case-step"><span className="detail-number">01 / 맥락</span><div><h4>매일 반복되는 업무를 모바일로 연결하는 PWA</h4><p>우리 Buddy는 임직원이 사업장과 직원 정보를 찾고, 알림을 확인하고, 출퇴근 업무를 처리하는 사내 그룹웨어입니다. 프론트엔드 2명으로 구성된 팀에서 신규 화면 구현과 운영 이슈 대응을 함께 맡았습니다.</p></div></div>
          <div className="case-step"><span className="detail-number">02 / 문제</span><div><h4>기능만큼 중요한 것은 화면에 정상적으로 도달하는 일</h4><p>검색 결과가 상세 정보와 사업장 이력으로 자연스럽게 이어져야 했고, 사용자별 동적 메뉴도 올바른 화면으로 연결되어야 했습니다. 운영 중에는 로그인 리다이렉트 반복과 배포 후 이전 청크를 요청하는 상황처럼 서비스 진입 자체를 막는 문제도 발생했습니다.</p></div></div>
          <div className="case-step"><span className="detail-number">03 / 기여</span><div><h4>정상 흐름과 실패 경로를 하나의 사용자 경험으로</h4><ul className="case-actions"><li><strong>탐색:</strong> 사업장·직원 검색, 상세 정보, 사업장 이력과 동적 메뉴·라우팅을 구현했습니다.</li><li><strong>인증:</strong> SSO/OIDC 로그인과 계정 복구 흐름을 다루고, 반복 리다이렉트가 발생하는 진입 경로에 대응했습니다.</li><li><strong>운영:</strong> 배포 후 청크 로드 오류를 처리하고 알림 가상 스크롤, 위치 기반 출퇴근 UI의 상태 표현을 작업했습니다.</li></ul></div></div>
          <div className="case-step"><span className="detail-number">04 / 결과</span><div><h4>작은 자산도 측정 가능한 단위로 개선</h4><p className="evidence-line">PNG 109,235 bytes → WebP 16,758 bytes <strong>84.66% 감소</strong></p><p>화면에서 사용하는 PNG 이미지 3개를 WebP로 전환한 결과입니다. 파일 합계 용량을 기준으로 전후를 직접 비교해 최적화 효과를 확인했습니다.</p><p className="case-note">* 이미지 3개 합계 기준</p></div></div>
          <div className="case-step"><span className="detail-number">05 / 배운 점</span><div><h4>프론트엔드는 화면 바깥의 경계까지 다룬다</h4><p>운영 서비스에서는 완성된 화면보다 사용자가 그 화면에 도달하고 업무를 끝내는 전체 경로가 중요했습니다. 인증, 캐시, 배포와 위치 권한처럼 프론트엔드 바깥으로 보이는 경계도 결국 사용자가 마주하는 경험이라는 기준을 갖게 됐습니다.</p><p><strong>다음 단계:</strong> 로그인·계정 복구·배포 직후 진입을 시나리오별 점검 항목으로 만들고, 주요 UI 상태의 회귀 테스트를 넓히는 것입니다.</p></div></div>
        </div>
      </article>
      <article className="case-study lokki-case" aria-labelledby="lokki-title">
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
        <div className="case-details">
          <div className="case-step"><span className="detail-number">01 / 맥락</span><div><h4>정보 조회를 실제 플레이 판단으로 연결하는 도구</h4><p>Lokki는 로스트아크 캐릭터·원정대 조회에서 비교, 스펙 시뮬레이션, 재련, 시세와 지출 계획까지 연결한 공개 PWA입니다. 단독으로 개발하며 화면, 외부 API 연결, 계산 유틸리티, 테스트와 배포 흐름을 함께 구성했습니다.</p></div></div>
          <div className="case-step"><span className="detail-number">02 / 문제</span><div><h4>흩어진 데이터와 계산을 하나의 흐름으로 만들기</h4><p>사용자는 캐릭터 정보를 확인한 뒤 다른 캐릭터와 비교하거나 재련 비용을 계산하고 다음 목표를 계획합니다. 서로 다른 기능을 단순히 모으는 대신, 데스크톱과 모바일 모두에서 조회 이후의 행동이 자연스럽게 이어지도록 화면 구조와 탐색 경로를 정리했습니다.</p></div></div>
          <div className="case-step"><span className="detail-number">03 / 구현</span><div><h4>UI, 외부 API, 계산 로직을 분리해 검증</h4><ul className="case-actions"><li><strong>화면:</strong> React Router DOM으로 조회·비교·계획 흐름을 나누고 Tailwind CSS로 반응형 인터페이스를 구현했습니다.</li><li><strong>데이터:</strong> Lost Ark Open API 요청을 Vercel Functions 프록시에서 처리해 브라우저와 외부 API 사이의 경계를 분리했습니다.</li><li><strong>계산과 공개:</strong> 계산 로직을 유틸리티로 분리하고 테스트를 작성했습니다. PWA, 사이트맵, 정적 SEO 생성과 메타데이터도 함께 구성했습니다.</li></ul></div></div>
          <div className="case-step"><span className="detail-number">04 / 검증</span><div><h4>자동 검증과 실제 검색 유입을 함께 확인</h4><p>Vitest와 React Testing Library로 계산과 사용자 흐름을 확인합니다. GitHub Actions에서는 API 프록시 보안 테스트, 프론트엔드 테스트, 프로덕션 빌드를 순서대로 실행해 변경 사항을 공개하기 전 같은 검증 과정을 반복합니다.</p><p className="evidence-line">Naver Search Advisor · 최근 30일<strong>노출 1,971회 · 클릭 49회 · CTR 2.49%</strong></p><p className="evidence-line">Google Search Console · 최근 28일<strong>노출 55회 · 클릭 6회 · CTR 10.91% · 평균 게재순위 13.0</strong></p><p>사이트맵과 검색 메타데이터를 적용한 뒤 검색 엔진별 노출과 유입을 계속 관찰하고 있습니다.</p><p className="case-note">* 2026.09.18 내보내기 기준의 기간별 집계이며, 두 검색 엔진의 수치는 합산하지 않았습니다.</p></div></div>
          <div className="case-step"><span className="detail-number">05 / 배운 점</span><div><h4>숫자를 보여주는 것보다 판단 근거를 설명하는 일</h4><p>계산 도구는 결과만 제공해서는 충분하지 않았습니다. 어떤 데이터와 입력 조건을 사용했는지, 외부 API가 실패했을 때 어떤 상태를 보여줄지까지 화면 설계의 일부로 다뤄야 했습니다.</p><p><strong>다음 단계:</strong> 계산별 입력 조건과 가정을 화면에서 더 명확히 설명하고, 경계값 테스트와 검색 지표의 집계 기록을 체계화하는 것입니다.</p></div></div>
        </div>
      </article>
    </section>
  );
}
