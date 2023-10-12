import React from 'react';

const Navbar = () => {

    return (
        <nav>
            {/* Navbar */}
            <div className='nav-name'>
                <span>
                    <a href='/'>
                        Stackup
                    </a>
                </span>
            </div>

            <div className='nav-links'>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/about'>About</a></li>
                    <li><a href='/features'>Features</a></li>
                    <li><a href='/contact'>Contact</a></li>
                </ul>
            </div>

            <div className='launch-btn'>
                <a href="/dashboard" rel='noreferrer'>
                    <button>Launch App</button>
                </a>
            </div>
        </nav>
    )
};

export default Navbar;