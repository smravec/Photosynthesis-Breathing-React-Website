import BackButton from "./BackButton"
import QuestionType1 from "./QuizPageComponents/QuestionType1"


import styles from "./QuizPage.module.css"

export default function QuizPage(){


    return(
        <div className={styles.MainContainer}>

            <BackButton/>

            <div className={styles.MainContentContainer}> 
                
                <header>Odpovedz na otazky</header>

                <QuestionType1/>



            </div>

        </div>
    )
}