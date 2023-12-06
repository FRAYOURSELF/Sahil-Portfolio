import React from "react";

const Image = ({ src, fallback, type = "image/webp", alt }) => {
  return (
    <div className="gsaap">
    <picture>
      <source srcSet={src} type={type} />
      <img src={fallback} alt={alt} />
    </picture>
    </div>
  );
};

export default Image;
