import React from 'react'
import { useState } from 'react';



const BirthdayForm =() => {
     //  Counter is a state initialized to 0
     const [counter, setCounter] = useState(0);
 
     // Function is called everytime increment button is clicked
     const handleClick1 = () => {
         // Counter state is incremented
         setCounter(counter + 1);
     };
  // creating a form function
    const [formData, setFormData] = useState({ // creating a variable for the form data, and setformdata to update the form data [currentstate, updatedstate (setState)]
        name: '', // property names with empty values included in form username email, password
        age: '',
        dish: '',
        greeting: ''
    });
    const [submittedData, setSubmittedData] = useState(null); //variable for when user submits the form, updatedData --- the default state = null
    const handleInputChange = (e) => {//create variable for input change for event
        const {name, value} = e.target;//target name property of our inputs, creating a variable for placeholder targeting form data,
        setFormData({...formData, [name]: value});// spreading it thru the object, update whatever the value is for the name value
    };
    const handleSubmit = (event) => {//create variable
        event.preventDefault();//when an event happens prevent default behavior of reloading page
        setSubmittedData (formData); //update submitted data to the form data
        setFormData({// updates  form data to whatever was submitted in the form
            name: '',
            age: '',
            dish: '',
            greeting:''
        });
    };
    return( //this function returns what will print on the page; onsubmit to create submit form
    <div>
    <h1>IT'S A PARTY,IT'S A PARTY,IT'S A PARTY: </h1>
    <form onSubmit={handleSubmit}>
        <input
            type ="text"
            placeholder= "Name"
            name= "name"
            value={formData.name}
            onChange ={handleInputChange}
            />
            <br/>
            <input
                type= "text"
                placeholder= "Age"
                name= "age"
                value= {formData.age}
                onChange={handleInputChange}
                />
                <br/>
                <input
                    type= "text"
                    placeholder= "Potluck"
                    name= "dish"
                    value= {formData.dish}
                    onChange={handleInputChange}
                    />
                    <br/>
                    <input
                    type= "text"
                    placeholder= "Greeting"
                    name= "greeting"
                    value= {formData.greeting}
                    onChange={handleInputChange}
                    />
                    <br/>
                    <button type="submit" onClick={handleClick1}>Submit</button>
                    
    </form>
        {submittedData && ( //im displaying submitted Data in this format
            <div>
            <p><strong>Name: </strong>{submittedData.name}</p>
            <p><strong>Age: </strong>{submittedData.age}</p>
            <p><strong>Potluck: </strong>{submittedData.dish}</p>
            <p><strong>Greeting: </strong>{submittedData.greeting}</p>
            <p><strong>ATTENDEES: </strong> {counter}</p>
            </div>
        )}
    </div>
    
    )
};
export default BirthdayForm