// Gallery.js

import React, { useState } from "react";
import ImageModal from "./ImageModal";
import "../styles/Gallery.css"; // Import your CSS file for styling

const images = [
  require("../assets/stockImages/pexels-eberhard-grossgasteiger-691668.jpg"),
  require("../assets/stockImages/pexels-liszt-yu-59106.jpg"),
  require("../assets/stockImages/pexels-marina-zvada-19562918.jpg"),
  require("../assets/stockImages/pexels-philip-ackermann-1666012.jpg"),
  require("../assets/stockImages/pexels-thibaut-tattevin-18273081.jpg"),
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const preventContextMenu = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Image Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative group overflow-hidden rounded-md transition-transform duration-300 transform ${
              hoveredIndex === index ? "scale-110" : ""
            }`}
            onClick={() => openModal(image)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onContextMenu={preventContextMenu}
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-64 object-cover cursor-pointer"
            />
          </div>
        ))}
      </div>

      {selectedImage && <ImageModal imageUrl={selectedImage} closeModal={closeModal} />}
    </div>
  );
};

export default Gallery;
