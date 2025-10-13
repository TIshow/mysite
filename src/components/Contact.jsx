import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">お問い合わせ</h2>
        <div className="contact-content">
          <p className="contact-description">
            プロジェクトのご相談や、ご質問がありましたらお気軽にご連絡ください。
          </p>
          <div className="contact-links">
            <a href="mailto:your.email@example.com" className="contact-link">
              Email: your.email@example.com
            </a>
            <a href="https://github.com/yourusername" className="contact-link" target="_blank" rel="noopener noreferrer">
              GitHub: @yourusername
            </a>
            <a href="https://twitter.com/yourusername" className="contact-link" target="_blank" rel="noopener noreferrer">
              Twitter: @yourusername
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
