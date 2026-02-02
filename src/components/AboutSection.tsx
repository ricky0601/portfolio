import "./AboutSection.css";

export default function AboutSection() {
  return (
    <section id="about" className="about-section page-section" aria-label="소개">
      <div className="section-inner">
        <h2 className="section-title">About</h2>
        <div className="about-content">
          <p className="about-lead">
            프론트엔드 개발자 한동건입니다.
            <br />
            사용자 경험과 코드 품질을 중요하게 생각하고,
            <br />
            웹과 앱 모두에서 읽기 쉽고 유지보수하기 좋은 코드를 지향합니다.
          </p>
          <p className="about-body">
            React·TypeScript 기반으로 웹 프론트엔드를 주로 다루고,
            <br />
            필요에 따라 Node.js 백엔드나 React Native까지 손댑니다.
            <br />
            새 기능을 만들 때는 기획·디자인과 맞추는 것과, 성능·접근성·에러 처리까지 한 번에 고민하는 편입니다.
          </p>
          <p className="about-body">
            지금은 사용자 입력·실시간 피드백이 많은 화면(예: 카메라·AI 응답, 쇼핑 플로우)을 다루는 걸 좋아하고, 복잡한 상태와 스크롤/제스처를 정리하는 데 시간을 많이 씁니다.
          </p>
          <ul className="about-focus" aria-label="관심 분야">
            <li>UX · 사용자 중심 인터페이스</li>
            <li>성능 · 체감 속도와 로딩</li>
            <li>유지보수 · 타입·구조·테스트</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
