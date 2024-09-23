import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setGender, setName, setEmail } from "../redux/userSlice";

const GenderSelectionPage = () => {
  const [gender, setGenderState] = useState(null);
  const [name, setNameState] = useState("");
  const [email, setEmailState] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNext = () => {
    if (gender && name && email) {
      dispatch(setName(name));
      dispatch(setEmail(email));
      dispatch(setGender(gender));
      navigate("/preset");
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center hv:gap-10">
      <div className="bg-[url('/public/bar77.svg')] w-screen h-[22dvh] absolute top-0 bg-cover bg-bottom"></div>
      <div className="bg-[url('/public/bar77.svg')] w-screen h-[20dvh] absolute bottom-0 bg-cover bg-top"></div>
      {/* <div className="bar-top"></div> */}
      <div className="absolute hidden top-[28vh] hv:top-[20vh] right-0  w-[87vw]">
        <img src="/public/lines22.svg" alt="" />
      </div>

      <div className="absolute hidden left-[0] bottom-[32vh] hv:bottom-[31vh] w-[18vw] ">
        <img src="/public/lines11.svg" alt="" />
      </div>
      <img
        src="/logocft11.png"
        alt=""
        className="w-48 top-10 absolute hv:top-20 hv:left-[35vw]"
        width={350}
      />
      <div className="flex flex-col gap-6 hv:gap-10 items-center relative h-[65vh] justify-center z-50">
        {/* <div className="absolute -bottom-1 hv:-bottom-16 -left-6 hv:-left-16 w-9">
          <img src="/public/plus3.svg" alt="" />
        </div> */}

        <div className="flex flex-col gap-5 hv:gap-10">
          <div>
            <h1 className=" hv:text-center hv:text-[86px] hv:font-bold hv:text-[#FEFEFE] hv:pb-12">
              AI Photobooth
            </h1>
          </div>
          <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setNameState(e.target.value)}
            className=" w-[260px] text-[26px] rounded-xl pl-8 py-2 hv:w-[670px]  hv:text-[55px]  hv:rounded-3xl  hv:border-solid border-[#FDA21B] border-[1.26px]  bg-transparent hv:pl-20 hv:px-[26px] hv:py-[26px] text-[#fff] "
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmailState(e.target.value)}
            className="w-[260px] text-[26px] rounded-xl pl-8 py-2 hv:w-[670px]   hv:text-[55px] hv:rounded-3xl border-solid border-[#FDA21B] border-[1.26px]  bg-transparent  text-[#fff] hv:px-[26px] hv:py-[26px]"
          />
        </div>
        <div className="flex gap-4 hv:gap-5">
          <button
            className={`hv:px-8 px-3 py- 2 rounded-lg hv:-7 hv:rounded-2xl text-[#c0c0c0] hv:font-bold hv:text-3xl text-xl w-[120px] hv:w-[330px] ${
              gender === 2
                ? "bg-[#FDA21B] text-[#000] font-bold"
                : "bg-transparent border-solid border-[#FDA21B] border-[1.26px] text-[#000]"
            }`}
            onClick={() => setGenderState(2)}
          >
            Male
          </button>
          <button
            className={`hv:px-8 px-3 py-2 hv:py-7 rounded-lg hv:rounded-2xl text-[#c0c0c0] hv:font-bold hv:text-3xl text-xl w-[120px] hv:w-[330px] ${
              gender === 1
                ? "bg-[#FDA21B] text-[#000] font-bold"
                : "bg-transparent border-solid border-[#FDA21B] border-[1.26px] text-[#000]"
            }`}
            onClick={() => setGenderState(1)}
          >
            Female
          </button>
        </div>

        {/* <div className="bar-container-top">
        <img src="/public/bars.svg" alt="" />
      </div>
      <div className="bar-container-bottom">
        <img src="/public/bars.svg" alt="" />
      </div> */}

        <button
          className="bg-none border-solid border-[#ccc] border-[2.4px] hv:w-[670px]  w-[260px] py-[10px]  hv:py-[27px] hv:px-[58px] hv:rounded-3xl rounded-xl text-white text-2xl hv:text-6xl z-50"
          onClick={handleNext}
          disabled={!gender || !name || !email}
          style={{
            background:
              // "linear-gradient(90deg, rgba(255,255,255,0.66) 0%, rgba(255,255,255,0.43) 30%, rgba(255,255,255,0) 100%)",
              "linear-gradient(95deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 53%, rgba(255,255,255,0.12) 100%)",
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default GenderSelectionPage;
