import './App.css';
import React from 'react';
// import Table from './Components/Table';
// import TopBar from './Components/TopBar';
// import TemplatePage from './Components/TemplatePage';
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Components/Layout';
import Home from './Components/Home';
import Blogs from './Components/Blogs';
import Contact from './Components/Contact';
import NoPage from './Components/NoPage';
// import Searchbar from './Components/Searchbar';
// import Bitcoin from './Components/Bitcoin';
// import BNB from './Components/BNB';
// import Ethereum from './Components/Ethereum';
// import Solana from './Components/Solana';
// import TetherUSD from './Components/TetherUSD';
// import TonCoin from './Components/TonCoin';
// import Usdc from './Components/Usdc';
// import Xrp from './Components/Xrp';
// import DogeCoin2 from './Components/DogeCoin2';
// import LidoStake from './Components/LidoStake';
// import Testmap from './Components/Testmap';
// import ConQuery from './Components/ConQuery';
// import SearchQuery from './Components/SearchQuery';
// import TestFef from './Components/TestFef';
import Banner from './Components/Banner';








function App() {
    return (
        
        <div>
        {/* <Banner /> */}
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
            {/* <Route path="searchBar" element={<Searchbar />} /> */}
            {/* <Route path="testMap2" element={<Testmap />} />   */}
          </Route>
        </Routes>
      </BrowserRouter>
      <Banner />
       <div>
       {/* <SearchQuery /> */}
        {/* <TestFef /> */}
        {/* <ConQuery /> */}
        {/* <Bitcoin />
        <BNB />
        <Ethereum />
        <DogeCoin2 />
        <LidoStake />
        <Solana />
        <TetherUSD />
        <TonCoin />
        <Usdc />
        <Xrp /> */}
       </div>
      
      </div>
    );
  }
 
export default App;
   