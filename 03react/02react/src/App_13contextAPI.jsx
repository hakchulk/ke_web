import React, { createContext, useContext, useState } from "react";
// const UserContextComp = createContext({ view: "", setView: () => {} });
const UserContextComp = createContext();

function App() {
  const [view, setView] = useState("안녕하세요!");
  // const LoginContextComp = createContext();
  const contextValue = { view, setView };

  return (
    <div style={{ border: "1px solid black" }} className="p-3">
      <h3>Context API</h3>
      {view}
      <UserContextComp.Provider value={contextValue}>
        <ChildComp></ChildComp>
      </UserContextComp.Provider>
    </div>
  );
}

function ChildComp() {
  return (
    <div style={{ border: "1px solid blue" }} className="p-3">
      child
      <ChildOneComp></ChildOneComp>
    </div>
  );
}

function ChildOneComp() {
  const { view, setView } = useContext(UserContextComp);
  return (
    <div style={{ border: "1px solid #000" }} className="p-3">
      ChildOneC
      <p>{view}</p>
      <button
        onClick={() => {
          setView("변경");
        }}
      >
        변경
      </button>
    </div>
  );
}
export default App;
