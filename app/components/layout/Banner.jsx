import Image from "next/image";
import React from "react";
import bannerImage from "@/public/image/porsche-normal.webp";
const Banner = ({}) => {
  return (
    <div className=" bg-green-500 text-white">
      <div className="row grid-cols-12 justify-center items-center">
        <div className="col">
          <Image src={bannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
