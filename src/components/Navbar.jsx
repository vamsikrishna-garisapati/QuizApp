import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaSignInAlt, FaUserPlus, FaHome, FaInfoCircle, FaPhoneAlt, FaTags, FaClipboardList } from 'react-icons/fa'; // Import icons

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-4 shadow-lg">
      <div className="container-fluid">
        {/* Brand Name */}
        <NavLink className="navbar-brand fs-3 text-white fw-bold" to='/'>
          Vuiz
        </NavLink>
        
        {/* Navbar Toggle Button for Mobile */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            {/* Home Page */}
            <li className="nav-item">
              <NavLink className="nav-link text-white px-3 py-2 rounded hover-shadow" to='/'>
                <FaHome className="me-2" />
                Home
              </NavLink>
            </li>

            {/* About Page */}
            <li className="nav-item">
              <NavLink className="nav-link text-white px-3 py-2 rounded hover-shadow" to='/about'>
                <FaInfoCircle className="me-2" />
                About
              </NavLink>
            </li>

            {/* Contact Us Page */}
            <li className="nav-item">
              <NavLink className="nav-link text-white px-3 py-2 rounded hover-shadow" to='/contact'>
                <FaPhoneAlt className="me-2" />
                Contact Us
              </NavLink>
            </li>

            {/* Pricing Page */}
            <li className="nav-item">
              <NavLink className="nav-link text-white px-3 py-2 rounded hover-shadow" to='/pricing'>
                <FaTags className="me-2" />
                Pricing
              </NavLink>
            </li>

            {/* Try Quiz */}
            <li className="nav-item">
              <NavLink className="nav-link text-white px-3 py-2 rounded hover-shadow" to='/testselection'>
                <FaClipboardList className="me-2" />
                Try our Quiz
              </NavLink>
            </li>
          </ul>

          {/* Login and Signup Buttons */}
          <div className='d-flex align-items-center'>
            <div className='nav-item'>
              <button className='btn btn-outline-success rounded-pill px-4 py-2 mx-2 hover-shadow'>
                <NavLink className="nav-link text-white" to='/login'>
                  <FaSignInAlt className="me-2" />
                  Login
                </NavLink>
              </button>
            </div>

            <div className='nav-item'>
              <button className='btn btn-success rounded-pill px-4 py-2 mx-2 hover-shadow'>
                <NavLink className="nav-link text-white" to='/signup'>
                  <FaUserPlus className="me-2" />
                  Signup
                </NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
