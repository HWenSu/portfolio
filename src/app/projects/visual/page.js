"use client";
import { useEffect, useState } from "react";
import BlurText from "@/components/BlurText";
import GridGallery from "@/components/GridGallery";
import { Images } from "lucide-react";

const page = () => {

    //從API獲取GALLERY圖片
      const [images, setImages] = useState([]);
    
      useEffect(() => {
        fetch("/api/get-visuals")
          .then((res) => res.json())
          .then(setImages)
          .catch((err) => console.error("Error fetching images:", err));
      }, []);

      const sum = images.length
      const slicedFirstImages = images.slice(0, 10)
      const slicedSecondImages = images.slice(10, 22);
      const slicedThirdImages = images.slice(sum-22, sum+1)



  return (
    <div>
      {/* 背景影片 */}
      <video
        src="/video/766144466.768551.mp4"
        autoPlay
        muted
        loop
        className="w-full h-auto fixed z-[-1] opacity-5"
      />
      {/* Grid Gallery */}
      <section className="h-[120vh]">
        <GridGallery images={slicedFirstImages} />
      </section>
      {/* 介紹區塊 */}
      <section className="w-full h-[90vh] ">
        <div className="w-full h-full bg-black/10 text-white scroll-section flex flex-col justify-between px-[4rem] text-[6rem]">
          <BlurText words={"VISUAL // MARKET // EXHIBITION"} />
          {/* Grid Gallery */}
          <div className="z-2">
            <GridGallery images={slicedSecondImages} />
          </div>
        </div>
      </section>

      {/* 滾動式差背景圖片區塊 */}
      <div className="relative w-full h-[70vh] overflow-hidden bg-black">
        <video
          src="/video/766143464.665555.mp4"
          autoPlay
          muted
          loop
          className="w-full h-auto "
        />
      </div>
      {/* Grid Gallery */}
      <div className="bg-foreground/85">
        <GridGallery images={slicedThirdImages} />
      </div>
    </div>
  );
};

export default page;
