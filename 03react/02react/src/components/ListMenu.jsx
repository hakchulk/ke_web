import React from "react";
import "./tab.css";
import Modal from "./Modal";

function ListMenu({ data }) {
  const [menuIndex, setTabIndex] = React.useState(0);
  const [isModal, setIsModal] = React.useState(true);

  return (
    <div>
      <div>
        {data.map((item, index) => {
          return (
            <div key={index}>
              <MenuItem
                title={item.title}
                idx={index}
                menuIndex={menuIndex}
                setIndex={setTabIndex}
                setIsModal={setIsModal}
              ></MenuItem>
            </div>
          );
        })}
      </div>
      {menuIndex} <br />
      {isModal.toString()}
      {isModal ? (
        <div className="content">
          <h3>{data[menuIndex].title}</h3>
          <p>{data[menuIndex].content}</p>
          <button onClick={() => setIsModal(false)}>닫기</button>
        </div>
      ) : null}
      {isModal ? (
        <Modal setIsModal={setIsModal}>
          <h3>{data[menuIndex].title}</h3>
          <p>{data[menuIndex].content}</p>
        </Modal>
      ) : null}
    </div>
  );
}

function MenuItem({ title, idx, menuIndex, setIndex, setIsModal }) {
  // let index = idx;

  return (
    <div
      className={menuIndex == idx ? "active" : ""}
      onClick={() => {
        setIndex(idx);
        setIsModal(true);
      }}
    >
      {title}
    </div>
  );
}

export default ListMenu;
