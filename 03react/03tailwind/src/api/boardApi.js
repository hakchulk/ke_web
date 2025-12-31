import api from "./api";

export async function getBoard(page, size) {
  const { data } = await api.get("/boardpage", { params: { page, size } });

  return data;
}

export async function createBoard(boardFormData) {
  const { data } = await api.post("/board", boardFormData);
  return data;
}
