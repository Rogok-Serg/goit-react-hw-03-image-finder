import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
export const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map(image => (
        // <li key={image.id} className="gallery-item">
        //   <img src={image.webformatURL} alt={image.tags} />
        // </li>
        <ImageGalleryItem key={image.id} image={image} />
      ))}
    </ul>
  );
};
