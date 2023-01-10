import './App.css';
import { useState } from 'react';
import { questions } from './components/Data';
function App() {

  

  const [currentQuestion,setCurrentQuestion] = useState(0);
  const [score,setScore] = useState(0);
  const [showScore,setShowScore] = useState(false); 
  const [selectedOption,setSelectedoption] = useState(null);
  
  
  const handleNext = (selectedOption) => {
    setSelectedoption(selectedOption);
    const nextQuestion = currentQuestion+1;
    if(selectedOption){
      if(selectedOption.isCorrect===true){
        setScore(score+1);
      }
    }

    if(nextQuestion<questions.length){
      setCurrentQuestion(nextQuestion);
    }
    else{
      setShowScore(true);
    }
  }
  return (
    <div className="App">
      {showScore?(
        <div className='score-section'>
          <h1>You scored {score} out of {questions.length}</h1><br />
          <button>Start again</button>
        </div>
      )
      :(
        <>
        <div className='qsn'>
          <h3>{currentQuestion+1}. {questions[currentQuestion].questionText}</h3>
        </div>
        
        <div className='option-section'>
          {
            questions[currentQuestion].answerOptions.map((selectedOption)=>( 
              <div className='option' onClick={()=>handleNext(selectedOption)}>
                <div className='act' >{selectedOption.answerText} </div>
              </div>
            ))
          }
        </div>
        <div className='btn-section'>
          <button onClick={setShowScore} >Submit test</button>
        </div>
        
        </>
      )
      }
    </div>
  );
}

export default App;
