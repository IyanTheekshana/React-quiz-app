import { useCallback, useState } from "react";
import  QUESTIONS from '../questions.js'
import Question from "./Question.jsx";
import Summery from "./Summery.jsx";

export default function Quiz(){
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(
        function handleSelectAnswer(selectedAnswer){
            setUserAnswers((prev)=>[...prev,selectedAnswer]);
        },[]
    )

    const handleSkipAnswer = useCallback(()=>handleSelectAnswer(null),[handleSelectAnswer])

    if(quizIsComplete){
        return (
           <Summery userAnswers={userAnswers}/>
        );
    }

    return(
        <div id="quiz">
            <Question 
                onSelectAnswer={handleSelectAnswer}
                questionIndex={activeQuestionIndex}
                onSkipAnswer={handleSkipAnswer}
                key={activeQuestionIndex}
            />
        </div>
    );
}