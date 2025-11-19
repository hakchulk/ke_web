import React, { useState } from "react";

function App() {
  const [fileName, setFileName] = useState("이미지 파일업로드");
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");

  function fileChangeHandler(e) {
    const imgFile = e.target.files[0];
    console.log(imgFile);
    setFileName(imgFile.name);
    setFile(imgFile);
    if (imgFile) {
      const imgTag = document.querySelector("img");
      const imgUrl = URL.createObjectURL(imgFile);
      console.log("fileChangeHandler(e) : imgUrl", imgUrl);

      imgTag.src = imgUrl;

      // URL.revokeObjectURL(img.src);
    }
  }

  function submitHandler(e) {
    e.preventDefault();
    const formData = new FormData();
    console.log("submitHandler() file", file);
    formData.append("image", file);
    formData.append("text", e.target.elements["testinput"].value);
    for (const [key, value] of formData.entries()) {
      console.log("submitHandler() formData key, value", key, value);
    }
  }

  return (
    <div>
      <h3>파일 업로드</h3>
      <form action="" onSubmit={submitHandler}>
        <label htmlFor="file">{fileName}</label>
        <input
          type="file"
          id="file"
          accept="image/*"
          onChange={fileChangeHandler}
          multiple
        />
        <div>
          <label htmlFor="testinput">이름</label>
          <input type="text" id="testinput" multiple />
          <button type="submit">전송</button>
        </div>
      </form>
      <img id="img" />
    </div>
  );
}

export default App;
