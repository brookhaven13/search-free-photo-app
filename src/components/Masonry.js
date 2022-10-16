import React from "react";

function Photo({ data, gap }) {
  return (
    <div className="image-wrapper">
      <figure>
        <img className="image" src={data.src.large} alt={data.alt} />
        <figcaption>
          <span>{data.photographer}</span>
          <a href={data.src.large} target="_blank" rel="noreferrer">
            Download
          </a>
        </figcaption>
      </figure>
    </div>
  );
}

export default Photo;
