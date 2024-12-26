import React, { useState } from 'react';

const Contact = () => {
  // State to manage form input values and form submission status
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState(null);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Example of simple form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('Please fill in all fields.');
      return;
    }
    setFormStatus('Thank you for your message. We will get back to you shortly!');
    // Normally, you would send the form data to your backend here
    setFormData({ name: '', email: '', message: '' }); // Reset form after submission
  };

  return (
    <div>
      {/* Intro Section with Content */}
      <div className="bg-light py-5">
        <div className="container text-center">
          <h1 className="display-3 font-weight-bold mb-4">We'd Love to Hear from You</h1>
          <p className="lead mb-4">
            If you have any questions, suggestions, or just want to say hi, feel free to reach out to us.
          </p>
          <p className="mb-4">
            Our team is always ready to assist you, and we value your feedback to improve our services.
          </p>
        </div>
      </div>

      {/* Split Layout: Contact Form + Additional Content */}
      <div className="container my-5">
        <div className="row">
          {/* Left side: Contact Form */}
          <div className="col-md-6">
            <h2 className="mb-4">Get In Touch</h2>
            {formStatus && (
              <div className="alert alert-info text-center">{formStatus}</div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary btn-lg">Send Message</button>
              </div>
            </form>
          </div>

          {/* Right side: Additional Content (Image with Description) */}
          <div className="col-md-6">
            {/* <h3 className="mb-4">Why Contact Us?</h3>
            <p>
              At QuizApp, we value communication with our users. Whether you need help, have questions, or want to give us feedback, we're here to listen. 
              Our goal is to provide the best possible experience and we are always open to suggestions for improvement.
            </p>
            <p>
              We're a passionate team dedicated to enhancing our quiz platform. So don't hesitate to reach out – we love hearing from you!
            </p> */}
            <img
              src="https://shorturl.at/SxsV9"
              alt="Contact Us"
              className="img-fluid rounded mt-4"
              style={{ maxHeight: 'auto', objectFit: 'fill' ,loading: "lazy"}}
            />
          </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="bg-light py-5">
        <div className="container text-center">
          <h2 className="mb-4">Our Contact Information</h2>
          <p className="lead mb-4">Feel free to reach us via any of the following methods:</p>
          <div className="row">
            {/* Address */}
            <div className="col-md-4 mb-4">
              <h5><i className="bi bi-geo-alt"></i> Our Office</h5>
              <p>1234 QuizApp St., Suite 100, Tech City, TC 12345</p>
            </div>

            {/* Email */}
            <div className="col-md-4 mb-4">
              <h5><i className="bi bi-envelope"></i> Email Us</h5>
              <p><a href="mailto:contact@quizapp.com" className="text-decoration-none text-dark">contact@quizapp.com</a></p>
            </div>

            {/* Phone */}
            <div className="col-md-4 mb-4">
              <h5><i className="bi bi-telephone"></i> Call Us</h5>
              <p>(123) 456-7890</p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Links Section */}
      <div className="text-center py-5">
        <div className="container">
          <h2 className="mb-4">Follow Us</h2>
          <p className="lead mb-4">Stay connected through our social media channels:</p>
          <div>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark btn-lg m-2">
              <i className="bi bi-facebook"></i> Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark btn-lg m-2">
              <i className="bi bi-twitter"></i> Twitter
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark btn-lg m-2">
              <i className="bi bi-linkedin"></i> LinkedIn
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark btn-lg m-2">
              <i className="bi bi-instagram"></i> Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4">
        <div className="container">
          <p>© 2024 QuizApp. All rights reserved.</p>
          <p>
            <a href="privacy-policy.html" className="text-decoration-none text-white">Privacy Policy</a> | 
            <a href="terms.html" className="text-decoration-none text-white"> Terms of Service</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
