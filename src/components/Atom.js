import styles from "./Atom.module.css"


export default function Atom(props){
    return(
        <div id={styles.atom} className={props.className} style={props.style}>
            <div className={styles.text}>
                {props.text}
            </div>
            <div className={styles.number}>
                {props.number}
            </div>
            


        </div>

    )
}