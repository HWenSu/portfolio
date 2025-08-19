"use client";
import { useState } from "react";
import Image from "next/image";
import APIFetcher from "@/components/APIFetcher";
import ImageCarousel from "@/components/ImageCarousel";
import { useParams } from "next/navigation";

export default function ProductPage() {
  const { id } = useParams(); // 動態路由參數

  const [isImgOpen, setIsImgOpen] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(0);

  const handleImgClicked = (index) => {
    setIsImgOpen(true);
    setClickedIndex(index);
  };

  const handleClose = () => {
    setIsImgOpen(false);
  };

  return (
    <div>
      <APIFetcher url="/data/productsData.json">
        {(products) => {
          // 1) 找到目前商品
          const currentProduct = Array.isArray(products)
            ? products.find((p) => String(p.id) === String(id))
            : null;

          if (!currentProduct) {
            return <p className="p-8">PRODUCT NOT FOUND</p>;
          }

          // 2) 安全處理圖片陣列
          const images = Array.isArray(currentProduct.image)
            ? currentProduct.image
            : currentProduct.image
            ? [currentProduct.image]
            : [];
          const firstImage = images[0] || null;
          const restImages = images.slice(1);

          return (
            firstImage && (
              <div className="product-info-page" key={currentProduct.id}>
                {/* 圖片區塊 */}
                <section className="image-section">
                  <div
                    className="product-big-image"
                    onClick={() => handleImgClicked(0)}
                  >
                    <Image
                      src={firstImage}
                      alt={currentProduct.name || "PRODUCT"}
                      width={400}
                      height={900}
                    />
                  </div>

                  {/* 縮圖＋影片（行動端避免原生控制） */}
                  {/* 如需顯示縮圖與影片，解除註解 */}
                  {/* 
                  <div className="detail-img-container">
                    {restImages.map((img, index) => (
                      <div
                        className="detail-img"
                        key={`${img}-${index}`}
                        onClick={() => handleImgClicked(index + 1)}
                      >
                        <Image src={img} alt="PRODUCTS" width={400} height={900} />
                      </div>
                    ))}

                    {currentProduct.video && (
                      <video
                        src={currentProduct.video}
                        // 不放 controls，並加入下列屬性降低行動端喚起系統播放器
                        playsInline
                        // 非標準屬性，實務常用以相容 iOS / Android WebView
                        webkit-playsinline="true"
                        x5-playsinline="true"
                        disablePictureInPicture
                        autoPlay
                        muted
                        loop
                        className="w-full col-span-2 no-native-controls"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                        }}
                      />
                    )}
                  </div>
                  */}
                </section>

                {/* 文字區塊 */}
                <section className="info-section">
                  <h2>{String(currentProduct.name || "").toUpperCase()}</h2>
                  <h3>
                    STYLE NO //{" "}
                    {String(currentProduct.style_no || "").toUpperCase()}
                  </h3>
                  <p>
                    {String(currentProduct.description || "").toUpperCase()}
                  </p>

                  <ul className="info-list-container">
                    <li>
                      <h4>MATERIAL - </h4>
                      <p>
                        {String(currentProduct.material || "").toUpperCase()}
                      </p>
                    </li>
                    <li>
                      <h4>CONSTRUCTURE - </h4>
                      <p>
                        {String(
                          currentProduct.constructure || ""
                        ).toUpperCase()}
                      </p>
                    </li>
                    <li>
                      <h4>FABRIC NO. - </h4>
                      <p>
                        {String(currentProduct.fabric_no || "").toUpperCase()}
                      </p>
                    </li>
                    <li>
                      <h4>FEATURE - </h4>
                      {(currentProduct.feature || []).map((item, index) => (
                        <p key={`feature-${index}`}>
                          {String(item).toUpperCase()}
                        </p>
                      ))}
                    </li>
                    <li>
                      <h4>FUNCTION - </h4>
                      {(currentProduct.function || []).map((item, index) => (
                        <p key={`function-${index}`}>
                          {String(item).toUpperCase()}
                        </p>
                      ))}
                    </li>
                    <li>
                      <h4>SIZE - </h4>
                      <p>{String(currentProduct.size || "").toUpperCase()}</p>
                    </li>
                  </ul>
                </section>

                {/* 點擊圖片彈出輪播圖 */}
                {isImgOpen && (
                  <>
                    <ImageCarousel
                      images={images}
                      handleClose={handleClose}
                      clickedIndex={clickedIndex}
                    />
                    <div className="image-carousel-bg"></div>
                  </>
                )}
              </div>
            )
          );
        }}
      </APIFetcher>

      <Image
        className="absolute -top-[5vh] right-[10vw] w-[10vw]"
        src="/image/PRODUCT-tape-yellow.png"
        alt="PRODUCT-tape-yellow"
        width={200}
        height={400}
      />
    </div>
  );
}
