import BackButton from "./BackButton"
import QuestionType1 from "./QuizPageComponents/QuestionType1"

import { useState } from "react"

import styles from "./QuizPage.module.css"
import QuestionType2 from "./QuizPageComponents/QuestionType2"



export default function QuizPage(){

    const [ Solved , SetSolved] = useState("solving")
    const [Evaluated, SetEvaluate] = useState(false)

    

    return(
        <div className={styles.MainContainer}>

            <BackButton/>

            <div className={styles.MainContentContainer}> 
                
                <header>Odpovedz na otazky</header>
            
                <QuestionType1 Question = "Aký dej je fotozyntéza ?" RightAnswer = "Anabolický" Solved = {Solved} />

                <QuestionType1 Question = "Koľko je podmienok pre fotosyntézu?" RightAnswer = "4" Solved = {Solved}/>

                <QuestionType1 Question = "Z koľko fáz sa skladá fotosyntéza ?" RightAnswer = "2" Solved = {Solved}/>

                <QuestionType1 Question = "Patrí medzi produkty prvej fázy fotosyntézy ATP ?" RightAnswer = "Ano" Solved = {Solved}/>

                <QuestionType1 Question = "Je Calvinov-Bensonov cyklus typický pre rastliny C4 ?" RightAnswer = "Nie" Solved = {Solved}/>

                <QuestionType1 Question = "Odohravá sa prvá fáza fotozyntézy cez noc ?" RightAnswer = "Nie" Solved = {Solved}/>

                <QuestionType1 Question = "Prebieha druhá fáza fotosyntézy v strome chloroplastov ?" RightAnswer = "Ano" Solved = {Solved}/>

                <QuestionType1 Question = "Možme nazvať tmavú fázu fotosyntézy aj syntetická ?" RightAnswer="Ano" Solved = {Solved}/>

                <QuestionType1 Question = "Je Hatchov-Slackov cyklus typický pre C3 rastliny ?" RightAnswer="Nie" Solved = {Solved}/>

                <QuestionType2 Question = "Čo sa deje s CO2 v 2. fáze ?" 
                                Answer1 = "Vylučuje sa cez otvorené prieduchy" 
                                Answer2 = "Viaže sa na akceptory, redukuje sa katiónom vodíka (z NADPH + H+) a mení sa na sacharidy" 
                                Answer3 = "Viaže sa na akceptory, zlučuje sa s katiónom vodíka a mení sa na uhlikatú látku" 
                                RightAnswer = "2"
                                Solved = {Solved}/>

                <QuestionType2 Question = "Prečo rastliny označujeme ako C3 a C4 ?" 
                                Answer1 = "Ich cyklusi prebiehajú v 3 a 4 častiach" 
                                Answer2 = "Pri ich cykloch dochádza k vzniku/rozdeleniu na 3- a 4-uhlíkaté látky" 
                                Answer3 = "Enzým Rubisco v nich viaže CO2 a O2 v pomere 1:3 a 1:4" 
                                RightAnswer = "2"
                                Solved = {Solved}/>

                <QuestionType2 Question = "Čím sa líši cyklus sukulentov (púštnych rastlín)od cyklusu bežných C4 rastlín ?" 
                                Answer1 = "Majú iba Calvinov cyklus kvôli nedostatku vody, vysokému slnečnému žiareniu a výkyvom teplôt" 
                                Answer2 = "Majú oba cykly ktoré sa striedajú podľa toho či je deň alebo noc kvôli výkyvom teplôt a nedostatku svetla v noci" 
                                Answer3 = "Majú špeciálny CAM cyklus ktorý je podobný ako ten Calvinov, ale majú pri ňom zatvorené prieduchy aby nedochádzalo k fotorespirácii a k strate vody" 
                                RightAnswer = "2"
                                Solved = {Solved}/>

                <QuestionType2 Question = "Účinnosť fotozyntézy závisí od:" 
                                Answer1 = "Intenzity svetla, teploty a sily vetra" 
                                Answer2 = "Intenzity svetla, množstva vody a množstva O2" 
                                Answer3 = "Množstva vody, teploty a množstva CO2" 
                                RightAnswer = "3"
                                Solved = {Solved}/>


                <div className={styles.ButtonsContainer}>

                    <button className={styles.EvaluateButton} onClick={()=>{SetSolved("solved");SetEvaluate(true)}}> Vyhodnoť </button>
                    <button className={styles.AgainButton} onClick={()=>{SetSolved("solving");SetEvaluate(false)}}>Znova</button>

                </div>

            </div>

        </div>
    )
}