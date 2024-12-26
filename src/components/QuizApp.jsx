import { useState } from "react";
import TestSelection from "./TestSelection";
import { Questions } from "../data/question";
import QaCard from "./QaCard";
import QaResult from "./QaResult";
import PrograssBar from "./ScrollBar";
import LeaderBoard from "./LeaderBoard";
import { Button } from "react-bootstrap"; 
const QuizApp = () => {
  const [selectCategory, setSelectCategory] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showSummary, setShowSummary] = useState(false);
  const [leaderBoard, setLeaderBoard] = useState({});

  // Handling the selection of Category
  function handleselectCategory(Category) {
    console.log(Category);
    setSelectCategory(Category);
    setCurrentQuestion(0);
    setScore(0);
    setShowSummary(false);
  }

  // Handling the answers
  function handleAnswer(selectedOption) {
    // Checking the correct answer
    let correctAnswer = Questions[selectCategory]?.[currentQuestion]?.answer;
    if (selectedOption === correctAnswer) setScore((prev) => prev + 1);

    // Updating the question
    if (currentQuestion < Questions[selectCategory].length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setShowSummary(true);
      const updatedLeaderBoard = {
        ...leaderBoard,
        [selectCategory]: Math.max(score + 1, leaderBoard[selectCategory] || 0),
      };
      setLeaderBoard(updatedLeaderBoard);
      localStorage.setItem("leaderboard", JSON.stringify(updatedLeaderBoard));
    }
  }

  // Function for Retake Quiz
  function retakeQuiz() {
    setCurrentQuestion(0);
    setScore(0);
    setShowSummary(false);
  }

  // Function for Quit
  function Quit() {
    setSelectCategory(null);
    setCurrentQuestion(0);
    setScore(0);
    setShowSummary(false);
  }

  return (
    <div
      style={{
        backgroundImage: `url('https://shorturl.at/xBmx4')`, 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        // backgroundAttachment: "fixed",
        minHeight: "87vh", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        flexDirection: "column", 
        textAlign: "center", 
        padding: "20px",
        loading: "lazy",
        opacity: 0.8
      }}
    >
      

      {/* Main Quiz Section */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            {!selectCategory ? (
              <TestSelection onselectCategory={handleselectCategory} />
            ) : !showSummary ? (
              <>
                <PrograssBar
                  currentQuestion={currentQuestion}
                  totalQuestion={Questions[selectCategory].length}
                />
                <QaCard
                  questionData={Questions[selectCategory][currentQuestion]}
                  questionNumber={currentQuestion + 1}
                  totalQuestion={Questions[selectCategory].length}
                  handleAnswer={handleAnswer}
                  quitQuiz={Quit}
                />
              </>
            ) : (
              <>
                <QaResult
                  score={score}
                  totalQuestion={Questions[selectCategory].length}
                  quitQuiz={Quit}
                  retakeQuiz={retakeQuiz}
                />
                {/* Leaderboard section */}
                <LeaderBoard leaderBoard={leaderBoard} />
              </>
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      {selectCategory && !showSummary && (
        <div className="text-center mt-4">
          <Button variant="outline-danger" size="lg" onClick={Quit}>
            Quit Quiz
          </Button>
        </div>
      )}
    </div>
  );
};

export default QuizApp;
