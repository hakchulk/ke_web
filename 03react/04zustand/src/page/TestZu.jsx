import React from "react";
import testStore, { useStore } from "../store/testStore";

function TestZu() {
  const { name, count, increase, decrease } = testStore();

  //   const { count, inc, updateCount } = useStore();
  // const state = useStore((state) => state);
  //   const setCount = useStore((state) => state.setCount);

  return (
    <div>
      <h3>Home</h3>
      <div>이름 : {name}</div>
      <div>카운트 : {count}</div>
      <div></div>
      <button onClick={increase}>inc</button>
      <br />
      <button onClick={decrease}>decrease</button>
    </div>
  );
}

export default TestZu;
