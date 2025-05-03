import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faCogs, 
  faChevronDown, 
  faBriefcase, 
  faInfoCircle, 
  faEnvelope, 
  faSearch,
  faBullhorn,
  faCode,
  faPaintBrush,
  faPencilRuler,
  faGlobe,
  faHandshake
} from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuActive(!mobileMenuActive);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">
          <a href="/">
            <img src="../../../assets/images/logo.svg" alt="Cospixare Logo" />
            <span className="brand-text">
              Cospixare <span className="highlight">Technologies</span>
            </span>
          </a>
        </div>

        <ul className={`nav-links ${mobileMenuActive ? 'active' : ''}`}>
          <li style={{ '--i': 0 }}>
            <a href="/" className="nav-item">
              <FontAwesomeIcon icon={faHome} /> Home
            </a>
          </li>

          <li 
            className={`dropdown ${activeDropdown === 'services' ? 'active' : ''}`}
            style={{ '--i': 1 }}
            onMouseEnter={() => setActiveDropdown('services')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button 
              className="drop-btn"
              onClick={() => toggleDropdown('services')}
            >
              <FontAwesomeIcon icon={faCogs} /> Services <FontAwesomeIcon icon={faChevronDown} />
            </button>
            <div className="dropdown-content">
              <div className="mega-menu">
                <div className="menu-column">
                  <h3>Digital Solutions</h3>
                  <a href="/digital-marketing-service">
                    <FontAwesomeIcon icon={faBullhorn} /> Digital Marketing & SEO
                  </a>
                  <a href="/software-service">
                    <FontAwesomeIcon icon={faCode} /> Custom Software Development
                  </a>
                </div>
                <div className="menu-column">
                  <h3>Design Services</h3>
                  <a href="/logo-service">
                    <FontAwesomeIcon icon={faPaintBrush} /> Logo Design
                  </a>
                  <a href="/ux-ui-service">
                    <FontAwesomeIcon icon={faPencilRuler} /> UX/UI Design
                  </a>
                </div>
                <div className="menu-column">
                  <h3>Web Solutions</h3>
                  <a href="/web-dev-service">
                    <FontAwesomeIcon icon={faGlobe} /> Website Development
                  </a>
                  <a href="/cloud-service">
                    <FontAwesomeIcon icon={faHandshake} /> Cloud Solutions
                  </a>
                </div>
              </div>
            </div>
          </li>

          <li style={{ '--i': 2 }}>
            <a href="/careers" className="nav-item">
              <FontAwesomeIcon icon={faBriefcase} /> Careers
            </a>
          </li>

          <li style={{ '--i': 3 }}>
            <a href="/about" className="nav-item">
              <FontAwesomeIcon icon={faInfoCircle} /> About
            </a>
          </li>

          <li style={{ '--i': 4 }}>
            <a href="/contact" className="nav-item btn-contact">
              <FontAwesomeIcon icon={faEnvelope} /> Contact
            </a>
          </li>
        </ul>

        <div className="search-box">
          <input type="text" id="search-input" name="search" placeholder="Search..." />
          <button>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        <div 
          className={`menu-toggle ${mobileMenuActive ? 'active' : ''}`} 
          id="mobile-menu" 
          aria-label="Toggle navigation menu"
          onClick={toggleMobileMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;