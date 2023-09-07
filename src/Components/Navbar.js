import React, { useState } from "react";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    isNavOpen ? setIsNavOpen(false) : setIsNavOpen(true);
  };
  return (
    <>
      <nav className=" flex justify-between bg-blue-950 items-center p-2">
        <div className="text-gray-300 text-3xl stroke-black p-2 font-bold">
          YLibrary
        </div>
        <div className="hidden sm:block">
          <ul className="flex text-gray-300 text-lg items-center ">
            <li className="p-2 ">My Books</li>
            <li className="p-2 ">Search</li>
            <li className="p-2">Browse</li>
          </ul>
        </div>

        <div className="relative flex justify-center items-center">
          <button
            className="h-10 w-10 bg-red-400 rounded-full mr-4"
            onClick={toggleNav}
          ></button>

          <div
            className={`${
              isNavOpen ? "block" : "hidden"
            } absolute top-[3.75rem] left-[-4.5rem]  bg-slate-700 w-32  rounded-lg`}
          >
            <ul className="text-white font-medium flex flex-col flex-grow items-center p-3">
              <li className="p-1">Username</li>
              <div className="w-28 rounded-lg h-[1px] bg-gray-500"></div>
              <li className="p-1">My Books</li>
              <li className="p-1">Search</li>
              <li className="p-1">Browse</li>
              <li className="p-1">Sign Out</li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
