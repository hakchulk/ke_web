import React from "react";
import { Link, Route, Routes } from "react-router-dom";

function ListComp({ posts }) {
  if (!posts) {
    return <p>게시글이 없습니다.</p>;
  }
  console.log("ListComp() posts", posts);

  return (
    <div>
      <h3>목록</h3>
      <div>
        <ul>
          {posts.map((item, i) => {
            return (
              <li key={i}>
                <Link to={"../view/" + item.id} className="nav-link">
                  {i + 1}. {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ListComp;
