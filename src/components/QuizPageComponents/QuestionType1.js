import styles from "./QuestionType1.module.css"

import { useState } from "react"
import { useEffect } from "react"

import { ImCross } from "react-icons/im"
import { ImCheckmark } from "react-icons/im"


export default function QuestionType1(props){
    const [Answer, SetAnswer] = useState("")
    const [Evaluated, SetEvaluate] = useState(false)


    useEffect(()=>{
        if(props.Solved === "solved"){
            SetEvaluate(true)

        }

        if(props.Solved === "solving" && Evaluated === true){
            SetAnswer("")
            SetEvaluate(false)
        }
    })
    

    function UpdateAnswer(e){
        SetAnswer(e.target.value)
    }

    function CheckIfAnswerIsRight(){
        //removes any capital letters , spaces and diacritics
        let UserAnswer = Answer.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        UserAnswer = UserAnswer.replaceAll(' ','')
        UserAnswer = UserAnswer.toLowerCase()

        let RightAnswer = props.RightAnswer.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        RightAnswer = RightAnswer.replaceAll(' ','')
        RightAnswer = RightAnswer.toLowerCase()
        
        if(UserAnswer === RightAnswer){
            return true
        }

        return false
    }

    
    return(
        <div className={styles.MainContainer}>

            <div>{props.Question}</div>

            <div className={styles.AnswerContainer}>
                <input readOnly={props.Solved === "solved" ? true :false} type="text" 
                        className={styles.Answer} 
                        id={props.Solved === "solved" ? (CheckIfAnswerIsRight() === true ? styles.RightAnswer : styles.WrongAnswer):null} 
                        onChange={UpdateAnswer} value={Answer} placeholder="Odpoveď">
                    
                </input>

                <div>
                    {}

                </div>
            </div>


        </div>
    )

}