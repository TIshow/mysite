import './Hero.css'

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">こんにちは、私は [あなたの名前] です</h1>
        <p className="hero-subtitle">Web開発者 / エンジニア</p>
        <p className="hero-description">
          素晴らしいWebアプリケーションを作ることに情熱を注いでいます
        </p>
        <a href="#contact" className="cta-button">お問い合わせ</a>
      </div>
    </section>
  )
}

export default Hero
