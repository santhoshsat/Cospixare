import React from 'react'
import './Contact/Contact.css'

const FormSection = () => {
  return (
    <>
        <form 
            action="https://api.web3forms.com/submit" 
            method="post" 
            id="contact-form"
        >
            <input type="hidden" name="access_key" value="b4be0a98-09bf-444a-8f5a-1f25ef9d13d2" />
            <input type="hidden" name="redirect" value="https://cospixaretechnologies.in/thank-you.html" />
            <input type="hidden" name="subject" value="New Service Request from Cospixare Technologies" />

            <div className="form-group">
            <input type="text" name="name" className="form-input" placeholder="Name*" required autoComplete="name" />
            <input type="tel" name="phone" className="form-input" placeholder="Phone*" required autoComplete="tel" />
            </div>

            <div className="form-group">
            <input type="email" name="email" className="form-input" placeholder="Email*" required autoComplete="email" />
            <input type="text" name="company" className="form-input" placeholder="Company Name" autoComplete="organization" />
            </div>

            <div className="form-group">
            <select name="service" className="form-select" required>
                <option value="">Select Services</option>
                <option value="Digital Marketing">Digital Marketing & SEO</option>
                <option value="Software Development">Custom Software Development</option>
                <option value="Logo Design">Logo Design</option>
                <option value="UX/UI Design">UX/UI Design</option>
                <option value="Web Development">Website Development</option>
                <option value="Cloud Solutions">Cloud Solutions</option>
            </select>
            </div>
            
            <textarea name="message" className="form-textarea" placeholder="Let us know what you need" required></textarea>
            <div className="checkbox-group">
            <label className="checkbox-label">
                <input type="checkbox" name="updates" />
                I would like to be updated on the latest products, events, and thought leadership.
            </label>
            <label className="checkbox-label">
                <input type="checkbox" name="terms" required />
                I have read and accepted the <a href="../terms-conditions.html">Terms & Conditions</a> & <a href="../privacy-policy.html">Privacy Policy</a>.
            </label>
            </div>
            <button type="submit" className="submit-button">Submit</button>
        </form>
    </>
  )
}

export default FormSection