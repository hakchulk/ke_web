import { createContext, useContext, useState } from "react";
import { createBoard, getBoard } from "../api/boardApi";

const BoardContext = createContext();

export const useBoard = () => {
  return useContext(BoardContext);
};

export const BoardProvider = ({ children }) => {
  const [boardData, setBoardData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  const fetchData = async (page = 0, size = 2) => {
    const data = await getBoard(page, size);
    console.log("BoardProvider() fetchData() data:", data);

    setBoardData(data.content);
    setTotalCount(data.totalElements);
    setTotalPage(data.totalPages);
  };

  const addBoard = async (boardFormData) => {
    const data = await createBoard(boardFormData);
    await fetchData();
    return data;
  };

  const value = { boardData, fetchData, totalCount, totalPage, addBoard };

  return (
    <BoardContext.Provider value={value}>{children}</BoardContext.Provider>
  );
};
