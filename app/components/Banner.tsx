import React from "react";

const Banner = () => {
  return (
    <div className="m-12">
      <div className="bg-[#F6F7F9] h-56 rounded-xl w-full p-8">
        <h1 className="text-center text-[45px] font-semibold tex-[#040404]">
          Get the fintech mobile app.
        </h1>
        <div className="flex justify-center w-full">
          <p className="text-center w-4/12 text-[#818181]">
            Create financial goals and have access to your spending habits from
            one place.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
