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
      </div>
      <div className="hero-content">
        <div className="hero-main">
          <div className="hero-text">
            <div className="hero-label">PORTFOLIO 2025</div>
            <h1 className="hero-title">
              <span className="hero-title-line">大将</span>
            </h1>
            <p className="hero-subtitle">Web Developer / Creative Engineer</p>
            <p className="hero-description">
              革新的なアイデアとテクノロジーで、<br />
              新しい体験を創り出します
            </p>
            <div className="hero-scroll-hint">
              <span>SCROLL</span>
              <div className="scroll-arrow"></div>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <div className="hero-image-border"></div>
            <img src={profileImg} alt="大将" className="hero-image" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
