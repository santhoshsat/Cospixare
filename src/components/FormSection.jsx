import React, { useState } from 'react'
import './FormSection.css'

const FormSection = () => {

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        company: '',
        service: '',
        message: '',
        updates: false,
        terms: false
    })

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
                    <input
                        type="text" 
                        name="name" 
                        className="form-input"
                        value={formData.name}
                        placeholder='Enter your name'
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    <input
                        type="tel"
                        name="phone"
                        className="form-input"
                        value={formData.phone}
                        placeholder='Enter your phone number'
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                </div>

                <div className="form-group">
                    <input 
                        type="email" 
                        name="email" 
                        className="form-input"
                        value={formData.email}
                        placeholder='Enter your email address'
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    <input 
                        type="text" 
                        name="company" 
                        className="form-input"
                        value={formData.company}
                        placeholder='Enter your company name'
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                </div>

                <div className="form-group">
                    <select 
                        name="service" 
                        className="form-select"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                        <option value="" disabled>Select a service</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Mobile App Development">Mobile App Development</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="Logo Designing">Logo Designing</option>
                        <option value="Cloud Solution">Cloud Solution</option>
                    </select>
                </div>
                
                <textarea name="message" className="form-textarea" placeholder="Let us know what you need" required></textarea>
                <div className="checkbox-group">
                    <label className="box-labelnew">
                        <input 
                            type="checkbox"
                            name="updates" 
                            className="box"
                            checked={formData.updates}
                            onChange={(e) => setFormData({ ...formData, updates: e.target.checked })}
                        />
                        <p>I would like to be updated on the latest products, events & leadership.</p>
                    </label>
                    <label className="box-labelnew">
                        <input
                            type="checkbox"
                            name="terms"
                            className="box"
                            checked={formData.terms}
                            onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
                        />
                        <p>I have read and accepted the <a href="/termsCondition">Terms & Conditions</a> & <a href="/privacyPolicy">Privacy Policy</a>.</p>
                    </label>
                </div>
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </>
    )
}

export default FormSection