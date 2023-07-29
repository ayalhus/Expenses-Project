import ExpensesItem from "./ExpensesItem";
import Card from "./Card";
import '../components/Expenses.css';


function Expenses(props) {
    console.log(props);
    return (

      <Card className='expenses'>{props.expenses.map(val=><ExpensesItem key={val.id} title={val.title} amount={val.amount} date={val.date}></ExpensesItem>)}</Card>  
    )
}

export default Expenses;