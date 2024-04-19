import React from "react";
import logo from "../../assets/quid_logo(2).png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="m-4 lg:m-12">
      <div className="bg-[#EB632B] h-[778px] rounded-xl w-full bg-[url('/footer_bg.svg')] bg-no-repeat bg-right-top">
        <div className="p-10">
          <h1 className="text-white text-[50px] mt-4 leading-11 w-12/12 md:w-7/12 lg:w-5/12">
            Keep up with the latest
          </h1>
          <p className="text-[15px] text-white font-regular">
            Join our newsletter to stay up to date with latest updates
          </p>
          <div className="flex justify-end gap-2">
            <input
              placeholder="Enter email address"
              className="p-5 py-7 w-3/12 h-10 bg-white rounded-full float-right"
            />
            <button className="p-4 px-5 bg-black rounded-full text-white">
              Subscribe
            </button>
          </div>
          <hr className="h-px my-8 bg-white border-0"></hr>
          <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between ">
              <div className="mb-6 md:mb-0">
                <a href="#" className="flex items-center">
                  <Image src={logo} alt="quid-logo" />
                  <span className="self-center text-2xl ml-2 font-semibold whitespace-nowrap text-white">
                    Quid
                  </span>
                </a>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:gap-40 sm:grid-cols-3">
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                    Contact
                  </h2>
                  <ul className="text-white font-medium">
                    <li className="mb-4">
                      <a
                        href="https://flowbite.com/"
                        className="hover:underline"
                      >
                        +12347783907
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://tailwindcss.com/"
                        className="hover:underline"
                      >
                        hello@fintech.app
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                    Explore
                  </h2>
                  <ul className="text-white font-medium">
                    <li className="mb-4">
                      <a
                        href="https://github.com/themesberg/flowbite"
                        className="hover:underline "
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://discord.gg/4eeurUVvTy"
                        className="hover:underline"
                      >
                        Discord
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                    Support
                  </h2>
                  <ul className="text-white font-medium">
                    <li className="mb-4">
                      <a href="#" className="hover:underline">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        Terms &amp; Conditions
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="lg:mt-[-100px] mb:mt-[-100px] sm:mt-[-100px] mb-6 text-sm font-semibold text-white uppercase">
                    Address
                  </h2>
                  <ul className="text-white font-medium">
                    <li className="mb-4">
                      <a href="" className="hover:underline text-[15px]">
                        5432B Avenue Lane New York United States of America
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
