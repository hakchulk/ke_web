import React from "react";
import Button from "./components/Button.jsx";
import ViewComp from "./components/ViewComp.jsx";
import MyComp from "./components/MyComp.jsx";

function App() {
  const city = ["seoul", "busan", "incheon", "daegu"];
  const koreanCity = ["서울", "부산", "인천", "대구"];
  return (
    <>
      <div>App</div>
      <Button title="글작성" />
      <Button title="글보기" color="red" />
      <ViewComp cityData={city} />
      <div style={{ display: "flex" }}>
        {koreanCity.map((item, index) => (
          <div key={index}>
            <Button title={item} />
          </div>
        ))}
      </div>
      <View01 />
      <MyComp></MyComp>
      <Hak />
    </>
  );
}

function Hak() {
  return <div>Hak</div>;
}

export default App;
