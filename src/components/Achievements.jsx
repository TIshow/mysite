import { useEffect, useRef } from 'react'
import './Achievements.css'

function Achievements() {
  const achievementsRef = useRef(null)

  const achievements = [
    {
      year: '2025',
      items: [
        {
          category: '展示',
          title: '「INVISIBLE MUSEUM-見えない大切な何かを探す展」vol.3 アート出展',
          url: 'https://zounohana.com/events/post-8736/'
        },
        {
          category: 'メディア',
          title: '高校の“マンガ学科”の授業にメタバースを活用 HIKKYが熊本県高森町と包括連携協定',
          url: 'https://www.moguravr.com/hikky-takamori-metaverse-partnership/'
        }
      ]
    },
    {
      year: '2024',
      items: [
        {
          category: '受賞',
          title: '都知事杯オープンデータ・ハッカソン2024 サービスデザイン賞受賞',
          url: 'https://www.openbadge-global.com/ns/portal/openbadge/public/assertions/detail/aWZqUExFQWt2TVlKamJpQUEyYUhIdz09'
        },
        {
          category: 'メディア',
          title: '【VRニュース】VR VISION 2024年12月18日回',
          url: 'https://youtu.be/1fMTl1DsfKE?si=tDKynlS_1-vLDmtR'
        },
        {
          category: '展示',
          title: 'デジタルとリアル融合のアート作品展「ARTLINK 2024」',
          url: 'http://www.print-info.co.jp/joho2501.pdf'
        },
        {
          category: '展示',
          title: '佐賀映画「つ。」、映画を新たな視点で楽しめる架空佐賀？メタバース「SAGALAND」を現役東大生が作成し公開。1日限定イベント・メタバース試写会も開催。',
          url: 'https://www.the-miyanichi.co.jp/special/prtimes/display.php?fileName=c83759_r10'
        },
      ]
    },
    {
      year: '2023',
      items: [
        {
          category: '登壇',
          title: '総務省 Ｗｅｂ３時代に向けたメタバース等の利活用に関する研究会',
          url: 'https://www.soumu.go.jp/main_content/000877159.pdf'
        },
        {
          category: 'メディア',
          title: '最先端アートの楽しみ方！現実と仮想を繋ぐメタバース美術館',
          url: 'https://gooda.brangista.com/book/202305/art-trip-metaverse.html'
        },
        {
          category: 'メディア',
          title: '企業と人材 2023.06月号 掲載',
          url: 'https://www.fujisan.co.jp/product/1281680140/b/2400375/'
        },
        {
          category: 'メディア',
          title: 'テニスコーチがエストニアにIT留学？齊藤大将さんが目指す教育の革命（株式会社シュタインズ）',
          url: 'https://udontech.org/interview/hiromasa_saito/'
        }
      ]
    },
    {
      year: '2022',
      items: [
        {
          category: '登壇',
          title: '超教育委員会 メタバース空間に学校を作って授業する',
          url: 'https://lot.or.jp/project/9740/'
        },
        {
          category: 'メディア',
          title: 'なぜメタバースに学校を作ったのか--VRChatのコミュニティ「私立VRC学園」を振り返る',
          url: 'https://japan.cnet.com/article/35185778/'
        },
        {
          category: 'メディア',
          title: '地方から「VR取材」やってみて…できたこと できなかったこと',
          url: 'https://withnews.jp/article/f0220107000qq000000000000000W0ez10701qq000024097A'
        },
        {
          category: 'メディア',
          title: '電子国家エストニアの現地事情　株式会社シュタインズ齊藤大将さん対談　ヨーロッパの小国の生き残る道',
          url: 'https://youtu.be/iIqKkXDdXj4?si=Er8p17AMi_CDQwIO'
        }
      ]
    },
    {
      year: '2021',
      items: [
        {
          category: 'メディア',
          title: 'VR美術展 現実以上！？ 3D空間に作品展示',
          url: 'https://www.asahi.com/articles/ASP767RM1P76PTLC003.html'
        }
      ]
    },
    {
      year: '2020',
      items: [
        {
          category: 'メディア',
          title: 'Hiromasa came from Japan to study Applied Physics',
          url: 'https://medium.com/taltech-blog/hiromasa-came-from-japan-to-study-applied-physics-31462732cfa2'
        },
        {
          category: 'メディア',
          title: '特集 : 電子国家「エストニア」の正体—現地の日本人が解説',
          url: 'https://japan.cnet.com/sp/estonia/'
        },
        {
          category: 'メディア',
          title: '特集 : 現実を超える「仮想世界」の今—開発者が語るVRトレンド最前線',
          url: 'https://japan.cnet.com/sp/vr_trend/'
        }
      ]
    },
    {
      year: '2018',
      items: [
        {
          category: '受賞',
          title: 'Loomehäkk vol 5 (hackathon) Robot Special Prize',
          url: 'https://www.instagram.com/p/BedRrm8hBfp/?hl=en'
        },
        {
          category: '登壇',
          title: 'ホリエモン祭in名古屋2018',
          url: 'https://passmarket.yahoo.co.jp/event/show/detail/01k9f1zwccbc.html'
        },
        {
          category: 'その他',
          title: 'Tommy CashのMVに出演 PUSSY MONEY WEED',
          url: 'https://youtu.be/5ihsAv08Pi8?si=qJGUw_2TFqiUqbms'
        }
      ]
    }
  ]

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

    if (achievementsRef.current) {
      observer.observe(achievementsRef.current)
    }

    return () => {
      if (achievementsRef.current) {
        observer.unobserve(achievementsRef.current)
      }
    }
  }, [])

  const getCategoryIcon = (category) => {
    switch (category) {
      case '受賞':
        return '🏆'
      case 'メディア':
        return '📺'
      case '登壇':
        return '🎤'
      case '展示':
        return '🎨'
      default:
        return '✨'
    }
  }

  return (
    <section id="achievements" className="achievements" ref={achievementsRef}>
      <div className="container">
        <div className="achievements-header">
          <span className="section-number">肆</span>
          <h2 className="section-title">
            <span className="title-main">受賞歴・メディア取材・登壇等</span>
            <span className="title-sub">Achievements & Media</span>
          </h2>
        </div>
        <div className="achievements-timeline">
          {achievements.map((yearGroup, yearIndex) => (
            <div key={yearIndex} className="year-group" style={{ animationDelay: `${yearIndex * 0.1}s` }}>
              <div className="year-marker">{yearGroup.year}</div>
              <div className="year-items">
                {yearGroup.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="achievement-item" style={{ animationDelay: `${(yearIndex * 0.1) + (itemIndex * 0.05)}s` }}>
                    <div className="achievement-category">
                      <span className="category-icon">{getCategoryIcon(item.category)}</span>
                      <span className="category-label">{item.category}</span>
                    </div>
                    <h3 className="achievement-title">{item.title}</h3>
                    {item.url && (
                      <a href={item.url} className="achievement-link" target="_blank" rel="noopener noreferrer">
                        詳細を見る
                        <span className="link-arrow">→</span>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
