import React from "react";

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@material-tailwind/react";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to manage dropdown visibility

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const navList = (
    <ul className="relative flex flex-col lg:flex-row lg:space-x-5 text-white text-md px-5 font-medium">
      <li className="py-1 px-3 group relative">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-purple-400  underline-offset-4"
              : "text-white hover:text-purple-400"
          }
        >
          HOME
        </NavLink>
        <span className="underline-effect"></span>
      </li>

      <li className="py-1 px-3 group relative">
        <NavLink
          to="/About"
          className={({ isActive }) =>
            isActive
              ? "text-purple-400  underline-offset-4"
              : "text-white hover:text-purple-400"
          }
        >
          ABOUT
        </NavLink>
        <span className="underline-effect"></span>
      </li>

      <li className="py-1 px-3 group relative">
        <NavLink
          to="/Projects"
          className={({ isActive }) =>
            isActive
              ? "text-purple-400  underline-offset-4"
              : "text-white hover:text-purple-400"
          }
        >
          PROJECTS
        </NavLink>
        <span className="underline-effect"></span>
      </li>

      <li className="py-1 px-3 group relative">
        <NavLink
          to="/Contact"
          className={({ isActive }) =>
            isActive
              ? "text-purple-400  underline-offset-4"
              : "text-white hover:text-purple-400"
          }
        >
          CONTACT
        </NavLink>
        <span className="underline-effect"></span>
      </li>
    </ul>
  );

  return (
    <nav className="[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#000_100%)] z-50 sticky top-0">
      <div className="flex flex-col lg:flex-col lg:justify-between items-center py-3 lg:px-3">
        {/* Only show the "RAJ" text */}
        <div className="flex flex-grow justify-center items-center">
          <Button
            className=" bg-gradient-to-r from-pink-300 via-orange-300 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent font-light button-hover-effect"
            onClick={toggleDropdown}
            variant="text"
          >
            RAJ PARDESHI
          </Button>
        </div>

        {/* Dropdown list */}
        {dropdownOpen && (
          <div className="absolute mt-2 bg-black rounded shadow-lg p-3 z-10 dropdown-transition">
            {navList}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
