import React from "react";
import Mockup from "../../assets/quid_hero(3).svg";
import Quid_banner_logo from "../../assets/logo_big.svg";
import Image from "next/image";

import AppleIcon from "../../assets/icons/Apple.svg";
import PlayIcon from "../../assets/icons/GooglePlay.svg";

const Banner = () => {
  return (
    <div className="m-12">
      <div className="bg-[#F6F7F9] flex-col h-full rounded-[35px] w-full p-8">
        <h1 className="text-center text-[45px] font-semibold tex-[#040404]">
          Get the fintech mobile app.
        </h1>
        <div className="flex border flex-col justify-center w-full">
          <p className="text-center justify-center w-4/12 text-[#818181]">
            Create financial goals and have access to your spending habits from
            one place.
          </p>
          <div className="flex flex-col lg:flex-row gap-10">
            <button className="flex flex-row gap-4 border px-7 py-3 rounded-full">
              <Image width={35} height={35} src={AppleIcon} alt="Apple-icon" />
              <div className="flex flex-col text-left">
                <p>Download on the</p>
                <p>Appstore</p>
              </div>
            </button>
            <button className="flex flex-row gap-4 border px-7 py-3 rounded-full">
              <Image width={35} height={35} src={PlayIcon} alt="Apple-icon" />
              <div className="flex flex-col text-left">
                <p>Download on</p>
                <p>Playstore</p>
              </div>
            </button>
          </div>
          <div className="relative">
            <Image
              className="absolute z-[999] mt-[-150px] inset-y-0 top-20"
              height={500}
              width={500}
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
  );
};

export default Banner;
