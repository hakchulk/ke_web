import React, { useEffect, useState } from "react";
import axios from "axios";
import { getBoard } from "./api/boardApi";
import { useBoard } from "./context/BoardContext";

function App() {
  const { boardData, fetchData, totalCount, addBoard } = useBoard();
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    async function getData() {
      await fetchData();
      console.log("fetchData() boardData:", boardData);
    }
    getData();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    // 글작성 처리
    // alert("글작성 처리");
    const newBoard = { title, name, content };
    console.log("newBoard:", newBoard);
    const data = await addBoard(newBoard);
    console.log("addBoard() data:", data);
    setTitle("");
    setName("");
    setContent("");
  };

  return (
    <div>
      <p>totalCount : {totalCount}</p>
      <hr />
      {boardData &&
        boardData.map((item) => (
          <div key={item.id}>
            {item.id} / {item.title} / {item.name} / {item.content}
          </div>
        ))}
      <div>
        <hr />
        <h3>글작성</h3>

        <form onSubmit={submitHandler} className="flex flex-col">
          <div className="flex gap-3 p-2">
            <label htmlFor="title">title</label>
            <input
              id="title"
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              className="bg-gray-200"
              value={title}
            ></input>
          </div>
          <div className="flex gap-3 p-2">
            <label htmlFor="name">name</label>
            <input
              id="name"
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="bg-gray-200"
              value={name}
            ></input>
          </div>
          <div className="flex gap-3 p-2">
            <label htmlFor="content">content</label>
            <input
              id="content"
              type="text"
              onChange={(e) => setContent(e.target.value)}
              className="bg-gray-200"
              value={content}
            ></input>
          </div>

          <button
            type="submit"
            className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-700"
          >
            입력
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
