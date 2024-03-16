import React from "react";

const Companies = () => {
  return (
    <div className="border m-12">
      <div className="p-4">
        <div className="w-4/12 border m-auto">
          <h1 className="text-center font-semibold text-4xl m-auto">
            200+ companies trust our products
          </h1>
        </div>
        <p className="text-center text-[15px] text-[#818181]">
          Transforming the future of finance organization, your Gateway to
          unparallel Fintech experience
        </p>
        {/* Companies */}
        <div className="grid grid-cols-5 place-items-center">
          <div className="border">one</div>
          <div className="border">two</div>
          <div className="border">three</div>
          <div className="border">four</div>
          <div className="border">five</div>
          <div className="border">Six</div>
          <div className="border">Seven</div>
          <div className="border">eight</div>
          <div className="border">nine</div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
