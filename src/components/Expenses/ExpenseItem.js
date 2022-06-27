// component in react js is just a javascript function
import React, {useState} from 'react';

import Card from '../UI/Card';
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // should return only one root element

  const [title, setTitle] = useState(props.title); // [varable, updatefunc]
  const [amount, setAmount] = useState(props.amount);
  
  const changeTitleClickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  }

  const deleteClickHandler = () => {
    console.log('Delete Expense clicked');
  }

  const changeExpenseClickHandler = () => {
    setAmount(1000);
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        location={props.location}
        title={title}
        amount={amount}
      />
      <button onClick={changeTitleClickHandler}>Change Title</button>
      <button onClick={deleteClickHandler}>Delete Expense</button>
      <button onClick={changeExpenseClickHandler}>Change Expense to 1000 Rs</button>
    </Card>
  );
}

export default ExpenseItem;
