import React, { useRef, useState } from 'react';

const CameraCapture = () => {
  const videoRef = useRef(null);
  const [photo, setPhoto] = useState(null);

  const startCamera = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    if (videoRef.current) {
      videoRef.current.srcObject = stream;
    }
  };

  const takePhoto = () => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (videoRef.current) {
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      const data = canvas.toDataURL('image/png');
      setPhoto(data);
    }
  };

  const stopCamera = () => {
    const stream = videoRef.current.srcObject;
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
  };

  return (
    <div>
      <h1>Camera Capture</h1>
      <video ref={videoRef} autoPlay onLoadedMetadata={startCamera} />
      <button onClick={takePhoto}>Take Photo</button>
      <button onClick={stopCamera}>Stop Camera</button>
      {photo && (
        <div>
          <h2>Photo Preview:</h2>
          <img src={photo} alt="Captured" />
        </div>
      )}
    </div>
  );
};

export default CameraCapture;
