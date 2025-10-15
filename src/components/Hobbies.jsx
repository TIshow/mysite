import { useEffect, useRef } from 'react'
import './Hobbies.css'

function Hobbies() {
  const hobbiesRef = useRef(null)

  const hobbiesData = {
    interests: [
      { name: 'テニス', icon: '🎾' },
      { name: 'メタル・V系', icon: '🎸' },
      { name: '読書', icon: '📚' },
      { name: '映画', icon: '🎬' },
      { name: 'アニメ・漫画', icon: '📖' },
      { name: 'ゲーム', icon: '🎮' },
      { name: 'VR', icon: '🥽' },
      { name: 'Beatbox', icon: '🎤' },
      { name: 'Magic', icon: '🪄' },
      { name: 'プログラミング', icon: '💻' },
      { name: 'データ分析', icon: '📊' },
      { name: '株', icon: '📈' },
      { name: '香水', icon: '🌸' },
      { name: 'コスプレ（昔）', icon: '🎭' }
    ],
    favorites: [
      {
        category: '音楽',
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
        category: '漫画・アニメ',
        icon: '📺',
        items: [
          '鋼の錬金術師', '伊藤潤二作品', 'つげ義春作品', '東京喰種',
          'カウボーイ・ビバップ', 'テニスの王子様', 'PSYCHO-PASS', 'STEINS;GATE',
          'ヴァイオレット・エヴァーガーデン', 'Another',
          '青春ブタ野郎はバニーガール先輩の夢を見ない。', 'マイメロ', 'アグレッシブ烈子'
        ]
      },
      {
        category: '映画',
        icon: '🎥',
        items: [
          'スターウォーズ', 'エイリアン', 'LEON', 'ジュラシックパーク',
          'ゴーストワールド', '死霊館', 'SAW', 'パルプフィクション', 'CUBE'
        ]
      },
      {
        category: 'ゲーム',
        icon: '🕹️',
        items: [
          'ファイアーエムブレム', 'テイルズオブシンフォニア', 'Mother2',
          'マリオカート', 'Diablo', '三國無双', 'APEX'
        ]
      },
      {
        category: '作家',
        icon: '✒️',
        items: [
          '寺田寅彦', '安部公房', '坂口安吾', '岡潔', '村田沙耶香',
          'スティーブン・キング', 'イタロ・カルヴィーノ', 'アガサ・クリスティ', 'ジョージ・オーウェル',
          'レイチェル・カーソン'
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
            <span className="title-main">趣味・好きなもの</span>
            <span className="title-sub">Hobbies & Favorites</span>
          </h2>
        </div>

        <div className="hobbies-content">
          {/* 趣味アイコングリッド */}
          <div className="interests-section">
            <h3 className="subsection-title">趣味</h3>
            <div className="interests-grid">
              {hobbiesData.interests.map((interest, index) => (
                <div
                  key={index}
                  className="interest-card"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <span className="interest-icon">{interest.icon}</span>
                  <span className="interest-name">{interest.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 好きなものリスト */}
          <div className="favorites-section">
            <h3 className="subsection-title">好きなもの</h3>
            <div className="favorites-grid">
              {hobbiesData.favorites.map((favorite, categoryIndex) => (
                <div
                  key={categoryIndex}
                  className="favorite-category"
                  style={{ animationDelay: `${categoryIndex * 0.1}s` }}
                >
                  <div className="favorite-header">
                    <span className="favorite-icon">{favorite.icon}</span>
                    <h4 className="favorite-title">{favorite.category}</h4>
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
