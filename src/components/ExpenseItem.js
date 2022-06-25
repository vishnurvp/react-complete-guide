// component in react js is just a javascript function

import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  // should return only one root element
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        location={props.location}
        title={props.title}
        amount={props.amount}
      />
    </div>
  );
}

export default ExpenseItem;
