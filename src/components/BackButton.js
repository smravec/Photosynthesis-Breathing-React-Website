import { useNavigate } from "react-router-dom"
import styles from "./BackButton.module.css"

export default function BackButton(){

    const redirect = useNavigate()


    return(
        <div className={styles.BackButtonContainer}>

            <div className={styles.SvgContainer}>

            <svg viewBox="0 0 560 331" className={styles.BackButtonSvg} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0H560V330.5L388 248L94 183L34 86.5L0 0Z" fill="url(#paint0_linear_25_2)"/>
                <defs>
                <linearGradient id="paint0_linear_25_2" x1="8.5" y1="8.5" x2="545.5" y2="330" gradientUnits="userSpaceOnUse">
                <stop stop-color="#44B5A0"/>
                <stop offset="1" stop-color="#74DE72"/>
                </linearGradient>
                </defs>
            </svg>

            </div>
            
            <button className={styles.BackButton} onClick={()=> redirect("/")}>Back</button>

        </div>

    )

}