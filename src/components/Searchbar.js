import React, { useState, useEffect } from 'react';
import "../index.css";


const Searchbar = ({searchTerm, setSearchTerm}) => {
    const setSearch = (event) => {
        const searchWord = event.target.value;
        setSearchTerm(searchWord);
    }
   
  return (
    <div className="search">
      {" "}
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="text"
          placeholder="Search"
          onChange={setSearch}
          aria-label="Search"
        />
      </form>
    </div>
  );
};
export default Searchbar;


 





