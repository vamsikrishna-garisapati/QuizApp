import React from 'react';

const LeaderBoard = ({ leaderBoard }) => {
  console.log(leaderBoard);
  let category = Object.keys(leaderBoard);

  return (
    <div className="container my-5 p-4">
      <h2 className="text-center text-success mb-4">Leaderboard</h2>

      {/* Conditional rendering for empty leaderboard */}
      {category.length === 0 ? (
        <p className="text-center text-muted" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
          You're the first to score! Be the first to top the leaderboard.
        </p>
      ) : (
        <>
          <table className="table table-striped table-hover table-bordered shadow-lg">
            {/* Table header section */}
            <thead className="table-dark">
              <tr>
                <th scope="col" className="text-center">Subject</th>
                <th scope="col" className="text-center">Score</th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody>
              {category.map((sub) => (
                <tr key={sub}>
                  <td className="text-center">{sub}</td>
                  <td className="text-center text-primary font-weight-bold">{leaderBoard[sub]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default LeaderBoard;
