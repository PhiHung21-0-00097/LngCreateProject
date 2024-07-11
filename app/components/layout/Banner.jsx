import Image from "next/image";
import React from "react";
import bannerImage from "@/public/image/porsche-normal.webp";
import { i1, i2, i3, i4, i5, i6, i7, i8 } from "@/public/image/banner";
const Banner = ({}) => {
  const bannerImage = [
    {
      image: i1,
    },
    {
      image: i2,
    },
    {
      image: i3,
    },
    {
      image: i4,
    },
    {
      image: i5,
    },
    {
      image: i6,
    },
    {
      image: i7,
    },
    {
      image: i8,
    },
    {
      image: i1,
    },
    {
      image: i2,
    },
    {
      image: i3,
    },
    {
      image: i4,
    },
    {
      image: i5,
    },
    {
      image: i6,
    },
    {
      image: i7,
    },
    {
      image: i8,
    },
    {
      image: i1,
    },
    {
      image: i2,
    },
    {
      image: i3,
    },
    {
      image: i4,
    },
    {
      image: i5,
    },
    {
      image: i6,
    },
    {
      image: i7,
    },
    {
      image: i8,
    },
    {
      image: i1,
    },
    {
      image: i2,
    },
    {
      image: i3,
    },
    {
      image: i4,
    },
    {
      image: i5,
    },
    {
      image: i6,
    },
    {
      image: i7,
    },
    {
      image: i8,
    },
    {
      image: i1,
    },
    {
      image: i2,
    },
    {
      image: i3,
    },
    {
      image: i4,
    },
  ];

  return (
    <div className="banner">
      <div className="row grid-cols-12 grid gap-1">
        {bannerImage.map((item, index) => (
          <div key={index} className="col col-span-1 justify-center flex">
            <Image src={item.image} alt="" className="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
