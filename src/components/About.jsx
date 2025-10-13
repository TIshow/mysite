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
                テクノロジーとデザインの<br />
                交差点で価値を創造する
              </p>
            </div>
            <div className="about-description">
              <p>
                私はWeb開発に情熱を持つエンジニアです。
                モダンな技術を使って、ユーザーにとって価値のあるアプリケーションを作ることを目指しています。
              </p>
              <p>
                常に新しい技術を学び、より良いコードを書くことに挑戦しています。
                チームでの開発やオープンソースへの貢献も積極的に行っています。
              </p>
            </div>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">20+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
