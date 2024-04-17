import React from "react";
import Image from "next/image";
import stripe from "../../assets/stripe.svg";
import dominos from "../../assets/dominos.svg";
import mastercard from "../../assets/mastercard.svg";
import visa from "../../assets/visa.svg";

const Companies = () => {
  return (
    <div className="border m-12">
      <div className="p-4">
        <div className="w-8/12 md:w-4/12 lg:w-5/12 m-auto">
          <h1 className="text-center text-2xl md:text-2xl lg:text-4xl font-semibold">
            200+ companies trust our products
          </h1>
        </div>
        <div className="m-auto w-4/12">
          <p className="text-center text-[15px] text-[#818181]">
            Transforming the future of finance organization, your Gateway to
            unparallel Fintech experience
          </p>
        </div>
        {/* Companies */}
        <div className="grid grid-cols-5 place-items-center gap-4 mt-5">
          <div className="border">
            <Image src={stripe} alt="stripe" />
          </div>
          <div className="border">
            <Image src={dominos} alt="stripe" />
          </div>
          <div className="border">
            <Image src={mastercard} alt="stripe" />
          </div>
          <div className="border">
            <Image src={visa} alt="stripe" />
          </div>
          <div className="border">
            <Image src={stripe} alt="stripe" />
          </div>
          <div className="border">
            <Image src={stripe} alt="stripe" />
          </div>
          <div className="border">
            <Image src={stripe} alt="stripe" />
          </div>
          <div className="border">
            <Image src={stripe} alt="stripe" />
          </div>
          <div className="border">
            <Image src={stripe} alt="stripe" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
