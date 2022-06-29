import "./ExpenseButtons.css";

const ExpenseButtons = (props) => {
  const changeTitleClickHandler = () => {
    props.onTitleChange();
  };

  const deleteClickHandler = () => {
    console.log("Delete Expense clicked");
  };

  const changeExpenseClickHandler = () => {
    props.onAmountChange();
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
