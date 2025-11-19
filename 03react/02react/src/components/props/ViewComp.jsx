import React from "react";
import Button from "./props/Button";

function ViewComp(props) {
  return (
    <div>
      <h3>gallery</h3>
      <div style={{ display: "flex" }}>
        {props.cityData.map((item, index) => (
          <div
            key={index}
            style={{
              width: "200px",
              background: "lightgreen",
              margin: "3px",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <h2>{item}</h2>
            <Button title="글보기" color="pink" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewComp;
