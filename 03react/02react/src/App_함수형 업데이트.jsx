import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function addHandler(e) {
    // 이 방식은 마지막에 변경된 것만 처리 된다.
    setCount(count + 5);
    setCount(count + 4);

    // 함수형 업데이트를 사용 하면 해결
    setCount((prev) => prev + 5);
    setCount((prev) => prev + 4);
  }

  return (
    <div>
      App
      <p>{count}</p>
      <button onClick={addHandler}>증가</button>
    </div>
  );
}

export default App;
