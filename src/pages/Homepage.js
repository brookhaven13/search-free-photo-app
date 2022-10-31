import React, { useState, useEffect } from "react";
import "./../styles/style.css";
import Search from "../components/Search";
import Photo from "../components/Masonry";
import { getCuratedPhotos, SearchPhotos, loadMorePhotos } from "./../pexels";
import { Masonry } from "@mui/lab";

function Homepage() {
  const [data, setData] = useState(null);
  const [pageUrl, setPageUrl] = useState("");

  // fetch curated photos from pexels api
  const getHomepagePhotos = async () => {
    let fetchData = await getCuratedPhotos();
    setData(fetchData.photos);
    setPageUrl(fetchData.next_page);
  };

  const search = async (input) => {
    let fetchData = await SearchPhotos(input);
    setData(fetchData.photos);
    setPageUrl(fetchData.next_page);
  };

  const loadNextPage = async () => {
    let fetchData = await loadMorePhotos(pageUrl);
    setData(data.concat(fetchData.photos));
    setPageUrl(fetchData.next_page);
  };

  // fetch photos fro pexels when page's loaded
  useEffect(() => {
    getHomepagePhotos();
  }, []);

  return (
    <div className="homepage-section">
      <Search search={search} />
      <div className="masonry-blk">
        <Masonry columns={4} spacing={2}>
          {data &&
            data.map((d) => {
              return <Photo data={d} key={d.id} />;
            })}
        </Masonry>
      </div>
      <div className="buttom">
        <button onClick={loadNextPage}>Load More</button>
      </div>
    </div>
  );
}

export default Homepage;
