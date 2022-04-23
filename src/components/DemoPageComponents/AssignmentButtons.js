import styles from "./AssignmentButtons.module.css"

export default function AssignmentButtons(props){

    return(
        <div className={styles.ButtonsContainer}>

            <button id={styles.Button1} onClick = { () => props.SetAssignment("1")}></button>
            <button id={styles.Button2} onClick = { () => props.SetAssignment("2")}></button>
            <button id={styles.Button3} onClick = { () => props.SetAssignment("3")}></button>

        </div>

    )
}