// import axios from 'axios';

// // Image generation function
// export const generateImage = async (prompt) => {
//   try {
//     const response = await axios.post('http://localhost:3000/sdapi/v1/txt2img', {
//       prompt: prompt,
//       negative_prompt: "",
//       styles: [],
//       seed: -1,
//       subseed: -1,
//       subseed_strength: 0,
//       seed_resize_from_h: -1,
//       seed_resize_from_w: -1,
//       sampler_name: "DPM++ 2M",
//       scheduler: "Automatic",
//       batch_size: 1,
//       n_iter: 1,
//       steps: 50,
//       cfg_scale: 7,
//       width: 512,
//       height: 512,
//       restore_faces: true,
//       tiling: false,
//       do_not_save_samples: false,
//       do_not_save_grid: false,
//       eta: 0,
//       denoising_strength: 0,
//       s_min_uncond: 0,
//       s_churn: 0,
//       s_tmax: 0,
//       s_tmin: 0,
//       s_noise: 0,
//       override_settings: {},
//       override_settings_restore_afterwards: true,
//       refiner_checkpoint: "",
//       refiner_switch_at: 0,
//       disable_extra_networks: false,
//       firstpass_image: "",
//       comments: {},
//       enable_hr: false,
//       firstphase_width: 0,
//       firstphase_height: 0,
//       hr_scale: 2,
//       hr_upscaler: "Latent",
//       hr_second_pass_steps: 0,
//       hr_resize_x: 0,
//       hr_resize_y: 0,
//       hr_checkpoint_name: "",
//       hr_sampler_name: "",
//       hr_scheduler: "",
//       hr_prompt: "",
//       hr_negative_prompt: "",
//       force_task_id: "string",
//       sampler_index: "Euler",
//       script_name: "",
//       script_args: [],
//       send_images: true,
//       save_images: false,
//       alwayson_scripts: {},
//       infotext: ""
//     });

//     return response.data;
//   } catch (error) {
//     console.error("Error generating image:", error.response ? error.response.data : error.message);
//     return null;
//   }
// };

// // Face swap function
// export const faceSwap = async (sourceImage, targetImage) => {
//   try {
//     const response = await axios.post('http://localhost:3000/reactor/image', {
//       source_image: sourceImage,
//       target_image: targetImage,
//       source_faces_index: [0],
//       face_index: [0],
//       upscaler: "None",
//       scale: 1,
//       upscale_visibility: 1,
//       face_restorer: "None",
//       restorer_visibility: 1,
//       codeformer_weight: 0.5,
//       restore_first: 1,
//       model: "inswapper_128.onnx",
//       gender_source: 0,
//       gender_target: 0,
//       save_to_file: 0,
//       result_file_path: "",
//       device: "CPU",
//       mask_face: 0,
//       select_source: 0,
//       face_model: "None",
//       source_folder: "",
//       random_image: 0,
//       upscale_force: 0,
//       det_thresh: 0.5,
//       det_maxnum: 0
//     });

//     return response.data;
//   } catch (error) {
//     console.error("Error generating image:", error.response ? error.response.data : error.message);
//     return null;
//   }
// };




































// // import axios from 'axios';

// // // Image generation function
// // export const generateImage = async (prompt) => {
// //   try {
// //     const response = await axios.post('http://localhost:3000/sdapi/v1/txt2img', {
// //       prompt: prompt,
// //       negative_prompt: "",
// //       styles: [],
// //       seed: -1,
// //       subseed: -1,
// //       subseed_strength: 0,
// //       sampler_name: "Euler",
// //       steps: 50,
// //       cfg_scale: 7,
// //       width: 512,
// //       height: 512,
// //       restore_faces: true,
// //       tiling: false,
// //       send_images: true,
// //       save_images: false
// //     });
// //     return response.data;
// //   } catch (error) {
// //     console.error("Error generating image:", error.response ? error.response.data : error.message);
// //     return null;
// //   }
// // };

// // // Function to save images on the server
// // export const saveImage = async (imageData, imageType) => {
// //   try {
// //     const response = await axios.post('http://localhost:7000/save-image', {
// //       imageData,
// //       imageType
// //     });
// //     return response.data;
// //   } catch (error) {
// //     console.error("Error saving image:", error.response ? error.response.data : error.message);
// //     return null;
// //   }
// // };

// // // Face swap function
// // export const faceSwap = async (sourceImageUrl, targetImageUrl) => {
// //   try {
// //     const response = await axios.post('http://localhost:3000/reactor/image', {
// //       source_image: sourceImageUrl,
// //       target_image: targetImageUrl,
// //       source_faces_index: [0],
// //       face_index: [0],
// //       upscaler: "None",
// //       scale: 1,
// //       upscale_visibility: 1,
// //       face_restorer: "None",
// //       restorer_visibility: 1,
// //       codeformer_weight: 0.5,
// //       restore_first: 1,
// //       model: "inswapper_128.onnx",
// //       gender_source: 0,
// //       gender_target: 0,
// //       save_to_file: 0,
// //       result_file_path: "",
// //       device: "CPU",
// //       mask_face: 0,
// //       select_source: 0,
// //       face_model: "None",
// //       source_folder: "",
// //       random_image: 0,
// //       upscale_force: 0,
// //       det_thresh: 0.5,
// //       det_maxnum: 0
// //     });

// //     return response.data;
// //   } catch (error) {
// //     console.error("Error generating image:", error.response ? error.response.data : error.message);
// //     return null;
// //   }
// // };







// import axios from 'axios';

// // Call to generate an image
// export const generateImage = async (prompt) => {
//   try {
//     const response = await axios.post('http://localhost:5000/generate-image', { prompt });
//     return response.data.image_url;
//   } catch (error) {
//     console.error("Error generating image:", error.response ? error.response.data : error.message);
//     return null;
//   }
// };

// // Call to perform face swap
// export const faceSwap = async (sourceImage, targetImage) => {
//   try {
//     const response = await axios.post('http://localhost:5000/face-swap', {
//       source_image: sourceImage,
//       target_image: targetImage
//     });
//     return response.data.image_url;
//   } catch (error) {
//     console.error("Error performing face swap:", error.response ? error.response.data : error.message);
//     return null;
//   }
// };








// import axios from 'axios';

// // Call to generate an image
// export const generateImage = async (prompt) => {
//   try {
//     const response = await axios.post('http://localhost:5000/generate-image', { prompt });
//     return response.data.image_url;
//   } catch (error) {
//     console.error("Error generating image:", error.response ? error.response.data : error.message);
//     return null;
//   }
// };

// // Call to perform face swap
// export const faceSwap = async (sourceImageUrl, targetImageUrl) => {
//   try {
//     const response = await axios.post('http://localhost:5000/face-swap', {
//       source_image: sourceImageUrl,
//       target_image: targetImageUrl
//     });
//     return response.data.image_url;
//   } catch (error) {
//     console.error("Error performing face swap:", error.response ? error.response.data : error.message);
//     return null;
//   }
// };




// import axios from 'axios';

// // Call to generate an image
// export const generateImage = async (prompt) => {
//   try {
//     const response = await axios.post('http://localhost:5000/generate-image', { prompt });
//     return response.data.image_url;
//   } catch (error) {
//     console.error("Error generating image:", error.response ? error.response.data : error.message);
//     return null;
//   }
// };

// // Call to save webcam image
// export const saveWebcamImage = async (imageData) => {
//   try {
//     const response = await axios.post('http://localhost:5000/save-webcam-image', {
//       image_data: imageData
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error saving webcam image:", error.response ? error.response.data : error.message);
//     return null;
//   }
// };

// // Call to perform face swap
// export const faceSwap = async (sourceImageUrl, targetImageUrl) => {
//   try {
//     const response = await axios.post('http://localhost:5000/face-swap', {
//       source_image: sourceImageUrl,
//       target_image: targetImageUrl
//     });
//     return response.data.image_url;
//   } catch (error) {
//     console.error("Error performing face swap:", error.response ? error.response.data : error.message);
//     return null;
//   }
// };




// import axios from 'axios';

// // Call to generate an image
// export const generateImage = async (prompt) => {
//   try {
//     const response = await axios.post('http://localhost:5000/generate-image', { prompt });
//     return `http://localhost:5000/${response.data.image_url}`;
//   } catch (error) {
//     console.error("Error generating image:", error.response ? error.response.data : error.message);
//     return null;
//   }
// };

// // Call to save webcam image
// export const saveWebcamImage = async (imageData) => {
//   try {
//     const response = await axios.post('http://localhost:5000/save-webcam-image', {
//       image_data: imageData
//     });
//     return `http://localhost:5000/${response.data.image_url}`;
//   } catch (error) {
//     console.error("Error saving webcam image:", error.response ? error.response.data : error.message);
//     return null;
//   }
// };

// // Call to perform face swap
// export const faceSwap = async (sourceImageUrl, targetImageUrl) => {
//   try {
//     const response = await axios.post('http://localhost:5000/face-swap', {
//       source_image: sourceImageUrl,
//       target_image: targetImageUrl
//     });
//     return `http://localhost:5000/${response.data.image_url}`;
//   } catch (error) {
//     console.error("Error performing face swap:", error.response ? error.response.data : error.message);
//     return null;
//   }
// };




import axios from 'axios';

// Call to generate an image
export const generateImage = async (prompt) => {
  try {
    const response = await axios.post('https://king-prawn-app-js4z2.ondigitalocean.app/generate-image', { prompt });
    return `https://king-prawn-app-js4z2.ondigitalocean.app${response.data.image_url}`;
  } catch (error) {
    console.error("Error generating image:", error.response ? error.response.data : error.message);
    return null;
  }
};

// Call to save webcam image
export const saveWebcamImage = async (imageData) => {
  try {
    const response = await axios.post('https://king-prawn-app-js4z2.ondigitalocean.app/save-webcam-image', {
      image_data: imageData
    });
    return response.data;
  } catch (error) {
    console.error("Error saving webcam image:", error.response ? error.response.data : error.message);
    return null;
  }
};

// Call to perform face swap
export const faceSwap = async (sourceImageUrl, targetImageUrl) => {
  try {
    const response = await axios.post('https://king-prawn-app-js4z2.ondigitalocean.app/face-swap', {
      source_image: sourceImageUrl,
      target_image: targetImageUrl
    });
    return `https://king-prawn-app-js4z2.ondigitalocean.app/${response.data.image_url}`;
  } catch (error) {
    console.error("Error performing face swap:", error.response ? error.response.data : error.message);
    return null;
  }
};
