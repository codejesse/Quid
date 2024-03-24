import React from "react";
import Image from "next/image";
import grid_1 from "../../assets/grid-1.svg";
import grid_2 from "../../assets/grid-2.png";
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 lg:m-12 p-4 border border-red-400">
        <div className="bg-gray-100 h-[583px] overflow-hidden rounded-xl p-5">
          <div className="w-10 h-10 bg-[#EB632B] rounded-full text-white">
            icon
          </div>
          <h3 className="w-7/12 text-2xl">
            Create custom online cards with ease.
          </h3>
          <p className="font-regular text-[#818181]">
            Our application gives you the power to create custom cards.
          </p>
          <Image src={grid_1} alt="screens" />
        </div>
        <div className="bg-gray-100 overflow-hidden h-[583px] rounded-xl p-5">
          <div className="w-10 h-10 bg-[#EB632B] rounded-full text-white">
            icon
          </div>
          <h3 className="w-7/12 text-2xl">
            Personalized financial insights and goals.
          </h3>
          <p className="font-regular text-[#818181]">
            Create financial goals and have access to your spending habits from
            one place.
          </p>
          <Image src={grid_2} alt="screens" />
        </div>
      </div>
      <div className="p-4 lg:m-8">
        <div className="bg-gray-100 h-56 rounded-xl p-5">
          <div className="w-10 h-10 bg-[#EB632B] rounded-full text-white">
            icon
          </div>
          <h3 className="w-7/12 text-2xl">
            Free transfers anywhere around the world
          </h3>
          <p className="font-regular text-[#818181]">
            Experience the freedom of hassle-free transfers with our free
            transfer admin app. Say goodbye to hidden fees and charges.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 lg:m-12 p-4 border border-red-400">
        <div className="bg-gray-100 h-56 rounded-xl">Grid four</div>
        <div className="bg-gray-100 h-56 rounded-xl">Grid five</div>
        <div className="bg-gray-100 h-56 rounded-xl">Grid six</div>
      </div>
    </div>
  );
};

export default About;
