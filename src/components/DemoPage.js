import styles from "./DemoPage.module.css";
//import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Atom from "./Atom";
import AddElemDemoPage from "./AddElemDemoPage";
import BackButton from "./BackButton";

import {FiCheckCircle} from "react-icons/fi"
import {ImCross} from "react-icons/im"


export default function DemoPage() {
    //const redirect = useNavigate();
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


    function AddNewElem(ElemName,AddingOneOrTwo){
        
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
            
            const NewElem = {name:ElemName, count:AddingOneOrTwo.toString() ,margin:randomMargin + "em"   }
            
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
        
        return IsEverythingOk
    }

  return (
    <div className={styles.MainContainer}>
      <BackButton/>

        <div className={styles.MainContentContainer}>
        
            <div className={styles.ButtonsContainer}>
                <button onClick={()=>{ChangeAssignment("1");SetSolve("solving");AddItemToArray1([]);AddItemToArray2([]);}} className={styles.Button} id={styles.AssignmentButton1}></button>
                <button onClick={()=>{ChangeAssignment("2");SetSolve("solving");AddItemToArray1([]);AddItemToArray2([]);}} className={styles.Button} id={styles.AssignmentButton2}></button>
                <button onClick={()=>{ChangeAssignment("3"); ChangeCheck("1");SetSolve("solving");AddItemToArray1([]);AddItemToArray2([]);}} className={styles.Button} id={styles.AssignmentButton3}></button>
            </div>

            <div className={styles.AssignmentTextContainer}>
                <div className={styles.AssignmentText}>Zadanie :&nbsp;
                    {WhichAssignment === "1" ? <span className={styles.AssignmentTextNew}>Poskladaj vstupy do vzorcu dýchania</span>:null}
                    {WhichAssignment === "2" ? <span className={styles.AssignmentTextNew}>Poskladaj vstupy do vzorcu fotosyntéza</span>:null}
                    {WhichAssignment === "3" ? <span className={styles.AssignmentTextNew}>Poskladaj vzorec ATP</span>:null}
                </div>
           
           
            </div>

            <div className={styles.MainContentDisplay}>

                

                <div className={styles.ChemElemContainer1}>
                    <div className={styles.ChemElemContent} id={SolvedState !== "solving" ? styles.ChemElemContainer1_evaluated : null}>

                        {Elems1Array.map((elem) => {
                            return(
                                <div key= {elem.name} className={styles.UserAddedAtom} style={{"margin-top": elem.margin}}>
                                <div className={styles.AtomContainer}>
                                    <Atom className={styles.Atom} key={elem.name} text = {elem.name} number={elem.count} style={{background:elem.color}}/>
                                </div>
                                </div>
                            )
                            
                        })}
                    </div>

                    <div className={styles.CheckContainer}>
                        <div className={styles.NumberOfContainer} id={WhichIsChecked === "1" ? styles.NumberOfContainerSelected:null}>1</div>

                    </div>
                    
                    
                </div>

                <div className={styles.ChemElemContainer2}>

                        <div className={styles.NumberOfContainer } id={WhichIsChecked === "2" ? styles.NumberOfContainerSelected:null}>2</div>

                    <div className={styles.ChemElemContent} id={SolvedState !== "solving" ? styles.ChemElemContainer2_evaluated : null}>
                        {Elems2Array.map((elem) => {
                                return(
                                    <div key= {elem.name} className={styles.UserAddedAtom} style={{"margin-top": elem.margin}}>
                                    <div className={styles.AtomContainer}>
                                        <Atom key={elem.name} className={styles.Atom} text = {elem.name} number={elem.count} style={{background:elem.color}}/>
                                    </div>
                                </div>
                                )
                                
                            })}

                    </div>

                </div>

                <div className={styles.CorrectAnswerContainer} id={SolvedState !== "solving"  ? styles.CorrectAnswerContainer_visible : null } >
                        
                        { SolvedState === "solved" ? <FiCheckCircle className={styles.CheckSvg} /> : null }

                        { SolvedState === "wrong" ? <ImCross className={styles.CrossSvg} /> : null}

                </div>

            </div>


        </div>

        <div className={styles.MainInputContainer}>
        <div className={styles.AddElemContainer}>
            <AddElemDemoPage onClick1={()=>{AddNewElem("H",1)}} onClick2={()=>{AddNewElem("H",2)}} text="H" />
            <AddElemDemoPage onClick1={()=>{AddNewElem("C",1)}} onClick2={()=>{AddNewElem("C",2)}} text="C" />
            <AddElemDemoPage onClick1={()=>{AddNewElem("P",1)}} onClick2={()=>{AddNewElem("P",2)}} text="P" />
            <AddElemDemoPage onClick1={()=>{AddNewElem("N",1)}} onClick2={()=>{AddNewElem("N",2)}} text="N" />
            <AddElemDemoPage onClick1={()=>{AddNewElem("O",1)}} onClick2={()=>{AddNewElem("O",2)}} text="O" />

        </div>

        <div className={styles.OtherButtonsContainer}>
        <div className={styles.SelectContainerButtonContainer}>
            <button onClick={()=>{ChangeCheck("1")}} className={styles.SelectContainerButton1} id={ WhichIsChecked === "1" ? styles.SelectContainerButton1_checked : styles.SelectContainerButton1_unchecked} >
                1
            </button>
            <button onClick={()=>{ChangeCheck("2")}} className={styles.SelectContainerButton2} disabled={WhichAssignment === "3" ? true :false} id={ WhichIsChecked === "2" ? styles.SelectContainerButton2_checked : styles.SelectContainerButton2_unchecked} >
                2
            </button>
        </div>

        <div className={styles.FinalButtonsContainer} >
            <button className={styles.ButtonAgain} onClick={()=>{AddItemToArray1([]);AddItemToArray2([]);SetSolve("solving")}}> Znova </button>
            <button className={styles.ButtonEvaluate} onClick={()=>{SetSolve(CheckIfTheInputIsRight() ? "solved":"wrong")}}> Vyhodnoť </button>
        </div>
        </div>
        </div>
    </div>
  );
}