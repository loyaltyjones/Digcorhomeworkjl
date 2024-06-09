import React from 'react'
import TransactionForm from "../Components/TransactionForm";
import TransactionList from "../Components/TransactionList";

function BankAccountPage() {
    const callMe =() =>{
        console.log("hello")

    }
  return (
    <div>BankAccountPage<br/>
        <TransactionForm username="bob" trimmedUserName="harry" callMe={callMe}/>
        <TransactionList/>
    
    </div>
  )
}

export default BankAccountPage