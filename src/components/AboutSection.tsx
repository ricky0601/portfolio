import portrait from "../assets/donggeon-han-portrait.jpg";

export default function AboutSection() {
  return (
    <section className="about-section page-width" id="about" aria-labelledby="about-title">
      <div className="about-photo"><img src={portrait} width={551} height={709} loading="lazy" alt="프론트엔드 개발자 한동건의 프로필 사진" /><p>한동건 <span>Han Donggeon</span></p></div>
      <div className="about-copy"><p className="eyebrow">03 / ABOUT ME</p><h2 id="about-title">기술은 바탕으로,<br />사용은 중심으로.</h2><p>사내 업무 서비스와 공개 개인 프로젝트를 만들며, 서로 다른 환경에서 프론트엔드를 경험했습니다.</p><p>제가 중요하게 생각하는 것은 사용자가 화면을 이해하고, 필요한 일을 끝낼 수 있는가입니다. 복잡한 정보를 정리하는 일과 예외 상황에서도 흐름이 이어지게 하는 일에 관심을 두고 있습니다.</p><p>Vue와 React를 사용하며, 서비스에 필요한 화면 구현부터 운영 대응과 테스트까지 경험을 넓혀가고 있습니다.</p>
        <div className="profile-facts" aria-labelledby="profile-facts-title">
          <h3 id="profile-facts-title">경력과 학습 배경</h3>
          <dl>
            <div><dt>2025.09 — 현재</dt><dd><strong>우리관리 정보화추진팀</strong><span>사내 그룹웨어 우리 Buddy 프론트엔드 개발·운영 참여</span></dd></div>
            <div><dt>학력 · 졸업</dt><dd><strong>한국공학대학교 IT경영학과</strong><span>이커머스 부전공</span></dd></div>
            <div><dt>교육 · 수료</dt><dd><strong>프로그래머스</strong><span>타입스크립트로 함께하는 웹 풀 사이클 개발 과정</span></dd></div>
          </dl>
        </div>
        <a className="text-link" href="https://velog.io/@ricky0601/posts" target="_blank" rel="noopener noreferrer">Velog에서 개발 기록 읽기 <span aria-hidden="true">↗</span><span className="sr-only"> (새 탭)</span></a></div>
    </section>
  );
}
