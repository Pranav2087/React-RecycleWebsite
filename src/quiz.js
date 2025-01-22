import React, { useState } from "react";
import "./quiz.css";

function Quiz() {
 const [currentQuestion, setCurrentQuestion] = useState(0);
 const [selectedOption, setSelectedOption] = useState(null);
 const [showExplanation, setShowExplanation] = useState(false);
 const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
 const [quizCompleted, setQuizCompleted] = useState(false);

 const questions = [
  {
   question:
    "You are thinking of buying a new mobile phone, but you already have a huge pile of electronics at home, what is the correct way to deal with this?",
   options: [
    "A) Discard the old electronics in the regular trash and buy the new mobile phone.",
    "B) Store the old electronics indefinitely and buy a new mobile phone.",
    "C) Sell, donate, or recycle the old electronics responsibly before purchasing a new mobile phone.",
    "D) Leave the old electronics in a public place for someone else to pick up and buy the new mobile phone.",
   ],
   correctAnswer: 2,
   explanation:
    "One of the primary strategies to combat e-waste is to reduce the acquisition of new electronic products and ensure responsible disposal of old electronics. Selling, donating, or recycling old electronics are methods aligned with the principles of reducing e-waste.",
  },
  {
   question:
    "The 'Reuse' category primarily advocates for",
   options: [
    "A) Recycling old electronics.",
    "B) Repairing and procuring second-hand e-products.",
    "C) Curtailing the purchase of new electronics.",
    "D) Fostering a circular economy.",
   ],
   correctAnswer: 1,
   explanation:
    "The 'Reuse' section predominantly underscores repairing existing e-products and acquiring second-hand or refurbished electronics to extend their lifespan andmitigate e-waste.",
  },
  {
   question:
    "The primary environmental advantage of recycling mobile phones and TVs as delineated in the text is",
   options: [
    "A) Abating the need for physical storage devices.",
    "B) Lessening the demand for raw material extraction.",
    "C) Diverting waste from landfills.",
    "D) Reducing the count of unused devices.",
   ],
   correctAnswer: 1,
   explanation:
    "Recycling mobile phones and TVs allows up to 90% of the materials in these devices to be repurposed, thereby lessening the demand for raw material extraction and conserving energy.",
  },
  {
   question:
    "Which action is not recommended under the 'Reduce' category for minimizing e-waste generation?",
   options: [
    "A) Unplugging chargers once devices are charged.",
    "B) Turning off appliances at the wall when not in use.",
    "C) Purchasing second-hand or refurbished e-products.",
    "D) Storing products in accordance with instructions.",
   ],
   correctAnswer: 2,
   explanation:
    "The 'Reduce' category emphasises minimising the acquisition of new electronic goods, whereas the action of purchasing second-hand or refurbished e-products is discussed under the 'Reuse' category.",
  },
  {
   question:
    "According to the text, how can the life of e-products be extended?",
   options: [
    "A) By unplugging chargers once devices are charged.",
    "B) By discarding old electronics properly.",
    "C) By buying new electronics frequently.",
    "D) By avoiding the use of cloud-based solutions.",
   ],
   correctAnswer: 0,
   explanation:
    "One of the primary strategies to combat e-waste is to reduce the acquisition of new electronic products and ensure responsible disposal of old electronics. Selling, donating, or recycling old electronics are methods aligned with the principles of reducing e-waste.",
  }
  // Add more question objects as needed
 ];

 const handleOptionSelect = (index) => {
  if(showExplanation)return;
  setSelectedOption(index);
 };

 const handleAnswerCheck = () => {
  if (selectedOption === questions[currentQuestion].correctAnswer) {
   setIsAnswerCorrect(true);
   setShowExplanation(true);
  } else {
   setIsAnswerCorrect(false);
   setShowExplanation(true);
  }
 };

 const handleNextQuestion = () => {
  if (currentQuestion < questions.length - 1) {
   setCurrentQuestion(currentQuestion + 1);
   setSelectedOption(null);
   setShowExplanation(false);
   setIsAnswerCorrect(null);
  } else {
   setQuizCompleted(true); // Marking the quiz as completed
  }
 };

 return (
  <>
   <div className="datuq" style={{ backgroundSize: "100% 400%" }}>
    <div className="wenzi">
     <h2>Quiz Time</h2>
     <p>
      Try to find out how much knowledge you have about how to properly
      dispose of E-waste.
     </p>
    </div>
    <div className="question-container" style={{paddingBottom:'100px'}}>
     <div className="question-number">Question {currentQuestion + 1}</div>
     <div className="question">{questions[currentQuestion].question}</div>
     <div className={`${showExplanation?'flex':''}`}>
      <div style={{width: 'fit-content',margin: 'auto'}}>
      {
       questions[currentQuestion].options.map((option, index) => (
        <div onClick={() => { handleOptionSelect(index) }} key={index} className={`option ${showExplanation && questions[currentQuestion].correctAnswer === index ? "option-bright" : ""} ${selectedOption === index ? 'here' : ''}`}>
         <div className={`option-span ${showExplanation && questions[currentQuestion].correctAnswer !== index ? "option-span-bright" : ""}`}></div>
         <span>
          {option}
         </span>
        </div>
       ))
      }
     </div>
      <div className="buttons-container">
       {quizCompleted ? (
        <div>
         <p>Congratulations! You have completed the quiz.</p>
        </div>
       ) : (
        <div>
         {isAnswerCorrect !== null && (
          <div className="title" style={{ color: isAnswerCorrect ? "green" : "#ec4242"}}>
           {isAnswerCorrect ? "You are correct" : "You are wrong"}
          </div>
         )}
         {showExplanation && (
          <div className="explanation">
           {questions[currentQuestion].explanation}
          </div>
         )}
         {showExplanation ? (
          <div className="button" onClick={handleNextQuestion}>Next Question</div>
         ) : (
          <div className="button" onClick={handleAnswerCheck}>Submit</div>
         )}
        </div>
       )}
      </div>
     </div>
    </div>
   </div>
  </>
 );
}

export default Quiz;
