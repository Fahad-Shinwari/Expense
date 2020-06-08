import React,{useContext} from 'react'
import { ExpenseContext } from '../contexts/ExpenseContext'
import {Transaction} from './Transaction'
export const TransactionList = () => {
    const {expenses}=useContext(ExpenseContext)
    return (
        <div>
            <h3>History</h3>
            <ul className="list">
            {expenses.map(expense => {
                return(<Transaction key={expense.id} expense={expense} />)
            })}
            </ul>
        </div>
    )
}
