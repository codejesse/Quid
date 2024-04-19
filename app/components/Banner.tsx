import React from "react";
import Mockup from "../../assets/quid_hero(3).svg";
import Quid_banner_logo from "../../assets/logo_big.svg";
import Image from "next/image";

import AppleIcon from "../../assets/icons/Apple.svg";
import PlayIcon from "../../assets/icons/GooglePlay.svg";

const Banner = () => {
  return (
    <div className="m-4 lg:m-12">
      <div className="bg-[#F6F7F9] flex-col h-full rounded-[35px] w-full p-8">
        <h1 className="text-center text-[35px] lg:text-[45px] font-semibold text-[#040404]">
          Get the fintech mobile app.
        </h1>
        <div className="flex lg:w-4/12 m-auto text-center">
          <p className="text-[18px] text-[#818181]">
            Create financial goals and have access to your spending habits from
            one place.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 m-auto mt-4 mb-8 w-fit gap-4">
          <button className="flex flex-row p-4 border rounded-full">
            <Image
              className="mr-4 m-auto"
              width={35}
              height={35}
              src={AppleIcon}
              alt="apple-icon"
            />
            <div className="text-left">
              <p>Download on the</p>
              <p>Appstore</p>
            </div>
          </button>
          <button className="flex flex-row p-4 border rounded-full">
            <Image
              className="mr-4 m-2"
              width={35}
              height={35}
              src={PlayIcon}
              alt="play-icon"
            />
            <div className="text-left">
              <p>Get it on</p>
              <p>Google play</p>
            </div>
          </button>
        </div>

        <div className="flex flex-col justify-center w-full">
          <div className="m-auto">
            <div className="relative">
              <Image
                className="absolute z-[999] mt-[-150px] inset-y-0 top-20"
                height={850}
                width={850}
                src={Mockup}
                alt="app_mockup"
              />
            </div>
            <div className="relative">
              <Image
                height={500}
                width={500}
                src={Quid_banner_logo}
                alt="logo_big"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
