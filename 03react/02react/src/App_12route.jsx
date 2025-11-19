import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MenuComp from "./components/layout/MenuComp";
import HomeComp from "./components/pages/HomeComp";
import AboutComp from "./components/pages/AboutComp";
import BoardComp from "./components/pages/BoardComp";
import ErrorComp from "./components/pages/ErrorComp";
function App() {
  return (
    <>
      <BrowserRouter>
        <MenuComp></MenuComp>
        <div className="container">
          <Routes>
            <Route path="/" element={<HomeComp />} />
            <Route path="/about" element={<AboutComp />} />

            {/* useParams */}
            <Route path="/board/:name1/:age1" element={<BoardComp />} />

            {/* searchParams */}
            <Route path="/board" element={<BoardComp />} />

            {/* 404 처리용 */}
            <Route path="*" element={<ErrorComp />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
