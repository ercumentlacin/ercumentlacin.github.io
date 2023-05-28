"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navItems = {
  "/": {
    name: "home",
  },
  "/about": {
    name: "about",
  },
  "/blog": {
    name: "blog",
  },
};

export default function Navbar() {
  let pathname = usePathname() || "/";
  if (pathname.includes("/blog/")) {
    pathname = "/blog";
  }

  return (
    <nav className="rounded-box flex flex-col items-center border border-white/10 bg-main-900/30 backdrop-blur-sm sm:flex-row">
      <div className="">
        <Link
          href="/"
          className="pointer flex h-12 select-none items-center px-3 text-xl font-bold transition-colors hover:text-ghost-500"
        >
          ercumentlacin
        </Link>
      </div>

      <div className="flex w-full grow justify-end px-2 py-2 sm:py-0">
        <ul className="flex w-full flex-col px-1 sm:w-auto sm:flex-row">
          {Object.entries(navItems).map(([path, { name }]) => {
            const isActive = path === pathname;
            return (
              <li key={path}>
                <Link
                  href={path}
                  className={clsx(
                    "transition-color flex w-full align-middle underline-offset-[.5em] duration-300 ease-in-out hover:text-ghost-500 sm:w-auto ",
                    {
                      "font-bold text-ghost-400 underline": isActive,
                    }
                  )}
                >
                  <span className="relative px-[10px] py-[5px]">{name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
