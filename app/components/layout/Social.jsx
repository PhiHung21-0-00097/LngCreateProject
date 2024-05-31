import React from "react";
import p2 from "@/public/image/p2.jpg";
import Image from "next/image";
import Link from "next/link";
const Social = () => {
  return (
    <div className="container my-5">
      <div className="my-3">
        <h1 className="text-[48px] font-bold">Porsche Social</h1>
      </div>
      <div className="relative">
        <div className="div-image">
          <div className="div-color absolute z-20"></div>
          <div className=" text-white">
            <div className="">
              <div className="p-[9%] text-left block">
                <span>
                  The required content could not be loaded. If you use an
                  AdBlocker, please check its settings.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
