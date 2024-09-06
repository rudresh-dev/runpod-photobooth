import { useLocation } from 'react-router-dom';

import { Link } from 'react-router-dom';

const ResultPage = () => {
  const location = useLocation();
  const { swappedImageUrl } = location.state;

  return (
    <div className="container"> 
      {swappedImageUrl ? (
        <img src={swappedImageUrl} alt="Swapped" className="swapped-image" />
      ) : (
        <p>Processing face swap...</p>
      )}

    <Link className='bg-none border-2 border-white px-16 py-4 rounded-2xl text-white text-3xl' to='/'>Home</Link>
    </div>
  );
};

export default ResultPage;
