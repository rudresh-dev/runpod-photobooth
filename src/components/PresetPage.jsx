
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { setSelectedPresetImage, setPrompt } from "../redux/userSlice";
import { savePresetImage } from "../api";

const PresetPage = () => {
  const { gender } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [selectedPresetImage, setSelectedPresetImageState] = useState(null);
  const [prompt, setPromptState] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const navigate = useNavigate();

  const presetImagesMale = [
    "/1.png",
    "/2.png",
    "/3.png",
    "/4.png",
    "/5.png",
    "/6.png",
    "/7.png",
    "/8.png",
  ];
  const presetImagesFemale = [
    "/11.png",
    "/12.png",
    "/13.png",
    "/14.png",
    "/15.png",
    "/16.png",
    "/17.png",
    "/18.png",
  ];
  const presetImages = gender === 2 ? presetImagesMale : presetImagesFemale;

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    centerMode: true,
    // centerPadding: "240px", // Space to show side images
    slidesToShow: 1, // Show one image in the center
    speed: 500,
    focusOnSelect: true,
    arrows: true,
    afterChange: (index) => setSelectedPresetImageState(presetImages[index]), // Set the selected image after slide change

    responsive: [
      {
        breakpoint: 1024, // Large screens
        settings: {
          centerPadding: "240px", // For larger screens
        },
      },
      {
        breakpoint: 768, // Medium screens
        settings: {
          centerPadding: "120px", // For medium screens
        },
      },
      {
        breakpoint: 480, // Small screens
        settings: {
          centerPadding: "80px", // For small screens
        },
      },
      {
        breakpoint: 320, // Extra small screens
        settings: {
          centerPadding: "50px", // For extra small screens
        },
      },
    ],
    
  };

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

  const handleSavePreset = async () => {
    if (selectedPresetImage) {
      setIsSaving(true);

      try {
        const base64Image = await getBase64FromUrl(selectedPresetImage);
        console.log("Base64 Image:", base64Image);
        const savedImageUrl = await savePresetImage(base64Image);

        if (savedImageUrl) {
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
    <div className="w-screen h-screen flex flex-col justify-center items-center hv:gap-10">
          <div className="bg-[url('./bar77.svg')] w-screen h-28 absolute top-0 bg-cover bg-bottom"></div>
          <div className="bg-[url('./bar77.svg')] w-screen h-32 absolute bottom-0 bg-cover bg-top"></div>
      <img
        src="/logocft11.png"
        alt=""
        className="absolute top-10 left-[35vw] w-40"
        // width={350}
      />
    
      <h1 className="text-[#FECC00] text-center font-bold hv:text-[68px] text-[34px] pb-5 hv:pb-11">
        SELECT YOUR <br /> CHARACTER
      </h1>
      <Slider {...settings} className="hv:w-[1000px] w-[400px] md:w-[800px]">
        {presetImages.map((imgUrl, index) => (
          <div key={index} className="p-2">
            <img
              src={imgUrl}
              alt={`Preset ${index + 1}`}
              className={`mx-auto transition-all duration-500 ease-in-out ${
                selectedPresetImage === imgUrl
                  ? "hv:w-[600px] w-[300px] h-[300px] hv:h-[600px]"
                  : "hv:w-[550px] w-[300px] h-[300px] hv:h-[550px] opacity-20"
              }`}
              style={{
                border:
                  selectedPresetImage === imgUrl
                    ? "10px solid #FDA21B"
                    : "none",
                transition: "all 0.5s ease-in-out",
              }}
            />
          </div>
        ))}
      </Slider>

      <button
        className=" mt-3 bg-none border-2 border-white px-7 py-2 hv:px-16 hv:py-4 rounded-lg hv:rounded-2xl text-white text-3xl hv:w-[670px] hv:h-[133px] hv:text-[60px] font-semibold"
        onClick={handleSavePreset}
        disabled={!selectedPresetImage || isSaving}
      >
        {isSaving ? "Saving..." : "Start Magic"}
      </button>

      <div className="w-[200px] h-[50px] hidden hv:w-[460px] hv:h-[115px] absolute bottom-28">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPromptState(e.target.value)}
          placeholder="Enter prompt"
          className="w-[200px]  h-[50px] hv:w-[460px] hv:h-[115px] rounded-xl text-black hv:text-[48px] pl-6"
        />
      </div>
    </div>
  );
};

export default PresetPage;
