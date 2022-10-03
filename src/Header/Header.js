import React, { useState } from "react";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const handleNav = () => {
    setShowNav(!showNav);
  };
  return (
    <header className="flex justify-between p-4 md:px-12 md:mb-20">
      <h1 className="text-white font-crimsonPro text-lg py-3 px-5 border-2 border-white uppercase">
        This Interior
      </h1>
      <button type="button" className="w-6 z-50 md:hidden" onClick={handleNav}>
        <span className={`top-btn ${showNav ? "active" : ""}`}></span>
        <span className={`middle-btn ${showNav ? "active" : ""}`}></span>
        <span className={`bottom-btn ${showNav ? "active" : ""}`}></span>
      </button>
      <nav
        className={`fixed transition-all duration-300 min-h-screen z-30 bg-bgCol w-screen text-white flex justify-center items-center md:relative md:translate-x-0 md:min-h-min md:w-auto  ${
          showNav ? `translate-x-0` : `translate-x-full`
        }`}
      >
        <ul className="flex flex-col md:flex-row space-y-3 md:space-x-16 text-center md:space-y-0 ">
          <li className="pb-1 hover:border-b-2 hover:border-b-white cursor-pointer transition-all duration-100 font-montserrat font-bold text-lg">
            Home
          </li>
          <li className="pb-1 hover:border-b-2 hover:border-b-white cursor-pointer transition-all duration-100 font-montserrat font-bold text-lg">
            Collections
          </li>
          <li className="pb-1 hover:border-b-2 hover:border-b-white cursor-pointer transition-all duration-100 font-montserrat font-bold text-lg">
            About
          </li>
          <li className="pb-1 hover:border-b-2 hover:border-b-white cursor-pointer transition-all duration-100 font-montserrat font-bold text-lg">
            Contact
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
