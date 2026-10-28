import { useState } from "react";
import portrait from "../assets/donggeon-han-portrait.jpg";

const chapters = [
  { label: "실무", heading: "㈜와이드 · 우리관리 주식회사 정보화추진팀", period: "2025.09 — 현재", body: "사내 그룹웨어 우리 Buddy 프론트엔드 개발·운영 참여. 사내 팀 기여와 공개 개인 프로젝트라는 서로 다른 환경에서 프론트엔드를 경험하고 있습니다.", tag: "WORK / Vue · TypeScript" },
  { label: "학력", heading: "한국공학대학교 IT경영학과", period: "졸업 · 이커머스 부전공", body: "기술은 바탕으로, 사용은 중심으로. 복잡한 정보를 정리하고 사용자가 필요한 일을 끝낼 수 있는 인터페이스에 관심을 두고 있습니다.", tag: "EDUCATION / IT경영" },
  { label: "교육", heading: "프로그래머스", period: "TypeScript 풀 사이클 과정 수료", body: "Vue와 React를 사용하며, 서비스에 필요한 화면 구현부터 운영 대응과 테스트까지 경험을 넓혀가고 있습니다.", tag: "LEARNING / Full Cycle" },
];

export default function AboutSection() {
  const [active, setActive] = useState(0);
  const chapter = chapters[active];
  return (
    <section className="about-section page-width" id="about" aria-labelledby="about-title">
      <div className="section-heading"><p className="eyebrow">03 / BEHIND THE INTERFACE</p><h2 id="about-title">기술은 바탕으로.<br />사용은 중심으로.</h2></div>
      <div className="profile-layout">
        <div className="about-photo"><span className="photo-index">PROFILE / 01</span><img src={portrait} width={551} height={709} loading="lazy" alt="프론트엔드 개발자 한동건의 프로필 사진" /><div><strong>한동건</strong><span>Han Donggeon<br />Frontend Developer</span></div></div>
        <div className="profile-story">
          <p className="profile-intro">화면을 이해하고,<br /><strong>필요한 일을 끝낼 수 있도록.</strong></p>
          <div className="profile-menu" aria-label="경력과 학습 배경 선택">{chapters.map((entry, index) => <button type="button" key={entry.label} aria-pressed={active === index} aria-controls="profile-panel" onClick={() => setActive(index)}>0{index + 1} / {entry.label}</button>)}</div>
          <div className="profile-panel" id="profile-panel" key={chapter.label}><span className="eyebrow">{chapter.tag}</span><h3>{chapter.heading}</h3><p className="profile-period">{chapter.period}</p><p>{chapter.body}</p></div>
          <a className="text-link" href="https://velog.io/@ricky0601/posts" target="_blank" rel="noopener noreferrer">개발 기록 읽기 ↗<span className="sr-only"> (새 탭)</span></a>
        </div>
      </div>
    </section>
  );
}
