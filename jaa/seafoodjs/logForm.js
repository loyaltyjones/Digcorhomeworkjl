//Get the  Form element by it's ID
document.getElementById('logForm').addEventListener('submit',function getInfo(event){
    //Prenvent the default form submission
    event.preventDefault();

    //Get values from the form fields
    const username = document.getElementById('uname').value;
    const password = document.getElementById('psw').value;
    
    console.log('username: ', username);
    console.log('password:', password);
})