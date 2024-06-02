import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";
import clsx from "clsx";

export default function SecondaryButton({
  className,
  ...restProps
}: PrismicNextLinkProps) {
  return (
    <PrismicNextLink
      className={clsx(
        "inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-[#EB632B] border border-[#EB632B] rounded-full hover:bg-[##e8885f]",
        className
      )}
      {...restProps}
    />
  );
}
