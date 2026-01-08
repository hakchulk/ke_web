import React, { useState } from "react";

const PhotoUploader = () => {
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>사진 업로드</h2>

      {/* 갤러리 선택 */}
      <label style={{ marginRight: "10px" }}>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{ display: "none" }}
          id="galleryInput"
        />
        <button onClick={() => document.getElementById("galleryInput").click()}>
          갤러리에서 선택
        </button>
      </label>

      {/* 카메라 실행 */}
      <label>
        <input
          type="file"
          accept="image/*"
          capture="environment"
          onChange={handleFileChange}
          style={{ display: "none" }}
          id="cameraInput"
        />
        <button onClick={() => document.getElementById("cameraInput").click()}>
          카메라로 촬영
        </button>
      </label>

      {preview && (
        <div style={{ marginTop: "20px" }}>
          <h3>미리보기</h3>
          <img
            src={preview}
            alt="Preview"
            style={{ width: "100%", maxWidth: "300px", borderRadius: "10px" }}
          />
        </div>
      )}
    </div>
  );
};

export default PhotoUploader;
