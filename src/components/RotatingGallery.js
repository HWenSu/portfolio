const RotatingGallery = ({ images }) => {

  return (
    <div>
      <div className="r-gallery">
        {images &&
          images.map((img, index) => (
            <span style={{ "--i": index + 1 }} key={img}>
              <img src={img} alt={img} />
            </span>
          ))}
      </div>
    </div>
  );
};

export default RotatingGallery;
