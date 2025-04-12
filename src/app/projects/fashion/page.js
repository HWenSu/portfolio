"use client";
import APIFetcher from "@/components/APIFetcher";
import Gallery from "@/components/Gallery";
import ProductsList from "@/components/ProductsList";
import BlurText from "@/components/BlurText";
import IntroList from "@/components/IntroList";
import CustomCursor from "@/components/CustomCursor";
import { useCustomCursor } from "@/hooks/useCustomCursor";
import Card3DHover from "@/components/Card3DHover";

const page = () => {
  // 調用自訂義鼠標Hook
  const { cursorActive, cursorText, handleCursor, resetCursor } =
    useCustomCursor();

  return (
    <div className="print-page-container">
      {/* 自訂義滑鼠 */}
      <CustomCursor active={cursorActive} cursorText={cursorText} />
      {/* 介紹區塊 */}
      <section className="w-full h-[90vh]  ">
        <div className="w-full h-full bg-black text-white scroll-section flex flex-col justify-between pb-[10rem]">
          <BlurText words={"JACQUARD DESIGN"} />
          <Card3DHover/>
        </div>
      </section>
      {/* 商品列表區塊 */}
      <section className="my-[10em]">
        <ProductsList url={"/data/productsData.json"} />
      </section>
      {/* 技法選單區塊 */}
      <section className=" my-[15rem] relative">
        <IntroList
          videoUrl={"/video/Colab2022.mp4"}
          listItem={[
            "Create Volume with Print",
            "Soft Texture",
            "Special Techniques",
          ]}
        />
      </section>
      {/* 滾動式差背景圖片區塊 */}
      <div className="relative w-full h-[70vh] overflow-hidden bg-black">
        <div className="w-full h-full bg-[url('/image/print-hero.jpg')] bg-cover bg-center bg-fixed">
          <div className="w-full h-full flex items-center justify-center text-white text-4xl font-bold">
            Runway Style
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
