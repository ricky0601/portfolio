import { useState } from "react";

const capabilities = [
  { number: "01", title: "흐름을 읽습니다.", word: "CONNECT", description: "검색과 상세, 메뉴와 라우팅처럼 여러 화면에 걸친 업무를 구현했습니다. 개별 컴포넌트뿐 아니라 사용자가 다음에 할 일까지 살핍니다.", evidence: "Vue 3 · React · TypeScript · Pinia", flow: ["검색", "상세", "이력"] },
  { number: "02", title: "실패 경로도 다룹니다.", word: "RECOVER", description: "인증 루프와 배포 후 로딩 오류에 대응한 경험이 있습니다. 인증·복구·위치 상태처럼 사용이 멈출 수 있는 지점을 함께 고려합니다.", evidence: "SSO / OIDC · REST API · PWA · Workbox", flow: ["오류", "대응", "정상 진입"] },
  { number: "03", title: "변경을 검증합니다.", word: "VERIFY", description: "사용자 흐름 테스트와 CI를 구성한 경험을 바탕으로, 화면의 변화가 기존 동작에 미치는 영향을 확인합니다.", evidence: "Vitest · React Testing Library · GitHub Actions", flow: ["테스트", "CI", "빌드"] },
];

export default function SkillsSection() {
  const [active, setActive] = useState(0);
  const item = capabilities[active];
  return (
    <section className="capabilities-section" id="experience" aria-labelledby="capabilities-title">
      <div className="page-width">
        <div className="section-heading"><p className="eyebrow">02 / MY APPROACH</p><h2 id="capabilities-title">잘 만드는 것.<br />계속 쓰이게 만드는 것.</h2></div>
        <div className="approach-layout">
          <div className="approach-menu" aria-label="역량 선택">{capabilities.map((entry, index) => <button type="button" key={entry.number} aria-pressed={active === index} aria-controls="approach-panel" onClick={() => setActive(index)}><span>{entry.number}</span><strong>{entry.title}</strong><span aria-hidden="true">↗</span></button>)}</div>
          <div className="approach-panel" id="approach-panel" key={item.number}>
            <span className="approach-word" aria-hidden="true">{item.word}</span>
            <ol className="approach-diagram" aria-label={`${item.title} 작업 흐름`}>{item.flow.map((label, index) => <li key={label}><span>0{index + 1}</span><strong>{label}</strong></li>)}</ol>
            <h3>{item.title}</h3><p>{item.description}</p><p className="capability-tools">{item.evidence}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
