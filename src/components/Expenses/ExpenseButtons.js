import "./ExpenseButtons.css";

const ExpenseButtons = (props) => {
  const changeTitleClickHandler = () => {
    console.log("change Title clicked");
  };

  const deleteClickHandler = () => {
    console.log("Delete Expense clicked");
  };

  const changeExpenseClickHandler = () => {
    console.log("Change Expense clicked");
  };

  return (
    <div>
      <button className="expense-buttons" onClick={changeTitleClickHandler}>Change Title</button>
      <button className="expense-buttons" onClick={deleteClickHandler}>Delete Expense</button>
      <button className="expense-buttons" onClick={changeExpenseClickHandler}>
        Change Expense to 1000 Rs
      </button>
    </div>
  );
};

export default ExpenseButtons;
