import React,{useContext} from 'react'
import { ExpenseContext } from '../contexts/ExpenseContext'

export const Transaction = ({expense}) => {
    const {deleteExpense}=useContext(ExpenseContext)
    const sign = expense.amount > 0 ? '+' : '-'
    return (
       <li className={expense.amount > 0 ? 'plus':'minus'}>
           {expense.text}<span>{sign}$ {Math.abs(expense.amount)}</span><button onClick={()=>deleteExpense(expense.id)} className="delete-btn">x</button>
       </li>
    )
}
