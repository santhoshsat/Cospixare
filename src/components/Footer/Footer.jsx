import React from 'react';
import './Footer.css';
import { Link } from 'react-router';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaXTwitter, FaThreads } from 'react-icons/fa6';

import { SocialLinkData, QuickLinksData } from '../../../data/FooterData';

const socialIcons = [
  <FaFacebookF />,
  <FaLinkedinIn />,
  <FaInstagram />,
  <FaXTwitter />,
  <FaThreads />,
]

const Footer = () => {

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-section about">
          <h2>About Company</h2>
          <p>
            We deliver innovative, scalable, and reliable technology solutions that drive your business forward.
          </p>
          <div className="social-icons">
            {
              SocialLinkData.map((item, index) => (
                <a href={item.destination} aria-label={item.label} key={index}>{socialIcons[index]}</a>
              ))
            }
          </div>
        </div>

        <div className="footer-section quick-links">
          <h2>Quick Links</h2>
          <ul>
            {
              QuickLinksData.map((item, index) => (
                <li key={index}>
                  <Link to={item.destination}>{item.title}</Link>
                </li>
              ))
            }
          </ul>
        </div>

        <div className="footer-section newsletter">
          <h2>Newsletter</h2>
          <p>Subscribe to our newsletter to get the latest updates and offers.</p>
          <div className="subscribe-box">
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
            >
              <input type="hidden" name="access_key" value="21ef4e09-e220-4a65-915d-cb8ebcb581bb" />
              <input type="hidden" name="redirect" value="https://cospixaretechnologies.in/thank-you.html" />
              <input type="hidden" name="subject" value="New Email submission from Cospixare Technologies" />
              <input type="email" name="email" placeholder="Enter your email" autoComplete="email" required />
              <button type="submit" className="cta-button">Subscribe</button>
            </form>
          </div>
          <p id="msg"></p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Cospixare Technologies. All Rights Reserved.</p>
        <ul>
          <li>
            <Link to={'/terms'}>Terms & Conditions</Link>
          </li>
          <li>
            <Link to={'/career'}>Careers</Link>
          </li>
          <li>
            <Link to={'/policy'}>Privacy Policy</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
