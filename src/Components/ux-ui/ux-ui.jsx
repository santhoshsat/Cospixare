import React from 'react';
import '../styles/style.css';

const UIXServicePage = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="header-section">
        <div className="hero-banner">
          <div className="overlay-effect"></div>
          <div className="hero-info">
            <h1 className="text-animation">UI/UX Design & Research</h1>
            <p className="text-animation">With structured UI/UX processes, we minimize redesign efforts, speeding up development and reducing costs.</p>
            <a href="#our-serviceseach" className="cta-btneach">View Services</a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="our-serviceseach" className="services-sectioneach">
        <h2>Our UI/UX Design & Research Service</h2>
        <div className="service-grideach">
          <div className="service-cardeach">
            <h3>Accessibility & Usability Optimization</h3>
            <p>We ensure that our UI/UX designs follow best practices for accessibility, making digital experiences inclusive and user-friendly.</p>
          </div>
          <div className="service-cardeach">
            <h3>In-Depth User Research & Analysis</h3>
            <p>Our team conducts detailed research to understand user behavior, pain points, and expectations to design intuitive experiences.</p>
          </div>
          <div className="service-cardeach">
            <h3>Enhanced User Engagement & Retention</h3>
            <p>We design with a focus on user satisfaction, leading to higher engagement and improved user retention rates.</p>
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
          <img src="../assets/images/ui-ux-service.png" alt="UI/UX Design & Research" />
        </div>

        {/* Right Section - Service Details */}
        <div className="content-sectioneach">
          {/* Main Service Content */}
          <section className="service-contenteach">
            <h2>UI/UX Design & Research</h2>
            <p>
              we craft intuitive and visually stunning user experiences that drive engagement and satisfaction. Here's how our expertise can elevate your digital presence:
            </p>

            <h3>Our Expertise:</h3>
            <ul>
              <li><strong>User-Centered UI/UX Design:</strong> Designs That Prioritize User Needs & Behavior.</li>
              <li><strong>In-Depth User Research & Analysis:</strong> Understanding Your Audience for Better Engagement.</li>
              <li><strong>Accessibility & Usability Optimization:</strong> Inclusive Design for a Wider Audience.</li>
              <li><strong>Wireframing & Prototyping:</strong> Visualizing Concepts Before Development.</li>
              <li><strong>Mobile-First & Responsive Design:</strong> Seamless Experience Across All Devices.</li>
              <li><strong>UI Animations & Micro-Interactions:</strong> Enhancing Engagement with Subtle Interactions.</li>
            </ul>

            <h3>Benefits With Our Services:</h3>
            <ul>
              <li>Create Intuitive Interfaces That Keep Users Hooked.</li>
              <li>Improved Conversion Rates & Performance.</li>
              <li>Data-Driven & Research-Based Designs.</li>
              <li>Faster Development & Reduced Costs.</li>
              <li>Long-Term Scalability & Flexibility.</li>
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

export default UIXServicePage;