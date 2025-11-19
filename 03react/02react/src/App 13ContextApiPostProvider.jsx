import React from "react";

import ParentComp from "./components/context1/ParentComp";
import { PostProvider } from "./context/PostContext";

function App() {
  return (
    <PostProvider>
      <h1>Context API</h1>
      <ParentComp>Parent</ParentComp>
    </PostProvider>
  );
}

export default App;
