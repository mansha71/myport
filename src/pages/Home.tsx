import React, { useState, useEffect } from "react";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import SideBar from "../components/SideBar";
import Resume from "./Resume";
import MobileMenu from "../components/MobileMenu";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

const Home = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [sidebarWidth, setSidebarWidth] = useState(270); // Default width

  useEffect(() => {
    const savedWidth = localStorage.getItem("sideBarWidth");
    if (savedWidth) {
      setSidebarWidth(parseInt(savedWidth));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("sideBarWidth", sidebarWidth.toString());
  }, [sidebarWidth]);

  const renderComponent = () => {
    switch (activeTab) {
      case "home":
        return (
          <div>
            <Header />
            <About />
            <Resume />
            <Projects />
            <Contact />
          </div>
        );
      case "about":
        return <About />;
      case "resume":
        return <Resume />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return (
          <div>
            <Header />
            <About />
            <Resume />
            <Projects />
            <Contact />
          </div>
        );
    }
  };

  return (
    <div id="home" className="App flex h-full">
      <div
        className="bg-[#262526] h-full fixed hidden lg:block"
        style={{ width: `${sidebarWidth}px` }}
      >
        <SideBar
          setWidth={setSidebarWidth}
          width={sidebarWidth}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
      <div className="bg-[#1e1e1e] h-full flex-grow">
        <div className="lg:hidden">
          <MobileMenu />
        </div>
        <div
          className="bg-[#424042] h-16 hidden lg:block"
          style={{ paddingLeft: `${sidebarWidth}px` }}
        >
          <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <div style={{ paddingLeft: `${sidebarWidth}px` }}>
          {renderComponent()}
        </div>
      </div>
    </div>
  );
};

export default Home;
