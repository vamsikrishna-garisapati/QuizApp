import React from 'react';
import { NavLink } from 'react-router-dom';


const Redirect = () => {
  return (
    <div className="mt-2 text-center">
        <p className="text-lg">
          Login to access the test?
          <NavLink to="/login" className="text-blue-500 hover:underline mx-1">
              Login
            </NavLink>
        </p>
      </div>
  );
}

export default Redirect;