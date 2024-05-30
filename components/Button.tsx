import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";
import clsx from "clsx";


export default function Button({
    className,
    ...restProps
}: PrismicNextLinkProps) {
  return (
    <PrismicNextLink
      className={clsx("inline-flex items-center justify-center px-5 py-3 mr-8 text-white font-medium text-center rounded-full bg-[#EB632B] hover:bg-[#EB632B]", className)}
      {...restProps}
    />
  );
}
