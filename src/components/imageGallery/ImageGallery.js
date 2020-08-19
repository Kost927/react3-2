import React from "react";
import styles from "./ImageGallery.module.css";
import Spinner from "../loader/Loader";

const ImageGallery = ({ children, loading, error, gallery, fetchGallery }) => {
  return (
    <>
      {error && <p>Whoops, something goes wrong: {error.massage}</p>}
      {loading && <Spinner />}
      {gallery.length > 0 && <ul className={styles.ImageGallery}>{children}</ul>}
      {gallery.length > 0 && (
        <button type="button" className={styles.btnLoadMore} onClick={fetchGallery}>
          Load more
        </button>
      )}
    </>
  );
};

export default ImageGallery;
