"use client"; // 用 app router，互動式組件需要加這行
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Search from "./Search";

const Navbar = () => {
  const [isProductsHover, setIsProductsHover] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="relative overflow-x-hidden">
      <div className="navbar-container">
        <div className="marquee-container">
          <h1 className="marquee-content animate-marquee">
            HSIAO WEN SU PORTFOLIO
          </h1>
        </div>
        <header className="header-wrap">
          <Link href="/" className="logo-wrap">
            <span className="font-bold">HSIAOWENSU</span>
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden p-2 fixed top-10 right-4 z-50"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>

          {/* Desktop Navigation - Hidden on Mobile */}
          <div className="hidden md:flex">
            <ul className="main-nav">
              <li>
                <Link href="/">HOME</Link>
              </li>
              <li
                className="product-items"
                onMouseEnter={() => setIsProductsHover(true)}
                onMouseLeave={() => setIsProductsHover(false)}
              >
                <Link href="/projects/fashion" className="flex">
                  <span className="mr-2">PROJECTS</span>
                  <Image
                    className="invert"
                    src="/downArrow.svg"
                    alt="dropdown-icon"
                    width={10}
                    height={5}
                    priority
                  />
                </Link>
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
          </div>
        </header>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4">
          <ul className="mt-12 space-y-6">
            <li>
              <Link
                href="/"
                className="block py-2 text-2xl"
                onClick={handleLinkClick}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                href="/projects/fashion"
                className="block py-2 text-xl"
                onClick={handleLinkClick}
              >
                PROJECTS
              </Link>
              <ul className="pl-4 mt-2 space-y-3">
                <li>
                  <Link
                    href="/projects/fashion"
                    className="block py-1 text-2xl"
                    onClick={handleLinkClick}
                  >
                    FASHION
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects/graphic"
                    className="block py-1 text-2xl"
                    onClick={handleLinkClick}
                  >
                    GRAPHIC
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects/visual"
                    className="block py-1 text-2xl"
                    onClick={handleLinkClick}
                  >
                    VISUAL
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects/motion"
                    className="block py-1 text-2xl"
                    onClick={handleLinkClick}
                  >
                    MOTION
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects/website"
                    className="block py-1 text-2xl"
                    onClick={handleLinkClick}
                  >
                    WEBSITE
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href="/resume"
                className="block py-2 text-2xl"
                onClick={handleLinkClick}
              >
                RESUME
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
          onClick={toggleMobileMenu}
        />
      )}

      <div
        className={`dropdown-bg ${isProductsHover ? "scale-y-short" : ""}`}
      ></div>
    </nav>
  );
};

export default Navbar;
