import React, { useState } from "react";
import Header from "./Header";

function Search({ search }) {
  return (
    <div className="search-section">
      <Header />
      <div className="search-wrapper">
        <div className="title">
          <div>The best free stock photos</div>
          <div>Images shared by creators</div>
        </div>
        <div className="search-input">
          <input type="text" placeholder="Search for free photos" />
          <button onClick={search}>Search</button>
        </div>
      </div>
    </div>
  );
}

export default Search;
