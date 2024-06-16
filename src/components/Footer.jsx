import React from "react";
import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-8">
      <div className="container px-4 sm:flex justify-between items-center">
      <img src={logo} width={200} height={150} />
        <div>
          <p className="px-2">Sec-20,Panchkula,</p>
          <p className="px-2">152-B, Near Peer Mucchalla,Zikarpur</p>
          <p className="px-2">Email us : atollvacations@gmail.com</p>
          <p className="px-2">Contact : +917973358026</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
