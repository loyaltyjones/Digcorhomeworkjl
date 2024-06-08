function getEmail() {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    
    console.log("Email: ", email.value);
    console.log("Password: ", password.value);
    for(let j = 0; j < login.length; j++){
      if(email.value === login[j].email &&
         password.value === login[j].password){
         console.log("Logged in");
         break
        }else{console.log("Login Failed");
        
      }
      }
  }

  // function checkemail(){
  //   for(let i = 0; i < login.length; i++)
  // }
let login =[
    {
        "name": "John Doe",
        "email": "john.doe@example.com",
        "password": "password1",
        "address": "123 Main St",
        "zip_code": "12345",
        "phone_number": "123-456-7890"
    },
    {
        "name": "Jane Smith",
        "email": "jane.smith@example.com",
        "password": "password2",
        "address": "456 Elm St",
        "zip_code": "23456",
        "phone_number": "234-567-8901"
    },
    {
        "name": "Michael Johnson",
        "email": "michael.johnson@example.com",
        "password": "password3",
        "address": "789 Oak St",
        "zip_code": "34567",
        "phone_number": "345-678-9012"
    },
//     // Continue adding other users here...
 ]

// let idPasswordsarr =[];
// let userPassId ={}


//     // for (let i = 0; i < login.length; i++){
//     //   let userPassId = {
//     //     newname: login[i].name,
//     //     newemail: login[i].email,
//     //     newpassord: login[i].password,
//     //   };
//     //   idPasswordsarr.push(userPassId);
// }
// console.log(idPasswordsarr)

// function checkidpass(){
//   for(let j = 0; j < login.length; j++);{
//     console.log(login.length[j])
//     if(userPassId.newname === login[j].name &&
//        userPassId.newemail === login[j].email &&
//       userPassId.newpassord === login[j.password]){
//         console.log("Logged in");
//       }else{console.log("Login Failed");


//     }
//     }
//   }

// checkidpass()

// // function need to return input information

