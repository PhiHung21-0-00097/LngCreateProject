import React from "react";

const Banner = ({ banner }) => {
  return (
    <div className=" bg-green-500 text-white">
      <div className="row justify-center items-center flex">
        <div className="col">{banner}</div>
      </div>
    </div>
  );
};

export default Banner;
