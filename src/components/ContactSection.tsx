import "./ContactSection.css";

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section page-section" aria-label="연락처">
      <div className="section-inner">
        <h2 className="section-title">Contact</h2>
        <p className="contact-intro">
          협업·문의가 필요하시면 아래로 연락 주세요.
        </p>
        {/* 이메일·LinkedIn·이력서 링크는 실제 URL로 교체하세요 */}
        <div className="contact-links">
          <a href="mailto:movegun0601@email.com" className="contact-link" aria-label="이메일 보내기">
            movegun0601@email.com
          </a>
          <a
            href="https://github.com/ricky0601"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            aria-label="GitHub 프로필"
          >
            GitHub
          </a>
          <a
            href="https://velog.io/@ricky0601/posts"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            aria-label="Velog 링크"
          >
            Velog
          </a>
        </div>
      </div>
    </section>
  );
}
