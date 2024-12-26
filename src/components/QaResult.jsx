import React from 'react';
import Confetti from 'react-confetti';

const QaResult = ({ score, totalQuestion, quitQuiz, retakeQuiz }) => {
  const isHighscore = score === totalQuestion;

  return (
    <div className="qa-result-container text-center mt-5" style={{ position: 'relative', padding: '40px', borderRadius: '15px', background: '#f8f9fa' }}>
      {isHighscore && <Confetti recycle={false} numberOfPieces={300} />}
      
      {/* Displaying the quiz completed */}
      <h2 className="text-center display-4 text-success font-weight-bold" style={{ fontSize: '2.5rem' }}>
        Quiz Completed!
      </h2>
      
      {/* Displaying the score */}
      <p className="text-center" style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#333' }}>
        Score: <span className="text-primary">{score}</span> / <span className="text-danger">{totalQuestion}</span>
      </p>
      
      {/* Displaying celebratory message */}
      {isHighscore && (
        <div className="celebratory-message">
          <img src="https://www.example.com/congratulations-image.jpg" alt="Congratulations" className="img-fluid" style={{ maxWidth: '300px', marginBottom: '20px', objectFit: 'cover', borderRadius: '10px' }} />
          <p className="font-weight-bold text-success" style={{ fontSize: '1.5rem' }}>Congratulations on acing the quiz!</p>
        </div>
      )}

      {/* Displaying the buttons to retake or quit */}
      <div className="result-buttons d-flex justify-content-center my-4">
        <button
          className="btn btn-success mx-2 px-4 py-2 rounded-pill shadow-lg"
          onClick={() => retakeQuiz()}
          style={{ transition: 'all 0.3s ease' }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#28a745')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '')}
        >
          Retake Quiz
        </button>
        <button
          className="btn btn-danger mx-2 px-4 py-2 rounded-pill shadow-lg"
          onClick={() => quitQuiz()}
          style={{ transition: 'all 0.3s ease' }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#dc3545')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '')}
        >
          Quit
        </button>
      </div>
    </div>
  );
};

export default QaResult;
