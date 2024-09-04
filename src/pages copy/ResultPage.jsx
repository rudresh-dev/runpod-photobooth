// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { faceSwap } from '../api';

// const ResultPage = () => {
//   const location = useLocation();
//   const [finalImage, setFinalImage] = useState(null);
//   const { generatedImage } = location.state;

//   useEffect(() => {
//     const swapFace = async () => {
//       const swappedImageData = await faceSwap(generatedImage, 'path/to/target/image.png');
//       if (swappedImageData) {
//         setFinalImage(swappedImageData);
//       }
//     };
//     swapFace();
//   }, [generatedImage]);

//   return (
//     <div>
//       <h1>Final Image</h1>
//       {finalImage ? (
//         <img src={`data:image/png;base64,${finalImage}`} alt="Final" />
//       ) : (
//         <p>Processing face swap...</p>
//       )}
//     </div>
//   );
// };

// export default ResultPage;



// import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { faceSwap } from '../api';

// const ResultPage = () => {
//   const location = useLocation();
//   const [finalImage, setFinalImage] = useState(null);
//   const { webcamImage, generatedImage } = location.state;

//   useEffect(() => {
//     const swapFace = async () => {
//       const swappedImageData = await faceSwap(webcamImage, generatedImage);
//       if (swappedImageData) {
//         setFinalImage(swappedImageData);
//       }
//     };
//     swapFace();
//   }, [webcamImage, generatedImage]);

//   return (
//     <div>
//       <h1>Final Swapped Image</h1>
//       {finalImage ? (
//         <img src={`data:image/png;base64,${finalImage}`} alt="Final" />
//       ) : (
//         <p>Processing face swap...</p>
//       )}
//     </div>
//   );
// };

// export default ResultPage;






// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { faceSwap } from '../api';

// const ResultPage = () => {
//   const location = useLocation();
//   const [finalImage, setFinalImage] = useState(null);
//   const { webcamImage, generatedImage } = location.state;

//   useEffect(() => {
//     const swapFace = async () => {
//       const swappedImageData = await faceSwap(webcamImage, generatedImage);
//       if (swappedImageData) {
//         setFinalImage(`data:image/png;base64,${swappedImageData}`);
//       }
//     };
//     swapFace();
//   }, [webcamImage, generatedImage]);

//   return (
//     <div>
//       <h1>Final Swapped Image</h1>
//       {finalImage ? (
//         <img src={finalImage} alt="Final" />
//       ) : (
//         <p>Processing face swap...</p>
//       )}
//     </div>
//   );
// };

// export default ResultPage;




// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { faceSwap } from '../api';

// const ResultPage = () => {
//   const location = useLocation();
//   const [finalImage, setFinalImage] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { webcamImage, generatedImage } = location.state;

//   useEffect(() => {
//     if (webcamImage && generatedImage) {
//       const swapFace = async () => {
//         try {
//           setLoading(true);
//           const swappedImageData = await faceSwap(webcamImage, generatedImage);
//           if (swappedImageData) {
//             setFinalImage(`data:image/png;base64,${swappedImageData}`);
//           } else {
//             setError('Face swap failed. Please try again.');
//           }
//         } catch (err) {
//           setError('An error occurred during face swap.');
//           console.error('Face swap error:', err);
//         } finally {
//           setLoading(false);
//         }
//       };
//       swapFace();
//     } else {
//       setError('Invalid image data.');
//       setLoading(false);
//     }
//   }, [webcamImage, generatedImage]);

//   return (
//     <div>
//       <h1>Final Swapped Image</h1>
//       {loading ? (
//         <p>Processing face swap...</p>
//       ) : error ? (
//         <p>{error}</p>
//       ) : (
//         finalImage && <img src={finalImage} alt="Final Swapped Image" />
//       )}
//     </div>
//   );
// };

// export default ResultPage;



// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { faceSwap } from '../api';

// const ResultPage = () => {
//   const location = useLocation();
//   const [finalImage, setFinalImage] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { webcamImageUrl, generatedImageUrl } = location.state;  // Expecting URLs here

//   useEffect(() => {
//     if (webcamImageUrl && generatedImageUrl) {
//       const swapFace = async () => {
//         try {
//           setLoading(true);
//           const swappedImageData = await faceSwap(webcamImageUrl, generatedImageUrl);
//           if (swappedImageData) {
//             setFinalImage(`data:image/png;base64,${swappedImageData}`);
//           } else {
//             setError('Face swap failed. Please try again.');
//           }
//         } catch (err) {
//           setError('An error occurred during face swap.');
//           console.error('Face swap error:', err);
//         } finally {
//           setLoading(false);
//         }
//       };
//       swapFace();
//     } else {
//       setError('Invalid image data.');
//       setLoading(false);
//     }
//   }, [webcamImageUrl, generatedImageUrl]);

//   return (
//     <div>
//       <h1>Final Swapped Image</h1>
//       {loading ? (
//         <p>Processing face swap...</p>
//       ) : error ? (
//         <p>{error}</p>
//       ) : (
//         finalImage && <img src={finalImage} alt="Final Swapped Image" />
//       )}
//     </div>
//   );
// };

// export default ResultPage;



// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { faceSwap } from '../api';

// const ResultPage = () => {
//   const location = useLocation();
//   const [finalImageUrl, setFinalImageUrl] = useState(null);
//   const { webcamImageUrl, generatedImageUrl } = location.state;

//   useEffect(() => {
//     const swapFace = async () => {
//       const imageUrl = await faceSwap(webcamImageUrl, generatedImageUrl);
//       if (imageUrl) {
//         setFinalImageUrl(imageUrl);
//       }
//     };
//     swapFace();
//   }, [webcamImageUrl, generatedImageUrl]);

//   return (
//     <div>
//       <h1>Final Swapped Image</h1>
//       {finalImageUrl ? (
//         <img src={finalImageUrl} alt="Final" />
//       ) : (
//         <p>Processing face swap...</p>
//       )}
//     </div>
//   );
// };

// export default ResultPage;




import React from 'react';
import { useLocation } from 'react-router-dom';

const ResultPage = () => {
  const location = useLocation();
  const { swappedImageUrl } = location.state;

  return (
    <div>
      <h1>Final Swapped Image</h1>
      {swappedImageUrl ? (
        <img src={swappedImageUrl} alt="Swapped" />
      ) : (
        <p>Processing face swap...</p>
      )}
    </div>
  );
};

export default ResultPage;
