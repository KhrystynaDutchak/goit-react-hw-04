import ImageCard from "../ImageCard/ImageCard";
import css from './ImageGallery.module.css'

export default function ImageGallery({ images, onImageClick }) {
  const handleClick = (imageUrl) => {
    onImageClick(imageUrl);
  };

  return (
    <>
      <ul className={css.gallery}>
        {images.map((image) => (
          <li key={image.id} className={css.elem} onClick={() => handleClick(image.urls.regular)}>
            <div className={css.imageInner}> <ImageCard image={image} /></div>
          </li>
        ))}
      </ul>
    </>
  );
}
