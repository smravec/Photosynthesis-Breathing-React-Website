import styles from "./Button1.module.css"


export default function Button1(props){
    return(
        <div>
            <button id = {styles.Button1} className={props.className} onClick={props.onClick}>{props.text}</button>
        </div>
    )
}