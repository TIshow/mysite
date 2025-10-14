import './Header.css'

function Header({ scrollToSection }) {
  const sections = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Career', id: 'career' },
    { name: 'Works', id: 'works' },
    { name: 'Contact', id: 'contact' }
  ]

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <span className="logo-text">齊藤大将</span>
          <span className="logo-subtitle">2025</span>
        </div>
        <ul className="nav-links">
          {sections.map((section, index) => (
            <li key={index}>
              <button
                onClick={() => scrollToSection(section.id)}
                className="nav-link"
              >
                {section.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
