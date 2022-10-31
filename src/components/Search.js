import React, { useState } from "react";
import Header from "./Header";

function Search({ search }) {
  const [input, setInput] = useState("");

  const inputChangeHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="search-section">
      <Header />
      <div className="search-wrapper">
        <div className="title">
          <div>The best free stock photos</div>
          <div>Images shared by creators</div>
        </div>
        <div className="search-input">
          <input
            type="text"
            placeholder="Search for free photos"
            onChange={inputChangeHandler}
            onKeyDown={(event) => {
              if (event.key === "Enter") search(input);
            }}
          />
          <button onClick={() => search(input)}>Search</button>
        </div>
        <div style={{ fontSize: "16px" }}>Treding: city, mountain, animal</div>
      </div>
    </div>
  );
}

export default Search;
