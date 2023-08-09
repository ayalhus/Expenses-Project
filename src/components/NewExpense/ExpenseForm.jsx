import React from "react";
import './ExpenseForm.css';
import { useState } from "react";

const ExpenseForm = () => {
    //const [titleEntered, setTitleEntered] = useState('');
    //const [amountEntered,setAmountEntered] = useState9('');
    //const [dateEntered, setDateEntered] = useState('');


    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        entredAmount:'',
        entredDate: ''
    })

const changeHandler = (identifier, value) => {
if(identifier === 'title') {
setUserInput((prevState) => { return {...prevState, enteredTitle: value}})
} else if(identifier ==='amount'){
setUserInput((prevState) => {return {...prevState, entredAmount: value}})
} else {
setUserInput((prevState) => {return{...prevState, entredDate: value}})
}
}


//const ChangeTitleHandler = (event) => {
    //setTitleEntred(event.target.value);
    //setUserInput((prevState) =>( { 
        
      //  ...prevState,
       //  enteredTitle: event.target.value
    //}
   // )
   
//)}
//const ChangeAmountHandler = (event) => {
 //setAmountEntered(event.target.value)

//}
//const ChangeDateHandler = (event) => {
   // setDateEntered(event.target.value)
  
//}
    
    
    return <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input onChange={(event) => {changeHandler('title', event.target.value)}} type="text"/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input onChange={(event) => {changeHandler('amount', event.target.value)}}  type="number" min='0.01' step='0.01'/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input onChange={(event) => {changeHandler('date', event.target.value)}}  type="date" min='2020-01-01' max='2023-12-12'/>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </div>
    </form>
}

export default ExpenseForm;