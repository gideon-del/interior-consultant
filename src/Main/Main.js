import React from "react";
import bg from "../Images/photo1.png";
import profile from "../Images/photo2.png";
const Main = () => {
  return (
    <main className="p-4 flex flex-col space-y-4 md:flex-row flex-1">
      <div className="flex flex-col space-y-4">
        <h1 className="text-white text-3xl font-lora font-medium">
          Modern interior
        </h1>
        <p className="font-montserrat font-normal  text-white text-sm">
          A full-Service residential & commercial interior design and staging
          company offering professional organizing & eco-services.
        </p>
        <p className="text-white flex items-center">
          Read more
          <span class="material-symbols-outlined ml-1">arrow_forward</span>
        </p>
      </div>
      <div className="relative">
        <picture>
          <img src={bg} alt="The house" />
        </picture>
        <div className="bg-bgCol shadow-md max-w-xs md:max-w-md py-4 px-3 absolute bottom-[-9%] left-2">
          <div className="flex flex-col mr-8 space-y-5">
            <div className="flex space-x-2 items-center ">
              <picture className="">
                <img
                  src={profile}
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
              </picture>
              <p className="text-white flex flex-col font-montserrat font-medium">
                Aliza Webber
                <span className="text-textcol font-xs">Interior designer</span>
              </p>
            </div>
            <p className="text-white font-lora font-bold text-lg">
              Designed in 2020 by Aliza Webber
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
