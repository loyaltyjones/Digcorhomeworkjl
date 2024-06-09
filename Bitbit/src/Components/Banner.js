import React from 'react'
import { useState } from 'react';
// import ChildButton from './ChildButton';

function Banner() {
    const [state, setState] = useState({
        text: 'Choose your genre: '
        
    });
    return (
        <div>
            <h1>{state.text}</h1>
            <a href="https://buy.stripe.com/test_3csg186vzc3o3MA288"> Comedy</a>


      
        </div>
    );
};


export default Banner


// function Banner() {
//     function PassState(){
//     const [state, setState] = useState({
//         text: 'WELCOME TO CRYPTOCRAZE'
//     });

// }
//     return (
//         <div>
//             <h1>{state.text}</h1>
//             <button onClick={() => setState({
//                 text: 'Click a coin for coINFO'
//             })}>
//                 Go Premium
//             </button>
      
//         </div>
//     );
// };
