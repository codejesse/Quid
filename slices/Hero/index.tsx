import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import SecondaryButton from "@/components/SecondaryButton";
import { Children } from "react";
import Heading from "@/components/Heading";

const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <Heading as="h1" size="xl" className="md:mb-8 mb-4 mt-12 first:mt-0 last:mb-0">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="max-w-xl mb-6 font-light text-gray-500 lg:mb-8 text-sm md:text-lg lg:text-xl">
      {children}
    </p>
  ),
};

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {/* <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"> */}
      <div className="mr-auto place-self-center lg:col-span-7">
        <PrismicRichText
          field={slice.primary.heading}
          components={components}
        />
        <PrismicRichText field={slice.primary.body} components={components} />
        {/* Custom Button from components */}
        <Button field={slice.primary.button_link} className="">
          {slice.primary.button_text}
        </Button>
        <SecondaryButton field={slice.primary.secondary_link} className="">
          {slice.primary.secondary_button}
        </SecondaryButton>
        <div className="mt-10">
          <p className="text-[#818181]">Powered by:</p>
          <div className="flex flex-wrap lg:flex-row gap-5 ml-[-10px]">
            <>
              {slice.primary.powered_by.map((item) => {
                // Render the item
                <PrismicNextImage
                  field={item.company_logo}
                  className="w-2/12"
                />;
              })}
            </>
          </div>
        </div>
      </div>
      <div className="lg:mt-0 lg:col-span-5 lg:flex max-w-4xl w-full">
        <PrismicNextImage field={slice.primary.image} className="" />
      </div>
      {/* </div> */}
    </Bounded>
  );
};

export default Hero;
