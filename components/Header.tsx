import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Bounded from "./Bounded";
import Logo from "./Logo";
import SecondaryButton from "./SecondaryButton";
import { HeroProps } from "@/slices/Hero";
import { useState } from "react";

export default async function Header() {

  const client = createClient();

  const settings = await client.getSingle("settings");

  return (
    <nav className="flex items-center justify-between flex-wrap p-8">
      <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
        <Logo />
      </div>
      <div className="block lg:hidden">
        <button
          // onClick={}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <svg
            className={`fill-current h-3 w-3 block`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-3 w-3 hidden`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full hidden flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-sm lg:flex-grow">
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
          >
            First Link
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
          >
            Second Link
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
          >
            Third Link
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
          >
            Fourth Link
          </a>
        </div>
        <div>
          <button className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-[#EB632B] border border-[#EB632B] rounded-full hover:bg-[##e8885f]">
            Get start
          </button>
        </div>
      </div>
    </nav>
  );

  // return (
  //   <div className="border m-auto p-3">
  //     <div className="flex">
  //       <div>
  //         <Link className="" href="/">
  //           <Logo />
  //         </Link>
  //       </div>

  //       <nav className="border flex">
  //         <ul className="flex">
  //           {settings.data.navigation.map(({ link, label }) => (
  //             <li
  //               key={label}
  //               className="text-center px-3 py-2 cursor-pointer rounded-full text-[#818181] hover:text-[#EB632B]"
  //             >
  //               <PrismicNextLink field={link} className="p-3">
  //                 {label}
  //               </PrismicNextLink>
  //             </li>
  //           ))}
  //         </ul>
  //       </nav>
  //       <button className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-[#EB632B] border border-[#EB632B] rounded-full hover:bg-[##e8885f]">
  //         Get started
  //       </button>
  //     </div>
  //   </div>
  // );
}
