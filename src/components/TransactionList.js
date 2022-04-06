import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import Transation from './Transation';

const TransactionList = () => {

  const {transactions}= useContext(GlobalContext);
  
 
  return (
    <>
        <h3>History</h3>
        <ul className="list">
          {
            transactions.map((transaction)=>(
              <Transation key={transaction.id} transaction={transaction}/>
            ))
          }
            
        </ul>
    </>
  )
}

export default TransactionList