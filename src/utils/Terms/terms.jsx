import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

import { termsItems } from '../../../data/datas';
import './terms.css';



const Terms = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main>
      {/* Terms & Conditions Hero Section */}
      <section id="terms-hero">
        <div className="overlay"></div>
        <div className="terms-content">
          <h1 className="terms-title">Terms & Conditions</h1>
          <p className="terms-description">
            Welcome to <span>Cospixare Technologies</span>. By using our services, you agree to our terms and policies. 
            Please read our terms carefully before using our platform.
          </p>
          <a href="#terms-section" className="terms-button">Read More</a>
        </div>
      </section>

      {/* Terms & Conditions Section */}
      <section id="terms-section">
        <div className="terms-container">
          <h1 className="terms-title">Terms & Conditions</h1>
          <p className="terms-subtitle">
            Please read our terms carefully before using our services. By engaging with Cospixare Technologies, 
            you agree to these terms.
          </p>

          {/* Terms Accordion */}
          <div className="terms-list">
            {termsItems.map((item, index) => (
              <div className="terms-item" key={index}>
                <button 
                  className={`terms-header ${activeIndex === index ? 'active' : ''}`}
                  
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={activeIndex === index}
                  aria-controls={`terms-content-${index}`}
                >
                  {item.title} <FaChevronDown className={`icon ${activeIndex === index ? 'rotate' : ''}`} />
                </button>
                <div 
                  id={`terms-content-${index}`}
                  className="terms-content"
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

export default Terms;