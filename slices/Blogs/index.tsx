import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `Blogs`.
 */
export type BlogsProps = SliceComponentProps<Content.BlogsSlice>;

/**
 * Component for "Blogs" Slices.
 */

const Blogs = async ({ slice }: BlogsProps): Promise<JSX.Element> => {
  const client = createClient();

  const blogs = await Promise.all(
    slice.primary.blogs.map((item) => {
      if (
        isFilled.contentRelationship(item.blog_posts) &&
        item.blog_posts.uid
      ) {
        return client.getByUID("blogs", item.blog_posts.uid);
      }
    })
  );
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900">
            {slice.primary.heading}
          </h2>
          <p className="font-light text-gray-500 sm:text-xl">
            {slice.primary.description}
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map(
            (item, index) =>
              item && (
                <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md">
                  <div className="flex justify-between items-center mb-5 text-gray-500">
                  </div>
                  <div className="border rounded-[15px]">
                    <PrismicNextImage className="object-fit" field={item.data.blog_image} />
                  </div>
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                      <svg
                        className="mr-1 w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                      </svg>
                      {item.data.type}
                    </span>
                  <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    <a href="#">{item.data.title}</a>
                  </h2>
                  <div className="mb-5 font-light text-gray-500 dark:text-gray-400">
                    <PrismicRichText field={item.data.description} />
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      <PrismicNextImage
                        className="w-10 h-10 rounded-full"
                        field={item.data.avatar_img}
                        imgixParams={{ ar: "1:1", fit: "crop" }}
                      />
                      <div className="flex flex-col">
                        <span className="font-medium">{item.data.author}</span>
                        <span className="text-sm">{item.data.date}</span>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="inline-flex items-center font-medium text-primary-600 hover:underline"
                    >
                      Read more
                      <svg
                        className="ml-2 w-4 h-4"
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
                    </a>
                  </div>
                </article>
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
