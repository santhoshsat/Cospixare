import React from 'react';
import './Career.css'; // Assuming you have a CSS file for styling

const Career = () => {
  return (
    <main>
      {/* Career Hero Section */}
      <section 
        id="career-hero" 
        style={{ 
          backgroundImage: 'url("../assets/images/careergrowth.svg")', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }}
      >
        <div className="career-content">
          <h1 className="career-title">Transform Tomorrow, Today</h1>
          <p className="career-description">
            At <span>Cospixare Technologies</span>, we're not just building software - we're crafting the future. 
            Join our dynamic team where innovation meets opportunity, and your ideas shape tomorrow's technology.
            We offer:
          </p>
          <ul className="career-benefits">
            <li><i className="fas fa-rocket"></i> Rapid Career Growth</li>
            <li><i className="fas fa-laptop-code"></i> Cutting-edge Tech Stack</li>
            <li><i className="fas fa-globe"></i> Remote Work Options</li>
            <li><i className="fas fa-graduation-cap"></i> Continuous Learning</li>
          </ul>
          <div className="career-cta">
            <a href="#career-form-section" className="career-button primary">View Open Positions</a>
          </div>
          <div className="career-stats">
            <div className="stat-item">
              <span className="number">25+</span>
              <span className="label">Team Members</span>
            </div>
            <div className="stat-item">
              <span className="number">5+</span>
              <span className="label">Global Projects</span>                
            </div>
            <div className="stat-item">
              <span className="number">100%</span>
              <span className="label">Growth Focus</span>
            </div>
          </div>
        </div>
      </section>

      {/* Career Form Section */}
      <section id="career-form-section" className="career-form-section">
        <div className="container-four">
          <h2>Apply for a Career at Cospixare Technologies</h2>
          <form 
            action="https://api.web3forms.com/submit" 
            method="POST" 
            id="careerForm"
            onSubmit={(e) => {
              // You can add form validation here
              e.preventDefault();
              // Handle form submission
            }}
          >
            <div className="form-group">
              <input type="hidden" name="access_key" value="4e45c093-7ba3-4b08-a23e-f266dffdeb0c" />
              <input type="hidden" name="redirect" value="https://cospixaretechnologies.in/thank-you.html" />
              <input type="hidden" name="subject" value="New Candidate Profile From Cospixare Technologies" />
              <label htmlFor="name">Full Name:</label>
              <input type="text" id="name" name="name" autoComplete="name" required />
              <div className="error" id="nameError"></div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address:</label>
              <input type="email" id="email" name="email" autoComplete="email" required />
              <div className="error" id="emailError"></div>
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number:</label>
              <input type="tel" id="phone" name="phone" autoComplete="tel" required />
              <div className="error" id="phoneError"></div>
            </div>

            <div className="form-group">
              <label htmlFor="resume">Upload Resume (PDF/DOC):</label>
              <input 
                type="file" 
                id="resume" 
                name="resume" 
                className="file-upload" 
                accept=".pdf, .doc, .docx" 
                required 
              />
              <div className="error" id="resumeError"></div>
            </div>

            <div className="form-group">
              <label htmlFor="coverLetter">Cover Letter:</label>
              <textarea id="coverLetter" name="coverLetter" rows="4" required></textarea>
              <div className="error" id="coverLetterError"></div>
            </div>
            <button type="submit">Submit Application</button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Career;