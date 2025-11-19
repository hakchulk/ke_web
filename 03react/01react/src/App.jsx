import React from "react";
import img from "./assets/react.svg";
import Button from "./components/Button";

function App() {
  const test = "test1";
  const view = { color: "white", backgroundColor: "darkgray" };
  const img2 = "./vite.svg";
  const isLogin = false;
  const city = ["서울", "부산", "대구", "광주"];
  return (
    <>
      <div className="container" style={view}>
        {isLogin ? <h1>로그인</h1> : <h1>로그아웃</h1>}

        <img src={img} alt="" />
        <img src={img2} alt="" />
        {city.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      </div>
      <Button>버튼</Button>
    </>
  );
}

export default App;
