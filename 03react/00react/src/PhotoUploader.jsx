import React, { useState } from "react";

const PhotoUploader = () => {
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // 미리보기를 위한 URL 생성
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);

      // 여기서 서버로 파일을 업로드하는 로직(fetch/axios)을 수행할 수 있습니다.
      console.log("선택된 파일:", file);
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>사진 업로드</h2>

      {/* accept="image/*": 이미지 파일만 허용
        capture="environment": 모바일에서 후면 카메라 우선 실행 (생략 시 파일 선택창)
      */}
      <input
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleFileChange}
        style={{ marginBottom: "20px" }}
      />

      {preview && (
        <div>
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
