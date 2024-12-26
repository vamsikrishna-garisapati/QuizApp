import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const SignUp = () => {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card shadow-lg" style={{ width: '100%', maxWidth: '400px' }}>
        <div className="card-body p-5">
          <h2 className="text-center mb-4 text-primary">Create Your Account</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Enter your full name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                placeholder="Choose a username"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Create a password"
              />
            </div>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary btn-lg">Sign Up</button>
            </div>
            <p className="text-center mt-3">Already have an account? <a href="#" className="text-decoration-none text-primary">Sign In</a></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
