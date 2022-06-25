// component in react js is just a javascript function

import './ExpenseItem.css';

function ExpenseItem() {

    const expenseDate = new Date(2022, 2, 28);
    const expenseTitle = 'Car Insurance';
    const expenseAmmount = 10000;
    const locationOfExpenditure = 'Banglore';

    // should return only one root element
    return (
    <div className='expense-item'>
        <div>{expenseDate.toISOString()}</div>
        <div>{locationOfExpenditure}</div>
        <div className='expense-item__description'>
            <h2>{expenseTitle}</h2>
            <div className='expense-item__price'>{expenseAmmount} Rs</div>
        </div>
    </div>
    )
}

export default ExpenseItem;