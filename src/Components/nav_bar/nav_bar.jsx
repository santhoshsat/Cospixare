import React from 'react';
import '../styles/style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faCogs, 
  faChevronDown, 
  faBullhorn, 
  faCode, 
  faPaintBrush, 
  faPencilRuler, 
  faGlobe, 
  faHandshake, 
  faBriefcase, 
  faInfoCircle, 
  faEnvelope, 
  faSearch 
} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="../index.html">
          <img src="/assest/images/logo.svg" alt="Cospixare Logo" />
          <span className="brand-text">Cospixare <span className="highlight">Technologies</span></span>
        </a>
      </div>
      <ul className="nav-links">
        <li><a href="../index.html" className="nav-item"><FontAwesomeIcon icon={faHome} />Home</a></li>
        <li className="dropdown">
          <a href="../services.html" className="drop-btn">
            <FontAwesomeIcon icon={faCogs} />Services <FontAwesomeIcon icon={faChevronDown} />
          </a>
          <div className="dropdown-content">
            <div className="mega-menu">
              <div className="menu-column">
                <h3>Digital Solutions</h3>
                <a href="../digital-marketing-service.html"><FontAwesomeIcon icon={faBullhorn} />Digital Marketing & SEO</a>
                <a href="../software-service.html"><FontAwesomeIcon icon={faCode} />Custom Software Development</a>
              </div>
              <div className="menu-column">
                <h3>Design Services</h3>
                <a href="../logo-service.html"><FontAwesomeIcon icon={faPaintBrush} />Logo Design</a>
                <a href="../ux-ui-service.html"><FontAwesomeIcon icon={faPencilRuler} />UX/UI Design</a>
              </div>
              <div className="menu-column">
                <h3>Web Solutions</h3>
                <a href="../web-dev-service.html"><FontAwesomeIcon icon={faGlobe} />Website Development</a>
                <a href="../cloud-service.html"><FontAwesomeIcon icon={faHandshake} />Cloud Solutions</a>
              </div>
            </div>
          </div>
        </li>
        <li><a href="../careers.html" className="nav-item"><FontAwesomeIcon icon={faBriefcase} />Careers</a></li>
        <li><a href="../about.html" className="nav-item"><FontAwesomeIcon icon={faInfoCircle} />About</a></li>
        <li><a href="../contact.html" className="nav-item btn-contact"><FontAwesomeIcon icon={faEnvelope} />Contact</a></li>
      </ul>
      <div className="search-box">
        <input type="text" id="search-input" name="search" placeholder="Search..." />
        <button><FontAwesomeIcon icon={faSearch} /></button>
      </div>
      <div 
        className="menu-toggle" 
        id="mobile-menu" 
        aria-label="Toggle navigation menu" 
        onClick={(e) => e.currentTarget.classList.toggle('active')}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;