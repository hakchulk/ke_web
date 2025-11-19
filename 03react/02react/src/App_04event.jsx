import React from "react";

function App() {
  const [count, setCount] = React.useState(0);
  const viewText = "안녕하세요";

  function changeCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <h3>부모 component</h3>
      <Child view={viewText} vCount={count} onClick={changeCount} />
      <NenxtChild vCount={count}></NenxtChild>
      <div>{count}</div>
      <button onClick={changeCount}>버튼</button>
    </div>
  );
}

function Child({ view, onClick, vCount }) {
  return (
    <>
      <div style={{ border: "1px solid black" }}>
        <h4>자식 component</h4>
        <p>
          {view} {vCount}
        </p>
        <button onClick={onClick}>클릭</button>
      </div>
    </>
  );
}

function NenxtChild({ vCount }) {
  return (
    <div style={{ border: "1px solid red" }}>
      <h4>Next component</h4>
      <p>{vCount}</p>
    </div>
  );
}

export default App;
