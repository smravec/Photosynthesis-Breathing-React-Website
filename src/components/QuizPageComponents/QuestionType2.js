import styles from "./QuestionType2.module.css"

import { useState } from "react"
import { useEffect } from "react"

import {ImCheckboxChecked} from "react-icons/im"
import {ImCheckboxUnchecked} from "react-icons/im"

export default function QuestionType2(props){

    const [WhichIsChecked, SetWhichChecked] = useState("")
    const [Evaluated, SetEvaluate] = useState(false)

    useEffect(()=>{
        if(props.Solved === "solved"){
            SetEvaluate(true)
        }

        if(props.Solved === "solving" && Evaluated === true){
            SetWhichChecked("")
            SetEvaluate(false)
        }
    })    


    return(
        <div className={styles.MainContainer}>

            <div>{props.Question}</div>

            <div className={styles.Answer}>
                <button className={styles.SvgContainer} id={Evaluated === true ? (WhichIsChecked === "1" ? (props.RightAnswer === "1" ? styles.AnswerRight : styles.AnswerWrong ) : (props.RightAnswer === "1" ? styles.AnswerRight : null) ) : null} onClick={Evaluated === false ? ()=>SetWhichChecked("1"):null}>
                    {WhichIsChecked === "1" ? 
                    <ImCheckboxChecked/>:
                    <ImCheckboxUnchecked/> }
                </button>
                
                <div >{props.Answer1}</div>
            </div>

            <div className={styles.Answer} id={Evaluated === true ? (WhichIsChecked === "2" ? (props.RightAnswer === "2" ? styles.AnswerRight : styles.AnswerWrong ) : (props.RightAnswer === "2" ? styles.AnswerRight : null) ) : null} >
                <button className={styles.SvgContainer} onClick={Evaluated === false ? ()=>SetWhichChecked("2") : null}>
                    {WhichIsChecked === "2" ? 
                    <ImCheckboxChecked/>:
                    <ImCheckboxUnchecked/> }
                </button>

                
                <div>{props.Answer2}</div>
            </div>

            <div className={styles.Answer} id={Evaluated === true ? (WhichIsChecked === "3" ? (props.RightAnswer === "3" ? styles.AnswerRight : styles.AnswerWrong ) : (props.RightAnswer === "3" ? styles.AnswerRight : null) ) : null}>
                <button className={styles.SvgContainer} onClick={Evaluated === false ? ()=>SetWhichChecked("3") : null}>
                    {WhichIsChecked === "3" ? 
                    <ImCheckboxChecked/>:
                    <ImCheckboxUnchecked/> }
                </button>
                <div>{props.Answer3}</div>
            </div>

        </div>
    )
}