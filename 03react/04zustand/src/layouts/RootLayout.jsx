import React from "react";
import { Outlet } from "react-router-dom";
import MenuComp from "../components/MenuComp";
import FooterComp from "../components/FooterComp";

function RootLayout() {
  return (
    <div>
      <MenuComp></MenuComp>
      <hr />
      <div>
        <Outlet />
      </div>
      <hr />
      <FooterComp></FooterComp>
    </div>
  );
}

export default RootLayout;
