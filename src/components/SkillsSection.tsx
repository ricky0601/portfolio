const capabilities = [
  { number: "01", title: "흐름을 읽고, 화면으로 옮깁니다.", description: "검색과 상세, 메뉴와 라우팅처럼 여러 화면에 걸친 업무를 구현했습니다. 개별 컴포넌트뿐 아니라 사용자가 다음에 할 일까지 살핍니다.", evidence: "Vue 3 · React · TypeScript · Pinia" },
  { number: "02", title: "잘될 때만이 아니라, 막힐 때도.", description: "인증 루프와 배포 후 로딩 오류에 대응한 경험이 있습니다. 인증·복구·위치 상태처럼 사용이 멈출 수 있는 지점을 함께 고려합니다.", evidence: "SSO / OIDC · REST API · PWA · Workbox" },
  { number: "03", title: "수정한 뒤의 흐름도 확인합니다.", description: "사용자 흐름 테스트와 CI를 구성한 경험을 바탕으로, 화면의 변화가 기존 동작에 미치는 영향을 확인합니다.", evidence: "Vitest · React Testing Library · GitHub Actions" },
];

export default function SkillsSection() {
  return (
    <section className="capabilities-section" id="experience" aria-labelledby="capabilities-title">
      <div className="page-width capabilities-layout">
        <div><p className="eyebrow">02 / HOW I WORK</p><h2 id="capabilities-title">화면을 만드는 일,<br />그 이후까지.</h2><p className="section-intro">실제 서비스에서 쌓은 경험을<br />다음 구현의 기준으로 삼습니다.</p></div>
        <div className="capability-list">{capabilities.map((item) => <div className="capability" key={item.number}><span className="detail-number">{item.number}</span><div><h3>{item.title}</h3><p>{item.description}</p><p className="capability-tools">{item.evidence}</p></div></div>)}</div>
      </div>
    </section>
  );
}
