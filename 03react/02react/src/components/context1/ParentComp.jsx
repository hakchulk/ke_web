import React from "react";
import ChildComp from "./ChildComp";

function ParentComp() {
  return (
    <div>
      <h3>ParentComp</h3>
      <ChildComp></ChildComp>
    </div>
  );
}

export default ParentComp;
