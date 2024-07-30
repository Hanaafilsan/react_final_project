import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        <div className="flex items-center">
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
              ) : (
                <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              )}
            </svg>
          </button>
          <nav className={`flex flex-row items-center gap-6 ${isOpen ? 'flex' : 'hidden'} lg:flex`}>
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
    </div>
  );
};

export default Navbar;