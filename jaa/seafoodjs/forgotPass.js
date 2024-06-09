//Get the  Form element by it's ID
document.getElementById('forgotPass').addEventListener('submit',function getInfo(event){
    //Prenvent the default form submission
    event.preventDefault();

    //Get values from the form fields
    const email = document.getElementById('email').value;
  
    console.log('email: ', email);
   
})
