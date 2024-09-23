
import { useState } from "react";
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
      <div className="w-[50vw] flex justify-center items-center flex-col md:flex-row  relative">

     
      <div className=" w-[50vw] ">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter image prompt"
          className="h-full md:rounded-full md:py-8 md:pl-10 md:text-2xl md:border-none"
        />
      </div>
      <div className="bg-[#423891] md:absolute md:rounded-full md:right-0 md:mr-1">
        <button className="py-3 px-8 md:py-[26px] font-bold rounded-full text-white md:px-8 md:text-[24px]"    onClick={handleGenerateImage} disabled={isGenerating}>
          {isGenerating ? "Generating.." : "Generate"}
        </button>
      </div>
      </div>
    </div>
  );
};

export default PromptPage;




