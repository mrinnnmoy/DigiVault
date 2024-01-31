import React, { useState } from 'react';

const Display = ({ contract, account }) => {
  const [imageUrls, setImageUrls] = useState([]);
  const [address, setAddress] = useState('');

  const getData = async () => {
    try {
      const addressToUse = address || account;
      const dataArray = await contract.display(addressToUse);
      if (dataArray && dataArray.length > 0) {
        setImageUrls(dataArray);
      } else {
        alert("No images to display.");
      }
    } catch (error) {
      alert("Error fetching image data.");
    }
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  return (
    <div className="display">
      <p>View Images:</p>
      <div className="display-main">
        <div className="display-img">
          {imageUrls.map((imageUrl, index) => (
            <a href={imageUrl} key={index} target="_blank" rel="noreferrer">
              <img src={`https://gateway.pinata.cloud/ipfs/${imageUrl.substring(6)}`} alt={`${index + 1}`} className="image-list" />
            </a>
          ))}
        </div>
        <div className="display-body">
          <input type="text" placeholder="Enter Address" value={address} onChange={handleAddressChange} className="address" />
          <button className="get-btn" onClick={getData}>View</button>
        </div>
      </div>
    </div>
  );
};

export default Display;