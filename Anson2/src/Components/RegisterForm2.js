//useState HOOK@3:19 CREATING SIMILIAR FORM AS REGISTER FORM BUT INSTEAD OF HAVING THREE DIFFERENT STATE VARIABLES TO UPDATE YOU UPDATE AN OBJECT INSTEAD AND THE SPECIFIC FIELD THAT NEEDS TO BE UPDATED
import React from 'react'
import { useState } from 'react';

export function RegisterForm2() {
    //CREATE VARIABLE AND SET IT EQUAL TO AN "useState() object with fields/properties username;password;and displayname" SO THAT YOU CAN USE "useState function aka HOOK" TO UPDATE VARIABLE(formFields) AS DESIRED.
    //useState  IS SET TO AN EMPTY STRING BECAUSE WE ARE USING TEXT IN THE FORM INPUT FIELDS
  const [formFields, setFormFields] = useState({
    username: "",
    password: "",
    displayName: "",
  });
  console.log(formFields)

    //CREATE VARIABLE TO SET CONDITIONS TO BE MET BY SIGN UP BUTTON SEE: SIGN UP BUTTON BELOW
    //BELOW LINE SAYS TO DISABLE BUTTON IF username OR password OR displayName DOES NOT HAVE A VALUE
    const isDisabled = !formFields.username || !formFields.password || !formFields.displayName;

  return (
    <form>
    {/* The "htmlFor" property sets or returns the value of the for attribute of a label.The for attribute specifies which form element a label is bound to. */}
    {/* onchange handler has a callback function passed into it "(e or event)" which takes one argument the event object*/}
    {/* event object "(e or event)" has the target object which targets what you type or paste into the input field.(passes) Then the Dispatch or Update function from useState uses that the target value to update the variable associated with said Update function*/}
    <div>
        <label htmlFor='username'>Username</label>
        <input
            id='username'
            value={formFields.username}
            onChange={(e) => {
                // Must use a spread operator@3:26 because setFormFields is an object with mutiple fields/properties{username:,password:,displayName:}
                setFormFields((currentState) => ({...currentState, username:e.target.value,}))
   
            }}
        />
    </div>

    <div>
        <label htmlFor='password'>Password</label>
        <input
            id='password'
            value={formFields.password}
            onChange={(e) => {setFormFields((currentState) => ({...currentState, password: e.target.value,}))}}
        />
    </div>

    <div>
        <label htmlFor='displayName'>Display Name</label>
        <input
            id='displayName'
            value={formFields.displayName}
            onChange={(e) =>{setFormFields((currentState) => ({...currentState, displayName: e.target.value,}))}}
        />
    </div>

    {/* Rendering change from above code. */}
    <div>
        <span>Username: {formFields.username}</span>
    </div>

    <div>
        <span>Password: {formFields.password}</span>
    </div>

    <div>
        <span>Display Name: {formFields.displayName}</span>
    </div>
    {/* Button with disabled attribute set to variable conditiona*/}
    <button disabled={isDisabled}>Sign Up</button>

    </form>

  )
}





 

