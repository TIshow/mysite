import { useEffect, useRef } from 'react'
import './About.css'

function About() {
  const aboutRef = useRef(null)

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
            <span className="title-main">自己紹介</span>
            <span className="title-sub">About</span>
          </h2>
        </div>
        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
              <p className="about-lead">
                感性と科学のあわいで<br />
                世界の構造を探る
              </p>
            </div>
            <div className="about-description">
              <p>
                世界をゆるく解析しています。<br />
                物理学と人文学のあいだをふらふらと漂っていたら、<br />
                結局どちらの世界にも馴染めなかった者です。<br />
                誰か救ってください。
              </p>
              <p>
                テクノロジーや科学を"効率の道具"としてではなく、<br />
                思考や感情をたまにバグらせる詩的装置として扱っています。
              </p>
              <p>
                大学の研究では、データ解析を通して文学の構造を読み解き、<br />
                創作では、アルゴリズムの中に感性を織り込む。
              </p>
              <p>
                ──理論と直感、秩序と揺らぎ。<br />
                その両方の交点に「美しさ」が宿ると信じています。<br />
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
