import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Bounded from "./Bounded";
import Logo from "./Logo";

export default async function Header() {
  const client = createClient();

  const settings = await client.getSingle("settings");

  return (
    <Bounded as="header" className="container relative m-auto p-3 flex justify-between items-center">
      <Link href="/">
        <Logo />
      </Link>

      <nav>
        <ul className="flex gap-5 bg-white absolute md:relative mx-auto flex-row sm:flex-col md:flex-row w-full shadow md:shadow-none text-center top-12 left-0 lg:left-8 md:top-0">
          {settings.data.navigation.map(({ link, label }) => (
            <li key={label} className="px-3 py-2 cursor-pointer rounded-full text-[#818181] hover:text-[#EB632B]">
              <PrismicNextLink field={link} className="p-3">
                {label}
              </PrismicNextLink>
            </li>
          ))}
        </ul>
      </nav>
    </Bounded>
  );
}
