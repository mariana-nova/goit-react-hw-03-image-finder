import React from 'react';

const ImageGalleryItem = ({ webformatURL, largeImageURL }) => {
  return (
    <li className="gallery-item">
      <img  src={webformatURL} alt="" data-large={largeImageURL} />
    </li>
  );
};

export default ImageGalleryItem;
