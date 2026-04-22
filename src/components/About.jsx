import { useEffect, useRef } from 'react'
import { useLang } from '../contexts/LanguageContext'
import './About.css'

function About() {
  const aboutRef = useRef(null)
  const { lang } = useLang()
  const t = (en, ja) => lang === 'en' ? en : ja

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

    if (aboutRef.current) {
      observer.observe(aboutRef.current)
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current)
      }
    }
  }, [])

  return (
    <section id="about" className="about" ref={aboutRef}>
      <div className="container">
        <div className="about-header">
          <span className="section-number">壱</span>
          <h2 className="section-title">
            <span className="title-main">{t('About Me', '自己紹介')}</span>
            <span className="title-sub">About</span>
          </h2>
        </div>
        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
              <p className="about-lead">
                {t(
                  <>Exploring the Structure of the World<br />Between Sensibility and Science</>,
                  <>感性と科学のあわいで<br />世界の構造を探る</>
                )}
              </p>
            </div>
            <div className="about-description">
              <p>
                {t(
                  <>Loosely analyzing the world.<br />
                  Wandering between physics and humanities, I ended up fitting into neither.<br />
                  Someone save me.</>,
                  <>世界をゆるく解析しています。<br />
                  物理学と人文学のあいだをふらふらと漂っていたら、結局どちらの世界にも馴染めなかった者です。<br />
                  誰か救ってください。</>
                )}
              </p>
              <p>
                {t(
                  'I treat technology and science not as tools for efficiency, but as poetic devices that occasionally glitch thoughts and emotions.',
                  'テクノロジーや科学を"効率の道具"としてではなく、思考や感情をたまにバグらせる詩的装置として扱っています。'
                )}
              </p>
              <p>
                {t(
                  'In academic research, I decode the structure of literature through data analysis; in creative work, I weave sensibility into algorithms.',
                  '大学の研究では、データ解析を通して文学の構造を読み解き、創作では、アルゴリズムの中に感性を織り込む。'
                )}
              </p>
              <p>
                {t(
                  <>— Theory and intuition, order and fluctuation.<br />
                  I believe beauty resides at the intersection of both.</>,
                  <>──理論と直感、秩序と揺らぎ。<br />
                  その両方の交点に「美しさ」が宿ると信じています。</>
                )}
              </p>
            </div>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">186.5cm</div>
              <div className="stat-label">Height</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">80%</div>
              <div className="stat-label">Introversion Index</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">9.26</div>
              <div className="stat-label">Birthday</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
