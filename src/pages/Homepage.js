import React from "react";
import Search from "../components/Search";

function Homepage() {
  const auth = "563492ad6f9170000100000125c21e996ae6487abb6d8e349a3f2684"; // pexels auth api key
  return (
    <div>
      <h1>My Homepage</h1>
      <Search />
    </div>
  );
}

export default Homepage;
