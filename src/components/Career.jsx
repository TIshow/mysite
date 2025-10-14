import { useEffect, useRef } from 'react'
import './Career.css'

function Career() {
  const careerRef = useRef(null)

  const careerData = [
    {
      period: '2012-2016',
      title: '学習院大学理学部物理学科',
      location: '日本・東京',
      details: [
        '有機導体に関する卒業研究が香港の国際学会へ採択',
        'ビデオ会議サービスの創業に参画するも、発起人の資金持ち逃げにより頓挫',
        'テニスコーチのアルバイト、その後フリーランスのテニスコーチとして活動'
      ]
    },
    {
      period: '2016-2018-2021',
      title: 'タリン工科大学 Applied Physics',
      location: 'エストニア・タリン',
      details: [
        '学部トップ成績で入学、エストニア政府から給付金を獲得（翌年教授と喧嘩し剥奪）',
        '移住翌月、現地テニス大会で優勝',
        '文学の数値解析研究、小型人工衛星の研究に携わる',
        '現地オンラインカジノベンチャーでライター業務',
        '現地案内会社を共同創業、約5年間エストニアに滞在',
        '地元のBarやフェスでBeatbox、コスプレ活動',
        'ベラルーシでコスプレイヤーの審査員を担当',
        'VR空間に学校（私立VRC学園）や美術館（WESON MUSEUM, ARTLINK）の制作'
      ]
    },
    {
      period: '2021-現在',
      title: '株式会社シュタインズ',
      location: '日本',
      details: [
        '共同創業',
        'iU（情報経営イノベーション専門職大学）客員教授に就任',
        'VRサークル顧問に就任'
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
            <span className="title-main">経歴</span>
            <span className="title-sub">Career</span>
          </h2>
        </div>
        <div className="career-timeline">
          {careerData.map((item, index) => (
            <div key={index} className="career-item" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="career-marker"></div>
              <div className="career-content">
                <div className="career-period">{item.period}</div>
                <h3 className="career-title">{item.title}</h3>
                <div className="career-location">{item.location}</div>
                <ul className="career-details">
                  {item.details.map((detail, detailIndex) => (
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
