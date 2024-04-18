import React from "react";
import Image from "next/image";
import stripe from "../../assets/stripe.svg";
import dominos from "../../assets/dominos.svg";
import mastercard from "../../assets/mastercard.svg";
import visa from "../../assets/visa.svg";
import Google from "../../assets/google.svg";
import JW from "../../assets/jw.svg";
import Rover from "../../assets/rover.svg";
import MacDonalds from "../../assets/macdonalds.svg";
import Etsy from "../../assets/etsy.svg";
import PayPal from "../../assets/paypal.svg";


const Companies = () => {
  return (
    <div className="m-12">
      <div className="lg:p-4">
        <div className="w-11/12 md:w-4/12 lg:w-5/12 m-auto">
          <h1 className="text-center text-2xl md:text-2xl lg:text-4xl font-semibold">
            200+ companies trust our products
          </h1>
        </div>
        <div className="m-auto lg:w-4/12">
          <p className="text-center text-[15px] text-[#818181]">
            Transforming the future of finance organization, your Gateway to
            unparallel Fintech experience
          </p>
        </div>
        {/* Companies */}
        <div className="grid grid-cols-3 lg:grid-cols-5 justify-center place-items-center lg:gap-4 p-8 lg:p-24 mt-[-25px]">
          <div className="border px-3 py-2 rounded-lg">
            <Image src={stripe} alt="stripe" />
          </div>
          <div className="border px-3 py-2 rounded-lg">
            <Image src={mastercard} alt="stripe" />
          </div>
          <div className="border px-3 py-2 rounded-lg">
            <Image src={dominos} alt="stripe" />
          </div>
          <div className="border px-3 py-2 rounded-lg">
            <Image src={visa} alt="stripe" />
          </div>
          <div className="border px-3 py-2 rounded-lg">
            <Image src={Google} alt="stripe" />
          </div>
          <div className="border px-3 py-2 rounded-lg">
            <Image src={JW} alt="stripe" />
          </div>
          <div className="border px-3 py-2 rounded-lg">
            <Image src={MacDonalds} alt="stripe" />
          </div>
          <div className="border px-3 py-2 rounded-lg">
            <Image src={Etsy} alt="stripe" />
          </div>
          <div className="border px-3 py-2 rounded-lg">
            <Image src={PayPal} alt="stripe" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
