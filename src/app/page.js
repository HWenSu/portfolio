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
  // 預設是電腦
  const [isDesktop, setIsDesktop] = useState(true);

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

  // 判斷
  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover)");
    setIsDesktop(mediaQuery.matches);

    const handler = (e) => setIsDesktop(e.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // 封裝客製化滑鼠函式
  const getMouseEvents = (enterFn, leaveFn) => {
    return isDesktop ? { onMouseEnter: enterFn, onMouseLeave: leaveFn } : {};
  };

  return (
    <div className="home-page-container overflow-hidden">
      {/* 自訂義滑鼠 */}
      <CustomCursor active={cursorActive} cursorText={cursorText} />
      {/* 影片區塊 */}
      <section
        className="video-section cursor-none relative  h-screen"
        {...getMouseEvents(() => handleCursor("Scroll"), resetCursor)}
      >
        <video
          src={"/video/Final Comp.mp4"}
          playsInline
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <h2 className="text-white text-2xl md:text-4xl font-bold text-center animate-scale-up px-4">
            FE INNOVATION DESIGN
          </h2>
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
          className="cursor-none "
          {...getMouseEvents(() => handleCursor("hover"), resetCursor)}
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
              <p>GRAPHIC</p>
            </div>
            <div className="hero-center-text">
              <p>FASHION</p>
            </div>
            <div className="hero-center-text">
              <p>CODING</p>
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
      <section className="home-blur-info-card  scroll-section">
        <div
          className="sticky top-40 pr-[5rem] cursor-none"
          {...getMouseEvents(() => handleCursor("Scroll"), resetCursor)}
        >
          <div className=" flex justify-end ">
            <BlurText words={"TOGETHER, WE CREATE TOMORROW"} />
          </div>
          <div className="flex h-[15vh] justify-end md:h-[60vh]">
            <div>
              <BlurText words={"HSIAO WEN SU"} />
            </div>
            <div className="animate-scroll-broaden blur-img-container ">
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
            videoUrl={"/video/P-E.mp4"}
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
          className="w-full h-[40vh] cursor-none md:h-[90vh]"
          {...getMouseEvents(() => handleCursor("hover"), resetCursor)}
        >
          <Gallery images={images.slice(0, 20)} isDesktop={isDesktop} />
        </div>
      </section>
      {/* 分類卡片區塊 */}
      <section
        className="bg-foreground  w-full cursor-none relative md:h-[100vh]"
        {...getMouseEvents(() => handleCursor("Click"), resetCursor)}
      >
        <h2 className="sticky top-0 text-background text-[3rem] pl-25 pt-20">
          PROJECTS
        </h2>
        <CategoryCard cursorActive={cursorActive} />
      </section>
    </div>
  );
}
