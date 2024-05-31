"use client";
import Link from "next/link";
import React from "react";
import LngSwitcher from "@/app/components/functions/LngSwitcher";
import LngLink from "@/app/components/functions/LngLink";
const Header = ({ header, lng }) => {
  // const currentPath = pathName.split("/")[2] || "";
  return (
    <div className="container bg-red-500 text-white">
      <div className="row grid-cols-12 grid justify-between items-center">
        <div className="col-span-3 flex justify-center">{header}</div>
        <div className="col-span-6 flex justify-center">
          <nav>
            <ul>
              <li className="bg-blue-500 hover:bg-slate-400 hover:text-black">
                <LngLink lng={lng} href="product">
                  Product
                </LngLink>
              </li>
              <li className="bg-green-500 hover:bg-slate-400 hover:text-black">
                <LngLink lng={lng} href="contact">
                  Contact
                </LngLink>
              </li>
              <li className="bg-orange-500 hover:bg-slate-400 hover:text-black">
                <LngLink lng={lng} href="/">
                  Home
                </LngLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-span-3  gap-2 flex ">
          <LngSwitcher lng={lng} />
        </div>
      </div>
    </div>
  );
};

export default Header;
