import React from 'react';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="p-5 text-center bg-image" style={{
        backgroundImage: `url('https://shorturl.at/QmQGz')`, // Use the image URL you provided
        height: "90vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        color: "white",
        position: "relative",
        loading: "lazy"
      }}>
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
          <div className="text-center text-shadow">
            <h1 className="display-3 font-weight-bold mb-4">About Us</h1>
            <p className="lead">Empowering You with Skills to Succeed in the Modern Workforce</p>
          </div>
        </div>
      </div>

      {/* Brand Story Section */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Our Story</h2>
        <p className="lead text-center">
          We started with a simple mission: to provide a platform that helps individuals and organizations unlock their full potential. Our journey began with a passion for education, skills development, and technology, all aimed at transforming the hiring process.
        </p>
        <p>
          At our core, we believe that everyone has the potential to grow, and our mission is to provide the tools that help individuals showcase their skills and employers find the best talent. Whether you're an individual looking to improve your skills or a company seeking top-notch employees, we are here to support your success.
        </p>
      </div>

      {/* Our Mission Section */}
      <div className="bg-light py-5">
        <div className="container text-center">
          <h2 className="mb-4">Our Mission</h2>
          <p className="lead mb-4">
            Our mission is simple – to empower people by helping them assess and improve their skills, paving the way for a brighter career path and smarter hiring decisions.
          </p>
          <p>
            We aim to provide accessible, engaging, and challenging assessments that make learning and growth both effective and fun. Through our tests, we aim to connect the best talent with companies that need their skills to thrive.
          </p>
        </div>
      </div>

      {/* Meet Our Team Section */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Meet Our Team</h2>
        <div className="row">
          {/* Team Member 1 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img src="https://randomuser.me/api/portraits/men/1.jpg" className="card-img-top" alt="Team Member 1" />
              <div className="card-body text-center">
                <h5 className="card-title">John Doe</h5>
                <p className="card-text">Founder & CEO</p>
                <p>John brings over a decade of experience in education technology and a passion for helping people find their true potential.</p>
              </div>
            </div>
          </div>
          {/* Team Member 2 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img src="https://randomuser.me/api/portraits/women/2.jpg" className="card-img-top" alt="Team Member 2" />
              <div className="card-body text-center">
                <h5 className="card-title">Jane Smith</h5>
                <p className="card-text">Head of Product</p>
                <p>Jane leads product development and ensures that every test we create provides value and meaningful insights for users.</p>
              </div>
            </div>
          </div>
          {/* Team Member 3 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img src="https://randomuser.me/api/portraits/men/3.jpg" className="card-img-top" alt="Team Member 3" />
              <div className="card-body text-center">
                <h5 className="card-title">Mark Johnson</h5>
                <p className="card-text">Chief Technology Officer</p>
                <p>Mark is the technical genius behind our platform, ensuring that we offer seamless, innovative solutions for all our users.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-light py-5">
        <div className="container text-center">
          <h2 className="mb-4">Why Choose Us?</h2>
          <p className="lead mb-4">
            Our platform offers several key advantages that set us apart from the competition:
          </p>
          <div className="row">
            <div className="col-md-4">
              <h4>Comprehensive Assessments</h4>
              <p>Our tests cover a wide range of skills, from technical expertise to soft skills, ensuring that you get a complete picture of your abilities.</p>
            </div>
            <div className="col-md-4">
              <h4>Instant Feedback</h4>
              <p>Receive immediate insights and recommendations to improve your performance, helping you grow faster and smarter.</p>
            </div>
            <div className="col-md-4">
              <h4>Engaging Learning Experience</h4>
              <p>Our tests are designed to be interactive and engaging, making it easy and enjoyable to improve your skills.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="text-center py-5">
        <div className="container">
          <h2 className="mb-4">Get in Touch</h2>
          <p className="lead mb-4">Have any questions? We'd love to hear from you! Reach out and let's talk.</p>
          <a href="mailto:contact@quizapp.com" className="btn btn-primary btn-lg">Contact Us</a>
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

export default About;
