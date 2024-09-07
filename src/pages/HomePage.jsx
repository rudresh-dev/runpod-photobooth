import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className=" flex-col md:flex-colw-screen h-screen flex justify-center items-center gap-5">
      <button className='bg-none border-2 border-white px-16 py-4 rounded-2xl text-white text-3xl ' onClick={() => navigate('/prompt')}>Prompt</button>
      {/* <button className='bg-none border-2 border-white px-16 py-4 rounded-2xl text-white text-3xl' onClick={() => navigate('/preset')}>Preset</button> */}
    </div>
  );
};

export default HomePage;
