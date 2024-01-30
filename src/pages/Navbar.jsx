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

            <div className='launch-btn'>
                <a href="/dashboard" rel='noreferrer'>
                    <button>Connect</button>
                </a>
            </div>
        </nav>
    )
};

export default Navbar;