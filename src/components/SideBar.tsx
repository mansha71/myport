import React, { useState, useEffect } from "react";
import { ChevronRightIcon } from "@heroicons/react/solid";

const GitLogo = require("../assets/logos/GitLogo.png");
const LinkedinLogo = require("../assets/logos/LinkedinLogo.png");
const KaggleLogo = require("../assets/logos/KaggleLogo.png");
const MailLogo = require("../assets/logos/MailLogo.png");

const JSIcon = require("../assets/icons/JSIcon.png");
const TSIcon = require("../assets/icons/TSIcon.png");

const SideBar = ({
  setWidth,
  width,
  activeTab,
  setActiveTab,
}: {
  setWidth: React.Dispatch<React.SetStateAction<number>>;
  width: number;
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const startResizing = (mouseDownEvent: React.MouseEvent) => {
    const handleMouseMove = (mouseMoveEvent: MouseEvent) => {
      const delta = mouseMoveEvent.clientX - mouseDownEvent.clientX;
      const newWidth = Math.max(170, mouseDownEvent.clientX + delta);
      setWidth(newWidth);
    };

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  useEffect(() => {
    const savedWidth = localStorage.getItem("sideBarWidth");
    if (savedWidth) {
      setWidth(parseInt(savedWidth));
    }
  }, [setWidth]);

  return (
    <div className="flex h-full">
      <div className="text-[#a2aabc] text-lg mt-5 flex w-full">
        <div>
          <div className="sideBarTitle">Manan Sharma</div>
          <div className="flex flex-col">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveTab("home");
              }}
            >
              <div
                className={`ml-4 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] ${
                  activeTab === "home" ? "bg-[#1e1e1e] text-yellow_vs" : ""
                }`}
              >
                <img src={JSIcon} alt="JS Icon" className="w-7 mr-1 ml-2" />
                <p>Home.ts</p>
              </div>
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveTab("about");
              }}
            >
              <div
                className={`ml-4 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] ${
                  activeTab === "about" ? "bg-[#1e1e1e] text-yellow_vs" : ""
                }`}
              >
                <img src={TSIcon} alt="TS Icon" className="w-7 mr-1 ml-2" />
                <p>About.ts</p>
              </div>
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveTab("resume");
              }}
            >
              <div
                className={`ml-4 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] ${
                  activeTab === "resume" ? "bg-[#1e1e1e] text-yellow_vs" : ""
                }`}
              >
                <img src={TSIcon} alt="TS Icon" className="w-7 mr-1 ml-2" />
                <p>Resume.ts</p>
              </div>
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveTab("projects");
              }}
            >
              <div
                className={`ml-4 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] ${
                  activeTab === "projects" ? "bg-[#1e1e1e] text-yellow_vs" : ""
                }`}
              >
                <img src={TSIcon} alt="TS Icon" className="w-7 mr-1 ml-2" />
                <p>Projects.ts</p>
              </div>
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveTab("contact");
              }}
            >
              <div
                className={`ml-4 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] ${
                  activeTab === "contact" ? "bg-[#1e1e1e] text-yellow_vs" : ""
                }`}
              >
                <img src={TSIcon} alt="TS Icon" className="w-7 mr-1 ml-2" />
                <p>Contact.ts</p>
              </div>
            </a>
          </div>
          <div className="absolute w-full bottom-10 px-6">
            <div className="flex justify-between">
              <a href="https://github.com/mansha71" target="blank">
                <img
                  src={GitLogo}
                  alt="Git Logo"
                  className="h-10 w-10 text-yellow_vs hover:cursor-pointer duration-500 hover:scale-125"
                />
              </a>
              <a href="https://www.linkedin.com/in/manshr/" target="blank">
                <img
                  src={LinkedinLogo}
                  alt="Linkedin Logo"
                  className="h-10 w-10 text-yellow_vs hover:cursor-pointer duration-500 hover:scale-125"
                />
              </a>
              <a href="mailto:mansharm71@gmail.com" target="blank">
                <img
                  src={MailLogo}
                  alt="Mail Logo"
                  className="h-10 w-10 text-yellow_vs hover:cursor-pointer duration-500 hover:scale-125"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        onMouseDown={startResizing}
        className="w-1 bg-gray-500 cursor-col-resize"
      />
    </div>
  );
};

export default SideBar;
