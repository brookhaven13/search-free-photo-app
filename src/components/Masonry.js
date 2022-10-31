import React from "react";

function Photo({ data, gap }) {
  return (
    <div className="image-wrapper">
      <figure>
        <a href={data.src.large} download target="_blank" rel="noreferrer">
          <img className="image" src={data.src.large} alt={data.alt} />
        </a>
        <figcaption>
          <span>{data.photographer}</span>
          {/* <a href={data.src.large} download target="_blank" rel="noreferrer">
            Download
          </a> */}
        </figcaption>
      </figure>
    </div>
  );
}

export default Photo;
