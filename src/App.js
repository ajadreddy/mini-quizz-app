import './App.css';
import { useState } from 'react';
import { questions } from './components/Data';
function App() {

  const [currentQuestion,setCurrentQuestion] = useState(0);

  const handleNext = () => {
    const nextQuestion = currentQuestion+1;
    if(nextQuestion<questions.length){
      setCurrentQuestion(nextQuestion);
  }

  }
  return (
    <div className="App">
      <h3>{questions[currentQuestion].questionText}</h3>
      {
        questions[currentQuestion].answerOptions.map((answer)=>( 
          <div>
            <input type="radio" /> {answer.answerText} 
          </div>
        ))
      }
      <button onClick={handleNext} >Next</button>
    </div>
  );
}

export default App;
