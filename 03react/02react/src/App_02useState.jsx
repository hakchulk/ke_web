import React, { useState, useEffect } from "react";
import Button from "./state/Button";

function App() {
  // use~ : React 훅 함수
  // const [] = React.useState("");
  // const [allCity] = useState([
  //   { city: "seoul", area: 30 },
  //   { city: "busan", area: 10 },
  // ]);

  const [count, countFn] = useState(10);
  // useEffect(() => {
  //   countFn((c) => c + 1);
  // }, []); // 빈 배열 → 최초 1회만 실행

  function addCount() {
    countFn(count + 1);
  }

  return (
    <div>
      <h3>state</h3>
      <button onClick={addCount}>{count}</button>
      <button
        onClick={() => {
          countFn(count + 2);
        }}
      >
        {count}
      </button>
      <Button
        onClick={() => {
          countFn((c) => c - 1);
        }}
      >
        {count}
      </Button>
      count is {count}
      {/* <p>{allCity[0].area}</p>
      <p>{allCity[1]["city"]}</p> */}
      <Button title="글쓰기" color="red" width="100px"></Button>
      <Button title="글수정" color="red" width="100px"></Button>
      <Button color="blue"></Button>
    </div>
  );
}

export default App;
