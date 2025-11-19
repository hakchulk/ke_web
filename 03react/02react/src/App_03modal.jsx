import React, { useState, useEffect } from "react";
import Button from "./components/Button";
import Modal from "./components/Modal";
import "./App_03modal.css";

function App() {
  const [isModal, setIsModal] = useState(false);
  // useEffect(() => {
  //   document
  //     .getElementsByClassName("app")[0]
  //     .classList.toggle("blurred", isModal);
  // }, [isModal]);

  return (
    <>
      <div className="app">
        <h1>모달박스 데모</h1>
        <div className="parentBox">
          <div className="btns">
            <div onClick={() => setIsModal(true)}>
              <Button>창띄우기</Button>
            </div>
            <div onClick={() => setIsModal(false)}>
              <Button color="red">창닫기</Button>
            </div>
            <div>
              <Button onClick={() => setIsModal(!isModal)} color="red">
                창토글
              </Button>
            </div>
          </div>
        </div>
      </div>
      {isModal ? (
        <Modal setIsModal={setIsModal}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, nemo
          minus. Facilis architecto temporibus mollitia maxime ratione. Optio
          voluptatibus unde maiores voluptatum excepturi at fugit numquam eius
          dolorum, porro sapiente.
        </Modal>
      ) : null}
      {document
        .getElementsByClassName("app")[0]
        .classList.toggle("blurred", isModal)}
    </>
  );
}

export default App;
