"use client"
import APIFetcher from "@/components/APIFetcher";
import ProductCard from "@/components/ProductCard";
import RotatingGallery from "@/components/RotatingGallery";
import { useEffect, useState } from "react";
import GridGallery from "@/components/GridGallery";


const Graphic = () => {

  //從API獲取GALLERY圖片
    const [images, setImages] = useState([]);
  
    useEffect(() => {
      fetch("/api/get-images")
        .then((res) => res.json())
        .then(setImages)
        .catch((err) => console.error("Error fetching images:", err));
    }, []);
  
  return (
    <div className="pt-30">
      {/* 男裝款式選染
      <section>
        <APIFetcher url={"/data/productsData.json"}>
          {(products) => {
           const manProducts = products.filter(
             (product) => product.category.toLowerCase() === "men"
           );
           return (
             <ul className="products-list-container">
               {manProducts &&
                 manProducts.map((product) => (
                   <ProductCard key={product.id} product={product} />
                 ))}
             </ul>
           );
          }}
        </APIFetcher>
      </section> */}

      {/* Rotating Gallery */}
      <section className="flex justify-center mt-[10rem] scale-40 md:scale-100">
        <RotatingGallery images={images.slice(0, 9)} />
      </section>
      {/* Grid Gallery */}
      <section >
        <GridGallery images={images} />
      </section>
    </div>
  );
};

export default Graphic;
