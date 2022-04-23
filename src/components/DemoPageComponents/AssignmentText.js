import styles from "./AssignmentText.module.css"

export default function AssignmentText(props){

    return(
        
            <div className={styles.AssignmentText}>Zadanie :&nbsp;

                {props.WhichAssignmentState === "1" ? <span>Poskladaj vstupy do vzorcu dýchania</span>:null}
                {props.WhichAssignmentState === "2" ? <span>Poskladaj vstupy do vzorcu fotosyntéza</span>:null}
                {props.WhichAssignmentState === "3" ? <span>Poskladaj vzorec ATP</span>:null}

            </div>

    )
}