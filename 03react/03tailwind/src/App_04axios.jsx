import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [boadData, setBoadData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("http://localhost:8080/api/board");
      console.log("fetchData() data:", data);
      setBoadData(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      {boadData &&
        boadData.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.name}</p>
            <p>{item.content}</p>
            <hr />
          </div>
        ))}
    </div>
  );
}

export default App;
