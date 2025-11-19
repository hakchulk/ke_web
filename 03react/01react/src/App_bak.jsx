import React from "react";
import img from "./assets/react.svg";

function App() {
  const viewText = "안녕";
  const city = ["서울", "부산", "대구", "광주"];
  const imgVar = "vite.svg";
  const imgAss = "./src/assets/react.svg";

  return (
    <>
      <div className="container bg-primary">
        <img src={img} alt="logo" />
        <img src={imgVar} alt="logo" />
        <img src={`${imgVar}`} alt="logo" />
        <img src={`${imgAss}`} alt="logo" />

        <h3>{viewText}</h3>
        <div className="row d-block">
          {city.map((item, index) => {
            //console.log(index);
            return (
              <div className="col" key={index}>
                {index + 1}.{item}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
