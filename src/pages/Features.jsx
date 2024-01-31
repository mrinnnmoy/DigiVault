import React from 'react';
import feature1 from "../assets/feature1.png";
import feature2 from "../assets/feature2.png";
import feature3 from "../assets/feature3.jpg";

const Features = () => {
  return (
    <section className='feature' id='features'>
      <div className='features'>
        <div className="features-top">
          <span>FEATURES</span>
        </div>
        <div className="features-middle">
          <span className='features-middle-top'>
            Our Product Features
          </span>
          <span className='features-middle-bottom'>
            Decentralized data storage via IPFS ensures data integrity,
            resilience, and efficient retrieval. It minimizes bandwidth
            costs, fosters data ownership, and enhances privacy while
            promoting sustainability and global accessibility.
          </span>
        </div>
        <div className="features-bottom">
          <div className="features-bottom-card">
            <div className="img">
              <img src={feature1} alt="features-1" />
            </div>
            <div className="features-details">
              <span className='features-details-top'>Easy to Store.</span>
              <span className='features-details-bottom'>Uploading data to IPFS is a breeze:
                Connect your Metamask, upload files through the user-friendly interface,
                and Pinata automatically pins and manages your data. It's simplicity at
                its best!
              </span>
            </div>
          </div>
          <div className="features-bottom-card">
            <div className="img">
              <img src={feature2} alt="features-2" />
            </div>
            <div className="features-details">
              <span className='features-details-top'>Share Securely.</span>
              <span className='features-details-bottom'>Privacy-centric DApps prioritize user
                data control and employ secure, permission-based access mechanisms only with
                approved users, to safeguarde and preserve privacy.
              </span>
            </div>
          </div>
          <div className="features-bottom-card">
            <div className="img">
              <img src={feature3} alt="features-3" />
            </div>
            <div className="features-details">
              <span className='features-details-top'>Quick Access.</span>
              <span className='features-details-bottom'>Seamless integration: Connect your MetaMask
                to the DApp, one-click access, and instantly view your uploaded files. Effortless,
                user-friendly file retrieval at your fingertips.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Features;