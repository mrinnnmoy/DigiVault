import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import Storage from "../ABI/Storage.json";
import FileUpload from './FileUpload';
import Modal from './Modal';
import Display from './Display';
import Header from './Header';

const Dashboard = () => {
    const [account, setAccount] = useState("Connect Metamask");
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
                //console.log(contract);
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
            <Header />
            <div className="upload">
                <div className="upload-main">
                    <FileUpload account={account} provider={provider} contract={contract} />
                    <Display contract={contract} account={account} />
                </div>
            </div>
        </>
    )
};

export default Dashboard;