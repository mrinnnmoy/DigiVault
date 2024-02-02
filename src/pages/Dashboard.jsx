import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

import Storage from "../ABI/Storage.json";
import FileUpload from '../components/FileUpload';
import Display from '../components/Display';
import Modal from '../components/Modal';

// Dashboard component to manage file upload, display, and sharing
const Dashboard = () => {

  // State variables for account, contract, provider, and modal
  const [account, setAccount] = useState("Not Connected");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  // useEffect to initialize provider and load contract
  useEffect(() => {

    // Create a Web3Provider using window.ethereum
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // Function to load provider and contract
    const loadProvider = async () => {
      if (provider) {

        // Reload the page when chain or account changes
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });

        // Request accounts from the user
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        let contractAddress = "0x8abAC03c156e47Bb11C178C15e284870a7F5c240";

        // Create a contract instance using the contract address and ABI
        const contract = new ethers.Contract(
          contractAddress,
          Storage.abi,
          signer
        );
        setContract(contract);
        setProvider(provider);
      } else {
        console.error("Metamask is not installed");
      }
    };

    // Load provider if available
    provider && loadProvider();
  }, []);

  return (
    <>
      <div className="upload">
        <div className="upload-table">
          <div className="table-head">

            {/* Display Metamask account */}
            <p>Metamask Account : {account ? account : "Not Connected"}</p>

            {/* Button to open sharing modal */}
            {!modalOpen && (
              <button className="share" onClick={() => setModalOpen(true)}>
                Share
              </button>
            )}

            {/* Render sharing modal */}
            {modalOpen && (
              <Modal setModalOpen={setModalOpen} contract={contract}></Modal>
            )}
          </div>
          <div className="table-main">

            {/* FileUpload component */}
            <FileUpload
              account={account}
              provider={provider}
              contract={contract}
            ></FileUpload>

            {/* Display component */}
            <Display contract={contract} account={account}></Display>
          </div>
        </div>
      </div>
    </>
  )
};

export default Dashboard;
