import React from 'react';
import homeImg from '../assets/home-img.svg';
import User from './User';
import About from './About';
import Features from './Features';
import Contact from './Contact';

const Home = () => {
    return (
        <>
            <home>
                {/* Home section, Left-side */}
                <div className='home-left'>
                    <div className='home-left-top'>
                        <span>Easily Share & Store files online.</span>
                    </div>
                    <div className='home-left-middle'>
                        <span>A Decentralized file storage and sharing solution for everyone using IPFS.</span>
                    </div>
                    <div className='home-left-bottom launch-btn'>
                        <a href="/dashboard" rel='noreferrer'>
                            <button>Connect</button>
                        </a>
                    </div>
                </div>

                {/* Home section. right side */}
                <div className='home-right'>
                    <img src={homeImg} alt='home-img' />
                </div>
            </home>
            <User />
            <About />
            <Features />
            <Contact />
        </>
    )
};

export default Home;