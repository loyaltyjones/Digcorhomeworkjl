import React from 'react'

export function LoginForm() {
  return (
    <form onSubmit={(event)=>{
        event.preventDefault();//prevents the browsers default behavior of refreshing the page
        //BELOW IS AN EXAMPLE IF YOU WERE GOING TO SEND INFORMATION TO AN SERVER
        const formData = new FormData(event.target);
        const username = formData.get('username')
        const password = formData.get('password')
        fetch("http://localhost:3000/api/login",{
            body:{
                username,
                password,
            },
            method: 'POST',
        });
    }}
    >

    <label htmlFor='username'>Username</label>
    <br/>
    <input 
    id="username" 
    onChange={(event)=>{
        console.log(event.target.value);//target the actual HTML element(this input)
    }}
    name='username'/>

    <br/>
    <label htmlFor='password'>Password</label>
    <br/>
    <input id='password'  type='password' 
    onChange={(event)=>{
        console.log(event.target.value);
    }} 
    name='password'/>

    <br/>
    <button>Login</button>
    </form>
  
  );
};

