import { useLang } from '../contexts/LanguageContext'
import './Header.css'

function Header({ scrollToSection }) {
  const { lang, toggle } = useLang()

  const sections = [
    { en: 'Home', ja: 'Home', id: 'hero' },
    { en: 'About', ja: 'About', id: 'about' },
    { en: 'Career', ja: 'Career', id: 'career' },
    { en: 'Works', ja: 'Works', id: 'works' },
    { en: 'Achievements', ja: '受賞歴', id: 'achievements' },
    { en: 'Skills', ja: 'Skills', id: 'skills' },
    { en: 'Hobbies', ja: '趣味', id: 'hobbies' },
    { en: 'Contact', ja: 'Contact', id: 'contact' }
  ]

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <span className="logo-text">齊藤大将</span>
          <span className="logo-roman">Hiromasa Saito</span>
        </div>
        <ul className="nav-links">
          {sections.map((section, index) => (
            <li key={index}>
              <button
                onClick={() => scrollToSection(section.id)}
                className="nav-link"
              >
                {section[lang]}
              </button>
            </li>
          ))}
        </ul>
        <button className="lang-toggle" onClick={toggle} aria-label="Toggle language">
          {lang === 'en' ? 'JA' : 'EN'}
        </button>
      </nav>
    </header>
  )
}

export default Header
