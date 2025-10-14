import { useEffect, useRef } from 'react'
import './Skills.css'

function Skills() {
  const skillsRef = useRef(null)

  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'Vue.js', 'TypeScript', 'Next.js', 'Tailwind CSS']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Python', 'GraphQL', 'REST API', 'PostgreSQL']
    },
    {
      category: 'Tools',
      skills: ['Git', 'Docker', 'AWS', 'Figma', 'CI/CD']
    },
    {
      category: 'Design',
      skills: ['UI/UX', 'Responsive', 'Animation', 'Prototyping', 'Branding']
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
          <span className="section-number">弐</span>
          <h2 className="section-title">
            <span className="title-main">実装</span>
            <span className="title-sub">Works</span>
          </h2>
        </div>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category" style={{ animationDelay: `${index * 0.1}s` }}>
              <h3 className="category-title">{category.category}</h3>
              <ul className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="skill-item">
                    <span className="skill-bullet"></span>
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
