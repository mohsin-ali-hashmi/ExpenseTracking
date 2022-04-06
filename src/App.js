
import React from 'react';
import Header from './components/Header'
import Balance from './components/Balance'
import IncExp from './components/IncomeExpenses'
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import './App.css';
import {GloabalProvidor} from './context/GlobalState'

function App() {

  return ( 
    
    <GloabalProvidor>
      <Header/>
      <div className='container'>
        <Balance />
        <IncExp />
        <TransactionList />
        <AddTransaction />
      </div>
      
    </GloabalProvidor>

  );
}
export default App;
