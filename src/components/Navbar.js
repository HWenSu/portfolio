"use client"; // 用 app router，互動式組件需要加這行
import {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import Search from "./Search";


const Navbar = () => {
  const [isProductsHover, setIsProductsHover] = useState(false);

  return (
    <nav>
      <div className="navbar-container">
        <div className="marquee-container ">
          <h1 className="marquee-content animate-marquee">
            HSIAO WEN SU PORTFOLIO
          </h1>
        </div>
        <header className="header-wrap">
          <Link href="/" className="logo-wrap">
            <span className="font-bold ">HSIAOWENSU</span>
          </Link>
          <ul className="main-nav">
            <li
              className="product-items"
              onMouseEnter={() => setIsProductsHover(true)}
              onMouseLeave={() => setIsProductsHover(false)}
            >
              <Link href="/products" className="flex">
                <span className="mr-2">PROJECTS</span>
                <Image
                  className="invert "
                  src="/downArrow.svg"
                  alt="dropdown-icon"
                  width={10}
                  height={5}
                  priority
                />
              </Link>
              {/* Products 下拉選單清單 */}
              <ul className="products-drop-down-container -translate-x-1/4">
                <li>
                  <Link href="/projects/fashion">FASHION</Link>
                </li>
                <li>
                  <Link href="/projects/graphic">GRAPHIC</Link>
                </li>
                <li>
                  <Link href="/projects/visual">VISUAL</Link>
                </li>
                <li>
                  <Link href="/projects/motion">MOTION</Link>
                </li>
                <li>
                  <Link href="/projects/website">WEBSITE</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/resume">RESUME</Link>
            </li>
          </ul>
          <ul className="main-nav ">
            <li>
              <Link href="/contact">CONTACT</Link>
            </li>
          </ul>
          {/* 下拉選單背景框 */}
        </header>
      </div>
      <div
        className={`dropdown-bg ${isProductsHover ? "scale-y-short" : ""} `}
      ></div>
    </nav>
  );
};

export default Navbar;
