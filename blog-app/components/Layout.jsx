"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const menus = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "About Us",
    href: "/about-us",
  },

  {
    label: "Contact Us",
    href: "/contact-us",
  },

  {
    label: "Login",
    href: "/login",
  },
];

const Layout = ({ children }) => {
  const pathname = usePathname();

  console.log("pathname", pathname);

  const blacklists = [
    "/login", 
    "/signup",
    "/admin"
  ];

  const isBlackList = blacklists.includes(pathname);

  console.log("blacklist",blacklists);

  if (isBlackList) {
    return <div>{children}</div>;
  }

  return (
    <div>
      <nav className="z-[50] px-4 bg-white shadow-lg sticky top-0 left-0 w-full py-6 flex justify-between items-center">
        <Link href={"/"} className="text-2xl font-bold">
          PrashantBlogs
        </Link>
        <div className="flex gap-8 items-center">
          {menus.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className={
                pathname === item.href
                  ? "text-violet-700 font-medium"
                  : "text-black font-normal"
              }
            >
              {item.label}
            </Link>
          ))}

          <Link
            href={"/signup"}
            className="bg-violet-600 px-8 py-2 rounded-full text-white"
          >
            Signup
          </Link>
        </div>
      </nav>
      <section className="px-[10%] py-16">{children}</section>
      <footer className="bg-gray-950 h-[25rem] flex  items-center justify-center text-white text-3xl">
        myfooter
      </footer>
    </div>
  );
};

export default Layout;
