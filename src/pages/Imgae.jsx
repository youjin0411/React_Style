import React, { useState } from 'react';

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  const handleClick = (image) => {
    if (images.length >= 4) {
      setImages((prevImages) => prevImages.slice(1));
    }
    setImages((prevImages) => [...prevImages, image]);
  };

  return (
    <div>
      <h2>Image Gallery</h2>
      <div className="gallery">
        {images.map((image, index) => (
          <div
            key={index}
            className="image"
            style={{ zIndex: images.length - index }}
          >
            <img src={image} alt="Image" />
          </div>
        ))}
      </div>
      <div className="thumbnails">
        <img
          src="image1.jpg"
          alt="Thumbnail 1"
          onClick={() => handleClick("logo192.png")}
        />
        <img
          src="image2.jpg"
          alt="Thumbnail 2"
          onClick={() => handleClick("logo192.png")}
        />
        <img
          src="image3.jpg"
          alt="Thumbnail 3"
          onClick={() => handleClick("logo192.png")}
        />
        <img
          src="image4.jpg"
          alt="Thumbnail 4"
          onClick={() => handleClick("logo192.png")}
        />
      </div>
    </div>
  );
};

export default ImageGallery;
