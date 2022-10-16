import React, { useState, useEffect } from "react";
import "./../styles/style.css";
import Search from "../components/Search";
import Photo from "../components/Masonry";
import { getCuratedPhotos } from "./../pexels";

function Homepage() {
  const [input, setInput] = useState("");
  const [data, setData] = useState(null);

  // fetch curated photos from pexels api
  const search = async () => {
    let fetchData = await getCuratedPhotos();
    setData(fetchData.photos);
  };

  // fetch photos fro pexels when page's loaded
  useEffect(() => {
    search();
  }, []);

  return (
    <div className="homepage-section">
      <Search search={search} />
      <div className="masonry-blk">
        {data &&
          data.map((d) => {
            return <Photo data={d} />;
          })}
      </div>
    </div>
  );
}

export default Homepage;
