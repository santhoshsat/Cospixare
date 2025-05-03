import React from 'react';
import './Footer.css';

const Footer = () => {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter form submitted");
  };

  return (
    <footer className="footer">
      <div className="container">
        {/* About Company */}
        <div className="footer-section about">
          <h2>About Company</h2>
          <p>We deliver innovative, scalable, and reliable technology solutions that drive your business forward.</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/share/1EA9ZFhNFK" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.linkedin.com/company/cospixare-technologies" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com/cospixare_technologies?igsh=MXJqdjUxZmc1MHBlaA==" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://x.com/Cospixare_Tech?t=sFe4y0KUoVhGPxEoxP2RcA&s=09" aria-label="X-Twitter">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="https://www.threads.net/@cospixare_technologies" aria-label="Threads">
              <i className="fa-brands fa-threads"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section quick-links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="../about.html">About Us</a></li>
            <li><a href="../privacy-policy.html">Privacy Policy</a></li>
            <li><a href="../terms-conditions.html">Terms & Conditions</a></li>
            <li><a href="../contact.html">Contact Us</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-section newsletter">
          <h2>Newsletter</h2>
          <p>Subscribe to our newsletter to get the latest updates and offers.</p>
          <div className="subscribe-box">
            <form onSubmit={handleNewsletterSubmit}>
              <input type="hidden" name="access_key" value="21ef4e09-e220-4a65-915d-cb8ebcb581bb" />
              <input type="hidden" name="redirect" value="https://cospixaretechnologies.in/thank-you.html" />
              <input type="hidden" name="subject" value="New Email submission from Cospixare Technologies" />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                autoComplete="email"
                required
              />
              <button type="submit" className="cta-button">Subscribe</button>
            </form>    
          </div>
          <p id="msg"></p>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© 2025 Cospixare Technologies. All Rights Reserved.</p>
        <ul>
          <li><a href="../terms-conditions.html">Terms & Conditions</a></li>
          <li><a href="../careers.html">Careers</a></li>
          <li><a href="../privacy-policy.html">Privacy Policy</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;