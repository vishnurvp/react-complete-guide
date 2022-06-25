// component in react js is just a javascript function

import './ExpenseItem.css';

function ExpenseItem(props) {
    const month = props.date.toLocaleString('en-IN', {month: 'long'});
    const day = props.date.toLocaleString('en-IN', {day: '2-digit'});
    const year = props.date.getFullYear();
    // should return only one root element
    return (
    <div className='expense-item'>
        <div>
            <div>{month} </div>
            <div>{year} </div>
            <div>{day} </div>
        </div>
        <div>{props.location}</div>
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>{props.amount} Rs</div>
        </div>
    </div>
    )
}

export default ExpenseItem;