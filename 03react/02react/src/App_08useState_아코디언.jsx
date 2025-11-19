import axios from "axios";
import React, { useEffect } from "react";
import ModalComp from "./components/post/ModalComp";

function App() {
  const [postData, setPostData] = React.useState([]);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [postItem, setPostItem] = React.useState({});

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPostData(res.data);
        // console.log(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchApi();
  }, []);

  return (
    <div>
      <h3>Post</h3>
      {modalOpen ? (
        <ModalComp setModalOpen={setModalOpen}>
          <h4>
            {postItem.id}. {postItem.title}
          </h4>
          <p>{postItem.body}</p>
        </ModalComp>
      ) : null}

      <ul>
        {postData.length > 0
          ? postData.map((item, i) => (
              <li key={i}>
                <div
                  onClick={() => {
                    setModalOpen(true);
                    setPostItem(item);
                    console.log(i, item);
                  }}
                >
                  {item.id}. {item.title}
                </div>

                {item.id === postItem.id && modalOpen ? (
                  <ModalComp
                    postItem={item}
                    setModalOpen={setModalOpen}
                  ></ModalComp>
                ) : null}
              </li>
            ))
          : "data 없음"}
      </ul>
    </div>
  );
}

export default App;
