"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import LngLink from "@/app/components/functions/LngLink";
const Nav = ({ lng }) => {
  const pathName = usePathname();
  const currentPath = pathName.split("/")[2] || "";

  const locale = [
    {
      id: 1,
      title: "HOME",
      href: "",
    },
    {
      id: 2,
      title: "PRODUCT",
      href: "product",
    },
    {
      id: 3,
      title: "CONTACT",
      href: "contact",
    },
  ];
  return (
    <div>
      {React.Children.toArray(
        locale?.map((item) => (
          <LngLink
            lng={lng}
            href={`${item.href}`}
            className={`pl-4 pr-4 mx-3 text-lg font-bold hover:text-white hover:bg-gray-500 transition ease-in-out  duration-300   ${currentPath === item.href ? "bg-gray-500 text-white" : ""}`}
          >
            {item.title}
          </LngLink>
        ))
      )}
    </div>
  );
};

export default Nav;
