import { useEffect, useRef } from 'react'
import './Contact.css'

function Contact() {
  const contactRef = useRef(null)

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

    if (contactRef.current) {
      observer.observe(contactRef.current)
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current)
      }
    }
  }, [])

  return (
    <section id="contact" className="contact" ref={contactRef}>
      <div className="container">
        <div className="contact-header">
          <span className="section-number">03</span>
          <h2 className="section-title">Contact</h2>
        </div>
        <div className="contact-content">
          <div className="contact-intro">
            <p className="contact-lead">
              プロジェクトのご相談、<br />
              お気軽にご連絡ください
            </p>
            <p className="contact-description">
              新しいプロジェクトやコラボレーションの機会を<br />
              常に歓迎しています。
            </p>
          </div>
          <div className="contact-links">
            <a href="mailto:your.email@example.com" className="contact-link">
              <span className="link-label">Email</span>
              <span className="link-value">your.email@example.com</span>
              <span className="link-arrow">→</span>
            </a>
            <a href="https://github.com/yourusername" className="contact-link" target="_blank" rel="noopener noreferrer">
              <span className="link-label">GitHub</span>
              <span className="link-value">@yourusername</span>
              <span className="link-arrow">→</span>
            </a>
            <a href="https://twitter.com/yourusername" className="contact-link" target="_blank" rel="noopener noreferrer">
              <span className="link-label">Twitter</span>
              <span className="link-value">@yourusername</span>
              <span className="link-arrow">→</span>
            </a>
            <a href="https://linkedin.com/in/yourusername" className="contact-link" target="_blank" rel="noopener noreferrer">
              <span className="link-label">LinkedIn</span>
              <span className="link-value">/in/yourusername</span>
              <span className="link-arrow">→</span>
            </a>
          </div>
        </div>
        <footer className="contact-footer">
          <p>&copy; 2025 Portfolio. All rights reserved.</p>
        </footer>
      </div>
    </section>
  )
}

export default Contact
