import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { savePresetImage } from '../api';

const PresetPage = () => {
  const [selectedPresetImage, setSelectedPresetImage] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const navigate = useNavigate();

  const presetImages = [
    '/1.png',
    '/2.png',
    // Add more preset image URLs as needed
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
        const savedImageUrl = await savePresetImage(base64Image);  // Send base64 image to backend
        if (savedImageUrl) {
          // Navigate to the image capture page with the saved image URL
          navigate('/image', { state: { generatedImageUrl: savedImageUrl } });
        } else {
          console.error('Failed to save preset image');
        }
      } catch (error) {
        console.error('Error converting preset image to base64:', error);
      }

      setIsSaving(false);
    }
  };

  return (
    <div className="container">
      <h1>Select a Preset Image</h1>
      <div className="preset-images">
        {presetImages.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Preset ${index + 1}`}
            className={`preset-image ${selectedPresetImage === imageUrl ? 'selected' : ''}`}
            onClick={() => setSelectedPresetImage(imageUrl)}
            style={{ cursor: 'pointer', border: selectedPresetImage === imageUrl ? '2px solid blue' : 'none' }}
          />
        ))}
      </div>
      <button onClick={handleSavePreset} disabled={!selectedPresetImage || isSaving}>
        {isSaving ? 'Saving...' : 'Save and Proceed'}
      </button>
    </div>
  );
};

export default PresetPage;
