import './App.css';
import { useState } from 'react';
import { questions } from './components/Data';
function App() {

  const [currentQuestion,setCurrentQuestion] = useState(0);
  const [score,setScore] = useState(0);
  const [showScore,setShowScore] = useState(false); 
  const [selectedOption,setSelectedoption] = useState(null);

  const saveNext = (answer) => {
    setSelectedoption(answer);
  }

  const handleNext = (selectedOption) => {
    const nextQuestion = currentQuestion+1;
    if(selectedOption){
      if(selectedOption.isCorrect===true){
        setScore(score+1);
      }
    }

    if(nextQuestion<questions.length){
      setCurrentQuestion(nextQuestion);
    }
  }
  return (
    <div className="App">
      {showScore?(
        <h1>You scored {score} out of {questions.length}</h1>
      )
      :(
        <>
        <div className='qsn'>
          <h3>{currentQuestion+1}. {questions[currentQuestion].questionText}</h3>
        </div>
        
        {
          questions[currentQuestion].answerOptions.map((answer)=>( 
            <div onClick={()=>saveNext(answer)}>
              <input name='a' type="radio" /> {answer.answerText} 
            </div>
          ))
        }
        <button onClick={()=>handleNext(selectedOption)}>Save and Next</button>
        <button onClick={setShowScore} >Submit test</button>
        </>
      )
      }
    </div>
  );
}

export default App;
