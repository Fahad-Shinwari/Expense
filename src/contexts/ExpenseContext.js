import React,{createContext,useState} from 'react'
import { v4 as uuid } from 'uuid';

export const ExpenseContext = createContext()
export const ExpenseContextProvider = (props) => {
    const [expenses,setExpense] = useState([])
   const addExpense = (text,amount) =>{
        setExpense([...expenses,{id:uuid(),text,amount}])
        console.log(expenses);
        
    }
   const deleteExpense = id =>{
        setExpense(expenses.filter(expense => expense.id !== id))
    }
    return (
        <ExpenseContext.Provider value={{expenses,addExpense,deleteExpense}}>
             {props.children}
        </ExpenseContext.Provider>
    )
}
