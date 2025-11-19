import React, { useEffect, useState } from "react";

function App() {
  const [mydata, setMyData] = useState([]);
  const [count, setCount] = React.useState(0);
  const [isLogin, setIsLogin] = React.useState(false);

  console.log("작동중");

  React.useEffect(() => {
    console.log("useEffect 작동");
  }, [isLogin]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      console.log(data);
      setMyData(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      App / {count}
      <button onClick={() => setCount(count + 1)}>클릭</button>
      <button onClick={() => setIsLogin(!isLogin)}>isLogin{isLogin}</button>
      <div>{mydata && "데이터로딩완료"}</div>
      <div>
        {mydata.map((item, i) => (
          <div>
            <h3>
              {item.id}.{item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
