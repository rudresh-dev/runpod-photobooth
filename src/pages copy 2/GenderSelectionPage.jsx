import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GenderSelectionPage = () => {
  const [gender, setGender] = useState(null);
  const navigate = useNavigate();

  const handleNext = () => {
    if (gender) {
      // Pass the selected gender to the next page (HomePage)
      navigate('/home', { state: { gender } });
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-10">
      <h1 className="text-white text-4xl">Select Gender</h1>
      <div className="flex gap-5">
        <button
          className={`px-8 py-4 rounded-2xl text-white text-3xl ${gender === 2 ? 'bg-blue-500' : 'bg-gray-500'}`}
          onClick={() => setGender(2)} // Male
        >
          Male
        </button>
        <button
          className={`px-8 py-4 rounded-2xl text-white text-3xl ${gender === 1 ? 'bg-pink-500' : 'bg-gray-500'}`}
          onClick={() => setGender(1)} // Female
        >
          Female
        </button>
      </div>

      <button
        className="bg-none border-2 border-white px-16 py-4 rounded-2xl text-white text-3xl"
        onClick={handleNext}
        disabled={!gender} // Disable if no gender is selected
      >
        Next
      </button>
    </div>
  );
};

export default GenderSelectionPage;
