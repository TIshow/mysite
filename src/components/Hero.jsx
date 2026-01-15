import { useEffect, useRef } from 'react'
import profileImg from '../assets/images/profile.jpg'
import './Hero.css'

function Hero() {
  const heroRef = useRef(null)

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

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current)
      }
    }
  }, [])

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <div className="hero-background">
        <div className="hero-shape hero-shape-1"></div>
        <div className="hero-shape hero-shape-2"></div>
        <div className="hero-shape hero-shape-3"></div>
        <div className="kamon kamon-1">◈</div>
        <div className="kamon kamon-2">◈</div>
      </div>
      <div className="hero-content">
        <div className="hero-main">
          <div className="hero-text">
            <div className="hero-label">
              <span className="label-jp">刊行</span>
              <span className="label-year">二〇二五</span>
            </div>
            <h1 className="hero-title">
              <span className="hero-title-line">大将</span>
            </h1>
            <p className="hero-subtitle">
              <span className="subtitle-ornament">—</span>
              Scientist failure
              <span className="subtitle-ornament">—</span>
            </p>
            <p className="hero-description">
              テニス、コーヒー、V系、美人、<br />
              懐手して宇宙見物
            </p>
          </div>
          <div className="hero-image-wrapper">
            <div className="hero-image-border"></div>
            <div className="image-frame">
              <img src={profileImg} alt="大将" className="hero-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
