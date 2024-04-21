import css from './ImageCard.module.css';

export default function ImageCard({ image }) {
  return (
    <img src={image.urls.regular} alt={image.alt_description} className={css.image} />
 
  );
}
