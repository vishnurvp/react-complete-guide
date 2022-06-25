import './ExpenseDetails.css';

const ExpenseDetails = (props) => {
    return (
        <div className='expense-item__description'>
            <div className='expense-location'>{props.location}</div>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>{props.amount} Rs</div>
        </div>
    )
}

export default ExpenseDetails;