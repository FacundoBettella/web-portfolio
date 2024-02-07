import Link from "next/link";
import { ILink } from "./types";

interface NavbarLinkProps extends ILink {}

const NavbarLink: React.FC<NavbarLinkProps> = ({ href, title }) => (
  <Link
    href={href}
    className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
  >
    {title}
  </Link>
);

export default NavbarLink;
