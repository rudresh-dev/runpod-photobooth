import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';

const ResultPage = () => {
  const location = useLocation();
  const { swappedImageUrl } = location.state;

  // Ensure the base URL is only added if the URL is a relative path
  const baseUrl = 'https://sea-turtle-app-5x9p8.ondigitalocean.app';
  const fullSwappedImageUrl = swappedImageUrl.startsWith('/output')
    ? `${baseUrl}${swappedImageUrl}`
    : swappedImageUrl;

  console.log("Swapped Image URL:", fullSwappedImageUrl);  // Log the swapped image URL to ensure it's being passed

  return (
    <div className="container">
      {swappedImageUrl ? (
        <>
          {/* Display the image */}
          <img src={fullSwappedImageUrl} alt="Swapped Result" className="swapped-image" />
          <div className="qr-code-container">
            <QRCodeSVG value={fullSwappedImageUrl} size={200} bgColor="#ffffff" fgColor="#000000" />
          </div>
        </>
      ) : (
        <p>No result available. Face swap may have failed.</p>
      )}
      <Link className="bg-none border-2 border-white px-16 py-4 rounded-2xl text-white text-3xl" to="/">Home</Link>
    </div>
  );
};

export default ResultPage;
