import React from "react";
import bg from "../Images/photo1.png";
import profile from "../Images/photo2.png";
const Main = () => {
  return (
    <main className="p-4 flex flex-col space-y-4 md:flex-row flex-1 md:items-center md:space-y-0  md:space-x-12 md:justify-around md:px-12 ">
      <div className="flex flex-col space-y-4 flex-1 md:space-y-8 ">
        <h1 className="text-white text-3xl font-lora font-medium md:text-5xl">
          Modern interior
        </h1>
        <p className="font-montserrat font-normal opacity-50 text-white text-sm md:max-w-[410px] md:pl-1 md:text-2xl">
          A full-Service residential & commercial interior design and staging
          company offering professional organizing & eco-services.
        </p>
        <p className="text-white flex items-center">
          Read more
          <span class="material-symbols-outlined">trending_flat</span>
        </p>
      </div>
      <div className="relative bg">
        <picture>
          <img src={bg} alt="The house" />
        </picture>
        <div className="bg-bgCol shadow-md max-w-xs md:max-w-md py-4 px-3 relative bottom-4 left-2 md:absolute md:right-10 md:left-auto md:-bottom-8">
          <div className="flex flex-col mr-20 space-y-5">
            <div className="flex space-x-2 items-center ">
              <picture className="">
                <img
                  src={profile}
                  alt="Profile"
                  className="w-8 h-8 md:w-12 md:h-12 rounded-full object-center"
                />
              </picture>
              <p className="text-white flex flex-col font-montserrat font-medium md:text-sm">
                Aliza Webber
                <span className="text-textcol font-xs md:text-xs">Interior designer</span>
              </p>
            </div>
            <p className="text-white font-lora font-bold text-lg md:text-2xl">
              Designed in 2020 by
              <br /> Aliza Webber
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
