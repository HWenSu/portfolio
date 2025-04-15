import Image from "next/image";

const ImagePopup = ({ imageUrl, onClose }) => {
  if (!imageUrl) {
    return null;
  }

  return (
    <div className="image-popup-overlay" onClick={onClose}>
      <div className="image-popup">
        <Image width={500} height={600} src={imageUrl} alt="完整圖片" />
        <button className="close-button" onClick={onClose}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  );
};

export default ImagePopup;
