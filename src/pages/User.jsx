import React from 'react';
import bitcoin from '../assets/bitcoin.png';
import ether from '../assets/ether.png';
import matic from '../assets/matic.png';
import solana from '../assets/solana.png';
import optimism from '../assets/optimism.png';

const User = () => {
    return (
        <section className='user' id='user'>
            <div className='users'>
                <span>Trusted by hundreds of users from the world's best blockchains.</span>
                <div className='user-img'>
                    <div className='users-img'>
                        <img src={bitcoin} alt='bitcoin' />
                        <span>Bitcoin</span>
                    </div>
                    <div className='users-img'>
                        <img src={ether} alt='ether' />
                        <span>Ethereum</span>
                    </div>
                    <div className='users-img'>
                        <img src={matic} alt='matic' />
                        <span>Polygon</span>
                    </div>
                    <div className='users-img'>
                        <img src={solana} alt='solana' />
                        <span>Solana</span>
                    </div>
                    <div className='users-img'>
                        <img src={optimism} alt='Optimism' />
                        <span>Optimism</span>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default User;