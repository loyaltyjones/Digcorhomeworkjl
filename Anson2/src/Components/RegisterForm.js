//STATE @ 2:54 and useState @
import React from 'react'
//IMPORT "useState" FOR USE FROM REACT
import { useState } from 'react'

export function RegisterForm() {
    //CREATE VARIABLE AND SET IT EQUAL TO "useState()" SO THAT YOU CAN USE "useState function aka HOOK" TO UPDATE VARIABLE AS DISIRED
    //useState  IS SET TO AN EMPTY STRING BECAUSE WE ARE USIN TEXT IN THE FORM INPUT FIELDS
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');

    //CREATE VARIABLE TO SET CONDITIONS TO BE MET BY SIGN UP BUTTON SEE: SIGN UP BUTTON BELOW
    //BELOW LINE SAYS TO DISABLE BUTTON IF username OR password OR displayName DOES NOT HAVE A VALUE
    const isDisabled = !username || !password || !displayName;

  return (
    <form>
    {/* The "htmlFor" property sets or returns the value of the for attribute of a label.The for attribute specifies which form element a label is bound to. */}
    {/* onchange handler has a callback function passed into it "(e or event)" which takes one argument the event object*/}
    {/* event object "(e or event)" has the target object which targets what you type or paste into the input field.(passes) Then the Dispatch or Update function from useState uses that the target value to update the variable associated with said Update function*/}
    <div>
        <label htmlFor='username'>Username</label>
        <input
            id='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
    </div>

    <div>
        <label htmlFor='password'>Password</label>
        <input
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
    </div>

    <div>
        <label htmlFor='displayName'>Display Name</label>
        <input
            id='displayName'
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
        />
    </div>

    {/* Rendering change from above code. */}
    <div>
        <span>Username: {username}</span>
    </div>

    <div>
        <span>Password: {password}</span>
    </div>

    <div>
        <span>Display Name: {displayName}</span>
    </div>
    {/* Button with disabled attribute set to variable conditiona*/}
    <button disabled={isDisabled}>Sign Up</button>

    </form>

 
  )
}

