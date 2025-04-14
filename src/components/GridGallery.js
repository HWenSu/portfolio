import ImagePopup from "./ImagePopup"; // 導入彈出框組件
import { useState } from "react";
import Image from "next/image";


const GridGallery = ({ images }) => {
  const amount = images.length;
  const picsPerRow = Math.floor(amount / 3);
  const firstRow = images.slice(0, picsPerRow);
  const secondRow = images.slice(picsPerRow, picsPerRow * 2);
  const ThirdRow = images.slice(picsPerRow * 2, picsPerRow * 3);

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleClosePopup = () => {
    setSelectedImage(null);
  };

  return (
    <div className="grid place-content-center py-[10rem]">
      <section className="g-gallery">
        <div>
          {firstRow.map((img) => (
            <article key={img} onClick={() => handleImageClick(img)}>
              <Image width={300} height={400} src={img} alt={img} />
            </article>
          ))}
        </div>
        <div>
          {secondRow.map((img) => (
            <article key={img} onClick={() => handleImageClick(img)}>
              <Image width={300} height={400} src={img} alt={img} />
            </article>
          ))}
        </div>
        <div>
          {ThirdRow.map((img) => (
            <article key={img} onClick={() => handleImageClick(img)}>
              <Image width={300} height={400} src={img} alt={img} />
            </article>
          ))}
        </div>
      </section>

      {selectedImage && (
        <ImagePopup imageUrl={selectedImage} onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default GridGallery;
