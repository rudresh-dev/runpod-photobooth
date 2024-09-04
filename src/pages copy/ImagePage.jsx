


// import React, { useState, useEffect, useRef } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { generateImage } from '../api';
// import Webcam from 'react-webcam';

// const ImagePage = () => {
//   const location = useLocation();
//   const [generatedImage, setGeneratedImage] = useState(null);
//   const [webcamImage, setWebcamImage] = useState(null);
//   const navigate = useNavigate();
//   const { prompt } = location.state;

//   const webcamRef = useRef(null);

//   useEffect(() => {
//     const fetchImage = async () => {
//       const imageData = await generateImage(prompt);
//       if (imageData && imageData.images && imageData.images[0]) {
//         setGeneratedImage(`data:image/png;base64,${imageData.images[0]}`);
//       }
//     };
//     fetchImage();
//   }, [prompt]);

//   const handleCapture = () => {
//     const imageSrc = webcamRef.current.getScreenshot();
//     setWebcamImage(imageSrc);
//   };

//   const handleNext = () => {
//     if (webcamImage && generatedImage) {
//       navigate('/result', { state: { webcamImage, generatedImage } });
//     }
//   };

//   return (
//     <div>
//       <h1>Generated Image and Webcam Capture</h1>
//       {generatedImage && (
//         <div>
//           <img src={generatedImage} alt="Generated" />
//         </div>
//       )}
//       <div>
//         <Webcam
//           audio={false}
//           ref={webcamRef}
//           screenshotFormat="image/jpeg"
//           width={512}
//           height={512}
//         />
//         <button onClick={handleCapture}>Capture Image</button>
//       </div>
//       {webcamImage && (
//         <div>
//           <h3>Webcam Image:</h3>
//           <img src={webcamImage} alt="Webcam" />
//         </div>
//       )}
//       <button onClick={handleNext} disabled={!webcamImage || !generatedImage}>Next</button>
//     </div>
//   );
// };

// export default ImagePage;




// import { useState, useEffect, useRef } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { generateImage, saveImage } from '../api';
// import Webcam from 'react-webcam';

// const ImagePage = () => {
//   const location = useLocation();
//   const [generatedImageUrl, setGeneratedImageUrl] = useState(null);
//   const [webcamImageUrl, setWebcamImageUrl] = useState(null);
//   const navigate = useNavigate();
//   const { prompt } = location.state;

//   const webcamRef = useRef(null);

//   useEffect(() => {
//     const fetchImage = async () => {
//       const imageData = await generateImage(prompt);
//       if (imageData && imageData.images && imageData.images[0]) {
//         const savedImage = await saveImage(`data:image/png;base64,${imageData.images[0]}`, 'png');
//         setGeneratedImageUrl(savedImage.imageUrl);
//       }
//     };
//     fetchImage();
//   }, [prompt]);

//   const handleCapture = async () => {
//     const imageSrc = webcamRef.current.getScreenshot();
//     const savedImage = await saveImage(imageSrc, 'jpeg');
//     setWebcamImageUrl(savedImage.imageUrl);
//   };

//   const handleNext = () => {
//     if (webcamImageUrl && generatedImageUrl) {
//       navigate('/result', { state: { webcamImageUrl, generatedImageUrl } });
//     }
//   };

//   return (
//     <div>
//       <h1>Generated Image and Webcam Capture</h1>
//       {generatedImageUrl && (
//         <div>
//           <img src={generatedImageUrl} alt="Generated" />
//         </div>
//       )}
//       <div>
//         <Webcam
//           audio={false}
//           ref={webcamRef}
//           screenshotFormat="image/jpeg"
//           width={512}
//           height={512}
//         />
//         <button onClick={handleCapture}>Capture Image</button>
//       </div>
//       {webcamImageUrl && (
//         <div>
//           <h3>Webcam Image:</h3>
//           <img src={webcamImageUrl} alt="Webcam" />
//         </div>
//       )}
//       <button onClick={handleNext} disabled={!webcamImageUrl || !generatedImageUrl}>Next</button>
//     </div>
//   );
// };

// export default ImagePage;



// import React, { useState, useEffect, useRef } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { generateImage, saveImage } from '../api';
// import Webcam from 'react-webcam';

// const ImagePage = () => {
//   const location = useLocation();
//   const [generatedImageUrl, setGeneratedImageUrl] = useState(null);
//   const [webcamImageUrl, setWebcamImageUrl] = useState(null);
//   const navigate = useNavigate();
//   const { prompt } = location.state;

//   const webcamRef = useRef(null);

//   useEffect(() => {
//     const fetchImage = async () => {
//       const imageData = await generateImage(prompt);
//       if (imageData && imageData.images && imageData.images[0]) {
//         const savedImage = await saveImage(`data:image/png;base64,${imageData.images[0]}`, 'png');
//         setGeneratedImageUrl(`http://localhost:7000${savedImage.imageUrl}`);
//       }
//     };
//     fetchImage();
//   }, [prompt]);

//   const handleCapture = async () => {
//     const imageSrc = webcamRef.current.getScreenshot();
//     const savedImage = await saveImage(imageSrc, 'jpeg');
//     setWebcamImageUrl(`http://localhost:7000${savedImage.imageUrl}`);
//   };

//   const handleNext = () => {
//     if (webcamImageUrl && generatedImageUrl) {
//       navigate('/result', { state: { webcamImageUrl, generatedImageUrl } });
//     }
//   };

//   return (
//     <div>
//       <h1>Generated Image and Webcam Capture</h1>
//       {generatedImageUrl && (
//         <div>
//           <img src={generatedImageUrl} alt="Generated" />
//         </div>
//       )}
//       <div>
//         <Webcam
//           audio={false}
//           ref={webcamRef}
//           screenshotFormat="image/jpeg"
//           width={512}
//           height={512}
//         />
//         <button onClick={handleCapture}>Capture Image</button>
//       </div>
//       {webcamImageUrl && (
//         <div>
//           <h3>Webcam Image:</h3>
//           <img src={webcamImageUrl} alt="Webcam" />
//         </div>
//       )}
//       <button onClick={handleNext} disabled={!webcamImageUrl || !generatedImageUrl}>Next</button>
//     </div>
//   );
// };

// export default ImagePage;




// import React, { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { generateImage, saveImage } from '../api';
// import Webcam from 'react-webcam';

// const ImagePage = () => {
//   const [generatedImageUrl, setGeneratedImageUrl] = useState(null);
//   const [webcamImageUrl, setWebcamImageUrl] = useState(null);
//   const navigate = useNavigate();
//   const prompt = "Sample prompt for image generation"; // Replace with actual prompt

//   const webcamRef = useRef(null);

//   useEffect(() => {
//     const fetchImage = async () => {
//       const imageData = await generateImage(prompt);
//       if (imageData && imageData.images && imageData.images[0]) {
//         const savedImage = await saveImage(`data:image/png;base64,${imageData.images[0]}`, 'png');
//         setGeneratedImageUrl(`http://localhost:7000${savedImage.imageUrl}`);
//       }
//     };
//     fetchImage();
//   }, [prompt]);

//   const handleCapture = async () => {
//     const imageSrc = webcamRef.current.getScreenshot();
//     const savedImage = await saveImage(imageSrc, 'jpeg');
//     setWebcamImageUrl(`http://localhost:7000${savedImage.imageUrl}`);
//   };

//   const handleNext = () => {
//     if (webcamImageUrl && generatedImageUrl) {
//       navigate('/result', { state: { webcamImageUrl, generatedImageUrl } });
//     }
//   };

//   return (
//     <div>
//       <h1>Generated Image and Webcam Capture</h1>
//       {generatedImageUrl && (
//         <div>
//           <img src={generatedImageUrl} alt="Generated" />
//         </div>
//       )}
//       <div>
//         <Webcam
//           audio={false}
//           ref={webcamRef}
//           screenshotFormat="image/jpeg"
//           width={512}
//           height={512}
//         />
//         <button onClick={handleCapture}>Capture Image</button>
//       </div>
//       {webcamImageUrl && (
//         <div>
//           <h3>Webcam Image:</h3>
//           <img src={webcamImageUrl} alt="Webcam" />
//         </div>
//       )}
//       <button onClick={handleNext} disabled={!webcamImageUrl || !generatedImageUrl}>Next</button>
//     </div>
//   );
// };

// export default ImagePage;




// import React, { useState, useEffect, useRef } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { generateImage, saveImage } from '../api';
// import Webcam from 'react-webcam';

// const ImagePage = () => {
//   const location = useLocation();
//   const [generatedImageUrl, setGeneratedImageUrl] = useState(null);
//   const [webcamImageUrl, setWebcamImageUrl] = useState(null);
//   const navigate = useNavigate();
//   const { prompt } = location.state;

//   const webcamRef = useRef(null);

//   useEffect(() => {
//     const fetchImage = async () => {
//       const imageUrl = await generateImage(prompt);
//       if (imageUrl) {
//         setGeneratedImageUrl(imageUrl);
//       }
//     };
//     fetchImage();
//   }, [prompt]);

//   const handleCapture = async () => {
//     const imageSrc = webcamRef.current.getScreenshot();
//     const savedImage = await saveImage(imageSrc, 'jpeg');
//     setWebcamImageUrl(savedImage.imageUrl);
//   };

//   const handleNext = () => {
//     if (webcamImageUrl && generatedImageUrl) {
//       navigate('/result', { state: { webcamImageUrl, generatedImageUrl } });
//     }
//   };

//   return (
//     <div>
//       <h1>Generated Image and Webcam Capture</h1>
//       {generatedImageUrl && (
//         <div>
//           <img src={generatedImageUrl} alt="Generated" />
//         </div>
//       )}
//       <div>
//         <Webcam
//           audio={false}
//           ref={webcamRef}
//           screenshotFormat="image/jpeg"
//           width={512}
//           height={512}
//         />
//         <button onClick={handleCapture}>Capture Image</button>
//       </div>
//       {webcamImageUrl && (
//         <div>
//           <h3>Webcam Image:</h3>
//           <img src={webcamImageUrl} alt="Webcam" />
//         </div>
//       )}
//       <button onClick={handleNext} disabled={!webcamImageUrl || !generatedImageUrl}>Next</button>
//     </div>
//   );
// };

// export default ImagePage;





// import React, { useState, useEffect, useRef } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { generateImage } from '../api';
// import Webcam from 'react-webcam';

// const ImagePage = () => {
//   const location = useLocation();
//   const [generatedImageUrl, setGeneratedImageUrl] = useState(null);
//   const [webcamImageUrl, setWebcamImageUrl] = useState(null);
//   const navigate = useNavigate();
//   const { prompt } = location.state;

//   const webcamRef = useRef(null);

//   useEffect(() => {
//     const fetchImage = async () => {
//       const imageUrl = await generateImage(prompt);
//       if (imageUrl) {
//         setGeneratedImageUrl(imageUrl);
//       }
//     };
//     fetchImage();
//   }, [prompt]);

//   const handleCapture = () => {
//     const imageSrc = webcamRef.current.getScreenshot();
//     setWebcamImageUrl(imageSrc);
//   };

//   const handleNext = () => {
//     if (webcamImageUrl && generatedImageUrl) {
//       navigate('/result', { state: { webcamImageUrl, generatedImageUrl } });
//     }
//   };

//   return (
//     <div>
//       <h1>Generated Image and Webcam Capture</h1>
//       {generatedImageUrl && (
//         <div>
//           <img src={generatedImageUrl} alt="Generated" />
//         </div>
//       )}
//       <div>
//         <Webcam
//           audio={false}
//           ref={webcamRef}
//           screenshotFormat="image/jpeg"
//           width={512}
//           height={512}
//         />
//         <button onClick={handleCapture}>Capture Image</button>
//       </div>
//       {webcamImageUrl && (
//         <div>
//           <h3>Webcam Image:</h3>
//           <img src={webcamImageUrl} alt="Webcam" />
//         </div>
//       )}
//       <button onClick={handleNext} disabled={!webcamImageUrl || !generatedImageUrl}>Next</button>
//     </div>
//   );
// };

// export default ImagePage;




// import React, { useState, useEffect, useRef } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { generateImage, saveWebcamImage } from '../api';
// import Webcam from 'react-webcam';

// const ImagePage = () => {
//   const location = useLocation();
//   const [generatedImageUrl, setGeneratedImageUrl] = useState(null);
//   const [webcamImageUrl, setWebcamImageUrl] = useState(null);
//   const navigate = useNavigate();
//   const { prompt } = location.state;

//   const webcamRef = useRef(null);

//   useEffect(() => {
//     const fetchImage = async () => {
//       const imageUrl = await generateImage(prompt);
//       if (imageUrl) {
//         setGeneratedImageUrl(imageUrl);
//       }
//     };
//     fetchImage();
//   }, [prompt]);

//   const handleCapture = async () => {
//     const imageSrc = webcamRef.current.getScreenshot();
//     if (imageSrc) {
//       const savedImage = await saveWebcamImage(imageSrc);
//       if (savedImage) {
//         setWebcamImageUrl(savedImage.image_url);
//       }
//     }
//   };

//   const handleNext = () => {
//     if (webcamImageUrl && generatedImageUrl) {
//       navigate('/result', { state: { webcamImageUrl, generatedImageUrl } });
//     }
//   };

//   return (
//     <div>
//       <h1>Generated Image and Webcam Capture</h1>
//       {generatedImageUrl && (
//         <div>
//           <img src={generatedImageUrl} alt="Generated" />
//         </div>
//       )}
//       <div>
//         <Webcam
//           audio={false}
//           ref={webcamRef}
//           screenshotFormat="image/jpeg"
//           width={512}
//           height={512}
//         />
//         <button onClick={handleCapture}>Capture Image</button>
//       </div>
//       {webcamImageUrl && (
//         <div>
//           <h3>Webcam Image:</h3>
//           <img src={webcamImageUrl} alt="Webcam" />
//         </div>
//       )}
//       <button onClick={handleNext} disabled={!webcamImageUrl || !generatedImageUrl}>Next</button>
//     </div>
//   );
// };

// export default ImagePage;





// import React, { useState, useRef } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import Webcam from 'react-webcam';
// import { generateImage, saveWebcamImage } from '../api';

// const ImagePage = () => {
//   const location = useLocation();
//   const [generatedImageUrl, setGeneratedImageUrl] = useState(null);
//   const [webcamImageUrl, setWebcamImageUrl] = useState(null);
//   const navigate = useNavigate();
//   const { prompt } = location.state;

//   const webcamRef = useRef(null);

//   // Function to capture the image from the webcam
//   const handleCapture = async () => {
//     const imageSrc = webcamRef.current.getScreenshot();
//     if (imageSrc) {
//       const savedImage = await saveWebcamImage(imageSrc);
//       if (savedImage && savedImage.image_url) {
//         setWebcamImageUrl(`http://localhost:5000${savedImage.image_url}`);
//       }
//     } else {
//       console.error("Failed to capture image");
//     }
//   };

//   // Function to generate the image based on the prompt
//   const handleGenerateImage = async () => {
//     const imageUrl = await generateImage(prompt);
//     if (imageUrl) {
//       setGeneratedImageUrl(imageUrl);
//     }
//   };

//   // Function to navigate to the result page with both images
//   const handleNext = () => {
//     if (webcamImageUrl && generatedImageUrl) {
//       navigate('/result', { state: { webcamImageUrl, generatedImageUrl } });
//     }
//   };

//   return (
//     <div>
//       <h1>Generate and Capture Image</h1>

//       <div>
//         <Webcam
//           audio={false}
//           ref={webcamRef}
//           screenshotFormat="image/jpeg"
//           width={512}
//           height={512}
//         />
//         <button onClick={handleCapture}>Capture Image</button>
//       </div>

//       {webcamImageUrl && (
//         <div>
//           <h3>Webcam Image:</h3>
//           <img src={webcamImageUrl} alt="Captured Webcam" />
//         </div>
//       )}

//       <div>
//         <button onClick={handleGenerateImage}>Generate Image</button>
//       </div>

//       {generatedImageUrl && (
//         <div>
//           <h3>Generated Image:</h3>
//           <img src={generatedImageUrl} alt="Generated" />
//         </div>
//       )}

//       <button onClick={handleNext} disabled={!webcamImageUrl || !generatedImageUrl}>
//         Next
//       </button>
//     </div>
//   );
// };

// export default ImagePage;




import React, { useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Webcam from 'react-webcam';
import { generateImage, saveWebcamImage, faceSwap } from '../api';

const ImagePage = () => {
  const location = useLocation();
  const [generatedImageUrl, setGeneratedImageUrl] = useState(null);
  const [webcamImageUrl, setWebcamImageUrl] = useState(null);
  const navigate = useNavigate();
  const { prompt } = location.state;

  const webcamRef = useRef(null);

  // Function to capture the image from the webcam
  const handleCapture = async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    if (imageSrc) {
      const savedImage = await saveWebcamImage(imageSrc);
      if (savedImage && savedImage.image_url) {
        setWebcamImageUrl(`http://localhost:5000${savedImage.image_url}`);
      }
    } else {
      console.error("Failed to capture image");
    }
  };

  // Function to generate the image based on the prompt
  const handleGenerateImage = async () => {
    const imageUrl = await generateImage(prompt);
    if (imageUrl) {
      setGeneratedImageUrl(imageUrl);
    }
  };

  // Function to navigate to the result page with both images
  const handleNext = async () => {
    if (webcamImageUrl && generatedImageUrl) {
      const faceSwapResult = await faceSwap(webcamImageUrl, generatedImageUrl);
      if (faceSwapResult) {
        navigate('/result', { state: { swappedImageUrl: faceSwapResult } });
      } else {
        console.error("Face swap failed");
      }
    }
  };

  return (
    <div>
      <h1>Generate and Capture Image</h1>

      <div>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={512}
          height={512}
        />
        <button onClick={handleCapture}>Capture Image</button>
      </div>

      {webcamImageUrl && (
        <div>
          <h3>Webcam Image:</h3>
          <img src={webcamImageUrl} alt="Captured Webcam" />
        </div>
      )}

      <div>
        <button onClick={handleGenerateImage}>Generate Image</button>
      </div>

      {generatedImageUrl && (
        <div>
          <h3>Generated Image:</h3>
          <img src={generatedImageUrl} alt="Generated" />
        </div>
      )}

      <button onClick={handleNext} disabled={!webcamImageUrl || !generatedImageUrl}>
        Next
      </button>
    </div>
  );
};

export default ImagePage;
