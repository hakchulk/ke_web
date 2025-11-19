import React, { useState } from "react";
import TabMenu from "./components/TabMenu";
import ListMenu from "./components/ListMenu";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      App
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "로그아웃" : "로그인"}
      </button>
      {isLoggedIn && <Greeting isLoggedIn={isLoggedIn} name="길동" />}
    </div>
  );
}

function Greeting({ isLoggedIn, name }) {
  if (isLoggedIn) {
    return <h1>로그인 되었습니다. {name}님 환영합니다.</h1>;
  }
  return <div>로그인이 필요합니다.</div>;
}

export default App;
