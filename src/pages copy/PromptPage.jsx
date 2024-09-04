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




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PromptPage = () => {
  const [prompt, setPrompt] = useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    if (prompt.trim()) {
      navigate('/image', { state: { prompt } });
    }
  };

  return (
    <div>
      <h1>Enter Image Prompt</h1>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter image prompt"
      />
      <button onClick={handleNext}>Generate Image</button>
    </div>
  );
};

export default PromptPage;
