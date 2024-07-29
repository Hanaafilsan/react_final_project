import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [] = useState(false);

  const backgroundColor = `bg-[#4189dd]`;
  const textColor = `text-white`;
  return (
    <div>
      <div
        className={`flex flex-row justify-between p-5 md:px-32 px-5 ${backgroundColor} ${textColor}`}
      >
        <div className=" flex items-center">
          <Link to="/" className=" font-semibold text-xl cursor-pointer">
            SomaliTrip
          </Link>
        </div>
        <nav className="hidden lg:flex flex-row items-center gap-6">
          <Link to="/" className={`hover:text-brightColor transition-all cursor-pointer ${textColor}`}>
            Home
          </Link>
          <Link to="/features" className={`hover:text-brightColor transition-all cursor-pointer ${textColor}`}>
            Features
          </Link>
          <Link to="/destination" className={`hover:text-brightColor transition-all cursor-pointer ${textColor}`}>
            Destination
          </Link>
          <Link to="/about" className={`hover:text-brightColor transition-all cursor-pointer ${textColor}`}>
            About
          </Link>
          <Link to="/contact" className={`hover:text-brightColor transition-all cursor-pointer ${textColor}`}>
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;