import css from './ImageGalleryItem.module.css';
export const ImageGalleryItem = ({ image }) => {
  const { webformatURL, tags } = image;
  return (
    <li className={css.imageGalleryItem}>
      <img className={css.imageItem} src={webformatURL} alt={tags} />
    </li>
  );
};
