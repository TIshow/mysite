import { useEffect, useRef } from 'react'
import { useLang } from '../contexts/LanguageContext'
import './Career.css'

function Career() {
  const careerRef = useRef(null)
  const { lang } = useLang()
  const t = (en, ja) => lang === 'en' ? en : ja

  const careerData = [
    {
      period: '2012–2016',
      title: {
        en: 'Gakushuin University, Faculty of Science, Dept. of Physics',
        ja: '学習院大学理学部物理学科'
      },
      location: {
        en: 'Tokyo, Japan',
        ja: '日本・東京'
      },
      details: {
        en: [
          'Graduation research on organic conductors accepted at an international conference in Hong Kong',
          'Participated in founding a video conferencing service, but it collapsed when the founder absconded with the funds',
          'Worked as a part-time tennis coach, then as a freelance tennis coach (primarily for foreigners)'
        ],
        ja: [
          '有機導体に関する卒業研究が香港の国際学会へ採択',
          'ビデオ会議サービスの創業に参画するも、発起人の資金持ち逃げにより頓挫',
          'テニスコーチのアルバイト、その後フリーランスのテニスコーチ（主に外国人向け）として活動'
        ]
      }
    },
    {
      period: '2016–2018–2021',
      title: {
        en: "Tallinn University of Technology, Applied Physics (Master's)",
        ja: 'タリン工科大学 Applied Physics(Master)'
      },
      location: {
        en: 'Tallinn, Estonia',
        ja: 'エストニア・タリン'
      },
      details: {
        en: [
          'Enrolled with top academic scores and received a grant from the Estonian government (revoked the following year after a dispute with a professor)',
          'Won a local tennis tournament the month after moving',
          'Engaged in numerical analysis research of literature and small satellite research',
          'Part-time work at a local online casino venture',
          'Founded a local guide company Estify Consultants OÜ (since transferred); lived in Estonia for about 5 years',
          'Performed beatbox at local bars and festivals, cosplay activities',
          'Served as a judge for cosplayers in Belarus',
          'Created schools (VRC Academy) and museums (WESON MUSEUM, ARTLINK) in VR space'
        ],
        ja: [
          '学部トップ成績で入学し、エストニア政府から給付金を獲得（翌年教授と喧嘩し剥奪）',
          '移住翌月、現地テニス大会で優勝',
          '文学の数値解析研究、小型人工衛星の研究に携わる',
          '現地オンラインカジノベンチャーでアルバイト',
          '現地案内会社Estify Consultants OÜを創業（譲渡済）、約5年間エストニアに滞在',
          '地元のBarやフェスでBeatbox、コスプレ活動',
          'ベラルーシでコスプレイヤーの審査員を担当',
          'VR空間に学校（私立VRC学園）や美術館（WESON MUSEUM, ARTLINK）の制作'
        ]
      }
    },
    {
      period: t('2021–Present', '2021-現在'),
      title: {
        en: 'Steins, Inc.',
        ja: '株式会社シュタインズ'
      },
      location: {
        en: 'Japan',
        ja: '日本'
      },
      details: {
        en: [
          'Co-founded in 2021',
          'Appointed as Visiting Professor at iU (Professional University of Information and Management for Innovation)',
          'Appointed as advisor to a VR club',
          'Consumer Affairs Agency research group on AI utilization for consumer protection',
          'Conducted metaverse exploration classes at Takamorimachi High School in Kumamoto Prefecture',
          'Research and development of STEAM education at Kitasuna Elementary School in Koto Ward'
        ],
        ja: [
          '2021年に共同創業',
          'iU（情報経営イノベーション専門職大学）客員教授に就任',
          'VRサークル顧問に就任',
          '消費者庁の消費者保護のためのAI活用研究会',
          '熊本県高森高校でメタバース探究授業の実施',
          '江東区北砂小学校でSTEAM教育の研究開発'
        ]
      }
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

    if (careerRef.current) {
      observer.observe(careerRef.current)
    }

    return () => {
      if (careerRef.current) {
        observer.unobserve(careerRef.current)
      }
    }
  }, [])

  return (
    <section id="career" className="career" ref={careerRef}>
      <div className="container">
        <div className="career-header">
          <span className="section-number">弐</span>
          <h2 className="section-title">
            <span className="title-main">{t('Career', '経歴')}</span>
            <span className="title-sub">Career</span>
          </h2>
        </div>
        <div className="career-timeline">
          {careerData.map((item, index) => (
            <div key={index} className="career-item" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="career-marker"></div>
              <div className="career-content">
                <div className="career-period">{item.period}</div>
                <h3 className="career-title">{item.title[lang]}</h3>
                <div className="career-location">{item.location[lang]}</div>
                <ul className="career-details">
                  {item.details[lang].map((detail, detailIndex) => (
                    <li key={detailIndex} className="career-detail">
                      <span className="detail-bullet"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Career
