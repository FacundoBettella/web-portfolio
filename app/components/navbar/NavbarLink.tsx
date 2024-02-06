import Link from "next/link";

interface NavbarLinkProps {
  href: string;
  title: string;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ href, title }) => (
  <li>
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  </li>
);

export default NavbarLink;
