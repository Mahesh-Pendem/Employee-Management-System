import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-section">
        <Navbar />
        <div className="content-area p-4">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
