import {Search} from "lucide-react"
import React from "react";

const SearchBar = ({ searchTerm, handleChange, handleSearchClick,searchType }) => {
  return (
   <div className="flex-1 flex items-center bg-white rounded-md shadow px-4 py-2">
      <input 
      className="w-full outline-none text-slate-700"
      type={searchType}
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearchClick();
          }
        }}
      />
      <Search  className="text-slate-400 w-5 h-5 mr-2" />
    </div>
  );
};

export default SearchBar;