import React,{useContext,useState} from 'react'
import { ExpenseContext } from '../contexts/ExpenseContext'
//import { v4 as uuid } from 'uuid';


export const AddTransaction = () => {
    const {addExpense}=useContext(ExpenseContext)
    const [text,setText] = useState('')
    const [amount,setAmount] = useState(0)
   
    const handleSubmit = e =>{
        e.preventDefault()
        addExpense(text,+amount)
        //console.log(amount);
        setText('')
        setAmount(0)

    
    }

    return (
        <form  onSubmit={handleSubmit}>
            <div className="form-control">
             <label>Text</label>
            <input type="text" value={text} placeholder="type something" onChange={(e)=>setText(e.target.value)} />
            </div>
            <div className="form-control">
             <label>Amount</label>
            <input type="number" value={amount} placeholder="Enter amount..." onChange={(e)=>setAmount(e.target.value)} />
            </div>
            <button className="btn">Add transaction</button>
        </form>
    )
}
