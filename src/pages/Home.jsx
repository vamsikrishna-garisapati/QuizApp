import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section with Background Image */}
      <div className="p-5 text-center bg-image" style={{
        backgroundImage: `url('https://shorturl.at/wBvkP')`, // Using shortened URL
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        color: "white",
        loading: "lazy"
      }}>
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
          <div className="text-center text-shadow">
            <h1 className="display-3  mb-4 fw-bold">Unlock Your Potential with Our Skills Test</h1>
            <p className="lead mb-4">Take a quick quiz to assess your skills, discover your strengths, and take the next step towards success!</p>
            <NavLink to="/testselection">
              <button className="btn btn-outline-light btn-lg px-4 py-2">Start Your Test Now</button>
            </NavLink>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Why Choose Our Test?</h2>
        <div className="row">
          <div className="col-md-4 text-center mb-4">
            <div className="icon-box p-4 border rounded shadow-sm">
              <i className="fas fa-chart-line fa-3x text-primary mb-3"></i>
              <h4>Accurate Results</h4>
              <p>Get precise and reliable results that help you make informed hiring decisions.</p>
            </div>
          </div>
          <div className="col-md-4 text-center mb-4">
            <div className="icon-box p-4 border rounded shadow-sm">
              <i className="fas fa-user-graduate fa-3x text-success mb-3"></i>
              <h4>Engaging Experience</h4>
              <p>Interactive questions and real-time feedback that make learning fun and effective.</p>
            </div>
          </div>
          <div className="col-md-4 text-center mb-4">
            <div className="icon-box p-4 border rounded shadow-sm">
              <i className="fas fa-cogs fa-3x text-warning mb-3"></i>
              <h4>Customizable</h4>
              <p>Tailor the quiz to your industry or specific job requirements for better insights.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">What Our Customers Say</h2>
          <div className="row">
            {/* Testimonial 1 */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <blockquote className="blockquote text-center p-4">
                  <p>"This is the best service I've ever used! Highly recommend it to anyone."</p>
                  <footer className="blockquote-footer">John Doe</footer>
                </blockquote>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <blockquote className="blockquote text-center p-4">
                  <p>"This quiz app helped me improve my knowledge in a fun and engaging way!"</p>
                  <footer className="blockquote-footer">Jane Smith</footer>
                </blockquote>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <blockquote className="blockquote text-center p-4">
                  <p>"The questions were challenging, and I loved the instant feedback."</p>
                  <footer className="blockquote-footer">Mark Johnson</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-primary text-white text-center py-5">
        <h3 className="mb-4">Ready to test your skills?</h3>
        <p className="mb-4">Start your journey today with our engaging quizzes and become a better version of yourself.</p>
        <NavLink to="/testselection">
          <button className="btn btn-light btn-lg">Start the Test</button>
        </NavLink>
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
}

export default Home;
