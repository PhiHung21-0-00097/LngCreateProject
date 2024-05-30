import React from "react";

const Header = ({ header }) => {
  return (
    <div className="container bg-red-500 text-white">
      <div className="row justify-center items-center flex">
        <div className="col">{header}</div>
      </div>
    </div>
  );
};

export default Header;
