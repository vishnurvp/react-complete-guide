// component in react js is just a javascript function
// import React, {useState} from 'react';


import Card from '../UI/Card';
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // should return only one root element

  // const [title, setTitle] = useState(props.title); // [varable, updatefunc]
  // const [amount, setAmount] = useState(props.amount);
  
  const changeTitleClickHandler = () => {
    console.log('change Title clicked');
  }

  const deleteClickHandler = () => {
    console.log('Delete Expense clicked');
  }

  const changeExpenseClickHandler = () => {
    console.log('Change Expense clicked');
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <ExpenseDetails
        location={props.location}
        title={props.title}
        amount={props.amount}
      />
      <button onClick={changeTitleClickHandler}>Change Title</button>
      <button onClick={deleteClickHandler}>Delete Expense</button>
      <button onClick={changeExpenseClickHandler}>Change Expense to 1000 Rs</button>
    </Card>
  );
}

export default ExpenseItem;
