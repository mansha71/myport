// src/App.tsx
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const App: React.FC = () => {
  useEffect(() => {
    const existingWidth = localStorage.getItem("sideBarWidth");

    if (!existingWidth) {
      localStorage.setItem("sideBarWidth", "270");
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
