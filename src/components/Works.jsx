import { useEffect, useRef } from 'react'
import { useLang } from '../contexts/LanguageContext'
import './Works.css'
import dataAnalysisImg from '../assets/images/データ分析.jpg'
import vrSchoolImg from '../assets/images/vr学校.jpg'
import vrMuseumImg from '../assets/images/vr美術館.jpg'

function Works() {
  const worksRef = useRef(null)
  const { lang } = useLang()
  const t = (en, ja) => lang === 'en' ? en : ja

  const projects = [
    {
      title: { en: 'Data Analysis', ja: 'データ解析' },
      subtitle: 'Data Analysis',
      description: {
        en: 'Research decoding structure and patterns from complex datasets, including numerical analysis of literary works and investment/economic markets. Using statistical methods and computer science to open new horizons in the humanities.',
        ja: '文学作品の数値解析や投資・経済市場などの、複雑なデータセットから構造とパターンを読み解く研究。統計的手法と計算機科学を用いて、人文学の新しい地平を切り開いています。'
      },
      image: dataAnalysisImg,
      tags: {
        en: ['Statistical Analysis', 'NLP', 'Machine Learning'],
        ja: ['統計解析', '自然言語処理', '機械学習']
      }
    },
    {
      title: { en: 'VR Education Space', ja: 'VR教育空間' },
      subtitle: 'VR Education',
      description: {
        en: "A school built in VR space, 'VRC Academy.' Exploring new educational possibilities through immersive learning experiences.",
        ja: 'VR空間に構築した学校「私立VRC学園」。没入型の学習体験を通じて、新しい教育の可能性を探求しています。'
      },
      image: vrSchoolImg,
      tags: {
        en: ['VR', 'Education', 'Metaverse'],
        ja: ['VR', '教育', 'メタバース']
      }
    },
    {
      title: { en: 'VR Art Museum', ja: 'VR美術館' },
      subtitle: 'VR Museum',
      description: {
        en: "Museums 'WESON MUSEUM' and 'ARTLINK' created in virtual space. Providing a place for artistic experiences that transcend physical constraints.",
        ja: 'バーチャル空間に創造した美術館「WESON MUSEUM」「ARTLINK」。物理的制約を超えた芸術体験の場を提供しています。'
      },
      image: vrMuseumImg,
      tags: {
        en: ['VR', 'Art', 'Curation'],
        ja: ['VR', 'アート', 'キュレーション']
      }
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

    if (worksRef.current) {
      observer.observe(worksRef.current)
    }

    return () => {
      if (worksRef.current) {
        observer.unobserve(worksRef.current)
      }
    }
  }, [])

  return (
    <section id="works" className="works" ref={worksRef}>
      <div className="container">
        <div className="works-header">
          <span className="section-number">参</span>
          <h2 className="section-title">
            <span className="title-main">{t('Works', '実装')}</span>
            <span className="title-sub">Works</span>
          </h2>
        </div>
        <div className="works-grid">
          {projects.map((project, index) => (
            <div key={index} className="work-card" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="work-visual">
                {project.image ? (
                  <img src={project.image} alt={project.title[lang]} className="work-image" />
                ) : (
                  <div className="work-icon-container">
                    {project.icon}
                  </div>
                )}
              </div>
              <div className="work-content">
                <h3 className="work-title">{project.title[lang]}</h3>
                <p className="work-subtitle">{project.subtitle}</p>
                <p className="work-description">{project.description[lang]}</p>
                <div className="work-tags">
                  {project.tags[lang].map((tag, tagIndex) => (
                    <span key={tagIndex} className="work-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Works
