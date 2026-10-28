import ScrollScene, { type SceneStep } from "./ScrollScene";

const steps: readonly SceneStep[] = [
  {
    id: "context", label: "01 / 맥락", title: "조회에서 끝나지 않고, 다음 판단까지", body: "캐릭터·원정대 조회에서 비교, 스펙 시뮬레이션, 재련, 시세와 지출 계획까지 연결한 공개 PWA입니다. 단독으로 개발했습니다.",
    screen: <>
      <div className="mock-search">⌕ 캐릭터 검색</div>
      <div className="web-cards"><i /><i /><i /></div>
      <div className="web-rows"><i /><i /><i /><i /></div>
    </>,
  },
  {
    id: "flow", label: "02 / 문제", title: "흩어진 기능을 하나의 흐름으로", body: "기능을 단순히 모으는 대신, 데스크톱과 모바일 모두에서 조회 이후의 행동이 자연스럽게 이어지도록 화면 구조와 탐색 경로를 정리했습니다.",
    screen: <ol className="flow-chain"><li>조회</li><li>비교</li><li>시뮬레이션</li><li>재련</li><li>계획</li></ol>,
  },
  {
    id: "proxy", label: "03 / 구현", title: "브라우저와 외부 API 사이에 경계를", body: "Lost Ark Open API 요청을 Vercel Functions 프록시에서 처리했습니다. 계산 로직은 유틸리티로 분리하고 테스트를 작성했습니다.",
    screen: <div className="proxy-diagram">
      <span>Browser</span><i className="packet" /><span className="is-ok">Vercel Functions</span><i className="packet" /><span>Lost Ark Open API</span>
    </div>,
  },
  {
    id: "ci", label: "04 / 검증", title: "공개 전, 같은 검증을 반복", body: "GitHub Actions에서 API 프록시 보안 테스트, 프론트엔드 테스트, 프로덕션 빌드를 순서대로 실행합니다. Vitest와 React Testing Library로 계산과 사용자 흐름을 확인합니다.",
    screen: <ol className="ci-log"><li>API 프록시 보안 테스트</li><li>프론트엔드 테스트</li><li>프로덕션 빌드</li></ol>,
  },
  {
    id: "search", label: "05 / 관찰", title: "실제 검색 유입을 함께 관찰", body: "사이트맵과 검색 메타데이터를 적용한 뒤 검색 엔진별 노출과 유입을 관찰하고 있습니다.",
    extra: <>
      <p className="evidence-line">Naver Search Advisor · 최근 30일<strong>노출 1,971회 · 클릭 49회 · CTR 2.49%</strong></p>
      <p className="evidence-line">Google Search Console · 최근 28일<strong>노출 55회 · 클릭 6회 · CTR 10.91% · 평균 게재순위 13.0</strong></p>
      <p className="case-note">* 2026.09.18 내보내기 기준의 기간별 집계이며, 두 검색 엔진의 수치는 합산하지 않았습니다.</p>
    </>,
    screen: <div className="stat-cards">
      <div><span>Naver · 30일</span><strong>1,971</strong><em>노출 · 클릭 49</em></div>
      <div><span>Google · 28일</span><strong>55</strong><em>노출 · 클릭 6</em></div>
    </div>,
  },
];

export default function LokkiScene() {
  return (
    <ScrollScene
      tone="light"
      device="browser"
      address="lokki.vercel.app"
      steps={steps}
      outro={<>
        <span className="detail-number">배운 점</span>
        <p>계산 도구는 결과만 제공해서는 충분하지 않았습니다. 어떤 데이터와 입력 조건을 사용했는지, 외부 API가 실패했을 때 어떤 상태를 보여줄지까지 화면 설계의 일부로 다뤄야 했습니다.</p>
        <p><strong>다음 단계:</strong> 계산별 입력 조건과 가정을 화면에서 더 명확히 설명하고, 경계값 테스트와 검색 지표의 집계 기록을 체계화하는 것입니다.</p>
      </>}
    />
  );
}
