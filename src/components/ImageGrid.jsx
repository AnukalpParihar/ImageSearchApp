import React from "react";
import ImageCard from "./ImageCard";

function ImageGrid({ images, columns }) {
  const gridStyles = {
    display: "grid",
    gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
    gap: "1rem",
  };

  return (
    <div style={gridStyles}>
      {images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  );
}

export default ImageGrid;
