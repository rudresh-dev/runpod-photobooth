import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';

const ResultPage = () => {
  const location = useLocation();
  const { swappedImageUrl } = location.state;

  return (
    <div className="container"> 
      {swappedImageUrl ? (
        <>
          <img src={swappedImageUrl} alt="Swapped" className="swapped-image" />
          <div className="qr-code-container">
            <QRCodeSVG value={swappedImageUrl} size={200} bgColor="#ffffff" fgColor="#000000" />
            {/* <p className="qr-code-label">Scan to view the image</p> */}
          </div>
        </>
      ) : (
        <p>Processing face swap...</p>
      )}
      
      <Link className="bg-none border-2 border-white px-16 py-4 rounded-2xl text-white text-3xl" to="/">Home</Link>
    </div>
  );
};

export default ResultPage;
