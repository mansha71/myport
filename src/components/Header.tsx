import React from "react";
const d2 = require("../assets/images/fp.png");

function Header() {
  return (
    <div>
      <div
        id="Header"
        className="mx-12 lg:mx-60 pt-60 items-center justify-center lg:w-1/2 text-justify"
      >
        <div className="mainIntro">
          <div className="flex flex-col">
            <code className="text-lightblue_vs">Hi, my name is</code>
            <code className="text-[#e6f1ff] text-7xl mt-5">Manan Sharma</code>
          </div>
          <button className="border border-lightblue_vs text-lightblue_vs mt-10 p-3 rounded hover:bg-opacity-10 hover:bg-lightblue_vs w-1/2">
            <code>Check out my Projects !</code>
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10">
        <img
          src={d2}
          alt="das"
          className="max-w-xs max-h-xs lg:max-w-md lg:max-h-md rounded-full border-4 border-lightblue_vs"
        />
      </div>
    </div>
  );
}

export default Header;
