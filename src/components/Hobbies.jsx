import { useEffect, useRef } from 'react'
import { useLang } from '../contexts/LanguageContext'
import './Hobbies.css'

function Hobbies() {
  const hobbiesRef = useRef(null)
  const { lang } = useLang()
  const t = (en, ja) => lang === 'en' ? en : ja

  const hobbiesData = {
    interests: [
      { en: 'Tennis', ja: 'テニス', icon: '🎾' },
      { en: 'Metal / Visual Kei', ja: 'メタル・V系', icon: '🎸' },
      { en: 'Reading', ja: '読書', icon: '📚' },
      { en: 'Movies', ja: '映画', icon: '🎬' },
      { en: 'Anime & Manga', ja: 'アニメ・漫画', icon: '📖' },
      { en: 'Gaming', ja: 'ゲーム', icon: '🎮' },
      { en: 'VR', ja: 'VR', icon: '🥽' },
      { en: 'Beatbox', ja: 'Beatbox', icon: '🎤' },
      { en: 'Magic', ja: 'Magic', icon: '🪄' },
      { en: 'Programming', ja: 'プログラミング', icon: '💻' },
      { en: 'Data Analysis', ja: 'データ分析', icon: '📊' },
      { en: 'Stocks', ja: '株', icon: '📈' },
      { en: 'Perfume', ja: '香水', icon: '🌸' },
      { en: 'Cosplay (past)', ja: 'コスプレ（昔）', icon: '🎭' }
    ],
    favorites: [
      {
        category: { en: 'Music', ja: '音楽' },
        icon: '🎵',
        items: [
          'Rage Against the Machine', 'Slipknot', 'Bullet For My Valentine',
          'System of a Down', 'Falling In Reverse', 'The Agonist', 'All That Remains', 'Queen',
          'Led Zeppelin', 'Linkin Park', 'Eric Clapton', 'The Fratellis',
          'The Offspring', 'ギルガメッシュ', 'KIZU', 'GLAY', '己龍',
          '摩天楼オペラ', 'ジグザグ'
        ]
      },
      {
        category: { en: 'Manga & Anime', ja: '漫画・アニメ' },
        icon: '📺',
        items: [
          '鋼の錬金術師', '伊藤潤二作品', 'つげ義春作品', '東京喰種',
          'カウボーイ・ビバップ', 'テニスの王子様', 'PSYCHO-PASS', 'STEINS;GATE',
          'ヴァイオレット・エヴァーガーデン', 'Another',
          '青春ブタ野郎はバニーガール先輩の夢を見ない。', 'マイメロ', 'アグレッシブ烈子'
        ]
      },
      {
        category: { en: 'Movies', ja: '映画' },
        icon: '🎥',
        items: [
          'Star Wars', 'Alien', 'LEON', 'Jurassic Park',
          'Ghost World', 'The Conjuring', 'SAW', 'Pulp Fiction', 'CUBE'
        ]
      },
      {
        category: { en: 'Games', ja: 'ゲーム' },
        icon: '🕹️',
        items: [
          'Fire Emblem', 'Tales of Symphonia', 'Mother 2',
          'Mario Kart', 'Diablo', 'Dynasty Warriors', 'APEX'
        ]
      },
      {
        category: { en: 'Authors', ja: '作家' },
        icon: '✒️',
        items: [
          '寺田寅彦', '安部公房', '坂口安吾', '岡潔', '村田沙耶香',
          'Stephen King', 'Italo Calvino', 'Agatha Christie', 'George Orwell',
          'Rachel Carson'
        ]
      },
    ]
  }

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

    if (hobbiesRef.current) {
      observer.observe(hobbiesRef.current)
    }

    return () => {
      if (hobbiesRef.current) {
        observer.unobserve(hobbiesRef.current)
      }
    }
  }, [])

  return (
    <section id="hobbies" className="hobbies" ref={hobbiesRef}>
      <div className="container">
        <div className="hobbies-header">
          <span className="section-number">陸</span>
          <h2 className="section-title">
            <span className="title-main">{t('Hobbies & Favorites', '趣味・好きなもの')}</span>
            <span className="title-sub">Hobbies & Favorites</span>
          </h2>
        </div>

        <div className="hobbies-content">
          <div className="interests-section">
            <h3 className="subsection-title">{t('Hobbies', '趣味')}</h3>
            <div className="interests-grid">
              {hobbiesData.interests.map((interest, index) => (
                <div
                  key={index}
                  className="interest-card"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <span className="interest-icon">{interest.icon}</span>
                  <span className="interest-name">{interest[lang]}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="favorites-section">
            <h3 className="subsection-title">{t('Favorites', '好きなもの')}</h3>
            <p className="favorites-quote">
              {t(
                'Tennis, Coffee, Visual Kei, Beautiful People, Hands in Sleeves Watching the Universe',
                'テニス、コーヒー、V系、美人、懐手して宇宙見物'
              )}
            </p>
            <div className="favorites-grid">
              {hobbiesData.favorites.map((favorite, categoryIndex) => (
                <div
                  key={categoryIndex}
                  className="favorite-category"
                  style={{ animationDelay: `${categoryIndex * 0.1}s` }}
                >
                  <div className="favorite-header">
                    <span className="favorite-icon">{favorite.icon}</span>
                    <h4 className="favorite-title">{favorite.category[lang]}</h4>
                  </div>
                  <div className="favorite-items">
                    {favorite.items.map((item, itemIndex) => (
                      <span
                        key={itemIndex}
                        className="favorite-tag"
                        style={{ animationDelay: `${(categoryIndex * 0.1) + (itemIndex * 0.02)}s` }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hobbies
