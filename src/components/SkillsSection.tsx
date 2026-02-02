import "./SkillsSection.css";

const SKILL_CATEGORIES = [
  {
    id: "frontend",
    label: "Frontend",
    items: [
      "React",
      "Vue",
      "TypeScript",
      "JavaScript",
      "HTML / CSS",
      "React Native",
      "Quasar",
      "PWA",
      "Vite",
      "Naver Maps API",
    ],
  },
  {
    id: "backend",
    label: "Backend",
    items: ["Node.js", "Express", "MySQL", "REST API", "JWT"],
  },
  {
    id: "infra",
    label: "Infra",
    items: ["Google Cloud", "GitHub Actions", "Vercel", "Netlify"],
  },
  {
    id: "tools",
    label: "Tools",
    items: ["Git", "Figma", "Axios", "Teachable Machine", "Gemini AI"],
  },
] as const;

export default function SkillsSection() {
  return (
    <section id="skills" className="skills-section page-section" aria-label="기술 스택">
      <div className="section-inner">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {SKILL_CATEGORIES.map((category) => (
            <div key={category.id} className="skills-category">
              <h3 className="skills-category-title">{category.label}</h3>
              <ul className="skills-list" aria-label={category.label}>
                {category.items.map((skill) => (
                  <li key={skill} className="skills-item">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
