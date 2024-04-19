"use client";

import About from "./components/About";
import Banner from "./components/Banner";
import Companies from "./components/Companies";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import { useState, useEffect } from "react";

// this will be the home page
export default function Home() {
  const handleScroll = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const backToTop = () => {
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [showButton, setShowButton] = useState(false);
  return (
    <main className="flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Companies />
      <Banner />
      <Testimonials />
      <Footer />
      {showButton && (
        <button
          onClick={backToTop}
          className={` ${
            showButton ? `inline-block` : `hidden`
          } fixed bottom-[40px] right-[40px] p-4 bg-[#EB632B] text-white font-medium text-xs rounded-full`}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            ></path>
          </svg>
        </button>
      )}
      {/* <div className="fixed bottom-0 right-0 p-4">
        <button
          className="bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center"
          // onclick="backToTop()"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            ></path>
          </svg>
        </button>
      </div> */}
    </main>
  );
}
