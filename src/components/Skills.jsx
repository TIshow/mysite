import { useEffect, useRef } from 'react'
import './Skills.css'

function Skills() {
  const skillsRef = useRef(null)

  const skillCategories = [
    {
      title: 'Technical Skills',
      titleJa: '技術',
      skills: [
        { name: 'JavaScript', items: ['React', 'Next.js', 'TypeScript', 'Express'] },
        { name: 'Python', items: ['Data Science', 'Flask', 'Django'] },
        { name: 'Database', items: ['MySQL', 'Firebase', 'Firestore'] },
        { name: 'Cloud', items: ['GCP', 'AWS Amplify'] }
      ]
    },
    {
      title: 'Languages',
      titleJa: '言語',
      skills: [
        { name: 'Japanese', level: 'Native', icon: '🇯🇵' },
        { name: 'English', level: 'IELTS 6.5 (2016)', icon: '🇬🇧' },
        { name: 'Russian', level: 'Beginner', icon: '🇷🇺' }
      ]
    },
    {
      title: 'Soft Skills',
      titleJa: '素養',
      skills: [
        { name: 'Writing', description: '執筆・文章表現' },
        { name: 'Challenging', description: '挑戦する姿勢' }
      ]
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (skillsRef.current) {
      observer.observe(skillsRef.current)
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current)
      }
    }
  }, [])

  return (
    <section id="skills" className="skills" ref={skillsRef}>
      <div className="container">
        <div className="skills-header">
          <span className="section-number">伍</span>
          <h2 className="section-title">
            <span className="title-main">技能</span>
            <span className="title-sub">Skills</span>
          </h2>
        </div>
        <div className="skills-content">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="skill-category"
              style={{ animationDelay: `${categoryIndex * 0.15}s` }}
            >
              <div className="category-header">
                <h3 className="category-title-en">{category.title}</h3>
                <span className="category-title-ja">{category.titleJa}</span>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="skill-item"
                    style={{ animationDelay: `${(categoryIndex * 0.15) + (skillIndex * 0.05)}s` }}
                  >
                    {skill.icon && (
                      <span className="skill-icon">{skill.icon}</span>
                    )}
                    <div className="skill-content">
                      <div className="skill-name">{skill.name}</div>
                      {skill.items && (
                        <div className="skill-items">
                          {skill.items.map((item, itemIndex) => (
                            <span key={itemIndex} className="skill-tag">{item}</span>
                          ))}
                        </div>
                      )}
                      {skill.level && (
                        <div className="skill-level">{skill.level}</div>
                      )}
                      {skill.description && (
                        <div className="skill-description">{skill.description}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
