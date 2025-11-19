import React, { useContext } from "react";

import { usePost } from "../../context/PostContext";

function ChildComp() {
  const { vData, setVData } = usePost();
  console.log("ChildComp() vData", vData);

  return (
    <div>
      <div>{/* <button onClick={() => setView("변경됨")}>변경</button> */}</div>
    </div>
  );
}

export default ChildComp;
