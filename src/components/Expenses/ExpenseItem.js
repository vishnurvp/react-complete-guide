// component in react js is just a javascript function

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import ExpenseButtons from "./ExpenseButtons";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // should return only one root element

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <ExpenseDetails
          location={props.location}
          title={props.title}
          amount={props.amount}
        />
        <ExpenseButtons />
      </Card>
    </li>
  );
};

export default ExpenseItem;
