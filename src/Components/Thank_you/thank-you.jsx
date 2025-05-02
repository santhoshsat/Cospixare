import React from 'react';
import '../styles/thank-you.css';
import '../styles/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebookF, 
  faLinkedinIn, 
  faInstagram, 
  faXTwitter,
  faThreads
} from '@fortawesome/free-brands-svg-icons';

const ThankYouSection = () => {
  return (
    <main>
      {/* Thank You Section */}
      <section id="thank-you-section">
        <div className="thank-you-card">
          <img src="../assets/images/thank-you.png" alt="Thank You" className="thank-you-image" />
          
          <h2 className="thank-you-title">
            🎉 Thank You for Reaching Out!
          </h2>
          
          <p className="thank-you-message">
            Your message has been successfully received. We're excited to explore potential collaborations and will get back to you within 24-48 hours.
          </p>

          {/* Social Media Icons */}
          <div className="social-icons">
            <a href="https://www.facebook.com/share/1EA9ZFhNFK" aria-label="Facebook" title="Follow us on Facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="https://www.linkedin.com/company/cospixare-technologies" aria-label="LinkedIn" title="Connect on LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a href="https://www.instagram.com/cospixare_technologies?igsh=MXJqdjUxZmc1MHBlaA==" aria-label="Instagram" title="Follow us on Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://x.com/Cospixare_Tech?t=sFe4y0KUoVhGPxEoxP2RcA&s=09" aria-label="X-Twitter" title="Follow us on X"><FontAwesomeIcon icon={faXTwitter} /></a>
            <a href="https://www.threads.net/@cospixare_technologies" aria-label="Threads" title="Join us on Threads"><FontAwesomeIcon icon={faThreads} /></a>
          </div>

          {/* Message Box */}
          <div className="message-box">
            <p>🚀 While you're here, why not:</p>
            <ul>
              <li>Explore our latest tech insights on social media</li>
              <li>Subscribe to our newsletter for updates</li>
              <li>Check out our portfolio of successful projects</li>
            </ul>
            <p>Need immediate assistance? Call us at <strong>+91 8637498271</strong></p>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
            <a href="../index.html" className="home-button primary-btn">Return to Homepage</a>
            <a href="../services.html" className="portfolio-button secondary-btn">View Our Services</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ThankYouSection;