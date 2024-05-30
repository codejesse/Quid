import clsx from "clsx";

type BoundedProps = {
  as?: React.ElementType;
  className?: String;
  children: React.ReactNode;
};

export default function Bounded({
  as: Comp = "section",
  className,
  children,
  ...restProps
}: BoundedProps) {
  return (
    <Comp className={clsx("", className)} {...restProps}>
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        {children}
      </div>
    </Comp>
  );
}
