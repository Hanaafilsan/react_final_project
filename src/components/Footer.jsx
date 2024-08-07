import React from "react";
import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-[#4189dd] text-white">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">SomaliTrip</h1>
          <p className=" text-sm">
            With SomaliTrip you can experience new travel and the best tourist
            destinations that we have to offer.
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">
            Destination
          </h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-[#00D1FF] transition-all cursor-pointer"
              href="/"
            >
              Somalia
            </a>
            <a
              className=" hover:text-[#00D1FF] transition-all cursor-pointer"
              href="/"
            >
             Somali Land
            </a>
            <a
              className=" hover:text-[#00D1FF] transition-all cursor-pointer"
              href="/"
            >
             Jabuuti
            </a>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">About</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-[#00D1FF] transition-all cursor-pointer"
              href="/contact"
            >
              Contact Us
            </a>
            <a
              className=" hover:text-[#00D1FF] transition-all cursor-pointer"
              href="/"
            >
              Testimonial
            </a>
            <a
              className=" hover:text-[#00D1FF] transition-all cursor-pointer"
              href="/"
            >
              Rating
            </a>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Follow Us</h1>
          <nav className=" flex flex-col md:items-center gap-2">
            <BsFacebook
              size={25}
              className="hover:text-[#00D1FF] transition-all cursor-pointer"
            />
            <RiTwitterXFill
              size={25}
              className=" hover:text-[#00D1FF] transition-all cursor-pointer"
            />
            <BsInstagram
              size={25}
              className=" hover:text-[#00D1FF] transition-all cursor-pointer"
            />
          </nav>
        </div>
      </div>
      <div>
        <p>
          <p className=" text-center py-4">
            @copyright developed by
            <span className=" text-[#00D1FF]"> Hanna Bocor💖</span> | All
            rights reserved
          </p>
        </p>
      </div>
    </div>
  );
};

export default Footer;