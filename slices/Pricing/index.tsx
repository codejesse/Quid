import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Pricing`.
 */
export type PricingProps = SliceComponentProps<Content.PricingSlice>;

/**
 * Component for "Pricing" Slices.
 */
const Pricing = ({ slice }: PricingProps): JSX.Element => {
  return (
    <section
      className="bg-white"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <div className="w-10/12 m-auto">
            <h2 className="mb-4 text-[40px] tracking-tight font-bold text-gray-900">
              {slice.primary.heading}
            </h2>
          </div>
          <p className="mb-5 font-light text-[#787878] w-8/12 m-auto leading-4 sm:text-[14px]">
            {slice.primary.description}
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          <>
            {slice.primary.prices.map((item, index) => (
              // Render the item
              <>
                {/* {console.log(item.type)} */}
                <div
                  key={index}
                  className={`flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-[15px] border border-[F4F4F4] shadow xl:p-8 ${item.type === "Professional" ? "border-[#EB632B]" : ""}`}
                >
                  {item.type === "Professional" ? (
                    <div className="border border-[#EB632B] bg-white absolute rounded-[25px] w-fit px-4 p-2 lg:bottom-[150px]">
                      🔥 Popular
                    </div>
                  ) : (
                    " "
                  )}
                  <h3 className="mb-4 text-2xl font-semibold">{item.type}</h3>
                  <p className="font-light text-gray-500 sm:text-lg">
                    {item.description}
                  </p>
                  <div className="flex justify-center items-baseline my-8">
                    <span className="mr-2 text-5xl font-medium">
                      {item.price}
                    </span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  <ul role="list" className="mb-8 space-y-4 text-left">
                    <li key={index} className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        <PrismicRichText field={item.features} />
                      </span>
                    </li>
                  </ul>
                  <a
                    href="#"
                    className="text-white bg-[#EB632B] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Get started
                  </a>
                </div>
              </>
            ))}
          </>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
