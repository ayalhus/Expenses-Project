import './ExpensesItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';

//const expenseDate = new Date(2023, 7, 17);
//const expenseDescription = 'Car Insurance';
//const expenseAmount = 264.87;

function ExpensesItem(props) {
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    //const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    //const year = props.date.getFullYear();
    return (
        <Card onClick={ () => alert(month)}  className='expense-item'>
       <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
            <div className= 'expense-item__price'>${props.amount}</div>
            </div>
        </Card>
  
    )
}

export default ExpensesItem;