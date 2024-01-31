import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = ({ contract, account, provider }) => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No Image Selected");
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);

        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_Key: `d2f21938c99d34d106be`,
            pinata_secret_api_key: `06c3efb5358411001adc2d3c9dd4655aad47f9a29d206a29d7ca6cf2a595a891`,
            "Content-Type": "multipart/form-data",
          },
        });

        const ImgHash = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;
        contract.add(account, ImgHash);
        alert("Successfully Image Uploaded.");
        setFileName("No Image Selected");
        setFile(null);
        setPreviewUrl(null);
      } catch (error) {
        alert("Unable to Upload Image.");
      }
    }
  };

  const retrieveFile = (e) => {
    const selectedFile = e.target.files[0];
    // console.log(data);
    if (selectedFile) {
      const reader = new window.FileReader();
      reader.onloadend = () => {
        setFile(selectedFile);
        setFileName(selectedFile.name);
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <div className='fileUpload'>
      <p>Upload Image:</p>
      <form className='upload-form' onSubmit={handleSubmit}>
        <div className="form-left">
          {previewUrl && <img src={previewUrl} alt='Preview' className='preview-img' />}
        </div>
        <div className="form-right">
          <span className='textArea'>Name: {fileName}</span>
          <div className="form-right-btn">
            <div className="form-input">
              <input disabled={!account} type="file" id="file-upload" accept='image/*' name="data" onChange={retrieveFile} />
              <label for="file-upload">Choose Image</label>
            </div>
            <button type='submit' className='upload-btn' disabled={!file}>Upload Image</button>
          </div>
        </div>
      </form>
    </div>
  )
};

export default FileUpload;