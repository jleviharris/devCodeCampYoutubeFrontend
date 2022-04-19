import "../index.css";

import React, { useEffect, useState } from "react";

import { SearchForVideos } from "../Utilities/Search";

const Searchbar = ({ searchTerm, setSearchTerm, setVideos }) => {
  const setSearch = (event) => {
    const searchWord = event.target.value;
    setSearchTerm(searchWord);
    SearchForVideos(searchWord).then((videos) => setVideos(videos));
  };

  return (
    <div className="search">
      {" "}
      <form
        className="form-inline my-2 my-lg-0"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
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
