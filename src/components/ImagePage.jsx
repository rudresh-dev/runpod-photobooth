import { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import { saveWebcamImage, faceSwap } from "../api";
import { TbCapture } from "react-icons/tb";
import { GrCaretNext } from "react-icons/gr";
import { SiNextra } from "react-icons/si";
import LoadingScreen from "./LoadingScreen";
import { FaRedo } from "react-icons/fa";

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

  // Function to capture the image from the webcam and save it to the server
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
    if (webcamImageUrl && generatedImageUrl) {
      setIsProcessing(true);
      setShowLoading(true);

      // Ensure that the target_image URL has the correct full URL
      const fullTargetImageUrl = `https://sea-turtle-app-5x9p8.ondigitalocean.app${generatedImageUrl}`;

      // Log the values being sent
      console.log("Webcam Image URL:", webcamImageUrl);
      console.log("Generated Image URL:", fullTargetImageUrl);
      console.log("Gender Source:", gender); // Ensure the correct gender values are passed
      console.log("Gender Target:", gender);

      try {
        // Call the faceSwap function with fully qualified URLs
        const faceSwapResult = await faceSwap(
          webcamImageUrl,
          fullTargetImageUrl,
          gender,
          gender
        );

        if (faceSwapResult) {
          navigate("/result", { state: { swappedImageUrl: faceSwapResult } });
        } else {
          console.error("Face swap failed");
        }
      } catch (error) {
        console.error("Error performing face swap:", error);
      } finally {
        setIsProcessing(false);
        setShowLoading(false);
      }
    } else {
      console.error("Missing image URLs");
    }
  };

  // Function to retake the image (reset the captured image)
  const handleRetake = () => {
    setIsCaptured(false);
    setWebcamImageUrl(null);
  };

  return (
    // <div className="w-screen h-screen bg-red-700">
    //   <div className="absolute hidden top-[28vh] hv:top-[20vh] right-0  w-[87vw]">
    //     <img src="/public/lines22.svg" alt="" />
    //   </div>

    //   <div className="absolute hidden left-[0] bottom-[32vh] hv:bottom-[31vh] w-[18vw]">
    //     <img src="/public/lines11.svg" alt="" />
    //   </div>

    //   <img
    //     src="/logocft11.png"
    //     alt=""
    //     className="absolute top-20 left-[35vw]"
    //     width={350}
    //   />
    //   <div className=" bg-[#000]">
    //     {!isCaptured ? (
    //       <div className="flex items-center justify-center h-screen w-screen">
    //         <Webcam
    //           audio={false}
    //           mirrored={true}
    //           ref={webcamRef}
    //           screenshotFormat="image/jpeg"
    //           screenshotWidth={720} // Set the width of the captured screenshot to 720 pixels
    //           videoConstraints={{
    //             width: 720,
    //             height: 720,
    //             facingMode: "user", // Use 'environment' for the back camera, 'user' for the front
    //           }}
    //           className="webcam"
    //         />
    //         <div className="z-30 absolute bottom-14 flex justify-center w-screen items-center">
    //           <button
    //             className="flex justify-center gap-6 bg-none border-solid border-[#ccc] border-[2.4px] hv:w-[670px]  w-[260px] py-[10px]  hv:py-[27px] hv:px-[58px] hv:rounded-3xl rounded-xl text-white text-2xl hv:text-6xl "
    //             onClick={handleCapture}
    //             style={{
    //               background:
    //               // "linear-gradient(90deg, rgba(255,255,255,0.66) 0%, rgba(255,255,255,0.43) 30%, rgba(255,255,255,0) 100%)",
    //               "linear-gradient(95deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 53%, rgba(255,255,255,0.12) 100%)",
    //             }}
    //           >
    //             <img src="/public/came.svg" alt="" />
    //             <p>CAPTURE</p>
    //           </button>
    //         </div>
    //       </div>
    //     ) : (
    //       <div className="w-screen h-screen flex justify-center items-center">
    //         <img
    //           className="w-[736px] h-[932px] object-cover"
    //           src={webcamImageUrl}
    //           alt="Captured Webcam"
    //         />
    //         <div className="absolute bottom-32 flex justify-center w-screen items-center z-0">
    //           <button className="flex justify-center gap-6 bg-none border-solid border-[#ccc] border-[2.4px] hv:w-[670px]  w-[260px] py-[10px]  hv:py-[27px] hv:px-[58px] hv:rounded-3xl rounded-xl text-white text-2xl hv:text-6xl" onClick={handleRetake}
    //            style={{
    //             background:
    //             // "linear-gradient(90deg, rgba(255,255,255,0.66) 0%, rgba(255,255,255,0.43) 30%, rgba(255,255,255,0) 100%)",
    //             "linear-gradient(95deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 53%, rgba(255,255,255,0.12) 100%)",
    //           }}
    //           >

    //           RETAKE
    //           </button>
    //         </div>
    //       </div>
    //     )}
    //   </div>

    //   {isCaptured && (
    //     <div className="absolute bottom-14 flex justify-center items-center w-[462px] h-[115px] bg-red-500">
    //       <button
    //         className="right-[50vw]"
    //         onClick={handleNext}
    //         disabled={isProcessing}
    //       >
    //         {isProcessing ? (
    //           <SiNextra size={80} color="white" />
    //         ) : (
    //           <GrCaretNext size={80} color="white" />
    //         )}
    //       </button>
    //     </div>
    //   )}

    //   {showLoading && <LoadingScreen />}
    // </div>
    <div className="w-screen h-screen bg-red-700">
      {/* <div className="bg-[url('./bar77.svg')] w-screen h-28 absolute top-0 bg-cover bg-bottom"></div>
      <div className="bg-[url('./bar77.svg')] w-screen h-32 absolute bottom-0 bg-cover bg-top"></div> */}
      <div className="absolute hidden top-[28vh] hv:top-[20vh] right-0  w-[87vw]">
        <img src="/public/lines22.svg" alt="" />
      </div>

      <div className="absolute hidden left-[0] bottom-[32vh] hv:bottom-[31vh] w-[18vw] ">
        <img src="/public/lines11.svg" alt="" />
      </div>

      <img
        src="/logocft11.png"
        alt="Logo"
        className="hidden hv:block absolute top-20 left-[35vw]"
        width={350}
      />
      <div className=" bg-[#000]">
        {!isCaptured ? (
          <div className="flex items-center justify-center h-screen w-screen">
            <Webcam
              audio={false}
              mirrored={true}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              screenshotWidth={720}
              videoConstraints={{
                width: 720,
                height: 720,
                facingMode: "user",
              }}
              className="webcam"
            />
            <div className="z-30 absolute bottom-14 flex justify-center w-screen items-center">
              <button
                className="flex justify-center items-center gap-2 bg-none border-solid border-[#ccc] border-[2.4px] hv:w-[670px]  w-[200px] py-[8px] hv:py-[27px] hv:px-[58px] hv:rounded-3xl rounded-xl text-white text-2xl hv:text-6xl "
                onClick={handleCapture}
                style={{
                  background:
                    "linear-gradient(95deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 53%, rgba(255,255,255,0.12) 100%)",
                }}
              >
                <img src="/public/came.svg" className="w-8" alt="Camera Icon" />
                <p>CAPTURE</p>
              </button>
            </div>
          </div>
        ) : (
          <div className="w-screen h-screen flex justify-center items-center">
            <img
              className="w-[736px] h-[932px] object-cover"
              src={webcamImageUrl}
              alt="Captured Webcam"
            />
            <div className="absolute bottom-28 flex justify-center w-screen items-center z-0">
              <button
                className="flex justify-center gap-6 border-solid border-[#ccc] bg-white text-black border-[2.4px] hv:w-[400px]  w-[260px] py-[10px]  hv:py-[27px] hv:px-[58px] hv:rounded-3xl rounded-xl font-bold text-2xl hv:text-6xl"
                onClick={handleRetake}
              >
                RETAKE
              </button>
            </div>
          </div>
        )}
      </div>

      {isCaptured && (
        <div className="absolute bottom-12 flex justify-center w-screen items-center z-0">
          <button
            className="right-[50vw] flex justify-center gap-6 bg-none border-solid border-[#ccc] border-[2.4px] hv:w-[670px]  w-[260px] py-[10px]  hv:py-[27px] hv:px-[58px] hv:rounded-3xl rounded-xl text-white text-2xl hv:text-6xl"
            onClick={handleNext}
            disabled={isProcessing}
            style={{
              background:
                "linear-gradient(95deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 53%, rgba(255,255,255,0.12) 100%)",
            }}
          >
            {isProcessing ? (
              // Show the LoadingScreen component when processing
              <LoadingScreen />
            ) : (
              // Show the SiNextra icon when not processing
              <p>CONTINUE</p>
            )}
          </button>
        </div>
      )}

      {showLoading && <LoadingScreen />}
    </div>
  );
};

export default ImagePage;
