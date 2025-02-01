import React from "react";
import Navbar from "./Navbar";
import CopyrightFooter from "./Footer";
import "../assets/styles/layout.css"; 
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <main className="layout-main">{children}</main>
      <CopyrightFooter />
    </div>
  );
};

export default Layout;
