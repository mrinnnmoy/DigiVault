import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="head">
                <ul>
                    <a href="/dashboard">
                        <li>Upload</li>
                    </a>
                    <a href="/dashboard">
                        <li>View</li>
                    </a>
                    <a href="/dashboard">
                        <li>Share</li>
                    </a>
                </ul>
            </div>
        </header>
    )
};

export default Header;