

// import axios from 'axios';

// // Call to generate an image
// export const generateImage = async (prompt) => {
//   try {
//     const response = await axios.post('https://king-prawn-app-js4z2.ondigitalocean.app/generate-image', { prompt });
//     return `https://king-prawn-app-js4z2.ondigitalocean.app${response.data.image_url}`;
//   } catch (error) {
//     console.error("Error generating image:", error.response ? error.response.data : error.message);
//     return null;
//   }
// };

// // Call to save selected preset image to the backend
// export const savePresetImage = async (imageData) => {
//   try {
//     const response = await axios.post('https://king-prawn-app-js4z2.ondigitalocean.app/save-preset-image', {
//       image_data: imageData  // Send base64 image data
//     });
//     return response.data.image_url;
//   } catch (error) {
//     console.error('Error saving preset image:', error.response ? error.response.data : error.message);
//     return null;
//   }
// };


// // Call to save webcam image
// export const saveWebcamImage = async (imageData) => {
//   try {
//     const response = await axios.post('https://king-prawn-app-js4z2.ondigitalocean.app/save-webcam-image', {
//       image_data: imageData
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error saving webcam image:", error.response ? error.response.data : error.message);
//     return null;
//   }
// };

// // Call to perform face swap
// export const faceSwap = async (sourceImageUrl, targetImageUrl, genderSource, genderTarget) => {
//   try {
//     const response = await axios.post('https://king-prawn-app-js4z2.ondigitalocean.app/face-swap', {
//       source_image: sourceImageUrl,
//       target_image: targetImageUrl,
//       gender_source: genderSource, // Pass gender source
//       gender_target: genderTarget, // Pass gender target
//     });
//     return `https://king-prawn-app-js4z2.ondigitalocean.app/${response.data.image_url}`;
//   } catch (error) {
//     console.error("Error performing face swap:", error.response ? error.response.data : error.message);
//     return null;
//   }
// };






import axios from 'axios';

// Call to generate an image
export const generateImage = async (prompt) => {
  try {
    const response = await axios.post('https://clownfish-app-oybm4.ondigitalocean.app/generate-image', { prompt });
    return `https://clownfish-app-oybm4.ondigitalocean.app${response.data.image_url}`;
  } catch (error) {
    console.error("Error generating image:", error.response ? error.response.data : error.message);
    return null;
  }
};

// Call to save selected preset image to the backend
export const savePresetImage = async (imageData) => {
  try {
    const response = await axios.post('https://clownfish-app-oybm4.ondigitalocean.app/save-preset-image', {
      image_data: imageData  // Send base64 image data
    });
    return response.data.image_url;
  } catch (error) {
    console.error('Error saving preset image:', error.response ? error.response.data : error.message);
    return null;
  }
};


// Call to save webcam image
export const saveWebcamImage = async (imageData) => {
  try {
    const response = await axios.post('https://clownfish-app-oybm4.ondigitalocean.app/save-webcam-image', {
      image_data: imageData
    });
    return response.data;
  } catch (error) {
    console.error("Error saving webcam image:", error.response ? error.response.data : error.message);
    return null;
  }
};

// Call to perform face swap
export const faceSwap = async (sourceImageUrl, targetImageUrl, genderSource, genderTarget) => {
  try {
    const response = await axios.post('https://clownfish-app-oybm4.ondigitalocean.app/face-swap', {
      source_image: sourceImageUrl,
      target_image: targetImageUrl,
      gender_source: genderSource, // Pass gender source
      gender_target: genderTarget, // Pass gender target
    });
    return `https://clownfish-app-oybm4.ondigitalocean.app/${response.data.image_url}`;
  } catch (error) {
    console.error("Error performing face swap:", error.response ? error.response.data : error.message);
    return null;
  }
};
