import { useRef, useCallback } from "react";
import "./HeroSection.css";

export default function HeroSection() {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty("--mouse-x", "50%");
    card.style.setProperty("--mouse-y", "50%");
  }, []);

  return (
    <section className="hero page-section" aria-label="소개">
      <div className="hero-card" ref={cardRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        <p className="hero-label">2026</p>
        <h1 className="hero-name">한동건</h1>
        <p className="hero-role">Frontend Developer</p>
        <p className="hero-tagline">사용자 경험과 코드 품질을 생각하는 개발자</p>
        <p className="hero-keywords">React · TypeScript · Vue</p>
      </div>
    </section>
  );
}
