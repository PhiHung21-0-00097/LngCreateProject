import React from "react";

const Footer = ({ footer }) => {
  return (
    <div className="container bg-blue-500 text-white">
      <div className="row justify-center items-center flex">
        <div className="col">{footer}</div>
      </div>
    </div>
  );
};

export default Footer;
