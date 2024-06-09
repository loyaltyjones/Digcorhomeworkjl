import React from "react";
import { useState, createContext } from "react";
import ReactDOM from "react-dom/client";
import './App.css';
import { Cars } from "./Components/Cars";
import { Brand } from "./Components/Brand";
import { Make } from "./Components/Make";
// import { VehicleContextSuv } from "./contexts/VehicleSuv";
// import { VehicleContextTruck } from "./contexts/VehicleTruck";
import { VehicleTypeContext } from "./contexts/VehicleTypeContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Root, { rootLoader } from "./index";
// import { CarsLoader } from "./Components/Cars";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import NavBar from "./Components/Nav";
import Cards from "./Components/Cards";
// import { Nav } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';




// function App() {

//   return (
//     <VehicleTypeContext.Provider value={{
//     type: "Suv",
//     doors: "four",
//     capacity: "Seven",
//     }}>
//       <div>
//       <Cars/>
//       <Brand/>
//       <Make/>
//       </div>
//     // </VehicleTypeContext.Provider>

//   );
// }


// export default App;


export default function App() {
  return (
   
    <VehicleTypeContext.Provider value={{
          type: "Suv",
          doors: "four",
          capacity: "Seven",
          }}>
         <div>
         NavBar
         <NavBar />
         </div> 
         <div>
          <Cards />
         </div>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/makes">Make</Link>
              <Link to="/cars">Cars</Link>
              <Link to="/brands">Brands</Link>
            </li>
            <li>
              <Link to="/cars">Cars</Link>
            </li>
            <li>
              <Link to="/brands">Brands</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/cars">
            <Cars />
          </Route>
          <Route path="/brands">
            <Brand />
          </Route>
          <Route path="/makes">
            <Make />
          </Route>
        </Switch>
      </div>
    </Router>
    </VehicleTypeContext.Provider>
  );
}


    
 

 




