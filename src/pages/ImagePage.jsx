import { useState, useRef } from "react";
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
  const [gender, setGender] = useState(0); // Default gender as male (2)
  const navigate = useNavigate();
  const [showLoading, setShowLoading] = useState(false);
  const webcamRef = useRef(null);

  const handleCapture = async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    if (imageSrc) {
      const savedImage = await saveWebcamImage(imageSrc);
      if (savedImage && savedImage.image_url) {
        setWebcamImageUrl(
          `https://sea-turtle-app-5x9p8.ondigitalocean.app${savedImage.image_url}`
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
      <div className="hidden absolute bottom-3 justify-center w-screen items-center">
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
