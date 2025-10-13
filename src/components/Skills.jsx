import './Skills.css'

function Skills() {
  const skillCategories = [
    {
      category: 'フロントエンド',
      skills: ['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Vite']
    },
    {
      category: 'バックエンド',
      skills: ['Node.js', 'Express', 'REST API']
    },
    {
      category: 'ツール',
      skills: ['Git', 'GitHub', 'pnpm', 'VS Code']
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">スキル</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.category}</h3>
              <ul className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="skill-item">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
