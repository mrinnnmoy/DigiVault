import React from 'react';
import aboutImg from "../assets/about.gif";

const About = () => {
    return (
        <section className='about' id='about'>
            <div className='about-left'>
                <img src={aboutImg} alt='about-img' />
            </div>
            <div className='about-right'>
                <div className='about-right-top'>
                    <span>About US</span>
                </div>
                <div className='about-right-middle'>
                    <span>
                        Storing and Sharing data with your peers have never been this easy.
                    </span>
                </div>
                <div className='about-right-bottom'>
                    <span className='about-right-bottom'>
                        To build a decentralized file storage and sharing DApp using IPFS,
                        store user data on IPFS, manage access control through smart contracts,
                        and provide a user-friendly interface. Benefits over centralized solutions
                        include data ownership, security, and censorship resistance.
                    </span>
                </div>
                <div className='launch-btn'>
                    <button>Learn More</button>
                </div>
            </div>
        </section>
    )
};

export default About;