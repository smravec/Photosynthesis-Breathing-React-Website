import styles from "./DemoPage.module.css";
import Button1 from "./Button1";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Atom from "./Atom";
import AddElemDemoPage from "./AddElemDemoPage";

export default function DemoPage() {
    const redirect = useNavigate();
    const [WhichIsChecked, ChangeCheck] = useState("1")
    const [WhichAssignment,ChangeAssignment] = useState("1")
    const [Elems1Array, AddItemToArray1] = useState([])
    const [Elems2Array, AddItemToArray2] = useState([])

    const TestData = [
        {name:"H" , count: "3" , margin: "4.25rem 0px 0px 0px" , color:"linear-gradient(325.19deg, #1C77FF 16.22%, #21A4C0 84.25%)"},
        {name:"P" , count: "2" ,margin: "5.25rem 0px 0px 0px" , color:"linear-gradient(325.19deg, #1C77FF 16.22%, #21A4C0 84.25%)"},
        {name:"P" , count: "2" ,margin: "2.25rem 0px 0px 0px" , color:"linear-gradient(325.19deg, #1C77FF 16.22%, #21A4C0 84.25%)"},
        {name:"P" , count: "2" ,margin: "3.25rem 0px 0px 0px" , color:"linear-gradient(325.19deg, #1C77FF 16.22%, #21A4C0 84.25%)"},
        {name:"P" , count: "2" ,margin: "1.25rem 0px 0px 0px" , color:"linear-gradient(325.19deg, #1C77FF 16.22%, #21A4C0 84.25%)"},

        
    ]

    function AddNewElem(){


    }

  return (
    <div className={styles.MainContainer}>
      <div className={styles.BackButtonContainer}>
            <svg
                width="273"
                height="156"
                viewBox="0 0 273 156"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.svg}
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
            <Button1 text = "Back" className={styles.BackButton} onClick={()=> redirect("/")}></Button1>
        </div>

        <div className={styles.MainContentContainer}>
        
            <div className={styles.ButtonsContainer}>
                <button onClick={()=>{ChangeAssignment("1")}} className={styles.Button} id={styles.b1}>Uloha 1</button>
                <button onClick={()=>{ChangeAssignment("2")}} className={styles.Button} id={styles.b2}>Uloha 2</button>
                <button onClick={()=>{ChangeAssignment("3"); ChangeCheck("1")}} className={styles.Button} id={styles.b3}>Uloha 3</button>
            </div>

            <div className={styles.AssignmentContainer}>
                <div className={styles.HeadherText}>Zadanie :&nbsp;</div>
                <div className={styles.HeadherText}>
                    {WhichAssignment === "1" ? "Poskladaj vstupy do vzorcu dychania":null}
                    {WhichAssignment === "2" ? "Poskladaj vstupy do vzorcu fotosynteza":null}
                    {WhichAssignment === "3" ? "Poskladaj vzorec ATP":null}
                    
                </div>
           
           
           
            </div>

            <div className={styles.MainContentDisplay}>
                <div className={styles.ChemElem1}>
                    <div className={styles.ChemElemContent}>

                        {TestData.map((elem) => {
                            return(
                                <div key= {elem.name} className={styles.Atom} style={{margin: elem.margin}}>
                                <Atom key={elem.name} text = {elem.name} number={elem.count} style={{background:elem.color}}/>
                            </div>
                            )
                            
                        })}
                        
                        

                    </div>
                    <div className={styles.num} id={WhichIsChecked === "1" ? styles.numselected:null}>1</div>
                </div>

                <div className={styles.ChemElem2}>
                    <div className={styles.num } id={WhichIsChecked === "2" ? styles.numselected:null}>2</div>
                    


                    <div className={styles.ChemElemContent}>
                    

                    </div>

                </div>
                
            </div>


        </div>

        <div className={styles.Input}>
        <div className={styles.AddElemContainer}>
            <AddElemDemoPage onClick1={()=>{console.log("elem1")}} onClick2={()=>{console.log("elem2")}} text="H" style={{background:"linear-gradient(325.19deg, #1C77FF 16.22%, #21A4C0 84.25%)"}}/>
            <AddElemDemoPage onClick1={()=>{console.log("elem1")}} onClick2={()=>{console.log("elem2")}} text="C" style={{background:"linear-gradient(141.18deg, #FF2525 14.76%, #5B0808 84.94%)"}}/>
            <AddElemDemoPage onClick1={()=>{console.log("elem1")}} onClick2={()=>{console.log("elem2")}} text="P" style={{background:"linear-gradient(323.82deg, #FFA825 17.01%, #FAFF1B 85.68%)"}}/>
            <AddElemDemoPage onClick1={()=>{console.log("elem1")}} onClick2={()=>{console.log("elem2")}} text="N" style={{background:"linear-gradient(141.18deg, #2596FF 14.76%, #081F6F 84.94%)"}}/>
            <AddElemDemoPage onClick1={()=>{console.log("elem1")}} onClick2={()=>{console.log("elem2")}} text="O" style={{background:"linear-gradient(141.18deg, #25FF55 14.76%, #10639E 84.94%)"}}/>

        </div>

        <div className={styles.Buttons}>
        <div className={styles.FirstOrSecondEl}>
            <button onClick={()=>{ChangeCheck("1")}} className={styles.bt1} id={ WhichIsChecked == "1" ? styles.bt1_checked : styles.bt1_unchecked} >
                1
            </button>
            <button onClick={()=>{ChangeCheck("2")}} className={styles.bt2} disabled={WhichAssignment === "3" ? true :false} id={ WhichIsChecked == "2" ? styles.bt2_checked : styles.bt2_unchecked} >
                2
            </button>
        </div>

        <div className={styles.FinalButtonsContainer} >
            <button className={styles.btagain}> Znova </button>
            <button className={styles.btcheck}> Vyhodnot </button>
        </div>
        </div>
        </div>
        

    </div>
  );
}
