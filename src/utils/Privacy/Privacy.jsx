import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

import { privacyItems } from '../../../data/datas';
import './Privacy.css';

const Privacy = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main>
      <section id="privacy-hero">
        <div className="overlay"></div>
        <div className="privacy-content">
          <h1 className="privacy-title">Privacy Policy</h1>
          <p className="privacy-description">
            Your privacy is important to us. At <span>Cospixare Technologies</span>, we are committed to 
            protecting your personal data and providing transparency on how we collect, use, and safeguard it.
          </p>
          <a href="#privacy-section" className="privacy-button">Read More</a>
        </div>
      </section>

      <section id="privacy-section">
        <div className="privacy-container">
          <h1 className="privacy-title">Privacy Policy</h1>
          <p className="privacy-subtitle">
            Your privacy is important to us. This Privacy Policy explains how we collect, use, 
            and protect your personal information at <span>Cospixare Technologies</span>.
          </p>

          <div className="privacy-list">
            {privacyItems.map((item, index) => (
              <div className="privacy-item" key={index}>
                <button 
                  className={`privacy-header ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => toggleAccordion(index)}
                >
                  {item.title} <FaChevronDown className={`icon ${activeIndex === index ? 'rotate' : ''}`} />
                </button>
                <div 
                  className="privacy-body"
                  style={{
                    maxHeight: activeIndex === index ? '500px' : '0',
                    opacity: activeIndex === index ? '1' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease, opacity 0.3s ease'
                  }}
                >
                  <p>{item.des1}</p>
                  <ul>
                    {item.list.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Privacy;
