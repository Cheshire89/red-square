import styles from "./ImageCollage.module.scss";

interface ImageCollageProps {
  images: string[];
}

function ImageCollage({ images }: ImageCollageProps) {
  return (
    <div className={styles.collage}>
      {images.map((src) => (
        <img key={src} className="img-fluid" src={"/" + src} alt="" />
      ))}
    </div>
  );
}

export default ImageCollage;
