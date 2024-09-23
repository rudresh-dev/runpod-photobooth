import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { faceSwap } from '../api';
import { setSwappedImageUrl } from '../redux/userSlice';

const LoadingPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { webcamImageUrl, generatedImageUrl, gender } = useSelector((state) => state.user);

  useEffect(() => {
    const processFaceSwap = async () => {
      const swappedImageUrl = await faceSwap(webcamImageUrl, generatedImageUrl, gender, gender);
      if (swappedImageUrl) {
        dispatch(setSwappedImageUrl(swappedImageUrl));
        navigate('/result');
      }
    };
    processFaceSwap();
  }, [webcamImageUrl, generatedImageUrl, gender, navigate, dispatch]);

  return <div className="w-screen h-screen">Loading...</div>;
};

export default LoadingPage;
