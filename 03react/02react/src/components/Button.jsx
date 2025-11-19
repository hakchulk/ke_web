import React from "react";

function Button({
  title = "기본title",
  color = "skyblue",
  width = "100px",
  background = "black",
  onClick,
  children,
  className = "",
}) {
  const style = {
    display: "inline-block",
    color: "white",
    width: width,
    background: color,
    cursor: "pointer",
    borderRadius: "5px",
    textAlign: "center",
  };
  return (
    <div className={className} style={style} onClick={onClick}>
      {children.length > 0 ? "" : title}
      {children}
    </div>
  );
}

export default Button;
