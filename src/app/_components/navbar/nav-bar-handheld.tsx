import Image from "next/image";
import HamburgerMenuIconBlack from "../../../../public/hamburger-menu-black.svg";
import HamburgerMenuIconWhite from "../../../../public/hamburger-menu-white.svg";
import { useEffect, useState } from "react";
import HamburgerMenuIcon from "../_icons/hamburger-menu-icon";

export default function NavBarHandheld() {

  return (
    <header className="sticky top-0 z-20 flex h-[57px] w-full max-w-full items-center border-b border-[#0099e6] dark:border-[#005580]">
      <div className="relative mx-3 flex h-full w-full border-x border-[#0099e6] md:mx-8 lg:mx-12 dark:border-[#005580]">
        <nav className="relative flex h-full w-full items-center justify-between bg-white/30 px-8 backdrop-blur-md md:mx-auto md:max-w-[1248px] dark:bg-black/30">
          <div
            className="nav-elements-animation relative flex h-8 w-20 cursor-pointer items-center justify-center text-black dark:text-white"
            onClick={() => {}}
          >
            <span className="relative z-10">ZaRikku</span>
          </div>
          <div className="nav-elements-animation dark:color-white flex items-center gap-8">
            <HamburgerMenuIcon />
          </div>
        </nav>
      </div>
    </header>
  );
}
