import React, { useState } from 'react'
import './CareerForm.css'

const CareerForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        resume: null,
        coverLetter: ''
      });
    
      const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
        resume: '',
        coverLetter: ''
      });
    
      const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData(prev => ({
          ...prev,
          [name]: files ? files[0] : value
        }));
      };
    
      const validateForm = () => {
        let valid = true;
        const newErrors = { ...errors };
    
        if (!formData.name.trim()) {
          newErrors.name = 'Name is required';
          valid = false;
        } else {
          newErrors.name = '';
        }
    
        if (!formData.email.trim()) {
          newErrors.email = 'Email is required';
          valid = false;
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
          newErrors.email = 'Email is invalid';
          valid = false;
        } else {
          newErrors.email = '';
        }
    
        if (!formData.phone.trim()) {
          newErrors.phone = 'Phone is required';
          valid = false;
        } else {
          newErrors.phone = '';
        }
    
        if (!formData.resume) {
          newErrors.resume = 'Resume is required';
          valid = false;
        } else {
          newErrors.resume = '';
        }
    
        if (!formData.coverLetter.trim()) {
          newErrors.coverLetter = 'Cover letter is required';
          valid = false;
        } else {
          newErrors.coverLetter = '';
        }
    
        setErrors(newErrors);
        return valid;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
          const form = e.target;
          const formData = new FormData(form);
          
          console.log('Form submitted:', formData);
          form.submit();
        }
      };

  return (
    <form 
        action="https://api.web3forms.com/submit" 
        method="POST" 
        id="careerForm"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
    >
        <input type="hidden" name="access_key" value="4e45c093-7ba3-4b08-a23e-f266dffdeb0c" />
        <input type="hidden" name="redirect" value="https://cospixaretechnologies.in/thank-you.html" />
        <input type="hidden" name="subject" value="New Candidate Profile From Cospixare Technologies" />
        
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input 
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            required 
          />
          <div className="error" id="nameError">{errors.name}</div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            autoComplete="email" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
          <div className="error" id="emailError">{errors.email}</div>
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            autoComplete="tel" 
            value={formData.phone}
            onChange={handleChange}
            required 
          />
          <div className="error" id="phoneError">{errors.phone}</div>
        </div>
        <div className="form-group">
            <label htmlFor="resume">Upload Resume (PDF/DOC):</label>
            <input 
              type="file" 
              id="resume" 
              name="resume" 
              className="file-upload" 
              accept=".pdf, .doc, .docx" 
              onChange={handleChange}
              required 
            />
            <div className="error" id="resumeError">{errors.resume}</div>
        </div>
            <div className="form-group">
            <label htmlFor="coverLetter">Cover Letter:</label>
            <textarea 
                id="coverLetter" 
                name="coverLetter" 
                rows="4" 
                value={formData.coverLetter}
                onChange={handleChange}
                required
            ></textarea>
            <div className="error" id="coverLetterError">{errors.coverLetter}</div>
        </div>
        <button type="submit">Submit Application</button>
    </form>
  )
}

export default CareerForm