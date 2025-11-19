import React from "react";
import "./Modal.css";
import Button from "./Button";

function Modal({ setIsModal, children }) {
  return (
    <div className="vModal">
      <div className="title">
        <h1 id="header">
          <span>모달창</span>
          <span onClick={() => setIsModal(false)} className="closeMarker">
            x
          </span>
        </h1>
      </div>
      <div>{children}</div>
      <br />
      <Button
        className="closeButton"
        onClick={() => setIsModal(false)}
        color="blue"
      >
        닫기
      </Button>
    </div>
  );
}

export default Modal;
