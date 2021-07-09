import React from "react";

const Image = ({ src, title }) => {
  return (
    <div>
      <img src={src} alt={title} />
      <div>
        <a href={src} target="_blank" rel="noreferrer">
          {src}
        </a>
      </div>
    </div>
  );
};

export default Image;
