import React, { useState, useEffect } from 'react';
import './DetailService.css'

const ServiceDetailPage = ({ title, subtitle, heroImageAlt, heroAnchor, services, expertiseItems, benefitsItems, imageSrc }) => {
  const [projectsCount, setProjectsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);
  const [experienceCount, setExperienceCount] = useState(0);

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000;
      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);

        setProjectsCount(Math.floor(progress * 15));
        setClientsCount(Math.floor(progress * 20));
        setExperienceCount(Math.floor(progress * 4));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    };

    animateCounters();
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="header-section">
        <div className="hero-banner">
          <div className="overlay-effect"></div>
          <div className="hero-info">
            <h1 className="text-animation">{title}</h1>
            <p className="text-animation">{subtitle}</p>
            <a href={`#${heroAnchor}`} className="cta-btneach">View Services</a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id={heroAnchor} className="services-sectioneach">
        <h2>Our {title} Service</h2>
        <div className="service-grideach">
          {services.map((service, index) => (
            <div className="service-cardeach" key={index}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Animated Stats Section */}
      <section className="stats-sectioneach">
        <div className="stats-boxeach"><h2><span>{projectsCount}</span>+</h2><p>Projects Delivered</p></div>
        <div className="stats-boxeach"><h2><span>{clientsCount}</span>+</h2><p>Happy Clients</p></div>
        <div className="stats-boxeach"><h2><span>{experienceCount}</span>+</h2><p>Years Experience</p></div>
      </section>

      {/* Main Content */}
      <div className="containereach">
        <div className="image-sectioneach">
          <img src={imageSrc} alt={heroImageAlt} className="service-image" loading="lazy" />
        </div>
        <div className="content-sectioneach">
          <section className="service-contenteach">
            <h2>{title}</h2>
            <p>
              {subtitle}
            </p>

            <h3>Our Expertise:</h3>
            <ul>
              {expertiseItems.map((item, index) => {
                const [head, ...rest] = item.split(':');
                return (
                  <li key={index}><strong>{head}:</strong> {rest.join(':')}</li>
                );
              })}
            </ul>

            <h3>Benefits With Our Services:</h3>
            <ul>
              {benefitsItems.map((item, index) => <li key={index}>{item}</li>)}
            </ul>

            <aside className="services-infoeach">
              <h3>Explore Our Services</h3>
              <p>
                We offer a range of high-quality services, from web development to UI/UX design, 
                ensuring your business stays ahead in the digital world.
              </p>
              <a href="/services" className="btn-primaryeach">View All Services</a>
            </aside>
          </section>
        </div>
      </div>
    </main>
  );
};

export default ServiceDetailPage;
