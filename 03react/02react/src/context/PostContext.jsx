import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const PostContext = createContext();

export function usePost() {
  const context = useContext(PostContext);
  if (!context) throw new Error("이 훅은 PostProvider 안에 사용 해야 합니다.");
  return context;
}

export function PostProvider({ children }) {
  const [vData, setVData] = useState([]);

  async function getdata() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setVData(res.data);
    console.log("getdata() res", res);
    console.log("getdata() res.data", res.data);
  }

  useEffect(() => {
    getdata();
  }, []);

  return (
    <PostContext.Provider value={{ vData, setVData }}>
      {children}
    </PostContext.Provider>
  );
}
