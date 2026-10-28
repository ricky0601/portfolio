import ScrollScene, { type SceneStep } from "./ScrollScene";

const steps: readonly SceneStep[] = [
  {
    id: "explore", label: "01 / 탐색", title: "검색에서 상세, 이력까지 한 흐름으로", body: "사업장·직원 검색, 상세 정보, 사업장 이력과 동적 메뉴·라우팅을 구현했습니다.",
    screen: <>
      <div className="mock-search">⌕ 사업장 검색</div>
      <ul className="mock-list"><li /><li className="is-picked" /><li /></ul>
      <div className="mock-detail"><div className="mock-tabs"><span>상세</span><span>이력</span></div><i /><i /><i /></div>
    </>,
  },
  {
    id: "loop", label: "02 / 문제", title: "로그인했는데, 다시 로그인 화면", body: "운영 중 로그인 리다이렉트가 반복되어 서비스 진입 자체가 막히는 상황이 발생했습니다.",
    screen: <>
      <p className="mock-url">/login</p>
      <div className="loop-ring"><span>↻</span></div>
      <ol className="loop-path"><li>/login</li><li>/callback</li><li>/login</li></ol>
      <p className="mock-status is-error">진입 불가 · 리다이렉트 반복</p>
    </>,
  },
  {
    id: "auth", label: "03 / 대응", title: "반복되는 진입 경로를 정상 진입으로", body: "SSO/OIDC 로그인과 계정 복구 흐름을 다루며, 반복 리다이렉트가 발생하는 진입 경로에 대응했습니다.",
    screen: <>
      <p className="mock-url">/home</p>
      <div className="auth-check">✓</div>
      <p className="mock-status is-ok">정상 진입</p>
      <div className="mock-tiles"><span>알림</span><span>출퇴근</span><span>검색</span><span>메뉴</span></div>
    </>,
  },
  {
    id: "chunk", label: "04 / 운영", title: "배포 직후에도 화면이 열리도록", body: "배포 후 이전 청크를 요청하는 로드 오류를 처리했습니다. 알림 가상 스크롤, 위치 기반 출퇴근 UI의 상태 표현도 작업했습니다.",
    screen: <>
      <p className="mock-badge">배포 직후</p>
      <code className="mock-log is-error">ChunkLoadError</code>
      <code className="mock-log">오류 감지 → 처리</code>
      <code className="mock-log is-ok">화면 진입</code>
    </>,
  },
  {
    id: "asset", label: "05 / 결과", title: "작은 자산도 측정 가능한 단위로", body: "화면에서 사용하는 PNG 3개를 WebP로 전환하고 파일 합계 용량으로 전후를 비교했습니다.",
    extra: <p className="evidence-line">PNG 109,235 bytes → WebP 16,758 bytes <strong>84.66% 감소</strong></p>,
    screen: <>
      <p className="mock-badge">이미지 3개 합계</p>
      <div className="size-bar"><span style={{ width: "100%" }} /><p>PNG 109,235 B</p></div>
      <div className="size-bar is-ok"><span style={{ width: "15.34%" }} /><p>WebP 16,758 B</p></div>
      <p className="size-result">−84.66%</p>
    </>,
  },
];

export default function BuddyScene() {
  return (
    <ScrollScene
      tone="dark"
      device="phone"
      steps={steps}
      outro={<>
        <span className="detail-number">배운 점</span>
        <p>운영 서비스에서는 완성된 화면보다 사용자가 그 화면에 도달하고 업무를 끝내는 전체 경로가 중요했습니다. 인증, 캐시, 배포와 위치 권한처럼 프론트엔드 바깥으로 보이는 경계도 결국 사용자가 마주하는 경험입니다.</p>
        <p><strong>다음 단계:</strong> 로그인·계정 복구·배포 직후 진입을 시나리오별 점검 항목으로 만들고, 주요 UI 상태의 회귀 테스트를 넓히는 것입니다.</p>
      </>}
    />
  );
}
