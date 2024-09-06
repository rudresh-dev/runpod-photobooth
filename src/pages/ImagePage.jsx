// import React, { useState, useRef } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import Webcam from 'react-webcam';
// import { saveWebcamImage, faceSwap } from '../api';
// import { TbCapture } from "react-icons/tb";
// import { GrCaretNext } from "react-icons/gr";
// import { SiNextra } from "react-icons/si";
// import LoadingScreen from './LoadingScreen';  // Import the LoadingScreen component

// const ImagePage = () => {
//   const location = useLocation();
//   const { prompt, generatedImageUrl } = location.state;
//   const [webcamImageUrl, setWebcamImageUrl] = useState(null);
//   const [isCaptured, setIsCaptured] = useState(false); // Track if the image is captured
//   const [isProcessing, setIsProcessing] = useState(false); // Track if face swap is in progress
//   const navigate = useNavigate();
//   const [showLoading, setShowLoading] = useState(false);  // Track if the loading screen should be displayed
//   const webcamRef = useRef(null);

//   // Capture the image from the webcam
//   const handleCapture = async () => {
//     const imageSrc = webcamRef.current.getScreenshot();
//     if (imageSrc) {
//       const savedImage = await saveWebcamImage(imageSrc);
//       if (savedImage && savedImage.image_url) {
//         setWebcamImageUrl(`https://king-prawn-app-js4z2.ondigitalocean.app${savedImage.image_url}`);
//         setIsCaptured(true); // Set captured state to true
//       } else {
//         console.error('Failed to save webcam image');
//       }
//     }
//   };

//   // // Navigate to the result page after face swap
//   // const handleNext = async () => {
//   //   if (webcamImageUrl) {
//   //     setIsProcessing(true); // Disable button when face swap starts
//   //     const faceSwapResult = await faceSwap(webcamImageUrl, generatedImageUrl);
//   //     if (faceSwapResult) {
//   //       navigate('/result', { state: { swappedImageUrl: faceSwapResult } });
//   //     } else {
//   //       console.error('Face swap failed');
//   //       setIsProcessing(false); // Re-enable button if face swap fails
//   //     }
//   //   }
//   // };

//    // Navigate to the result page after face swap
//    const handleNext = async () => {
//     if (webcamImageUrl) {
//       setIsProcessing(true); // Disable button when face swap starts
//       setShowLoading(true);  // Show the loading screen

//       const faceSwapResult = await faceSwap(webcamImageUrl, generatedImageUrl);
//       if (faceSwapResult) {
//         navigate('/result', { state: { swappedImageUrl: faceSwapResult } });
//       } else {
//         console.error('Face swap failed');
//         setIsProcessing(false); // Re-enable button if face swap fails
//         setShowLoading(false);  // Hide the loading screen if face swap fails
//       }
//     }
//   };

//   return (
//     <div className="w-screen h-screen bg-red-700">
//       {/* Show the generated image */}
//       <div className='img-c-container hidden'>
//         <img src={generatedImageUrl} alt="Generated" className="generated-image" />
//       </div>

//       {/* Conditionally show the webcam or the captured image */}
//       <div className='w-screen h-screen bg-blue-900'>

//       {!isCaptured ? (
//         <div className='w-screen h-screen'>
//           <Webcam
//             audio={false}
//             ref={webcamRef}
//             screenshotFormat="image/jpeg"

//             videoConstraints={{
//               facingMode: 'user', // Use 'environment' for the back camera
//             }}
//             className="webcam"
//           />
//           <button className='z-30 absolute bottom-14 left-[50vw]' onClick={handleCapture}><TbCapture size={100} color='white'/>
//           </button>
//         </div>
//       ) : (
//         <div className='w-screen h-screen'>
//           <img className='' src={webcamImageUrl} alt="Captured Webcam" />
//         </div>
//       )}
//       </div>

//       {/* Face swap button, disabled during the face swap process */}
//       <button className='absolute bottom-14 right-[5vw]' onClick={handleNext} disabled={!webcamImageUrl || isProcessing}>
//         {isProcessing ? <SiNextra  size={80} color='white' /> : <GrCaretNext  size={80} color='white'/>}
//       </button>

//       {/* Show loading screen if processing is in progress */}
//       {showLoading && <LoadingScreen />}
//     </div>
//   );
// };

// export default ImagePage;

import React, { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import { saveWebcamImage, faceSwap } from "../api";
import { TbCapture } from "react-icons/tb";
import { GrCaretNext } from "react-icons/gr";
import { SiNextra } from "react-icons/si";
import LoadingScreen from "./LoadingScreen"; // Import the LoadingScreen component

const ImagePage = () => {
  const location = useLocation();
  const { prompt, generatedImageUrl } = location.state;
  const [webcamImageUrl, setWebcamImageUrl] = useState(null);
  const [isCaptured, setIsCaptured] = useState(false); // Track if the image is captured
  const [isProcessing, setIsProcessing] = useState(false); // Track if face swap is in progress
  const navigate = useNavigate();
  const [showLoading, setShowLoading] = useState(false); // Track if the loading screen should be displayed
  const webcamRef = useRef(null);

  // Capture the image from the webcam
  const handleCapture = async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    if (imageSrc) {
      const savedImage = await saveWebcamImage(imageSrc);
      if (savedImage && savedImage.image_url) {
        setWebcamImageUrl(
          `https://king-prawn-app-js4z2.ondigitalocean.app${savedImage.image_url}`
        );
        setIsCaptured(true); // Set captured state to true
      } else {
        console.error("Failed to save webcam image");
      }
    }
  };

  // Navigate to the result page after face swap
  const handleNext = async () => {
    if (webcamImageUrl) {
      setIsProcessing(true); // Disable button when face swap starts
      setShowLoading(true); // Show the loading screen

      const faceSwapResult = await faceSwap(webcamImageUrl, generatedImageUrl);
      if (faceSwapResult) {
        navigate("/result", { state: { swappedImageUrl: faceSwapResult } });
      } else {
        console.error("Face swap failed");
        setIsProcessing(false); // Re-enable button if face swap fails
        setShowLoading(false); // Hide the loading screen if face swap fails
      }
    }
  };

  return (
    <div className="w-screen h-screen bg-red-700">
      {/* Show the generated image */}
      <div className="img-c-container hidden">
        <img
          src={generatedImageUrl}
          alt="Generated"
          className="generated-image"
        />
      </div>

      {/* Conditionally show the webcam or the captured image */}
      <div className="w-screen h-screen bg-blue-900">
        {!isCaptured ? (
          <div className="w-screen h-screen">
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={{
                facingMode: "user", // Use 'environment' for the back camera
              }}
              className="webcam"
            />
            <div className="z-30 absolute bottom-14 flex justify-center  w-screen items-center">
              <button className="" onClick={handleCapture}>
                <TbCapture size={100} color="white" />
              </button>
            </div>
          </div>
        ) : (
          <div className="w-screen h-screen">
            <img
              className="w-screen h-screen object-cover"
              src={webcamImageUrl}
              alt="Captured Webcam"
            />
          </div>
        )}
      </div>

      {/* Conditionally render the face swap button only if the image has been captured */}
      {isCaptured && (
        <div className="absolute bottom-14 flex justify-center w-screen items-center">
          <button
            className="right-[50vw]"
            onClick={handleNext}
            disabled={isProcessing}
          >
            {isProcessing ? (
              <SiNextra size={80} color="white" />
            ) : (
              <GrCaretNext size={80} color="white" />
            )}
          </button>
        </div>
      )}

      {/* Show loading screen if processing is in progress */}
      {showLoading && <LoadingScreen />}
    </div>
  );
};

export default ImagePage;
