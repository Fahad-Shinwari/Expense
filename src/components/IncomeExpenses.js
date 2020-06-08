import React,{useContext} from 'react'
import { ExpenseContext } from '../contexts/ExpenseContext'

export const IncomeExpenses = () => {
    const {expenses}=useContext(ExpenseContext)
    const amount = expenses.map(expense => expense.amount)

    const income = amount.filter(item=>item>0).reduce((acc,item)=>acc += item,0).toFixed(2)
    const kharch = amount.filter(item =>item<0).reduce((acc,item)=>acc += item,0).toFixed(2)
    return (
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
  <p className="money plus">{income}</p>
        </div>
        <div>
          <h4>Expense</h4>
  <p className="money minus">{kharch}</p>
        </div>
      </div>
    )
}
