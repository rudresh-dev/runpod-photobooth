
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateImage } from "../api";

const PromptPage = () => {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const navigate = useNavigate();

  const handleGenerateImage = async () => {
    if (prompt.trim()) {
      setIsGenerating(true);
      const imageUrl = await generateImage(prompt);
      if (imageUrl) {
        navigate("/image", { state: { prompt, generatedImageUrl: imageUrl } });
      } else {
        console.error("Image generation failed");
      }
      setIsGenerating(false);
    }
  };

  return (
    <div className="w-screen h-screen relative  flex justify-center items-center">
      <div className="w-[50vw] flex justify-center items-center  relative">

     
      <div className=" w-[50vw] ">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter image prompt"
          className="h-full rounded-full py-8 pl-10 text-2xl border-none"
        />
      </div>
      <div className=" bg-[#423891] absolute rounded-full right-0">
        <button className="py-8 font-bold rounded-full text-white px-8 text-[24px]"    onClick={handleGenerateImage} disabled={isGenerating}>
          {isGenerating ? "Generating Image..." : "Generate"}
        </button>
      </div>
      </div>
    </div>
  );
};

export default PromptPage;

