// RegistrationForm.jsx
import React, { useState } from 'react';
import './form.css';


const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    number: '',
    whatsnum: '',
    email: '',
    course: '',
    district: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
  };

  return (
    <div className="wrapper">
      <div className="registration_form">
        <div className="title">Registration Form</div>
        <form onSubmit={handleSubmit}>
          <div className="form_wrap">
            <div className="input_grp">
              <div className="input_wrap">
                <label htmlFor="fname">First Name</label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  value={formData.fname}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input_wrap">
                <label htmlFor="lname">Last Name</label>
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  value={formData.lname}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="input_wrap">
              <label htmlFor="number">Phone Number</label>
              <input
                type="tel"
                id="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input_wrap">
              <label htmlFor="whatsnum">WhatsApp Number</label>
              <input
                type="tel"
                id="whatsnum"
                name="whatsnum"
                value={formData.whatsnum}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input_wrap">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input_wrap">
              <label htmlFor="course">Course</label>
              <select
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
              >
                <option value="">Select Course</option>
                <option value="web">Full stack Web Development</option>
                <option value="app">Full stack App Development</option>
                <option value="ai">Artificial Intelligence</option>
                <option value="ml">Machine Learning</option>
              </select>
            </div>

            <div className="input_wrap">
              <label htmlFor="district">District</label>
              <input
                type="text"
                id="district"
                name="district"
                value={formData.district}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input_wrap">
              <input
                type="submit"
                value="Register Now"
                className="submit_btn"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
