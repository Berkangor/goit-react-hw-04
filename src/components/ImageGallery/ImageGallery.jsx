import styles from './ImageGallery.module.css';

export default function ImageCard({ image, onClick }) {
  const handleClick = () => {
    onClick(image);
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <img
        src={image.urls.small}
        alt={image.alt_description || "Unsplash image"}
        className={styles.image}
        loading="lazy"
      />
      <div className={styles.caption}>
        {image.alt_description || "Fotoğraf"}
      </div>
    </div>
  );
}