import React from "react";
import Image from "next/image";
import hero_img from "../../assets/quid_hero(2).svg";
import stripe from "../../assets/stripe.svg";
import mastercard from "../../assets/mastercard.svg";
import dominos from "../../assets/dominos.svg";
import visa from "../../assets/visa.svg";

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-xl mb-4 text-4xl font-semibold tracking-tight text-[#EB632B] leading-none md:text-5xl xl:text-7xl">
            Great way to organize your finances
          </h1>
          <p className="max-w-xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
            Transforming the future of finance organization, Your Gateway to
            unparallel Fintech experience
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 mr-8 text-white font-medium text-center rounded-full bg-[#EB632B] hover:bg-[#EB632B]"
          >
            Get started
            <svg
              className="w-5 h-5 ml-2 -mr-1 rotate-[-45deg]"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-[#EB632B] border border-[#EB632B] rounded-full hover:bg-[##e8885f]"
          >
            Learn more
          </a>
          <div className="mt-10">
            <p className="text-[#818181]">Powered by:</p>
            <div className="flex flex-row gap-5 ml-[-10px]">
              <Image src={stripe} alt="stripe-logo" />
              <Image src={mastercard} alt="stripe-logo" />
              <Image src={dominos} alt="stripe-logo" />
              <Image src={visa} alt="stripe-logo" />
            </div>
          </div>
        </div>
        <div className="lg:mt-0 lg:col-span-5 lg:flex">
          <Image
            className=""
            width={850}
            height={850}
            src={hero_img}
            alt="hero_img"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
