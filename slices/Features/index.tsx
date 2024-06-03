import { Content } from "@prismicio/client";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { Children } from "react";
import { PrismicNextImage } from "@prismicio/next";

//icon imports
import { TbCards, TbBrandGoogleAnalytics, TbInvoice } from "react-icons/tb";
import { FaMoneyBillTransfer, FaFileInvoiceDollar } from "react-icons/fa6";
import { BsCurrencyExchange, BsCashStack } from "react-icons/bs";

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <h2 className="text-center mb-12 text-3xl">{children}</h2>
  ),
  heading3: ({ children }) => (
    <h3 className="lg:w-7/12 text-2xl mt-5">{children}</h3>
  ),
  paragraph: ({ children }) => (
    <p className="font-regular lg:w-8/12 text-[#818181] mt-2">{children}</p>
  )
};

const icons = {
  //map each icon to the jsx icons or from icons library
  Cards: <TbCards size={25} className="m-auto" />,
  Analytics: <TbBrandGoogleAnalytics size={25} className="m-auto"  />,
  Transfers: <FaMoneyBillTransfer size={25} className="m-auto"  />,
  Invoice: <TbInvoice size={25} className="m-auto"  />,
  Exchange: <BsCurrencyExchange size={25} className="m-auto"  />,
  Cash: <BsCashStack size={25} className="m-auto my-auto"  />,
};

/**
 * Props for `Features`.
 */
export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>;

/**
 * Component for "Features" Slices.
 */
const Features = ({ slice }: FeaturesProps): JSX.Element => {
  return (
    <section
      className="mt-10 px-4 py-8"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText components={components} field={slice.primary.heading} />

      {/* Grids */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 lg:m-12 p-4">
        {slice.primary.feature_blocks.map((item, index) => (
          <div key={index}>
            <div className="bg-gray-100 overflow-hidden h-fit lg:h-[583px] rounded-[30px] p-10">
              <div className="w-10 h-10 bg-[#EB632B] rounded-full text-white">
                {item.icon && (
                  <div className="mx-auto py-2">{icons[item.icon]}</div>
                )}
              </div>
              <h3 className="lg:w-7/12 text-2xl mt-5"></h3>
              <PrismicRichText components={components} field={item.title} />
              <PrismicRichText components={components} field={item.description} />
              <div className="relative mt-5">
                <PrismicNextImage field={item.image} />
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Features banner with globe */}
      <div className="p-4 lg:m-8">
        <div className="bg-gray-100 overflow-hidden h-[401px] rounded-[30px] p-10">
          <div className="w-10 h-10 bg-[#EB632B] rounded-full text-white">
            {slice.primary.icon && (
              <div className="mx-auto py-2">{icons[slice.primary.icon]}</div>
            )}
          </div>
          <div className="lg:w-4/12 text-2xl mt-10">
            <PrismicRichText field={slice.primary.feature_banner_title} />
          </div>
          <div className="font-regular lg:w-4/12 mt-3 text-[#818181]">
            <PrismicRichText field={slice.primary.feature_banner_description} />
          </div>
          <div className="relative">
            <div className="absolute z-[999] lg:mt-[-150px] inset-y-0 right-0">
              <PrismicNextImage field={slice.primary.feature_banner_image} />
            </div>
          </div>
          <div className="relative">
            <div className="absolute lg:mt-[-100px] inset-y-0 right-0">
              <PrismicNextImage field={slice.primary.banner_globe} />
            </div>
          </div>
        </div>
      </div>

      {/* bottom grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 lg:m-12 p-4">
        {slice.primary.features_block_bottom.map((item, index) => (
          // Render the item
          <div
            key={index}
            className="bg-gray-100 h-[385px] rounded-[30px] p-8 overflow-hidden"
          >
            <div className="w-14 h-14 bg-[#EB632B] rounded-full text-white">
              {item.icon && (
                <div className="py-4">{icons[item.icon]}</div>
              )}
            </div>
            <div className="text-[30px] mt-10">
              <PrismicRichText field={item.features_block_bottom_title} />
            </div>
            <div className="w-full">
              <PrismicNextImage field={item.features_block_bottom_image} />
            </div>
          </div>
        ))}
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
    </section>
  );
};

export default Features;
