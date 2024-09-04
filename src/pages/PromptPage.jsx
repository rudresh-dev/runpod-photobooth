// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const PromptPage = () => {
//   const [prompt, setPrompt] = useState('');
//   const navigate = useNavigate();

//   const handleNext = () => {
//     if (prompt.trim()) {
//       navigate('/image', { state: { prompt } });
//     }
//   };

//   return (
//     <div>
//       <h1>Enter Image Prompt</h1>
//       <input
//         type="text"
//         value={prompt}
//         onChange={(e) => setPrompt(e.target.value)}
//         placeholder="Enter image prompt"
//       />
//       <button onClick={handleNext}>Next</button>
//     </div>
//   );
// };

// export default PromptPage;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const PromptPage = () => {
//   const [prompt, setPrompt] = useState('');
//   const navigate = useNavigate();

//   const handleNext = () => {
//     if (prompt.trim()) {
//       navigate('/image', { state: { prompt } });
//     }
//   };

//   return (
//     <div>
//       <h1>Enter Image Prompt</h1>
//       <input
//         type="text"
//         value={prompt}
//         onChange={(e) => setPrompt(e.target.value)}
//         placeholder="Enter image prompt"
//       />
//       <button onClick={handleNext}>Generate Image</button>
//     </div>
//   );
// };

// export default PromptPage;




// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const PromptPage = () => {
//   const [prompt, setPrompt] = useState('');
//   const navigate = useNavigate();

//   const handleNext = () => {
//     if (prompt.trim()) {
//       navigate('/image', { state: { prompt } });
//     }
//   };

//   return (
//     <div>
//       <h1>Enter Image Prompt</h1>
//       <input
//         type="text"
//         value={prompt}
//         onChange={(e) => setPrompt(e.target.value)}
//         placeholder="Enter image prompt"
//       />
//       <button onClick={handleNext}>Generate Image</button>
//     </div>
//   );
// };

// export default PromptPage;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { generateImage } from '../api';

const PromptPage = () => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const navigate = useNavigate();

  const handleGenerateImage = async () => {
    if (prompt.trim()) {
      setIsGenerating(true);
      const imageUrl = await generateImage(prompt);
      if (imageUrl) {
        navigate('/image', { state: { prompt, generatedImageUrl: imageUrl } });
      } else {
        console.error('Image generation failed');
      }
      setIsGenerating(false);
    }
  };

  return (
    <div className="container">
      <h1>Enter Image Prompt</h1>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter image prompt"
      />
      <button onClick={handleGenerateImage} disabled={isGenerating}>
        {isGenerating ? 'Generating Image...' : 'Generate Image'}
      </button>
    </div>
  );
};

export default PromptPage;
