import Expenses from "./components/Expenses";
import  ExpensesItem  from "./components/ExpensesItem";
import {expenses} from "./data";


function App() {

  
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses = {expenses} />
      
      
    </div>
    
  );
}

export default App;
