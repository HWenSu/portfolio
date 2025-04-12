"use client";
import Link from "next/link";
import Image from "next/image";
import ShaderImg from "@/components/ShaderImg";
import CategoryCard from "@/components/CategoryCard";
import BlurText from "@/components/BlurText";
import IntroList from "@/components/IntroList";
import CustomCursor from "@/components/CustomCursor";
import { useCustomCursor } from "@/hooks/useCustomCursor";
import Gallery from "@/components/Gallery";
import { useEffect, useState } from "react";


export default function Home() {
  // 調用自訂義鼠標Hook
  const { cursorActive, cursorText, handleCursor, resetCursor } =
    useCustomCursor();

  //從API獲取GALLERY圖片
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("/api/get-images")
      .then((res) => res.json())
      .then(setImages)
      .catch((err) => console.error("Error fetching images:", err));
  }, []);

  return (
    <div className="home-page-container">
      {/* 自訂義滑鼠 */}
      <CustomCursor active={cursorActive} cursorText={cursorText} />
      {/* 影片區塊 */}
      <section
        className="video-section cursor-none"
        onMouseEnter={() => handleCursor("Scroll")}
        onMouseLeave={resetCursor}
      >
        <video
          src={"/video/Final Comp.mp4"}
          autoPlay
          muted
          loop
          className="w-full h-auto sticky top-0"
        />
        <div className="h-[30vh] z-10 relative">
          <div className="sticky top-[80vh] w-full">
            <h2 className="text-white text-[2rem] font-bold text-center animate-scale-up">
              FE INNOVATION DESIGN
            </h2>
          </div>
        </div>
      </section>
      {/* 主圖區塊 自訂義滑鼠開啟 */}
      <section className="hero-section relative">
        <div className="grid-bg">
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
        </div>
        <div
          className="cursor-none"
          onMouseEnter={() => handleCursor("hover")}
          onMouseLeave={resetCursor}
        >
          <ShaderImg imgUrl={"/image/TNB_background_removed(3).png"} />
        </div>
        <div className="circle-item"></div>
        <div className="hero-grid">
          <div></div>
          <aside className="hero-grid-1">
            <Link href="/products">
              <Image
                src="/image/hero-man.png"
                alt="mens"
                width={300}
                height={400}
                priority
              />
            </Link>
            <Link href="/products">
              <Image
                src="/image/hero-woman.png"
                alt="mens"
                width={300}
                height={400}
                priority
              />
            </Link>
          </aside>
          <div className="hero-grid-2">
            <div className="hero-center-text">
              <p>// GRAPHIC</p>
            </div>
            <div className="hero-center-text">
              <p> // FASHION</p>
            </div>
            <div className="hero-center-text">
              <p>// CODING</p>
            </div>
          </div>
          <div className="hero-grid-3"></div>
          <div className="hero-grid-4"></div>
          <div className="hero-grid-5">
            <div>
              <h2>WHAT I CAN DO?</h2>
            </div>
            <div>
              <h2>CREATE</h2>
              <p>
                2 SEASION IN 1 YEAR OVER 50 GRAPHICS NEW SEASONAL SAMPLES
                SHOWCASE DESIGN CONCEPT SHARING
              </p>
            </div>
            <div>
              <h2>CO-CREATION</h2>
            </div>
            <div>
              <h2>UPDATE</h2>
              <p>THE EXISTING STYLE TO 2.0</p>
            </div>
          </div>
        </div>
      </section>
      {/* 文字說明區塊 */}
      <section className="bg-[#E1E1E1]  flex flex-col pt-[20rem]  scroll-section text-[4rem]">
        <div
          className="sticky top-40 pr-[5rem] cursor-none"
          onMouseEnter={() => handleCursor("Scroll")}
          onMouseLeave={resetCursor}
        >
          <div className=" flex justify-end ">
            <BlurText words={"TOGETHER, WE CREATE TOMORROW"} />
          </div>
          <div className="flex h-[60rem] justify-end">
            <div>
              <BlurText words={"HSIAO WEN SU"} />
            </div>
            <div className="animate-scroll-broaden w-[10rem] overflow-hidden">
              <Image
                src="/image/The New Black 003.jpeg"
                alt="mens"
                width={300}
                height={400}
                className="w-full object-cover pl-[1rem]"
              />
            </div>
          </div>
        </div>
        <div className=" bg-[#232323] z-10 py-15 rounded-t-[8rem]  mx-[2rem]">
          <IntroList
            invert={"invert"}
            videoUrl={"/video/Colab2022.mp4"}
            listItem={["Innovation", "Flexible", "Efficient"]}
          />
        </div>
      </section>
      {/* Gallery區塊 */}
      <section className="relative bg-foreground">
        <h2 className="sticky top-0 text-background text-[3rem] pl-25 pt-20">
          ARTWORKS
        </h2>
        <div
          className="w-full h-[90vh] cursor-none"
          onMouseEnter={() => handleCursor("Hover")}
          onMouseLeave={resetCursor}
        >
          <Gallery images={images.slice(0, 20)} />
        </div>
      </section>
      {/* 分類卡片區塊 */}
      <section
        className="bg-foreground h-[100vh] w-full cursor-none  relative"
        onMouseEnter={() => handleCursor("Click")}
        onMouseLeave={resetCursor}
      >
        <h2 className="sticky top-0 text-background text-[3rem] pl-25 pt-20">
          PROJECTS
        </h2>
        <CategoryCard cursorActive={cursorActive} />
      </section>
    </div>
  );
}
