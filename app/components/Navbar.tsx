"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../assets/quid_logo.png";

const people = ["Products", "Pricing", "Blog", "Contact"];

const listItems = people.map((person, id) => (
  <li key={id} className="px-3 py-2 cursor-pointer rounded-full hover:text-[#EB632B]">
    {person}
  </li>
));
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="container relative m-auto p-3 flex justify-between items-center">
      <div className="flex flex-row gap-2">
        <Image width={40} src={logo} alt="quid_logo" />
        <h1 className="font-xl font-bold text-[#EB632B] my-auto">Quid</h1>
      </div>
      <nav className={isOpen ? "flex" : " hidden md:flex"}>
        <ul className="flex bg-white absolute md:relative mx-auto flex-col  md:flex-row w-full shadow md:shadow-none text-center top-12 left-10 lg:left-10 md:top-0 md:flex">
          {listItems}
        </ul>
      </nav>
      <button className="hidden lg:flex md:flex border border-[#EB632B] p-2 px-6 rounded-full text-[#EB632B]">
        Get Started
      </button>
      <div className="md:hidden">
        <button
          className="flex justify-center items-center"
          onClick={toggleNavbar}
        >
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={isOpen ? "hidden" : "flex"}
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={isOpen ? "flex" : "hidden"}
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  );
}
export default Navbar;
