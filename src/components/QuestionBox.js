import React, { useState} from "react";


const QuestionBox = ({question,options,selected}) => {
    const [answer,setanswer]=useState(options);
    console.log(options)
    return(
        <div className="questionBox">
        <div className="question">{question}</div>
        {answer.map((text,index) => (
            <button key={index} className="answerBin"
            onClick={() => {
                setanswer([text]);
                selected(text);
            }}>
                {text}
            </button>

       ))}
       
      
        </div>
    );
};

export default QuestionBox;