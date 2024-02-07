import React, { FC } from "react";
import NavbarLink from "./NavbarLink";
import { ILink } from "./types";

interface IMenuOverlay {
  links: ILink[];
}

const MenuOverlay: FC<IMenuOverlay> = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link: ILink, index: number) => (
        <li key={index}>
          <NavbarLink href={link.href} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
