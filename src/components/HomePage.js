import Button1 from "./Button1"
import styles from "./HomePage.module.css"
import {useNavigate} from "react-router-dom"



export default function HomePage(){

    const redirect = useNavigate()

        
    const RandomFacts = [
        "Fotosyntéza je prvý a najdôležitejší proces premeny energie slnečného žiarenia na chemickú energiu",
        "Až 90% kyslíka vytvárajú riasy v oceánoch a moriach a len 10% tvoria rastliny na súši",
        "Optimálna teplota na fotosyntézu je 25 až 30 stupňov celzia",
        "Rastlina využíva len 2% zo slnečného žiarenia ostatné odráža",
        "U suchozemských rastlín prebieha až 99% fotosyntézy v listoch",
        "Aj niektoré živočíchy fotosyntetizujú ide však o veľmi nezvyklý jav",
        "Prvý fotosyntetický organizmus je starý približne 3.4 miliardy rokov",
        "Rastliny považujú kyslík za odpad ktorý vzniká pri fotosyntéze a preto ho vylučujú do ovzdušia",
        "Baktéria pod názvom cyanobaktéria vyrába pri fotosyntéze aj energiu",
        "Fotosyntéza bola prvýkrát pozorovaná v 16. storočí belgickým vedcom van Helomont",
        "Svetlá časť fotosyntézy je oveľa rýchlejšia ako temná časť a to kvôli tomu že počas svetlej časti reagujú elektróny a počas temnej časti zase enzýmy"   
    ]
    const RandomFact = RandomFacts[Math.floor(Math.random() * RandomFacts.length)]


    return(
        <div className={styles.MainContainer}>

        <div className={styles.MainContainer1}>
            <div className={styles.ButtonsContainer}>

                <Button1 text = "Source" className={styles.OtherButton} onClick = {() => window.location.href = "https://github.com/smravec/Photosynthesis-Breathing-React-Website"} ></Button1>

                <Button1 text = "Demo" className={styles.OtherButton} onClick = {() => redirect("/demo")} ></Button1>

                <Button1 text = "Quiz" className={styles.QuizButton} onClick = {() => redirect("/quiz")} ></Button1>
                
            </div>

            <div className={styles.Line}/>
        </div>
            <div className={styles.RandomFact}>
                {RandomFact}
            </div>
        
        </div>

    )

} 