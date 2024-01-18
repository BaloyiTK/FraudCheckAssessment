// ImageModal.js
import React from "react";

const ImageModal = ({ imageUrl, closeModal }) => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-screen-lg h-96 max-h-screen">
      <div className="relative w-full h-full">
        <div
          className="absolute top-4 right-4 cursor-pointer  text-xl z-50 text-orange-500 hover:text-gray-800 font-bold"
          onClick={closeModal}
        >
          X
        </div>
        <img
          src={imageUrl}
          alt="Enlarged Image"
          className="w-full h-full object-cover border-2 border-white rounded-md"
		  onClick={closeModal}
        />
      </div>
    </div>
  );
};

export default ImageModal;
