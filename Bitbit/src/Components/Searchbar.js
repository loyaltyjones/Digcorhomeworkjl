import React from 'react'
import { useState , createContext } from 'react';
import ConQuery from './ConQuery';
// import Table from './Table';



export const setSearchBarContext = createContext()

function Searchbar() {
    const [search, setSearch] = useState("");
   
    

  return (
    <div>
         <input
                type="text"
                placeholder="Search Your Crypto..."
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
            />
            <setSearchBarContext.Provider value={search}>
                {/* <Table /> */}
                <ConQuery />
            </setSearchBarContext.Provider>
                
    </div>
    )
}

export default Searchbar