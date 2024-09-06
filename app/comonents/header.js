"use client";
import React, { useState } from "react";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-gray-800 p-8 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold">
              Mjengo.Inc
            </a>
            <button
              className="ml-4 text-gray-300 hover:text-white focus:outline-none md:hidden"
              onClick={toggleDropdown}
            >
              <i className="fas fa-bars"></i>{" "}
              {/* Font Awesome hamburger icon */}
            </button>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="/" className="hover:text-orange-500">
              Home
            </a>
            <a href="/company" className="hover:text-orange-500">
              Company
            </a>
            <a href="/projects" className="hover:text-orange-500">
              Projects
            </a>
            <a href="/services" className="hover:text-orange-500">
              Services
            </a>

            <a href="/contact" className="hover:text-orange-500">
              Contact
            </a>
          </div>
        </div>
        {/* Dropdown Menu for small screens */}
        <div className={`md:hidden ${isDropdownOpen ? "block" : "hidden"}`}>
          <ul className="mt-2 bg-gray-800">
            <li className="py-2 px-4 hover:bg-orange-700">
              <a href="/" className="block">
                Home
              </a>
            </li>
            <li className="py-2 px-4 hover:bg-orange-700">
              <a href="/company" className="block">
                Company
              </a>
            </li>
            <li className="py-2 px-4 hover:bg-orange-700">
              <a href="/projects" className="block">
                Projects
              </a>
            </li>
            <li className="py-2 px-4 hover:bg-orange-700">
              <a href="/services" className="block">
                Services
              </a>
            </li>

            <li className="py-2 px-4 ">
              <a href="/contact" className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-orange-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto">
                Contact
              </a>
            </li>
            {/* Add more dropdown items as needed */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
