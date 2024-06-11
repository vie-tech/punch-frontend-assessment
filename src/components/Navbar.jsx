import React, { useState, useEffect } from "react";
import navConfig from "../config/nav.config";
import logoImage from "../assets/images/Frame 55.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex justify-center w-full">
      {" "}
      {/* Full width flex container */}
      <section
        className={`lg:w-3/4 flex justify-between p-4 fixed bg-nav  rounded-lg w-full z-20 transition-all duration-300 ease-in-out ${
          scrolling ? "scrolled lg:w-full lg:mt-0" : "lg:mt-10"
        }`}
      >
        <div>
          <img src={logoImage} alt="" />
        </div>

        {/* Navigation Links */}
        <ul className="hidden lg:flex items-center space-x-6">
          {navConfig.map((item, index) => (
            <li key={index} className="text-gray-100">
              <a href={item}>{item}</a>
            </li>
          ))}
        </ul>

        {/* Menu Button for Drawer */}
        <button
          className="lg:hidden text-gray-100 hover:text-blue-600 cursor-pointer"
          onClick={toggleDrawer}
        >
          <MenuIcon className="lg:hidden" />
        </button>

        {/* Sign Up Button */}
        <div className="hidden items-center space-x-4 text-gray-100 hover:text-blue-600 cursor-pointer lg:flex">
          <span className="hover:text-gray-800 text-md">Log In</span>
          <span className="rounded bg-white text-black font-bold flex items-center p-2">
            Sign Up
          </span>
        </div>
      </section>
      {/* Drawer */}
      {isDrawerOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50 drawer">
          <div className="bg-white w-3/4 h-full p-4">
            <ul className="flex flex-col gap-4">
              {navConfig.map((item, index) => (
                <li key={index} className="text-black">
                  <a href={item}>{item}</a>
                </li>
              ))}
            </ul>
            <div className="text-sm flex space-x-4 text-gray-100 hover:text-blue-600 cursor-pointer mt-4">
              <span className=" text-black font-bold flex align-middle">
                Log In
              </span>
              <span className="rounded bg-white text-black font-bold flex align-middle">
                Sign Up
              </span>
            </div>
            <button
              onClick={toggleDrawer}
              className="text-gray-100 hover:text-blue-600 cursor-pointer mt-4 "
            >
              <CloseIcon color="error" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
