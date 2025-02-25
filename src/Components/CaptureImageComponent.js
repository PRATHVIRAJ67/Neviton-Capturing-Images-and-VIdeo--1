import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import './CaptureImageComponent.css';

const CaptureImageComponent = () => {
  const webcamRef = useRef(null);
  const [capturedImages, setCapturedImages] = useState([]);
  const [facingMode, setFacingMode] = useState('user'); // 'user' for front camera, 'environment' for back camera

  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    if (imageSrc) {
      setCapturedImages([...capturedImages, imageSrc]);
    }
  };

  const toggleFacingMode = () => {
    setFacingMode(prevFacingMode => (prevFacingMode === 'user' ? 'environment' : 'user'));
  };

  return (
    <div className="container">
      <div className="webcam-container">
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={{ facingMode }}
        />
        <button className="toggle-camera" onClick={toggleFacingMode}>
          Switch to {facingMode === 'user' ? 'Back' : 'Front'} Camera
        </button>
        <button className="capture" onClick={captureImage}>Capture</button>
      </div>
      <div className="image-grid">
        {capturedImages.map((image, index) => (
          <img key={index} src={image} alt={`Captured ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default CaptureImageComponent;