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
        },
        {
          category: 'メディア',
          title: 'AIとデータ分析を活用した新しいIR支援サービスを開始！「高出来高企業」に関する独自調査を実施',
          url: 'https://www.atpress.ne.jp/news/446158'
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
        {
          category: '登壇',
          title: 'EDIX東京2024 登壇',
          url: 'https://steins.works/2024/07/09/edix2024/'
        },
        {
          category: 'メディア',
          title: 'メタバースの学校で見えた教育の可能性',
          url: 'https://school-security.jp/column/2024/07/%E3%83%A1%E3%82%BF%E3%83%90%E3%83%BC%E3%82%B9%E3%81%AE%E5%AD%A6%E6%A0%A1%E3%81%A7%E8%A6%8B%E3%81%88%E3%81%9F%E6%95%99%E8%82%B2%E3%81%AE%E5%8F%AF%E8%83%BD%E6%80%A7/'
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
          title: '共同通信社 取材',
          url: 'https://steins.works/2023/12/01/%e5%bc%8a%e7%a4%be%e4%bb%a3%e8%a1%a8%e3%81%ae%e9%bd%8a%e8%97%a4%e3%81%8c%e5%85%b1%e5%90%8c%e9%80%9a%e4%bf%a1%e7%a4%be%e3%81%8b%e3%82%89%e5%8f%96%e6%9d%90%e3%82%92%e5%8f%97%e3%81%91%e3%81%a6%e6%96%b0/'
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
        },
        {
          category: '研究',
          title: '美術鑑賞におけるVRの活用と観覧者の美術への関心に与える効果に関する調査',
          url: 'https://www.jstage.jst.go.jp/article/vconf/2022/0/2022_119/_article/-char/ja/'
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
        },
        {
          category: '受賞',
          title: '【瀬戸内チャレンジャーアワード】ファイナリストNo.5 齊藤 大将さん',
          url: 'https://note.com/setouchiibase/n/n75a318bfffd0'
        },
        {
          category: '受賞',
          title: 'いざ鎌倉！JAPAN CHALLENGER AWARD 2021 in 建⻑寺 ファイナリスト',
          url: 'https://japan-challenger-project.com/projects/projects-1462/#:~:text=%E3%82%B8%E3%83%A3%E3%83%91%E3%83%B3%E3%83%81%E3%83%A3%E3%83%AC%E3%83%B3%E3%82%B8%E3%83%A3%E3%83%BC%E4%BA%94%E7%95%AA%E3%80%80%E6%96%89%E8%97%A4%E5%A4%A7%E5%B0%86%E3%81%95%E3%82%93'
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
        },
        {
          category: '登壇',
          title: '「エストニアから学ぶ『スタートアップ』が次々と生まれるまちとは」～まちの大学忘年会イベント2020～',
          url: 'https://machinocircle10.peatix.com/'
        },
         {
          category: '登壇',
          title: '長崎デジタルコンテスト2020',
          url: 'https://digicon.me/'
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
      case '研究':
        return '🧪'
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
            <span className="title-main">
              <span className="title-full">受賞歴・取材・登壇等</span>
              <span className="title-short">受賞歴・取材等</span>
            </span>
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
