import React, { useState, useEffect } from 'react';
import { ethers } from "ethers";
import Storage from "./ABI/Storage.json";

import "./App.css";
import FileUpload from "./components/FileUpload";
import Display from "./components/Display";
import Modal from "./components/Modal";

const App = () => {
  const [account, setAccount] = useState("Not Connected");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);


  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const loadProvider = async () => {
      if (provider) {
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        let contractAddress = "0x8abAC03c156e47Bb11C178C15e284870a7F5c240";

        const contract = new ethers.Contract(
          contractAddress,
          Storage.abi,
          signer
        );
        // console.log(contract);
        setContract(contract);
        setProvider(provider);
      } else {
        console.error("Metamask is not installed");
      }
    };
    provider && loadProvider();
  }, []);


  return (
    <>
      {!modalOpen && (
        <button className="share" onClick={() => setModalOpen(true)}>
          Share
        </button>
      )}
      {modalOpen && (
        <Modal setModalOpen={setModalOpen} contract={contract}></Modal>
      )}

      <div className='App'>
        <h1>StackUp</h1>
        <p>
          Account : {account ? account : "Not Connected"}
        </p>
        <FileUpload
          account={account}
          provider={provider}
          contract={contract}
        ></FileUpload>
        <Display contract={contract} account={account}></Display>
      </div>
    </>
  )
};

export default App;