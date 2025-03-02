import { useRef } from "react";

export default function Answers({answers, selectedAnswer, answerState, onSelect}){
    const suffledAnswersRef = useRef();
    if(!suffledAnswersRef.current){
        suffledAnswersRef.current = [...answers];
        suffledAnswersRef.current.sort(()=> Math.random() - 0.5);
    }
   
    return (
        <ul id="answers">
        {suffledAnswersRef.current.map((answer)=>{
        const isSelected = selectedAnswer === answer;
        let cssClass = "";
        if(answerState === "answered" && isSelected){
            cssClass = "selected"
        }
        if((answerState === "correct" || answerState === "wrong") && isSelected){
            cssClass = answerState
        }

           return <li key={answer} className="answer">
                <button onClick={()=>onSelect(answer)}
                    className={cssClass} disabled={answerState !== ""}>{answer}</button>
            </li>
        })}
        </ul>
    );
}