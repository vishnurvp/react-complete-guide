import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 300,
      date: new Date(2020, 7, 14),
      location: "Banglore",
    },
    { 
      id: "e2",
      title: "New TV", 
      amount: 5000, 
      date: new Date(2021, 2, 12), 
      location: "Tumkur", },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 4000,
      date: new Date(2022, 2, 28),
      location: "Manglore",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 3000,
      date: new Date(2022, 5, 12),
      location: "E city",
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      {expenses.map((expense)=>{
        return (<ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        location = {expense.location}
      />)
      })}
    </div>
  );
}

export default App;
