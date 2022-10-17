import React, { useState, useEffect } from "react";
import "./../styles/style.css";
import Search from "../components/Search";
import Photo from "../components/Masonry";
import { getCuratedPhotos, SearchPhotos } from "./../pexels";

function Homepage() {
  const [data, setData] = useState(null);

  // fetch curated photos from pexels api
  const getHomepagePhotos = async () => {
    let fetchData = await getCuratedPhotos();
    setData(fetchData.photos);
  };

  const callThisFromChild = (value) => {
    console.log("value from child", value);
  };

  const search = async (input) => {
    let fetchData = await SearchPhotos(input);
    setData(fetchData.photos);
  };

  // fetch photos fro pexels when page's loaded
  useEffect(() => {
    getHomepagePhotos();
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
      <div className="buttom">
        <button>Load More</button>
      </div>
    </div>
  );
}

export default Homepage;
