import React from "react";
import { Nav } from "./Nav";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
