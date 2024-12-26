import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-primary">
      <div className="card shadow-lg" style={{ width: '30rem' }}>
        <div className="card-body p-5">
          <h2 className="text-center mb-4">Welcome Back</h2>
          <div className="nav nav-tabs" id="myTab" role="tablist">
            <a className="nav-item nav-link active" id="sign-in-tab" data-bs-toggle="tab" href="#sign-in" role="tab">
              Sign In
            </a>
            <a className="nav-item nav-link" id="forgot-password-tab" data-bs-toggle="tab" href="#forgot-password" role="tab">
              Forgot Password
            </a>
          </div>
          <div className="tab-content mt-4" id="myTabContent">
            {/* Sign In Form */}
            <div className="tab-pane fade show active" id="sign-in" role="tabpanel">
              <form>
                <div className="mb-3">
                  <label htmlFor="user" className="form-label">Username or Email</label>
                  <input type="text" className="form-control" id="user" placeholder="Enter Username or Email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="pass" className="form-label">Password</label>
                  <input type="password" className="form-control" id="pass" placeholder="Enter Password" />
                </div>
                <button type="submit" className="btn btn-primary w-100">Sign In</button>
              </form>
            </div>
            {/* Forgot Password Form */}
            <div className="tab-pane fade" id="forgot-password" role="tabpanel">
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                </div>
                <button type="submit" className="btn btn-warning w-100">Reset Password</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
