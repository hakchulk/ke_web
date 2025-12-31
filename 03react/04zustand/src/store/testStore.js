import { create } from "zustand";

// const testStore = create((set, get) => ({});
const testStore = create((set) => ({
  name: "홍길동",
  count: 20,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
}));

export const useStore = create((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
  updateCount: (newCount) =>
    set((state) => ({
      count: newCount,
    })),
}));

export default testStore;
