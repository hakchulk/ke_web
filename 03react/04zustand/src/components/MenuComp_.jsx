import React from "react";
import { Link } from "react-router-dom";

function MenuComp_() {
  const ulStyle = {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
    alignItems: "center",
    gap: "20px", // 메뉴 사이 간격
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#333",
  };

  return (
    <>
      <nav style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>com</h1>
        <ul style={ulStyle}>
          <li>
            <Link style={linkStyle} to="/">
              home
            </Link>
          </li>
          <li>
            <Link style={linkStyle} to="/about">
              about
            </Link>
          </li>
          <li>board</li>
        </ul>
        <ul style={ulStyle}>
          <li>
            <Link style={linkStyle} to="/login">
              로그인
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default MenuComp_;
