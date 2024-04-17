import React from "react";
import Image from "next/image";
import grid_1 from "../../assets/grid-1.svg";
import grid_2 from "../../assets/grid-2.png";
import grid_3 from "../../assets/grid-3.png";
import stats from "../../assets/stats.png";
import globe from "../../assets/globe.svg";

//icons
import Card from "../../assets/icons/Card.svg";
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
              className="text-center"
              width={30}
              height={30}
              src={Card}
              alt="card-icon"
            />
          </div>
          <h3 className="w-7/12 text-2xl mt-5">
            Create custom online cards with ease.
          </h3>
          <p className="font-regular w-7/12 text-[#818181]">
            Our application gives you the power to create custom cards.
          </p>
          <Image className="ml-[-30px]" src={grid_1} alt="screens" />
        </div>
        <div className="bg-gray-100 overflow-hidden h-[583px] rounded-[30px] p-10">
          <div className="w-10 h-10 bg-[#EB632B] rounded-full text-white">
            <Image
              className="text-center"
              width={30}
              height={30}
              src={analytics}
              alt="stats-icon"
            />
          </div>
          <h3 className="w-8/12 text-2xl mt-5">
            Personalized financial insights and goals.
          </h3>
          <p className="font-regular w-8/12 text-[#818181]">
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
              className="text-center"
              width={30}
              height={30}
              src={Card_2}
              alt="card-icon"
            />
          </div>
          <h3 className="w-7/12 text-2xl">
            Free transfers anywhere around the world
          </h3>
          <p className="font-regular  w-5/12 text-[#818181]">
            Experience the freedom of hassle-free transfers with our free
            transfer admin app. Say goodbye to hidden fees and charges.
          </p>
          <div className="relative">
            <Image
              className="absolute z-[999] inset-y-0 right-0"
              src={grid_3}
              alt="screens"
            />
          </div>
          <div className="relative">
            <Image
              className="absolute inset-y-0 right-0"
              src={globe}
              alt="globe"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 lg:m-12 p-4 border border-red-400">
        <div className="bg-gray-100 h-56 rounded-xl">Grid four</div>
        <div className="bg-gray-100 h-56 rounded-xl">Grid five</div>
        <div className="bg-[#EB632B] h-56 rounded-xl bg-[url('/footer_bg.svg')] bg-right-top bg-contain">
          <h2 className="text-white text-2xl w-8/12">
            Check our more product detailed features
          </h2>
        </div>
      </div>
    </div>
  );
};

export default About;
