import React from "react";
import Image from "next/image";
import grid_1 from "../../assets/grid-1.svg";
import grid_2 from "../../assets/grid-2.png";
import grid_3 from "../../assets/grid-3.png";
import stats from "../../assets/stats.png";
import globe from "../../assets/globe.svg";
import currencies from "../../assets/currencies.svg";
import invoice from "../../assets/icons/invoice.svg";
import invoices from "../../assets/invoices.svg";

//icons
// import Card from "../../assets/icons/Card.svg";
import analytics from "../../assets/icons/stats.svg";
import Card_2 from "../../assets/icons/Card2.svg";

{
  /* Add padding or margin to bento grids container */
}

const About = () => {
  return (
    <div className="justify-center m-4 mt-10">
      <div className="w-8/12 md:w-4/12 lg:w-5/12 m-auto">
        <h1 className="text-center text-2xl md:text-2xl lg:text-4xl font-semibold">
          Feel the best experience with our features
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 lg:m-12 p-4">
        <div className="bg-gray-100 h-[583px] overflow-hidden rounded-[30px] p-10">
          <div className="w-10 h-10 bg-[#EB632B] rounded-full text-white">
            <Image
              className="mx-auto py-2"
              width={25}
              height={25}
              src={Card_2}
              alt="card-icon"
            />
          </div>
          <h3 className="lg:w-7/12 text-2xl mt-5">
            Create custom online cards with ease.
          </h3>
          <p className="font-regular lg:w-7/12 text-[#818181] mt-2">
            Our application gives you the power to create custom cards.
          </p>
          <Image className="ml-[-30px]" src={grid_1} alt="screens" />
        </div>
        <div className="bg-gray-100 overflow-hidden h-[583px] rounded-[30px] p-10">
          <div className="w-10 h-10 bg-[#EB632B] rounded-full text-white">
            <Image
              className="mx-auto py-2"
              width={25}
              height={25}
              src={analytics}
              alt="stats-icon"
            />
          </div>
          <h3 className="lg:w-8/12 text-2xl mt-5">
            Personalized financial insights and goals.
          </h3>
          <p className="font-regular lg:w-8/12 text-[#818181] mt-2">
            Create financial goals and have access to your spending habits from
            one place.
          </p>
          <div className="relative mt-5">
            <Image
              className="absolute inset-y-0 right-0 lg:top-20"
              src={stats}
              alt="stats"
            />
          </div>
          <Image src={grid_2} alt="screens" />
        </div>
      </div>
      <div className="p-4 lg:m-8">
        <div className="bg-gray-100 overflow-hidden h-[401px] rounded-[30px] p-10">
          <div className="w-10 h-10 bg-[#EB632B] rounded-full text-white">
            <Image
              className="mx-auto py-2"
              width={25}
              height={25}
              src={Card_2}
              alt="card-icon"
            />
          </div>
          <h3 className="lg:w-4/12 text-2xl mt-10">
            Free transfers anywhere around the world
          </h3>
          <p className="font-regular lg:w-4/12 mt-3 text-[#818181]">
            Experience the freedom of hassle-free transfers with our free
            transfer admin app. Say goodbye to hidden fees and charges.
          </p>
          <div className="relative">
            <Image
              className="absolute z-[999] mt-[-150px] inset-y-0 right-0"
              src={grid_3}
              alt="screens"
            />
          </div>
          <div className="relative">
            <Image
              className="absolute mt-[-100px] inset-y-0 right-0"
              src={globe}
              alt="globe"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 lg:m-12 p-4">
        <div className="bg-gray-100 h-[385px] rounded-[30px] p-8">
          <div className="w-14 h-14 bg-[#EB632B] rounded-full text-white">
            <Image
              className="mx-auto py-2"
              width={35}
              height={35}
              src={Card_2}
              alt="card-icon"
            />
          </div>
          <h2 className="text-[30px] mt-10">Hold money in 30+ currencies</h2>
          <Image
            width={0}
            height={0}
            className="w-full"
            src={currencies}
            alt="currencies"
          />
        </div>
        <div className="bg-gray-100 h-[385px] rounded-[30px] p-8">
          <div className="w-14 h-14 bg-[#EB632B] rounded-full text-white">
            <Image
              className="mx-auto py-2"
              width={35}
              height={35}
              src={invoice}
              alt="card-icon"
            />
          </div>
          <h2 className="text-[30px] mt-10">Your invoices all in one place</h2>
          <Image
            width={0}
            height={0}
            className="w-full"
            src={invoices}
            alt="currencies"
          />
        </div>
        <div className="bg-[#EB632B] h-[385px] rounded-[30px] bg-[url('/footer_bg.svg')] bg-right-top bg-contain">
          <h2 className="text-white text-4xl p-8">
            Check our more product detailed features
          </h2>
          <button className="m-10 flex flex-row bg-white p-4 rounded-full">
            View more{" "}
            <svg
              className="w-5 h-5 ml-2 -mr-1"
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
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
