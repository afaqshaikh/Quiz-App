import React, { useEffect, useState } from 'react';
import './App.css';
import {quizDetails} from './services/quiz_service'
import { QuestionType } from './types/quiz_type';
import QuestionCard from './Component/question_card'


function App() {

  let [quiz,setQuiz] = useState<QuestionType[]>([])
  let [currentQuiz,setcurrentQuiz] = useState(0)
  let [score ,setScore] = useState(0)


  useEffect(()=>{
    async function fetchData() {
      const questions: QuestionType[] = await quizDetails(10,'easy')
      setQuiz(questions)
    }
    fetchData()
  },[])

  const handleSubmit = (e:React.FormEvent<EventTarget>,userAns : string)=>{
    e.preventDefault()
    // console.log(userAns)
    var currentQuestion : QuestionType = quiz[currentQuiz]
    if(userAns === currentQuestion.correct_answer){
      setScore(++score)
    }
    if(currentQuiz !== quiz.length-1)
      setcurrentQuiz(++currentQuiz)
    else {
      alert('Your final score is : ' + score + " out of : " + quiz.length)
      setcurrentQuiz(0)
      setScore(0)

    }
  }

  if(!quiz.length){
  return <div className="d-flex mt-5 justify-content-center">
  <div className="spinner-border text-primary"  style={{width: '3rem', height: '3rem'}} role="status">
  <span className="visually-hidden">Loading...</span>
</div>
</div>
  }

  return (
    <div className="App container-fluid">
      {/* <h1 className="score"><b>Score {score}/{quiz.length}</b></h1> */}
      <QuestionCard question={quiz[currentQuiz].question} options={quiz[currentQuiz].option} callback={handleSubmit} />   
    </div>
    );
}

export default App;
