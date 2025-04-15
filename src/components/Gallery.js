"use client";
import Image from "next/image";
import { useRef, useState } from "react";

const Gallery = ({ images, isDesktop }) => {
  const galleryContainer = useRef();
  const galleryItem = useRef();
  const [hoveredIndex, setHoveredIndex] = useState(4); //預設

  const handleMouseEnter = (index) => {
    if(isDesktop) setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    if (isDesktop) setHoveredIndex(4);
  };

  // 處理手機點擊
  const handleClick = (index) => {
    // 手機：點了再點同一張就取消選取
   if ( !isDesktop) setHoveredIndex((prev) => (prev === index ? 4 : index));
  };

  return (
    <div className="gallery-container" ref={galleryContainer}>
      <div className="gallery">
        {images &&
          images.map((image, index) => (
            <div
              className={`gallery-item ${
                hoveredIndex === index ? "hover-item" : ""
              }`}
              key={image}
              ref={galleryItem}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(index)}
            >
              <Image width={400} height={300} src={image} alt="images" />
            </div>
          ))}
      </div>
    </div>
  );
};
export default Gallery;
