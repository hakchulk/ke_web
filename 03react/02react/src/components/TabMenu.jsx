import React from "react";
import "./tab.css";

function TabMenu({ data }) {
  const [tabIndex, setTabIndex] = React.useState(0);
  return (
    <div>
      Tab Menu
      <ul className="tab">
        {data.map((item, index) => {
          return (
            <MenuItem
              key={index}
              idx={index}
              tabIndex={tabIndex}
              setIndex={setTabIndex}
            ></MenuItem>
          );
        })}
      </ul>
      <div className="content">
        <h3>{data[tabIndex].title}</h3>
        <p>{data[tabIndex].content}</p>
      </div>
    </div>
  );
}

function MenuItem({ idx, tabIndex, setIndex }) {
  return (
    <li
      className={tabIndex == idx ? "active" : ""}
      onClick={() => setIndex(idx)}
    >
      tab{idx + 1}
    </li>
  );
}

export default TabMenu;
