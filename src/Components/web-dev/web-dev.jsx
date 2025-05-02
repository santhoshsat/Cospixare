import React from 'react';


const WebDevelopmentPage = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="header-section">
        <div className="hero-banner">
          <div className="overlay-effect"></div>
          <div className="hero-info">
            <h1 className="text-animation">Web Development</h1>
            <p className="text-animation">Building high-performance websites for businesses of all sizes.</p>
            <a href="#our-serviceseach" className="cta-btneach">View Services</a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="our-serviceseach" className="services-sectioneach">
        <h2>Our Web Development Solutions</h2>
        <div className="service-grideach">
          <div className="service-cardeach">
            <h3>Custom Websites</h3>
            <p>Unique, high-performing websites tailored to your needs.</p>
          </div>
          <div className="service-cardeach">
            <h3>E-Commerce Solutions</h3>
            <p>Secure & optimized online stores for your business.</p>
          </div>
          <div className="service-cardeach">
            <h3>SEO & Optimization</h3>
            <p>Boost search rankings and improve website speed.</p>
          </div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section className="stats-sectioneach">
        <div className="stats-boxeach">
          <h2><span className="count-number" data-target="15">100</span>+</h2>
          <p>Projects Delivered</p>
        </div>
        <div className="stats-boxeach">
          <h2><span className="count-number" data-target="20">100</span>+</h2>
          <p>Happy Clients</p>
        </div>
        <div className="stats-boxeach">
          <h2><span className="count-number" data-target="4">100</span>+</h2>
          <p>Years Experience</p>
        </div>
      </section>

      {/* Main Container */}
      <div className="containereach">
        {/* Left Section - Image */}
        <div className="image-sectioneach">
          <img src="../assets/images/web-service.png" alt="Web Development" />
        </div>

        {/* Right Section - Service Details */}
        <div className="content-sectioneach">
          {/* Main Service Content */}
          <section className="service-contenteach">
            <h2>Web Development</h2>
            <p>
              We specialize in creating high-quality, responsive, and user-friendly websites tailored to your business needs.
              Whether it's a simple informational site or a complex e-commerce platform, our web development services ensure 
              that your digital presence stands out.
            </p>

            <h3>Our Expertise:</h3>
            <ul>
              <li><strong>Custom Website Development:</strong> Tailored to your brand and goals.</li>
              <li><strong>CMS Integration:</strong> WordPress, Joomla, or Drupal.</li>
              <li><strong>E-commerce Solutions:</strong> Secure and scalable online stores.</li>
              <li><strong>SEO-Friendly Development:</strong> Optimized for search engines.</li>
              <li><strong>Progressive Web Apps (PWAs):</strong> Delivering a native app experience.</li>
              <li><strong>Website Maintenance & Support:</strong> Ensuring peak performance.</li>
            </ul>

            <h3>Benefits With Our Services:</h3>
            <ul>
              <li>Rank Higher & Drive Organic Traffic.</li>
              <li>Seamless Experience Across All Devices.</li>
              <li>Get a Website That Grows with Your Business.</li>
              <li>Speed Matters – Enhance User Experience.</li>
              <li>Advanced Security for Maximum Protection.</li>
            </ul>

            {/* Services Info Box */}
            <aside className="services-infoeach">
              <h3>Explore Our Services</h3>
              <p>We offer a range of high-quality services, from web development to UI/UX design, ensuring your business stays ahead in the digital world.</p>
              <a href="../services.html" className="btn-primaryeach">View All Services</a>
            </aside>
          </section>
        </div>
      </div>
    </main>
  );
};

export default WebDevelopmentPage;