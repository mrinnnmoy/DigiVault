import React, { useState } from 'react';

// Display component to show images
const Display = ({ contract, account }) => {

  // State to store image URLs and address input
  const [imageUrls, setImageUrls] = useState([]);
  const [address, setAddress] = useState('');

  // Function to fetch image data from the contract
  const getData = async () => {
    try {
      // Use the entered address or the account address
      const addressToUse = address || account;
      // Call the display function of the contract
      const dataArray = await contract.display(addressToUse);

      // If data is received, update the image URLs
      if (dataArray && dataArray.length > 0) {
        setImageUrls(dataArray);
      } else {
        alert("No images to display.");
      }
    } catch (error) {
      alert("Error fetching image data.");
    }
  };

  // Handler for address input change
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  return (
    <div className="display">
      <p>View Images:</p>
      <div className="display-main">
        <div className="display-img">

          {/* Map through image URLs and display them */}
          {imageUrls.map((imageUrl, index) => (
            <a href={imageUrl} key={index} target="_blank" rel="noreferrer">
              {/* Construct the image URL with Pinata gateway */}
              <img src={`https://gateway.pinata.cloud/ipfs/${imageUrl.substring(6)}`} alt={`${index + 1}`} className="image-list" />
            </a>
          ))}
        </div>
        <div className="display-body">

          {/* Input field for entering address */}
          <input type="text" placeholder="Enter Address" value={address} onChange={handleAddressChange} className="address" />

          {/* Button to trigger fetching image data */}
          <button className="get-btn" onClick={getData}>View</button>
        </div>
      </div>
    </div>
  );
};

export default Display;
