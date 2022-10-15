/**
 * Implement the ImageGallery component that accepts a `links`
 * prop and renders the gallery so that the first
 * item in the links prop is the src attribute of the first image in the gallery.

 * It should also implement the following logic:
 * - When the button is clicked, the image that is in the same div as the button should be removed from the gallery.
 */

import { useEffect, useState } from "react";

function Image({ src, onRemove, id }) {
  return (
    <div className="image_container">
      <img src={src} alt="imgGalery" width={350} height={250} />
      <button className="remove" onClick={() => onRemove(id)}>
        X
      </button>
    </div>
  );
}

export function ImageGallery({ links }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(links);
  }, [links]);

  const onRemove = (imgId) => {
    const newList = images.filter((img) => img.id !== imgId);
    setImages(newList);
  };

  return (
    <div className="imageGallery_container">
      {/* Implement here the Image Gallery using <Image /> component */}
      {images.length
        ? images.map(({ download_url, id }) => (
            <Image key={id} src={download_url} onRemove={onRemove} id={id} />
          ))
        : null}
    </div>
  );
}
