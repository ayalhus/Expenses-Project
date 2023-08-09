import Expenses from "./components/Expenses/Expenses";
import  ExpensesItem  from "./components/Expenses/ExpensesItem";
import {expenses} from "./data";
import NewExpense from "./components/NewExpense/NewExpense";


function App() {

  
  return (
    <div>
      <NewExpense />
      <Expenses expenses = {expenses} />
      
      
    </div>
    
  );
}

export default App;
