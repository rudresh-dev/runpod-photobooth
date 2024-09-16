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





















// import { useState, useRef } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import Webcam from "react-webcam";
// import { saveWebcamImage, faceSwap } from "../api";
// import { TbCapture } from "react-icons/tb";
// import { GrCaretNext } from "react-icons/gr";
// import { SiNextra } from "react-icons/si";
// import LoadingScreen from "./LoadingScreen"; // Import the LoadingScreen component

// const ImagePage = () => {
//   const location = useLocation();
//   const { prompt, generatedImageUrl } = location.state;
//   const [webcamImageUrl, setWebcamImageUrl] = useState(null);
//   const [isCaptured, setIsCaptured] = useState(false); // Track if the image is captured
//   const [isProcessing, setIsProcessing] = useState(false); // Track if face swap is in progress
//   const navigate = useNavigate();
//   const [gender, setGender] = useState(2); // Default to male (2)
//   const [showLoading, setShowLoading] = useState(false); // Track if the loading screen should be displayed
//   const webcamRef = useRef(null);

//   // Capture the image from the webcam
//   const handleCapture = async () => {
//     const imageSrc = webcamRef.current.getScreenshot();
//     if (imageSrc) {
//       const savedImage = await saveWebcamImage(imageSrc);
//       if (savedImage && savedImage.image_url) {
//         setWebcamImageUrl(
//           `https://king-prawn-app-js4z2.ondigitalocean.app${savedImage.image_url}`
//         );
//         setIsCaptured(true); // Set captured state to true
//       } else {
//         console.error("Failed to save webcam image");
//       }
//     }
//   };

//   // Navigate to the result page after face swap
//   const handleNext = async () => {
//     if (webcamImageUrl) {
//       setIsProcessing(true); // Disable button when face swap starts
//       setShowLoading(true); // Show the loading screen

//       const faceSwapResult = await faceSwap(webcamImageUrl, generatedImageUrl);
//       if (faceSwapResult) {
//         navigate("/result", { state: { swappedImageUrl: faceSwapResult } });
//       } else {
//         console.error("Face swap failed");
//         setIsProcessing(false); // Re-enable button if face swap fails
//         setShowLoading(false); // Hide the loading screen if face swap fails
//       }
//     }
//   };

//   return (
//     <div className="w-screen h-screen bg-red-700">
//       {/* Show the generated image */}
//       <div className="img-c-container hidden">
//         <img
//           src={generatedImageUrl}
//           alt="Generated"
//           className="generated-image"
//         />
//       </div>

//       {/* Conditionally show the webcam or the captured image */}
//       <div className="w-screen h-screen bg-blue-900">
//         {!isCaptured ? (
//           <div className="w-screen h-screen">
//             <Webcam
//               audio={false}
//               ref={webcamRef}
//               screenshotFormat="image/jpeg"
//               videoConstraints={{
//                 facingMode: "user", // Use 'environment' for the back camera
//               }}
//               className="webcam"
//             />
//             <div className="z-30 absolute bottom-14 flex justify-center  w-screen items-center">
//               <button className="" onClick={handleCapture}>
//                 <TbCapture size={100} color="white" />
//               </button>
//             </div>
//           </div>
//         ) : (
//           <div className="w-screen h-screen">
//             <img
//               className="w-screen h-screen object-cover"
//               src={webcamImageUrl}
//               alt="Captured Webcam"
//             />
//           </div>
//         )}
//       </div>


//       {/* Gender selection toggle */}
//       <div className="absolute top-10 flex justify-center w-screen items-center">
//         <label className="text-white mr-4">Select Gender:</label>
//         <select
//           className="text-black px-4 py-2 rounded-lg"
//           value={gender}
//           onChange={(e) => setGender(Number(e.target.value))} // Update the gender state
//         >
//           <option value={2}>Male</option>
//           <option value={1}>Female</option>
//         </select>
//       </div>

//       {/* Conditionally render the face swap button only if the image has been captured */}
//       {isCaptured && (
//         <div className="absolute bottom-14 flex justify-center w-screen items-center">
//           <button
//             className="right-[50vw]"
//             onClick={handleNext}
//             disabled={isProcessing}
//           >
//             {isProcessing ? (
//               <SiNextra size={80} color="white" />
//             ) : (
//               <GrCaretNext size={80} color="white" />
//             )}
//           </button>
//         </div>
//       )}

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
import LoadingScreen from "./LoadingScreen";

const ImagePage = () => {
  const location = useLocation();
  const { prompt, generatedImageUrl } = location.state;
  const [webcamImageUrl, setWebcamImageUrl] = useState(null);
  const [isCaptured, setIsCaptured] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [gender, setGender] = useState(2); // Default gender as male (2)
  const navigate = useNavigate();
  const [showLoading, setShowLoading] = useState(false);
  const webcamRef = useRef(null);

  const handleCapture = async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    if (imageSrc) {
      const savedImage = await saveWebcamImage(imageSrc);
      if (savedImage && savedImage.image_url) {
        setWebcamImageUrl(
          `https://king-prawn-app-js4z2.ondigitalocean.app${savedImage.image_url}`
        );
        setIsCaptured(true);
      } else {
        console.error("Failed to save webcam image");
      }
    }
  };

  const handleNext = async () => {
    if (webcamImageUrl) {
      setIsProcessing(true);
      setShowLoading(true);
  
      // Log the values being sent
      console.log("Webcam Image URL:", webcamImageUrl);
      console.log("Generated Image URL:", generatedImageUrl);
      console.log("Gender Source:", gender);   // This will log the selected gender for both source and target
      console.log("Gender Target:", gender);
  
      // Call the faceSwap function
      const faceSwapResult = await faceSwap(webcamImageUrl, generatedImageUrl, gender, gender);
  
      if (faceSwapResult) {
        navigate("/result", { state: { swappedImageUrl: faceSwapResult } });
      } else {
        console.error("Face swap failed");
        setIsProcessing(false);
        setShowLoading(false);
      }
    }
  };
  
  

  return (
    <div className="w-screen h-screen bg-red-700">
      <div className="w-screen h-screen bg-blue-900">
        {!isCaptured ? (
          <div className="w-screen h-screen">
            <Webcam
              audio={false}
              mirrored={true}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              screenshotWidth={720} // Set the width of the captured screenshot to 720 pixels
              videoConstraints={{
                width: 720,
                height: 720,
                facingMode: "user", // Use 'environment' for the back camera, 'user' for the front
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

      {/* Gender Toggle */}
      <div className="absolute bottom-3 flex justify-center w-screen items-center">
        <button
          className={`px-4 py-2 border rounded-lg ${gender === 2 ? "bg-blue-500" : "bg-gray-500"}`}
          onClick={() => setGender(2)}
        >
          Male
        </button>
        <button
          className={`px-4 py-2 border rounded-lg ml-4 ${gender === 1 ? "bg-pink-500" : "bg-gray-500"}`}
          onClick={() => setGender(1)}
        >
          Female
        </button>
      </div>

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

      {showLoading && <LoadingScreen />}
    </div>
  );
};

export default ImagePage;
