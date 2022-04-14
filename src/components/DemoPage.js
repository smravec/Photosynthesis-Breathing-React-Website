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
    const [SolvedState, SetSolve] = useState("solving")


    //Answers for Assignments
    const Assignment1Answers1 = [{name:"C", count:"6"},{name:"H",count:"12"},{name:"O", count:"6"}]
    const Assignment1Answers2 = [{name:"O", count:"12"}]

    const Assignment2Answers1 = [{name:"H", count:"12"},{name:"O",count:"6"}]
    const Assignment2Answers2 = [{name:"C", count:"6"},{name:"O",count:"12"}]

    const Assignment3Answers1 = [{name:"C", count:"10"},{name:"H",count:"16"},{name:"N",count:"5"},{name:"O",count:"13"},{name:"P",count:"3"}]


    function FindElementInArray(LookedForElem , WhichArray){
        let foundElem = false
        if(WhichArray === "1"){
            Elems1Array.forEach(element =>{
                if (element.name === LookedForElem){
                    foundElem = true
                }
            })
        }
        else{

            Elems2Array.forEach(element =>{
                if (element.name === LookedForElem){
                    foundElem = true
                }
            })
        }
        return foundElem
    }


    function AddNewElem(ElemName,ElemColor,AddingOneOrTwo){
        
        // First find if the element is already in the array
        if(FindElementInArray(ElemName, WhichIsChecked) === true){
            //adds 1 to the element
            if(WhichIsChecked === "1"){
                const index = Elems1Array.findIndex(obj=> obj.name === ElemName)
                const NewArray = [...Elems1Array]
                NewArray[index].count = (parseInt(Elems1Array[index].count) + AddingOneOrTwo).toString() 
        
                AddItemToArray1(NewArray)
            }
            else{
                const index = Elems2Array.findIndex(obj=> obj.name === ElemName)
                const NewArray = [...Elems2Array]
                NewArray[index].count = (parseInt(Elems2Array[index].count) + AddingOneOrTwo).toString() 
                
                AddItemToArray2(NewArray)
            }
        }
        else{
            const randomMargin = Math.random() * 10 / 2
            
            const NewElem = {name:ElemName, count:AddingOneOrTwo.toString(),color:ElemColor ,margin:randomMargin + "rem 0px 0px 0px"   }
            
            if(WhichIsChecked ==="1"){
                AddItemToArray1([...Elems1Array,NewElem])
            }
            else{
                AddItemToArray2([...Elems2Array,NewElem])
            }
        }

    }
    
    function CheckIfTheInputIsRight(){
        let IsEverythingOk = true
        let Answers1 = []
        let Answers2 = []
        let UserInput1= []
        let UserInput2 = []

        //Check for first and second assignment as they consist of two elements
        if(WhichAssignment === "1" || WhichAssignment === "2"){
            
            //First check if input is not empty
            if(Elems1Array.length === 0 || Elems2Array.length === 0){
                IsEverythingOk = false
            }

            UserInput1 = [...Elems1Array]
            UserInput2 = [...Elems2Array]
            
            if(WhichAssignment === "1"){
                Answers1 = [...Assignment1Answers1]
                Answers2 = [...Assignment1Answers2]
            }

            if( WhichAssignment === "2"){
                Answers1 = [...Assignment2Answers1]
                Answers2 = [...Assignment2Answers2]
            }
            
            //Checks the first element
            Answers1.forEach(CorrectAns => {
                UserInput1.forEach((UserAns,Index) => {
                    if(CorrectAns.name === UserAns.name && CorrectAns.count === UserAns.count){
                        UserInput1.splice(Index,1)
                    }
                });
            });

            //Checks the second element
            Answers2.forEach(CorrectAns => {
                UserInput2.forEach((UserAns,Index) => {
                    if(CorrectAns.name === UserAns.name && CorrectAns.count === UserAns.count){
                        UserInput2.splice(Index,1)
                    }
                });
            });

            if(UserInput1.length !== 0 || UserInput2.length !== 0){
                IsEverythingOk = false
            }
        }

        //Checks third assignment as it consist if only one element 
        if(WhichAssignment === "3"){

            //First check if the element is not empty
            if(Elems1Array.length === 0){
                IsEverythingOk = false
            }

            Answers1 = [...Assignment3Answers1]
            UserInput1 = [...Elems1Array]

            Answers1.forEach(CorrectAns => {
                UserInput1.forEach((UserAns,Index) => {
                    if(CorrectAns.name === UserAns.name && CorrectAns.count === UserAns.count){
                        UserInput1.splice(Index,1)
                    }
                });
            });

            if(UserInput1.length !== 0){
                IsEverythingOk = false
            }
        }
        IsEverythingOk = true
        return IsEverythingOk
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
                <button onClick={()=>{ChangeAssignment("1");SetSolve("solving");AddItemToArray1([]);AddItemToArray2([]);}} className={styles.Button} id={styles.b1}>Uloha 1</button>
                <button onClick={()=>{ChangeAssignment("2");SetSolve("solving");AddItemToArray1([]);AddItemToArray2([]);}} className={styles.Button} id={styles.b2}>Uloha 2</button>
                <button onClick={()=>{ChangeAssignment("3"); ChangeCheck("1");SetSolve("solving");AddItemToArray1([]);AddItemToArray2([]);}} className={styles.Button} id={styles.b3}>Uloha 3</button>
            </div>

            <div className={styles.AssignmentContainer}>
                <div className={styles.HeadherText}>Zadanie :&nbsp;
                    {WhichAssignment === "1" ? <span className={styles.HeadherTextNew}>Poskladaj vstupy do vzorcu dychania</span>:null}
                    {WhichAssignment === "2" ? <span className={styles.HeadherTextNew}>Poskladaj vstupy do vzorcu fotosynteza</span>:null}
                    {WhichAssignment === "3" ? <span className={styles.HeadherTextNew}>Poskladaj vzorec ATP</span>:null}
                </div>
           
           
           
            </div>

            <div className={styles.MainContentDisplay}>
                <div className={styles.ChemElem1}>
                    <div className={styles.ChemElemContent} id={SolvedState !== "solving" ? styles.Chm1 : null}>

                        {Elems1Array.map((elem) => {
                            return(
                                <div key= {elem.name} className={styles.Atom} style={{margin: elem.margin}}>
                                <Atom key={elem.name} text = {elem.name} number={elem.count} style={{background:elem.color}}/>
                                </div>
                            )
                            
                        })}
                        
                        

                    </div>
                    <div className={styles.CheckContainer}>
                        <div className={styles.num} id={WhichIsChecked === "1" ? styles.numselected:null}>1</div>


                        <div className={styles.Check} >
                        {WhichAssignment === "1" ?
                        <div className={styles.ans1} id={SolvedState === "solved" ? styles.ans1 : null}>
                            <span className={styles.ans1el1}>
                                <Atom text = "H" number="12"  />
                            </span>
                            <span className={styles.ans1el2}> 
                                <Atom text = "O" number="6"/>
                            </span>
                            <span className={styles.ans1el3 }>+</span>
                            <span className={styles.ans1el4}>
                                <Atom text = "C" number = "6"/>
                            </span>
                            <span className={styles.ans1el5}>
                                <Atom text = "O" number = "12"/>
                            </span>
                            
                        </div>
                        :null}

                        {WhichAssignment === "2" ? 
                        <div>

                        </div>
                        :null}
                        
                        {WhichAssignment === "3" ? 
                        <svg id={SolvedState === "solved"? styles.Check1 : null} width="473" height="321" viewBox="0 0 473 321" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M427.73 0L472.042 52.2011L211.311 273.524L167 221.322L427.73 0Z" fill="#13A53B"/>
                            <path d="M214.094 271.463L155.751 320.388L0.654541 135.433L58.9982 86.5083L214.094 271.463Z" fill="#13A53B"/>
                        </svg>
                         : null}    
        
                        </div>
                        <div className={styles.Cross} id={SolvedState === "wrong" ? styles.Cross1:null}>
                            <svg width="304" height="304" viewBox="0 0 304 304" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.796079 52.8272L53.1835 0.562957L303.204 251.173L250.817 303.438L0.796079 52.8272Z" fill="#F83131"/>
                                <path d="M52.8961 303.398L0.458984 251.184L250.242 0.336182L302.679 52.5506L52.8961 303.398Z" fill="#F83131"/>
                            </svg>
                            

                        </div>
                    </div>
                    
                    
                </div>

                <div className={styles.ChemElem2}>
                    <div className={styles.num } id={WhichIsChecked === "2" ? styles.numselected:null}>2</div>
                    


                    <div className={styles.ChemElemContent} id={SolvedState !== "solving" ? styles.Chm2 : null}>
                        {Elems2Array.map((elem) => {
                                return(
                                    <div key= {elem.name} className={styles.Atom} style={{margin: elem.margin}}>
                                    <Atom key={elem.name} text = {elem.name} number={elem.count} style={{background:elem.color}}/>
                                </div>
                                )
                                
                            })}

                    </div>

                </div>
                
            </div>


        </div>

        <div className={styles.Input}>
        <div className={styles.AddElemContainer}>
            <AddElemDemoPage onClick1={()=>{AddNewElem("H","linear-gradient(325.19deg, #1C77FF 16.22%, #21A4C0 84.25%)",1)}} onClick2={()=>{AddNewElem("H","linear-gradient(325.19deg, #1C77FF 16.22%, #21A4C0 84.25%)",2)}} text="H" />
            <AddElemDemoPage onClick1={()=>{AddNewElem("C","linear-gradient(141.18deg, #FF2525 14.76%, #5B0808 84.94%)",1)}} onClick2={()=>{AddNewElem("C","linear-gradient(141.18deg, #FF2525 14.76%, #5B0808 84.94%)",2)}} text="C" />
            <AddElemDemoPage onClick1={()=>{AddNewElem("P","linear-gradient(323.82deg, #FFA825 17.01%, #FAFF1B 85.68%)",1)}} onClick2={()=>{AddNewElem("P","linear-gradient(323.82deg, #FFA825 17.01%, #FAFF1B 85.68%)",2)}} text="P" />
            <AddElemDemoPage onClick1={()=>{AddNewElem("N","linear-gradient(141.18deg, #2596FF 14.76%, #081F6F 84.94%)",1)}} onClick2={()=>{AddNewElem("N","linear-gradient(141.18deg, #2596FF 14.76%, #081F6F 84.94%)",2)}} text="N" />
            <AddElemDemoPage onClick1={()=>{AddNewElem("O","linear-gradient(141.18deg, #25FF55 14.76%, #10639E 84.94%)",1)}} onClick2={()=>{AddNewElem("O","linear-gradient(141.18deg, #25FF55 14.76%, #10639E 84.94%)",2)}} text="O" />

        </div>

        <div className={styles.Buttons}>
        <div className={styles.FirstOrSecondEl}>
            <button onClick={()=>{ChangeCheck("1")}} className={styles.bt1} id={ WhichIsChecked === "1" ? styles.bt1_checked : styles.bt1_unchecked} >
                1
            </button>
            <button onClick={()=>{ChangeCheck("2")}} className={styles.bt2} disabled={WhichAssignment === "3" ? true :false} id={ WhichIsChecked === "2" ? styles.bt2_checked : styles.bt2_unchecked} >
                2
            </button>
        </div>

        <div className={styles.FinalButtonsContainer} >
            <button className={styles.btagain} onClick={()=>{AddItemToArray1([]);AddItemToArray2([]);SetSolve("solving")}}> Znova </button>
            <button className={styles.btcheck} onClick={()=>{SetSolve(CheckIfTheInputIsRight() ? "solved":"wrong");}}> Vyhodnot </button>
        </div>
        </div>
        </div>
        

    </div>
  );
}
