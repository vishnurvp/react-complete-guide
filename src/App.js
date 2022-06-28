
import React, { useState } from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

const DummyExpenses = [
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

const App = () => {
  const [expenses, setExpenses] = useState(DummyExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses)=>{
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
