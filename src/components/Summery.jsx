import ImgComplete from '../assets/quiz-complete.png';
import  QUESTIONS from '../questions.js'
export default function Summery({userAnswers}){

    const skippedAnswers = userAnswers.filter(answer => answer === null);
    const correctAnswers = userAnswers.filter(
            (answer, index)=> answer === QUESTIONS[index].answers[0]
    );

    const skippedAnswersShare = Math.round((skippedAnswers.length / userAnswers.length) * 100);
    const correctlyAnswersShare = Math.round((correctAnswers.length / userAnswers.length) * 100);
    const wrongAnswersShare = 100 - skippedAnswersShare- correctlyAnswersShare;


    return (
        <div id="summary">
            <img src={ImgComplete} alt="quiz complete" />
            <h2>Quiz completed</h2>
            <div id="summary-stats">
                <p>
                    <div className="number">{skippedAnswersShare}%</div>
                    <div className="text">Skipped</div>
                </p>
                <p>
                    <div className="number">{correctlyAnswersShare}%</div>
                    <div className="text">Answered correctly</div>
                </p>
                <p>
                    <div className="number">{wrongAnswersShare}%</div>
                    <div className="text">Answered incorrectly</div>
                </p>
            </div>
            <ol>
                {userAnswers.map((answer, index)=>{

                    let cssClass = "user-answer";

                    if(answer === null){
                        cssClass += " skipped"
                    }else if(answer === QUESTIONS[index].answers[0]){
                        cssClass += " correct"
                    }else{
                        cssClass += " wrong"
                    }

                    return (
                        <li key={index}>
                            <h3>{index+1}</h3>
                            <p className='question'>{QUESTIONS[index].text}</p>
                            <div className={cssClass}>{answer ?? "Skipped"}</div>
                        </li>
                    )
                })}

            </ol>
        </div> 
    );
}