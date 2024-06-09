//***Used for Dynamic Rendering List/Arrays @1:37:14 with UseDetails component ***/////////////////////////

// import { UserDetails } from "./Components/UserDetails";

// export default function App() {
//   const mockUsers = [
//     {
//       id: 1,
//       username: "Joel",
//       email: "joel@mail.com",
//     },
//     {
//       id: 2,
//       username: "Ashley",
//       email: "ashley@mail.com",
//     },
//     {
//       id: 3,
//       username: "Ashley2",
//       email: "ashley2@mail.com",
//     },
//     {
//       id: 4,
//       username: "Ashley3",
//       email: "ashley3@mail.com",
//     },
//   ];
 
//   return(
//     <div>
//     {mockUsers.map((user) => {
//       return   <UserDetails key={user.id} user={user}/>;
      
//     })}
//     </div>
//   );
  
// }
   
 
//import React from 'react'

//export default function App() {
// const isAuthenticated = true;
//  IF STATEMENT
//   if(isAuthenticated){
//   return (
//     <div>
//       <h1>Welcome,User!</h1>
//     </div>  
//   );
// } else{
//   return (
//     <div>
//       <span>You are not logged in</span>
//     </div>
//   )

// }
// TERNARY OPERATOR
// const isAuthenticated = false;
// return isAuthenticated ?(
//  <div>
//   <h1>Welcome, User!</h1>
// </div>
// ) : (
//   <div>
//     <h1>You are not logged in</h1>
//   </div>
// )

//}





//*** CONDITIONAL RENDERING @2:05 ***//////////////////////////////////////////////////////////////

// import React from 'react'

// //If statement mutliple conditions--Please note capitalizaton/lower function needs to be applied[ex. toLowerCase()]
// export default function App() {
  
//   const USER_STATUS = "VERIFIED";
  
//   if(USER_STATUS === "NOT_VERIFIED"){
//     return(
//       <div>
//         <span>
//           You are not verified. Please verify your Email or Mobile Number.
//         </span>
//       </div>
//     );
//   }else if (USER_STATUS === "VERIFIED"){
//     return(
//       <div>
//         <span>
//           You are verified. Congrats! Click here to Access Your Dashboard.
//         </span>
//       </div>
//     );
//   }else if (USER_STATUS === "NOT_DISABLED"){
//     return(
//       <div>
//         <span>
//           Your account is disabled.
//         </span>
//       </div>
//     );
//   }else {
//     return(
//       <div>
//         <span>
//          Please contact a system admin,
//         </span>
//       </div>
//     );
//   }

// }





//*** SWITCH STATEMENT @2:24 IN CONDITIONAL RENDERING lease note capitalizaton/lower function needs to be applied[ex. toLowerCase()]***/////////////////////////////////////////////////////////
// import React from 'react'
// export default function App() {

// const USER_STATUS = "ACCOUNT_DISABLED";

// switch(USER_STATUS){
// case "NOT_VERIFIED":
//   return(
//     <div>
//       <span>
//       You are not verified. Please verify your Email or Mobile Number.
//       </span>
//     </div>
//   );
  
//   case "VERIFIED":
//     return(
//       <div>
//         <span>
//         You are verified. Congrats! Click here to Access Your Dashboard.
//         </span>
//       </div>
//     );
//     case "ACCOUNT_DISABLED":
//       return(
//         <div>
//           <span>
//           Your account is disabled.
//           </span>
//         </div>
//       );
//       default:
//         return(
//           <div>
//             <span>
//               Please contact a system admin,
//             </span>
//           </div>
//         );
        
//   }

// // }


//Login Form tutorial
// import React from 'react'
// import { LoginForm } from './Components/LoginForm'

// export default function App() {
//   return (
//   <div> 
//   <LoginForm />
//   </div>
//   );
  
// }




//STATE @ 2:54 and  useState HOOK@2;59
// import React from 'react'
// import { RegisterForm } from './Components/RegisterForm'


// export default function App() {
//   return (
//     <div>
//       <RegisterForm/>
//     </div>
//   )
// }


//REGISTERFORM2 useState@3:20
// import React from 'react'
// import { RegisterForm2 } from './Components/RegisterForm2'



// export default function App() {
//   return (
//     <div>
//       <RegisterForm2/>
//     </div>
//   )
// }

import React from 'react'

export default function App() {
  return (
    <div>App</div>
  )
}
