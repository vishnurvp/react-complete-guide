// component in react js is just a javascript function
import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import ExpenseButtons from "./ExpenseButtons";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // should return only one root element
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount)

  const titleChangeHandler = () => {
    setTitle("TitleChanged");
  };

  const amountChangeHandler = () => {
    setAmount(1000);
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <ExpenseDetails
          location={props.location}
          title={title}
          amount={amount}
        />
        <ExpenseButtons
          onTitleChange={titleChangeHandler}
          onAmountChange={amountChangeHandler}
        />
      </Card>
    </li>
  );
};

export default ExpenseItem;
