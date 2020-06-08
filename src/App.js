import React from 'react';
import { ExpenseContextProvider } from './contexts/ExpenseContext';
import { TransactionList } from './components/TransactionList';
import { IncomeExpenses } from './components/IncomeExpenses';
import { Balance } from './components/Balance';
import { AddTransaction } from './components/AddTransaction';


function App() {
  return (
    <div className="App">
      <ExpenseContextProvider>
        <Balance />
        <IncomeExpenses />
       <TransactionList />
       <AddTransaction />
      </ExpenseContextProvider>
      
      
    </div>
  );
}

export default App;
