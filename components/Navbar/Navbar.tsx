'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = {
  '/': {
    name: 'home',
  },
  '/about': {
    name: 'about',
  },
  '/blog': {
    name: 'blog',
  },
};

export default function Navbar() {
  let pathname = usePathname() || '/';
  if (pathname.includes('/blog/')) {
    pathname = '/blog';
  }

  return (
    <nav className="flex flex-col items-center border rounded-box border-white/10 bg-main-900/30 backdrop-blur-sm sm:flex-row">
      <div className="">
        <Link
          href="/"
          className="flex items-center h-12 px-3 text-xl font-bold transition-colors select-none pointer hover:text-ghost-500"
        >
          ercumentlacin
        </Link>
      </div>

      <div className="flex justify-end w-full px-2 py-2 grow sm:py-0">
        <ul className="flex w-full px-1 sm:w-auto sm:flex-row">
          {Object.entries(navItems).map(([path, { name }]) => {
            const isActive = path === pathname;
            return (
              <li key={path} className={clsx('px-[10px] py-[5px]')}>
                <Link
                  href={path}
                  className={clsx(
                    'transition-color flex align-middle underline-offset-[.5em] duration-300 ease-in-out  sm:w-auto relative w-max',
                    {
                      'font-bold text-ghost-400': isActive,
                    },
                  )}
                >
                  <span>{name}</span>
                  {isActive ? (
                    <motion.div
                      className="absolute left-0 right-0 -bottom-[0.14em] h-[0.1em] bg-ghost-400"
                      layoutId="underline"
                    />
                  ) : null}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
