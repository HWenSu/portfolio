"use client";
import Image from "next/image";
import ShaderImg from "@/components/ShaderImg";
import CustomCursor from "@/components/CustomCursor";
import { useCustomCursor } from "@/hooks/useCustomCursor";

const Motion = () => {
  // 調用自訂義鼠標Hook
  const { cursorActive, cursorText, handleCursor, resetCursor } =
    useCustomCursor();

  // 影片清單
  const videoSrc = [
    "793b8cec89574874de9998bb344d7e19 - Trim",
    "339244e6b2abbc35d8fe8b487c781288",
    "3238938ce2829bebf9b347fc5da1bd68",
    "aa42d3ad515c2fe0057fc02b7895de33 - Trim",
    "aad8ebf5d42fc646a358b32523c20f3f - Trim",
    "b6b053847975207f2c38dc7a74b1c903",
    "d2309668843e50226ce0c149a08969f4 - Trim",
    "f8f68f33cd7e460d702ba12676b60750 - Trim",
    "fb2318fcf7ba53ee4433746ca0b872ae",
  ];

  return (
    <div className="about-page-container">
      {/* 自訂義滑鼠 */}
      <CustomCursor active={cursorActive} cursorText={cursorText} />
      {/* 主介紹區 */}
      <section className="about-design-section h-[80vw]">
        {/* <Image
          src="/image/about-bg.png"
          alt="about-bg"
          width={400}
          height={200}
          className="w-[80vw] absolute top-[50vh] -left-[10vw]"
        /> */}
        <div
          className="cursor-none"
          onMouseEnter={() => handleCursor("Hover")}
          onMouseLeave={resetCursor}
        >
          <ShaderImg imgUrl={"/image/about.png"} />
        </div>
        <div className="about-items-container">
          <div className="about-item">
            <Image
              src="/decorationArrow.svg"
              alt="deco arrow"
              width={20}
              height={10}
            />
            <div className="about-large-w">
              <h3>MOTION</h3>
              <p>INHOUSE DESIGN</p>
            </div>
            <Image
              className="col-start-4 rotate-270"
              src="/decorationArrow.svg"
              alt="deco arrow"
              width={20}
              height={10}
            />
            <h3 className="about-large-w about-item-right text-secondary">
              PRESENTATION
            </h3>
          </div>
          <div className="about-item">
            <h2 className="about-item-center">ELVA</h2>
            <div className="about-large-w about-item-right">
              <h3>CREATE</h3>
              <p>
                2 SEASON IN 1 YEAR OVER 100 STYLES NEW SEASONAL SAMPLES SHOWCASE
                DESIGN CONCEPT SHARING
              </p>
            </div>
          </div>
          <div className="about-item">
            <Image
              className="about-item-center"
              src="/decorationSlash.svg"
              alt="decoration slash"
              width={60}
              height={40}
            />
            <h3 className="about-item-right">CO-CREATION</h3>
          </div>
          <div className="about-item">
            <div className="col-start-2">
              <h3 className="about-large-w ">DESIGN </h3>
              <h3>MOTION</h3>
              <h3>GRAPHIC</h3>
            </div>
            <h2 className="about-item-center">SU HSIAO WEN</h2>
            <h3 className="about-large-w about-item-right">
              UPDATE THE EXISTING STYLE TO 2.0
            </h3>
          </div>
        </div>
      </section>
      {/* 影片區塊 */}
      <section className="bg-foreground">
        <div className="flex  flex-col justify-center items-center w-[50vw] mx-auto ">
          {videoSrc.map((src) => (
            <video
              src={`/video/${src}.mp4`}
              playsInline
              autoPlay
              muted
              controls
              className="w-full h-auto my-[3rem]"
              key={src}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Motion;
