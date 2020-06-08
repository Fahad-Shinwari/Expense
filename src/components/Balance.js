import React,{useContext} from 'react'
import { ExpenseContext } from '../contexts/ExpenseContext'

export const Balance = () => {
    const {expenses}=useContext(ExpenseContext)
    const amount = expenses.map(expense=>expense.amount)
    const total=amount.reduce((acc,item)=>acc += item , 0).toFixed(2)
    return (
        <>
        <h4>Your Balance</h4>
    <h1>${total}</h1>
    </>
    )
}
