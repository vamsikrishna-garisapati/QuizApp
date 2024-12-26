import React from "react";
import { Questions } from "../data/question";

const TestSelection = ({ onselectCategory }) => {
  let categories = Object.keys(Questions);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 display-4 fw-semibold">Take the Test to Ace Interviews!</h2>
      <div className="card shadow-lg " style={{ backgroundColor: 'transparent' }}>
        <div className="card-body">
          <div className="row justify-content-center">
            {categories.map((sub) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 " key={sub}>
                <button
                  onClick={() => onselectCategory(sub)}
                  className="btn btn-success w-100 p-3 btn-lg rounded-pill text-uppercase"
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    transition: "all 0.3s ease-in-out",
                  }}
                  // Hover effect to change button color
                  onMouseEnter={(e) => e.target.style.backgroundColor = "#28a745"}
                  onMouseLeave={(e) => e.target.style.backgroundColor = ""}
                >
                  {sub}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestSelection;
