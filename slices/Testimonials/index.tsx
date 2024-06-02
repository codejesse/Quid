import { Content, isFilled } from "@prismicio/client";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <h2 className="text-center text-2xl md:text-2xl lg:text-4xl font-semibold">
      {children}
    </h2>
  ),
  heading3: ({ children }) => (
    <h3 className="lg:w-7/12 text-2xl mt-5">{children}</h3>
  ),
  heading4: ({ children }) => (
    <h4 className="text-sm font-semibold">{children}</h4>
  ),
  paragraph: ({ children }) => (
    <p className="text-sm leading-relaxed">{children}</p>
  ),
};

/**
 * Props for `Testimonials`.
 */
export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

/**
 * Component for "Testimonials" Slices.
 */
const Testimonials = async ({
  slice,
}: TestimonialsProps): Promise<JSX.Element> => {
  const client = createClient();

  const testimonials = await Promise.all(
    slice.primary.testies.map((item) => {
      if (
        isFilled.contentRelationship(item.testimonials) &&
        item.testimonials.uid
      ) {
        return client.getByUID("testimonial", item.testimonials.uid);
      }
    })
  );

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="w-8/12 md:w-4/12 lg:w-5/12 mb-4 m-auto">
        <PrismicRichText
          components={components}
          field={slice.primary.heading}
        />
      </div>
      <Marquee
        className="motion-reduce:overflow-auto cursor-pointer"
        innerClassName="motion-reduce:animate-none motion-reduce:first:hidden"
        fade={true}
        pauseOnHover={true}
      >
        {testimonials.map(
          (item, index) =>
            item && (
              <div
                key={index}
                className="max-w-[286px] h-auto lg:p-8 p-4 rounded-[25px] bg-white border"
              >
                <div className="mt-4 text-[#818181]">
                  <PrismicRichText field={item.data.quote} />
                  {/*CHORE: create logic for ratings */}
                </div>
                <div className="flex space-x-2 mt-4">
                  <svg
                    className="w-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 fill-[#CED5D8]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-4 fill-[#CED5D8]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                </div>
                <div className="flex items-center mt-4">
                  <PrismicNextImage
                    className="w-10 h-10 rounded-full"
                    field={item.data.avatar}
                    imgixParams={{ ar: "1:1", fit: "crop" }}
                  />
                  <div className="ml-4">
                    {/* */}
                    <h4 className="text-sm font-semibold">{item.data.name}</h4>
                    <div className="mt-1 text-xs text-gray-400">
                      {item.data.job_title}
                    </div>
                  </div>
                </div>
              </div>
            )
        )}
      </Marquee>
    </section>
  );
};

export default Testimonials;
