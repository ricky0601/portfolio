export default function ContactSection() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="page-width">
        <div className="contact-top"><p className="eyebrow">04 / NEXT CHAPTER</p><span>LET’S BUILD SOMETHING THAT WORKS.</span></div>
        <div className="contact-heading"><h2 id="contact-title">다음 흐름을<br />함께 만들까요?</h2><a className="contact-orbit" href="mailto:movegun0601@gmail.com" aria-label="한동건에게 이메일 보내기"><span aria-hidden="true">↗</span></a></div>
        <p>채용이나 협업에 관한 이야기를 기다립니다.</p>
        <a className="contact-email" href="mailto:movegun0601@gmail.com">movegun0601@gmail.com <span aria-hidden="true">↗</span></a>
        <div className="contact-socials"><a href="/han-donggeon-resume.pdf" target="_blank" rel="noopener noreferrer">이력서 PDF ↗<span className="sr-only"> (새 탭)</span></a><a href="https://github.com/ricky0601" target="_blank" rel="noopener noreferrer">GitHub ↗<span className="sr-only"> (새 탭)</span></a><a href="https://velog.io/@ricky0601/posts" target="_blank" rel="noopener noreferrer">Velog ↗<span className="sr-only"> (새 탭)</span></a></div>
      </div>
    </section>
  );
}
