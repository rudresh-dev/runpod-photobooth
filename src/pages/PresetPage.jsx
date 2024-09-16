// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { savePresetImage } from '../api';

// const PresetPage = () => {
//   const [selectedPresetImage, setSelectedPresetImage] = useState(null);
//   const [isSaving, setIsSaving] = useState(false);
//   const [gender, setGender] = useState(1); // Default to male (2)
//   const navigate = useNavigate();

//   const presetImages = [
//     '/1.png',
//     '/2.png',
//     '/3.png',
//     '/4.png',
//     '/5.png',
//     '/6.png',
//     '/7.png',
//     '/8.png',
//     '/9.png',
//     '/10.png',
//     '/11.png',
//     '/12.png',
//     '/13.png',
//     '/14.png',
//     '/15.png',
//     '/16.png',
//     '/17.jpg',
//     '/18.jpg',
//     '/19.jpg',
//     '/20.jpg',
//     // Add more preset image URLs as needed
//   ];

//   // Function to convert an image URL to base64
//   const getBase64FromUrl = async (url) => {
//     const response = await fetch(url);
//     const blob = await response.blob();
//     return new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.onloadend = () => resolve(reader.result);
//       reader.onerror = reject;
//       reader.readAsDataURL(blob);
//     });
//   };

//   // Save the selected preset image (as base64) to the backend
//   const handleSavePreset = async () => {
//     if (selectedPresetImage) {
//       setIsSaving(true);

//       // Convert the selected image URL to base64
//       try {
//         const base64Image = await getBase64FromUrl(selectedPresetImage);
//         const savedImageUrl = await savePresetImage(base64Image);  // Send base64 image to backend
//         if (savedImageUrl) {
//           // Navigate to the image capture page with the saved image URL
//           navigate('/image', { state: { generatedImageUrl: savedImageUrl } });
//         } else {
//           console.error('Failed to save preset image');
//         }
//       } catch (error) {
//         console.error('Error converting preset image to base64:', error);
//       }

//       setIsSaving(false);
//     }
//   };

//   return (
//     <div className="w-screen h-screen flex flex-col justify-center items-center gap-10 ">

//       <div className="">
//         <div className='w-screen flex flex-wrap gap-6 justify-center h-[80dvh] relative overflow-y-auto'>
//         {presetImages.map((imageUrl, index) => (
//           <img
//             key={index}
//             src={imageUrl}
//             alt={`Preset ${index + 1}`}
//             className={`w-[200px] h-[200px] object-cover object-top ${selectedPresetImage === imageUrl ? 'selected' : ''}`}
//             onClick={() => setSelectedPresetImage(imageUrl)}
//             style={{ cursor: 'pointer', border: selectedPresetImage === imageUrl ? '8px solid blue' : 'none' }}
//           />
//         ))}
//         </div>
//       </div>

//        {/* Gender selection toggle */}
//        <div className="absolute top-10 flex justify-center w-screen items-center">
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

//       <button className='bg-none border-2 border-white px-16 py-4 rounded-2xl text-white text-3xl' onClick={handleSavePreset} disabled={!selectedPresetImage || isSaving}>
//         {isSaving ? 'Saving...' : 'Next'}
//       </button>
//     </div>
//   );
// };

// export default PresetPage;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { savePresetImage } from "../api";

const PresetPage = () => {
  const [selectedPresetImage, setSelectedPresetImage] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [gender, setGender] = useState(0); // Default to male (2)
  const navigate = useNavigate();

  const presetImages = [
    "./img004.jpg",
    "./img005.jpg",
    "./img006.jpg",
    "/1.png",
    "/2.png",
    "/3.png",
    "/4.png",
    "/5.png",
    "/6.png",
    "/14.png",
    "/15.png",
    "/17.jpg",
    "/gg03.jpg",
  ];

  // Function to convert an image URL to base64
  const getBase64FromUrl = async (url) => {
    const response = await fetch(url);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  // Save the selected preset image (as base64) to the backend
  const handleSavePreset = async () => {
    if (selectedPresetImage) {
      setIsSaving(true);

      // Convert the selected image URL to base64
      try {
        const base64Image = await getBase64FromUrl(selectedPresetImage);
        const savedImageUrl = await savePresetImage(base64Image); // Send base64 image to backend
        if (savedImageUrl) {
          // Navigate to the image capture page with the saved image URL and gender
          navigate("/image", {
            state: { generatedImageUrl: savedImageUrl, gender },
          });
        } else {
          console.error("Failed to save preset image");
        }
      } catch (error) {
        console.error("Error converting preset image to base64:", error);
      }

      setIsSaving(false);
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-10">
      {/* Preset image selection */}
      <div className="">
        <div className="w-screen flex flex-wrap gap-6 justify-center h-[80dvh] relative overflow-y-auto">
          {presetImages.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt={`Preset ${index + 1}`}
              className={`w-[200px] h-[200px] object-cover object-top ${
                selectedPresetImage === imageUrl ? "selected" : ""
              }`}
              onClick={() => setSelectedPresetImage(imageUrl)}
              style={{
                cursor: "pointer",
                border:
                  selectedPresetImage === imageUrl ? "8px solid blue" : "none",
              }}
            />
          ))}
        </div>
      </div>

      {/* Gender selection toggle */}
      <div className=" hidden absolute bottom-[76px] left-48  justify-center w-screen items-center">
        {/* <label className="text-white mr-4"><label> */}
        <select
          className="text-black px-4 py-2 rounded-lg absolute "
          value={gender}
          onChange={(e) => setGender(Number(e.target.value))} // Update the gender state
        >
          <option value={2}>Male</option>
          <option value={1}>Female</option>
        </select>
      </div>

      {/* Save button */}
      <button
        className="bg-none border-2 border-white px-16 py-4 rounded-2xl text-white text-3xl"
        onClick={handleSavePreset}
        disabled={!selectedPresetImage || isSaving}
      >
        {isSaving ? "Saving..." : "Next"}
      </button>
    </div>
  );
};

export default PresetPage;
