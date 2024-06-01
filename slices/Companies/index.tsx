import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <h2 className="text-center text-2xl md:text-2xl lg:text-4xl font-semibold">
      {children}
    </h2>
  ),
  paragraph: ({ children }) => (
    <p className="text-center text-[15px] text-[#818181]">{children}</p>
  ),
};

/**
 * Props for `Companies`.
 */
export type CompaniesProps = SliceComponentProps<Content.CompaniesSlice>;

/**
 * Component for "Companies" Slices.
 */
const Companies = ({ slice }: CompaniesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="m-4 lg:m-12"
    >
      <div className="lg:p-4">
        <div className="w-11/12 md:w-4/12 lg:w-5/12 m-auto">
          <PrismicRichText
            components={components}
            field={slice.primary.title}
          />
        </div>
        <div className="m-auto lg:w-4/12">
          <PrismicRichText
            components={components}
            field={slice.primary.description}
          />
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-5 justify-center place-items-center lg:gap-4 p-8 lg:p-24 mt-[-25px]">
            {slice.primary.company_logo.map((item, index) => (
              // Render the item
              <div key={index} className="border px-3 py-2 rounded-lg">
                <PrismicNextImage field={item.logo} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
