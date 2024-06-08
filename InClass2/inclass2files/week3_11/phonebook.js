// let onebook =[]
//FIRSTNAME & LASTNAME .name
//corcoding@Jeremys-iPhone week3_11 % node phonebook.js
//{ title: 'Mrs', first: 'Lila', last: 'Sanchez' }

// ADDRESS .location
// corcoding@Jeremys-iPhone week3_11 % node phonebook.js
// {
//   street: { number: 3742, name: 'Colbjørnsens gate' },
//   city: 'Mebonden',
//   state: 'Troms - Romsa',
//   country: 'Norway',
//   postcode: '3361',
//   coordinates: { latitude: '40.2553', longitude: '121.8751' },
//   timezone: {
//     offset: '-5:00',
//     description: 'Eastern Time (US & Canada), Bogota, Lima'
//   }
// }
//PICTURE .picture
// corcoding@Jeremys-iPhone week3_11 % node phonebook.js
// { name: 'UIDAI', value: '221312274793' }

// PHONE .phone
// corcoding@Jeremys-iPhone week3_11 % node phonebook.js
// (086)-784-5023
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// fetch("https://randomuser.me/api/?results=20")
// .then((response) => response.json())
//  .then((data) => {
// let userdata = [];
// userdata.push(data)
// console.log({userdata})
// let phonebook = [];
// for(let i = 0; i < userdata[0].results[i].length; i++){
//     let newresults ={
//         firstName: userdata[0].results[i].name.first,
//         lastName: userdata[0].results[i].name.last,
//         phoneNumber: userdata[0].results[i].phone,
//         streetaddress: userdata[0].results[i].location,
//         photo: userdata[0].results[i].picture.large,
//     };
//     phonebook.push(newresults); 


//  }
// //  console.log({phonebook});
//  })
//  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  user1.innerText = `${"First Name: " + userData[0].firstName} \n ${"Last Name: " + userData[0].lastName} \n ${"Phone Number : " + userData[0].phoneNumber} ${"Street Address: " + userData[0].streetAddress} ${"Photo ID: " + userData[0].photo} `;
//  //})
// }
// console.log(newresults)
// fetch("https://randomuser.me/api/?results=20")
//     .then((response) => response.json())
//     .then((data) => {
//             let userInfo = [];
//             userInfo.push(data)
//             let userData = [];
//         for(let i = 0; i < userInfo[0].results.length; i++) {
//             let users = {
//                 firstName: userInfo[0].results[i].name.first,
//                 lastName: userInfo[0].results[i].name.last,
//                 phoneNumber: userInfo[0].results[i].phone,
//                 streetAddress: userInfo[0].results[i].location.street.number + " " + userInfo[0].results[i].location.street.name,
//                 photo: userInfo[0].results[i].picture.medium,
//             };
//             userData.push(users);
//         }
        // console.log(userData);
        // console.log(data.results[0].picture.large,data.results[0].name.first,data.results[0].name.last,data.results[0].location.street,data.results[0].location.city,data.results[0].location.state,data.results[0].location.country,data.results[0].location.postcode,data.results[1].picture.large,data.results[1].name.first,data.results[1].name.last,data.results[1].location.street,data.results[1].location.city,data.results[1].location.state,data.results[1].location.country,data.results[1].location.postcode)); 
        // -------------------------------------------------------------------------       
// function newPeople(){
// }
// console.log(data.results[0].id,data.results[0].name.first,data.results[0].name.last,data.results[0].location.street,data.results[0].location.city,data.results[0].location.state,data.results[0].location.country,data.results[0].location.postcode,data.results[1].id,data.results[1].name.first,data.results[1].name.last,data.results[1].location.street,data.results[1].location.city,data.results[1].location.state,data.results[1].location.country,data.results[1].location.postcode))



// .then((data) => console.log(data.results[0].name.first))
// .then((data)=> phonebook.name = data.firstName =data.results[0].name.first)
// let data = response.json()
//console.log(data.results[0].name.first)




// for(i = 0; i < data.length; i++){
//     let .then((data)=> phonebook.name = data.firstName =data.results[0].name.first);

// }
// ------------------------------------------------------------------------

// Using the random user generator, create a phone book of users.
// Use fetch to grab 20 users from the API https://randomuser.me/documentation#howto
// Add each user to an array that you create that only holds their first name, last name, phone number, street address, and a photo of them
// Create a webpage that displays a contact card for each user displaying the aforementioned data
// Deploy the website
// randomuser.merandomuser.me
// Random User Generator | Documentation
// Random user generator is a FREE API for generating placeholder user information. Get profile photos, names, and more. It's like Lorem Ipsum, for people.


// let = results = [
//     {
//       gender: 'male',
//       name: [Object],
//       location: [Object],
//       email: 'niklas.takala@example.com',
//       login: [Object],
//       dob: [Object],
//       registered: [Object],
//       phone: '06-491-583',
//       cell: '045-955-26-76',
//       id: [Object],
//       picture: [Object],
//       nat: 'FI'
//     },
//     {
//       gender: 'female',
//       name: [Object],
//       location: [Object],
//       email: 'ljiljana.acker@example.com',
//       login: [Object],
//       dob: [Object],
//       registered: [Object],
//       phone: '0980-6758095',
//       cell: '0172-3525515',
//       id: [Object],
//       picture: [Object],
//       nat: 'DE'
//     },
//     {
//       gender: 'female',
//       name: [Object],
//       location: [Object],
//       email: 'leposava.ristovic@example.com',
//       login: [Object],
//       dob: [Object],
//       registered: [Object],
//       phone: '033-6586-715',
//       cell: '067-0340-992',
//       id: [Object],
//       picture: [Object],
//       nat: 'RS'
//     },
//     {
//       gender: 'male',
//       name: [Object],
//       location: [Object],
//       email: 'shyl.glshn@example.com',
//       login: [Object],
//       dob: [Object],
//       registered: [Object],
//       phone: '060-30458045',
//       cell: '0952-246-5748',
//       id: [Object],
//       picture: [Object],
//       nat: 'IR'
//     },
//     {
//       gender: 'female',
//       name: [Object],
//       location: [Object],
//       email: 'annedore.grobe@example.com',
//       login: [Object],
//       dob: [Object],
//       registered: [Object],
//       phone: '0777-9262635',
//       cell: '0177-9656796',
//       id: [Object],
//       picture: [Object],
//       nat: 'DE'
//     },
//     {
//       gender: 'male',
//       name: [Object],
//       location: [Object],
//       email: 'emmanuel.giraud@example.com',
//       login: [Object],
//       dob: [Object],
//       registered: [Object],
//       phone: '077 153 39 50',
//       cell: '079 950 74 34',
//       id: [Object],
//       picture: [Object],
//       nat: 'CH'
//     },
//     {
//       gender: 'male',
//       name: [Object],
//       location: [Object],
//       email: 'gordan.petkovic@example.com',
//       login: [Object],
//       dob: [Object],
//       registered: [Object],
//       phone: '022-5320-003',
//       cell: '067-0683-561',
//       id: [Object],
//       picture: [Object],
//       nat: 'RS'
//     },
//     {
//       gender: 'male',
//       name: [Object],
//       location: [Object],
//       email: 'hsn.sltnynjd@example.com',
//       login: [Object],
//       dob: [Object],
//       registered: [Object],
//       phone: '048-30304492',
//       cell: '0960-236-3688',
//       id: [Object],
//       picture: [Object],
//       nat: 'IR'
//     },
//     {
//       gender: 'female',
//       name: [Object],
//       location: [Object],
//       email: 'angelique.bonnema@example.com',
//       login: [Object],
//       dob: [Object],
//       registered: [Object],
//       phone: '(036) 6417889',
//       cell: '(06) 04643623',
//       id: [Object],
//       picture: [Object],
//       nat: 'NL'
//     },
//     {
//       gender: 'male',
//       name: [Object],
//       location: [Object],
//       email: 'konsta.lehtinen@example.com',
//       login: [Object],
//       dob: [Object],
//       registered: [Object],
//       phone: '03-260-940',
//       cell: '047-484-43-34',
//       id: [Object],
//       picture: [Object],
//       nat: 'FI'
//     },
//     {
//       gender: 'female',
//       name: [Object],
//       location: [Object],
//       email: 'robin.reid@example.com',
//       login: [Object],
//       dob: [Object],
//       registered: [Object],
//       phone: '06-4396-8953',
//       cell: '0492-224-679',
//       id: [Object],
//       picture: [Object],
//       nat: 'AU'
//     },
//     {
//       gender: 'male',
//       name: [Object],
//       location: [Object],
//       email: 'rayan.muller@example.com',
//       login: [Object],
//       dob: [Object],
//       registered: [Object],
//       phone: '02-82-91-80-53',
//       cell: '06-46-35-41-04',
//       id: [Object],
//       picture: [Object],
//       nat: 'FR'
//     },
//     {
//       gender: 'male',
//       name: [Object],
//       location: [Object],
//       email: 'allan.bowman@example.com',
//       login: [Object],
//       dob: [Object],
//       registered: [Object],
//       phone: '031-323-4732',
//       cell: '081-654-8974',
//       id: [Object],
//       picture: [Object],
//       nat: 'IE'
//     },
//     {
//       gender: 'female',
//       name: [Object],
//       location: [Object],
//       email: 'vanesa.prieto@example.com',
//       login: [Object],
//       dob: [Object],
//       registered: [Object],
//       phone: '935-502-731',
//       cell: '699-528-801',
//       id: [Object],
//       picture: [Object],
//       nat: 'ES'
//     },
//     {
//       gender: 'female',
//       name: [Object],
//       location: [Object],
//       email: 'froydis.aanerud@example.com',
//       login: [Object],
//       dob: [Object],
//       registered: [Object],
//       phone: '27035083',
//       cell: '95390550',
//       id: [Object],
//       picture: [Object],
//       nat: 'NO'
//     },
//     {
//       gender: 'female',
//       name: [Object],
//       location: [Object],
//       email: 'gabi.zahn@example.com',
//       login: [Object],
//       dob: [Object],
//       registered: [Object],
//       phone: '0781-2669264',
//       cell: '0176-2074769',
//       id: [Object],
//       picture: [Object],
//       nat: 'DE'
//     },
//     {
//       gender: 'male',
//       name: [Object],
//       location: [Object],
//       email: 'connor.may@example.com',
//       login: [Object],
//       dob: [Object],
//       registered: [Object],
//       phone: '(409) 482-5298',
//       cell: '(730) 706-1096',
//       id: [Object],
//       picture: [Object],
//       nat: 'US'
//     },
//     {
//       gender: 'male',
//       name: [Object],
//       location: [Object],
//       email: 'aalyrd.glshn@example.com',
//       login: [Object],
//       dob: [Object],
//       registered: [Object],
//       phone: '010-82395966',
//       cell: '0951-590-6532',
//       id: [Object],
//       picture: [Object],
//       nat: 'IR'
//     },
//     {
//       gender: 'male',
//       name: [Object],
//       location: [Object],
//       email: 'leevi.saksa@example.com',
//       login: [Object],
//       dob: [Object],
//       registered: [Object],
//       phone: '09-264-752',
//       cell: '048-676-34-43',
//       id: [Object],
//       picture: [Object],
//       nat: 'FI'
//     },
//     {
//       gender: 'male',
//       name: [Object],
//       location: [Object],
//       email: 'jayden.dunn@example.com',
//       login: [Object],
//       dob: [Object],
//       registered: [Object],
//       phone: '05-9088-3146',
//       cell: '0473-265-440',
//       id: [Object],
//       picture: [Object],
//       nat: 'AU'
//     },
//     ]
// Add each user to an array that you create that only holds their first name, last name, phone number, street address, and a photo of them
// let phonebook = []
// for(let i = 0; i < results.length; i++){
//     let newresults ={
//         firstName: results[i].name,
//         phoneNumber: results[i].phone,
//         streetaddress: results[i].location,
//         photo: results[i].picture,
//     };
//     phonebook.push(newresults)
// }
// console.log(phonebook)

// fetch("https://randomuser.me/api/?results=20")
// .then((response) => response.json())
//  .then((data) => {
// let userdata = [];
// userdata.push(data)
// //console.log({userdata})
// let phonebook = [];
// for(let i = 0; i < userdata[0].results[i].length; i++){
//     let newresults ={
//         firstName: userdata.results.name.first,
//         lastName: userdata.results.name.last,
//         phoneNumber: userdata.results.phone,
//         streetaddress: userdata.results.location,
//         photo: userdata.results.picture.large,
//     };
//     phonebook.push(newresults); 


//   }
//  console.log({phonebook});
//  })
// setTimeout(()=>{
//     html
// for(let i = 0; i < phonebook.length; i++){
//         html +="<tr>";
//         html +="<td>"+phonebook[i]+"</td>";
//     }

//     document.getElementById("table").innerHTML = html


// }


// fetch("https://randomuser.me/api/?results=20")
// .then((response) => response.json())
//  .then((data) => 


//  console.log(data.results[0].picture.large,data.results[0].name.first,data.results[0].name.last,data.results[0].location.street,data.results[0].location.city,data.results[0].location.state,data.results[0].location.country,data.results[0].location.postcode,data.results[1].picture.large,data.results[1].name.first,data.results[1].name.last,data.results[1].location.street,data.results[1].location.city,data.results[1].location.state,data.results[1].location.country,data.results[1].location.postcode)){
//     for(index = 0; index < data.length; i++)
//  }
// Using the random user generator, create a phone book of users.
// Use fetch to grab 20 users from the API https://randomuser.me/documentation#howto
// Add each user to an array that you create that only holds their first name, last name, phone number, street address, and a photo of them
// Create a webpage that displays a contact card for each user displaying the aforementioned data
// Deploy the website

fetch("https://randomuser.me/api/?results=20")
.then((response) => response.json())
.then((data) => {
    let profiles = []
    profiles.push(data);
   //console.log(profiles[0].results[19]);
    // console.log(profiles)
//profiles.forEach(profiles => console.log(profiles.results))
  
    let phonebook = [];
    for(i = 0; i< profiles[0].results.length; i++){
        let person ={
            firstName: profiles[0].results[i].name.first,
            lastName: profiles[0].results[i].name.last,
            phoneNumber: profiles[0].results[i].phone,
            streetAddress: profiles[0].results[i].location.street.number + " " + profiles[0].results[i].location.street.name,
            photo: profiles[0].results[i].picture.large,
        }; //console.log({user})
         phonebook.push(person);    
    }
   console.log({phonebook}); 

//person1.innerText = `"First Name:" = ${phonebook[0].firstName}`;
//person1.innerText = `${"First Name: " + phonebook[0].firstName} \n ${"Last Name: " + phonebook[0].lastName} \n ${"Phone Number : " + phonebook[0].phoneNumber} \n ${"Street Address: " + phonebook[0].streetAddress} \n ${"Photo ID: " + phonebook[0].photo} `;



   
    

})


// person1.style.backgroundColor="green"
// // let myHeading = document.getElementById("myHeading");
// myHeading.style.backgroundColor = "yellow"
   
     
    





 




    







