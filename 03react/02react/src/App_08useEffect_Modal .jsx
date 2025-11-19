import React, { useEffect } from "react";
import axios from "axios";
import Modal from "./components/Modal";

const itemStyle = {
  cursor: "pointer",
};

let dataItem = {};
function App() {
  // api data 가져오기
  // axios 설치 : nmp install axios
  // import axios from 'axios';
  // useEffect 에서 axios.get() 사용
  // async await 사용
  // api 주소 : https://jsonplaceholder.typicode.com/posts

  const [isModal, setIsModal] = React.useState(false);
  // const [dataItem, setItem] = React.useState({});
  const [postData, setPostData] = React.useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      console.log(res.data);
      setPostData(res.data);
    }
    fetchData();
  }, []);

  function showModal(item) {
    // alert(item.title);
    setIsModal(true);
    // setItem(item);
    dataItem = item;
  }

  return (
    <div>
      <style>
        {`
          .activeStyle {
            background-color: lightblue;
          }
          
          .itemStyle {
            cursor: pointer;
          }

        `}
      </style>

      {postData.length > 0 ? "데이터로딩완료" : "로딩중..."}
      <div>
        {postData.map((item, index) => (
          <div
            className={
              "itemStyle " + (item.id === dataItem.id ? "activeStyle" : "")
            }
            key={index}
            onClick={() => showModal(item)}
          >
            {item.id}. {item.title}
          </div>
        ))}
      </div>
      {isModal ? (
        <Modal setIsModal={setIsModal}>
          <h4>
            {dataItem.id}. {dataItem.title}
          </h4>
          <p>{dataItem.body}</p>
        </Modal>
      ) : null}
    </div>
  );
}

export default App;
