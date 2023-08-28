import React, { useState } from "react";

function ImageCard({ image }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="border rounded-lg overflow-hidden shadow-lg image-card relative transition-transform duration-300 transform hover:scale-105"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={image.src.large}
        alt={image.photographer}
        className="w-full h-auto rounded-t-lg"
      />

      {isHovered && (
        <div className="image-details bg-opacity-70 absolute bottom-0 left-0 right-0 px-4 py-2 bg-black text-white">
          <p className="text-lg font-semibold mb-2">
            Photographer: {image.photographer}
          </p>
          <p>Photographer ID: {image.photographer_id}</p>
          <p>
            Original Size: {image.width} x {image.height}
          </p>
          <a href={image.photographer_url} className="text-blue-400 underline">
            Photographer Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default ImageCard;
