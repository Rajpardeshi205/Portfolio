import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Navbar className="z-50" />
      <main className="flex-grow">{children}</main>
    </div>
  );
};

export default Layout;
