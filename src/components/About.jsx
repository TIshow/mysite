import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">私について</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              私はWeb開発に情熱を持つエンジニアです。
              モダンな技術を使って、ユーザーにとって価値のあるアプリケーションを作ることを目指しています。
            </p>
            <p>
              常に新しい技術を学び、より良いコードを書くことに挑戦しています。
              チームでの開発やオープンソースへの貢献も積極的に行っています。
            </p>
          </div>
          <div className="about-image">
            <div className="placeholder-image">写真</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
