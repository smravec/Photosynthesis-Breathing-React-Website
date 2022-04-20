import { useNavigate } from "react-router-dom"
import styles from "./BackButton.module.css"

export default function BackButton(){

    const redirect = useNavigate()


    return(
        <div className={styles.BackButtonContainer}>
            <div className={styles.SvgContainer}>
            <svg
                
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.BackButtonSvg}
                
                preserveAspectRatio="xMinYMin meet"
            >
                
                <path
                d="M0 0H273V156L189.15 117.059L45.825 86.3782L16.575 40.829L0 0Z"
                fill="url(#paint0_linear_25_2)"
                />
                <defs>
                <linearGradient
                    id="paint0_linear_25_2"
                    x1="4.14375"
                    y1="4.0121"
                    x2="261.403"
                    y2="163.086"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#44B5A0" />
                    <stop offset="1" stop-color="#74DE72" />
                </linearGradient>
                </defs>
                
            </svg>

            </div>
            <button className={styles.BackButton} onClick={()=> redirect("/")}>Back</button>
        </div>

    )

}