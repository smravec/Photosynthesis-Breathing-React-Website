import styles from "./Atom.module.css"


export default function Atom(props){

    function WhichColor(){
        let gradient = {} 

        if(props.text === "H"){
            gradient = {background:"linear-gradient(325.19deg, #1C77FF 16.22%, #21A4C0 84.25%)"}
        }

        if(props.text === "C"){
            gradient = {background:"linear-gradient(141.18deg, #FF2525 14.76%, #5B0808 84.94%)"}
        }

        if(props.text === "P"){
            gradient = {background:"linear-gradient(323.82deg, #FFA825 17.01%, #FAFF1B 85.68%)"}
        }

        if(props.text === "N"){
            gradient = {background:"linear-gradient(141.18deg, #2596FF 14.76%, #081F6F 84.94%)"}
        }

        if(props.text === "O"){
            gradient = {background:"linear-gradient(141.18deg, #25FF55 14.76%, #10639E 84.94%)"}
        }
        

        return gradient
    }

    return(
        <div id={styles.atom} className={props.className} style={WhichColor()}>
            <div className={styles.text}>
                {props.text}
            </div>
            <div className={styles.number}>
                {props.number}
            </div>
        </div>
    )
}