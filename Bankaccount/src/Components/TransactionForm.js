import React from 'react'

function TransactionForm(props) {
  console.log(props)
  //props.callMe()
  return (
    <h1>TransactionForm<br/>
    sdfkljgdkfjd<br/>
    <b>Username: </b>
    <span>{props.username
    }</span>
    
    
    
    </h1>
  )
}

export default TransactionForm