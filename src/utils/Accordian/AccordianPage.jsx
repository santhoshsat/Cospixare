import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import './AccordionPage.css'

const AccordionPage = ({ pageTitle, description, subtitle, buttonText, items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main>
      <section id="privacy-hero">
        <div className="overlay"></div>
        <div className={`$privacy-content`}>
          <h1 className={`$privacy-title`}>{pageTitle}</h1>
          <p className={`$privacy-description`}>{description}</p>
          <a href={`#$privacy-section`} className={`privacy-button`}>{buttonText}</a>
        </div>
      </section>

      <section id='privacy-section'>
        <div className={`privacy-container`}>
          <h1 className={`privacy-title`}>{pageTitle}</h1>
          <p className={`privacy-subtitle`}>{subtitle}</p>

          <div className={`$privacy-list`}>
            {items.map((item, index) => (
              <div className={`privacy-item`} key={index}>
                <button
                  className={`privacy-header ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => toggleAccordion(index)}
                >
                  {item.title}
                  <FaChevronDown className={`icon ${activeIndex === index ? 'rotate' : ''}`} />
                </button>
                <div
                  className={`privacy-body`}
                  style={{
                    maxHeight: activeIndex === index ? '500px' : '0',
                    opacity: activeIndex === index ? '1' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease, opacity 0.3s ease'
                  }}
                >
                  <p>{item.des1}</p>
                  <ul className='itemsPT'>
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

export default AccordionPage;
