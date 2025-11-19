import React from "react";
import TabMenu from "./components/TabMenu";
import ListMenu from "./components/ListMenu";

function App() {
  const data = [
    {
      title: "안녕하세요1",
      content: "1리액트 공부중입니다. lorem ipsum dolor sit amet.",
    },
    {
      title: "리액트 탭메뉴2",
      content: "2리액트 공부중입니다. lorem ipsum dolor sit amet.",
    },
    {
      title: "TabMenu구현중2",
      content: "3lorem ipsum dolor sit amet.",
    },
  ];

  // return <TabMenu data={data}></TabMenu>;
  return <ListMenu data={data}></ListMenu>;
}

export default App;
