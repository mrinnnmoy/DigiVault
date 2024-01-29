import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = ({ contract, account, provider }) => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No Image Selected");

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
        setFile(null);
        setFileName("No Image Selected");
      } catch (error) {
        alert("Unable to Upload Image.");
      }
    }
  };

  const retrieveFile = (e) => {
    const data = e.target.files[0];
    // console.log(data);

    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      setFile(e.target.files[0]);
    };
    setFileName(e.target.files[0].name);
    e.preventDefault();
  }

  return (
    <div className=''>
      <form className='' onSubmit={handleSubmit}>
        <label htmlFor="file-upload" className=''>
          Choose Image
        </label>
        <input disabled={!account} type="file" name="data" id="file-upload" onChange={retrieveFile} />
        <span className=''>Image: {fileName}</span>
        <button type='submit' className='upload' disabled={!file}>Upload File</button>
      </form>
    </div>
  )
};

export default FileUpload;