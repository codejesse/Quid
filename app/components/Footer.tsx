import React from "react";
import logo from "../../assets/quid_logo(2).png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="m-12">
      <div className="bg-[#EB632B] h-[778px] rounded-xl w-full bg-[url('/footer_bg.svg')] bg-no-repeat bg-right-top">
        <div className="p-10">
          <div className="w-10 h-10 bg-white rounded-full"></div>
          <h1 className="text-white text-[50px] mt-4 leading-11 w-12/12 md:w-7/12 lg:w-5/12">
            Keep up with the latest
          </h1>
          <div className="flex flex-col md:flex-col lg:flex-row border">
            <p className="text-[15px] text-white font-regular">
              Join our newsletter to stay up to date with latest updates
            </p>
            <div className="flex gap-2">
              <input
                placeholder="Enter email address"
                className="p-5 py-7 w-3/12 h-10 bg-white rounded-full float-right"
              />
              <button className="p-4 px-5 bg-black rounded-full text-white">
                Subscribe
              </button>
            </div>
          </div>
          <hr className="h-px my-8 bg-white border-0"></hr>
          <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between">
              <div className="mb-6 md:mb-0">
                <a href="#" className="flex items-center">
                  <Image src={logo} alt="quid-logo" />
                  <span className="self-center text-2xl ml-2 font-semibold whitespace-nowrap dark:text-white">
                    Quid
                  </span>
                </a>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:gap-40 sm:grid-cols-3">
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    Contact
                  </h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <a
                        href="https://flowbite.com/"
                        className="hover:underline"
                      >
                        Flowbite
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://tailwindcss.com/"
                        className="hover:underline"
                      >
                        Tailwind CSS
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    Explore
                  </h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
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
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    Support
                  </h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
