import React from "react";

function ModalComp({ children, postItem, setModalOpen }) {
  return (
    <div>
      <div>
        {children && children}
        {postItem && <div>{postItem.body}</div>}
      </div>

      <button onClick={() => setModalOpen(false)}> 닫기</button>
    </div>
  );
}

export default ModalComp;
