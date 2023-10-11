import React from 'react';

const Contact = () => {
    return (
        <section className='contact' id='contact'>
            <div className="newsletter">
                <div className="newsletter-left">
                    <div className="newsletter-left-top">
                        <span>Subscribe Our Newsletter</span>
                    </div>
                    <div className="newletter-left-bottom">
                        <span>
                            Signup for our monthly newsletter to get the latest news,
                            updates and amazing offers delivered directly to your email.
                        </span>
                    </div>
                </div>

                <div className="newletter-right">
                    <div className="newletter-right-main">
                        <input type="email" placeholder='Enter your Email' />
                        <div className="subscribe-btn">
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Contact;