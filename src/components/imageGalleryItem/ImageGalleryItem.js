import React from "react";
import styles from './ImageGalleryItem.module.css'

const ImageGalleryItem = ({gallery, showModal}) => {
  
  return (
    <>
    {gallery.map(picture => 
      <li key={picture.id} className={styles.ImageGalleryItem}
      onClick={() => {
        showModal(picture);
      }}>
        <img src={picture.webformatURL} data-image={picture.largeImageURL} alt="" className="ImageGalleryItem-image" />
      </li>
      )}
    </>
  );
};

export default ImageGalleryItem;
