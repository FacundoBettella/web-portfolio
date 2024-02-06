import Link from "next/link";
import React from "react";
import NavbarLink from "./NavbarLink";
import { navLinks, ILink } from "./types";

const Navbar = () => {
  return (
    <nav>
      <div className="flex flex-wrap items-center justify-between mx-auto p-8">
        <Link href={"/"} className="text-5xl text-white font-semibold">
          LOGO
        </Link>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8">
            {navLinks.map((link: ILink, index) => (
              <NavbarLink key={index} href={link.href} title={link.title} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
