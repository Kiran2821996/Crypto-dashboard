import React, { createContext, useState } from "react";

const SearchContext = createContext();

function SearchProvider({ children }) {
    // console.log("Child", children);
    const [search, setSearch] = useState("bitcoin");

    return (
        <SearchContext.Provider value={{ search, setSearch }}>
            {children}
        </SearchContext.Provider>
    );
}
export { SearchContext, SearchProvider };
