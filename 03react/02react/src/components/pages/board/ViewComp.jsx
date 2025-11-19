import React from "react";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";

function ViewComp({ api }) {
  const { num } = useParams();
  console.log("ViewComp() num", num);
  console.log("ViewComp() api", api);

  const [item, setItem] = useState({});
  async function fetch() {
    try {
      const { data } = await axios.get(`${api}/posts/${num}`);
      console.log("ViewComp() data", data);
      setItem(data);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
      ViewComp
      <h3>{item.title}</h3>
      <p>ID:{num}</p>
      <p>userid:{item.userId}</p>
      <p>{item.body}</p>
    </div>
  );
}

export default ViewComp;
