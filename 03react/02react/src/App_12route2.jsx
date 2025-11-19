import React from "react";
import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";
import HomeComp from "./components/pages/home/HomeComp";
import AboutComp from "./components/pages/about/AboutComp";
import BoardComp from "./components/pages/board/BoardComp";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="d-flex justify-content-between">
          <h1>logo</h1>
          <ul className="d-flex gap-3 menu">
            <li className="nav-link d-flex align-items-center">
              <NavLink to="/">home</NavLink>
            </li>
            <li className="nav-link d-flex align-items-center">
              <NavLink to="/board">board</NavLink>
            </li>
            <li className="nav-link d-flex align-items-center">
              <NavLink to="/about">about</NavLink>
            </li>
          </ul>
        </div>

        <Routes>
          <Route path="/" element={<HomeComp />}></Route>
          <Route path="/about/*" element={<AboutComp />}></Route>
          <Route path="/board/*" element={<BoardComp />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
