import { useState } from "react";
import HomeComp from "./page/homeComp";
import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import AboutComp from "./page/AboutComp";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./page/member/Login";
import Reg from "./page/member/Reg";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomeComp />} />
          <Route path="/about" element={<AboutComp />} />
        </Route>

        <Route path="/login" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="reg" element={<Reg />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
