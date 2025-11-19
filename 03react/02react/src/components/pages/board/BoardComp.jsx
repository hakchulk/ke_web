import { Link, Route, Routes } from "react-router-dom";
import { useParams, useSearchParams } from "react-router-dom";
import ListComp from "./ListComp";
import WriteComp from "./WriteComp";
import ViewComp from "./ViewComp";
import ModifyComp from "./ModifyComp";
import { useEffect, useState } from "react";
import axios from "axios";

const API = "https://jsonplaceholder.typicode.com";

function BoardComp() {
  // //  /board/1
  // const { id } = useParams();
  // const { name1, age1 } = useParams();
  // const [searchParams] = useSearchParams();
  // // board?name=hak
  // const name = searchParams.get("name");
  // const age = searchParams.get("age");

  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  async function fetch() {
    try {
      setLoading(true);
      const { data } = await axios.get(`${API}/posts`);

      setPosts(data.slice(0, 10));
      console.log(data.slice(0, 10));
      console.log("posts", posts);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="container">
      <div
        style={{ width: "100%", height: "200px" }}
        className="d-flex justify-content-center align-items-center bg-info rounded"
      >
        BoardComp
      </div>
      {loading ? "로딩중..." : "로딩완료"}
      <div className="d-flex justify-content-center gap-3">
        <Link to="../board/list" className="nav-link">
          목록
        </Link>
        <Link to="../board/write" className="nav-link">
          글작성
        </Link>
      </div>
      <Routes>
        <Route index element={<ListComp />}></Route>
        <Route path="list" element={<ListComp posts={posts} />}></Route>
        <Route path="write" element={<WriteComp />}></Route>
        <Route path="view/:num" element={<ViewComp api={API} />}></Route>
        <Route path="modify/:id" element={<ModifyComp />}></Route>
      </Routes>
    </div>
  );
}

export default BoardComp;
