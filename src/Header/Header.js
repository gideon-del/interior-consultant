import React, { useState } from "react";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const handleNav = () => {
    setShowNav(!showNav);
  };
  return (
    <header className="flex justify-between p-4">
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
        HEllo world
      </nav>
    </header>
  );
};

export default Header;
