import React, { useState } from 'react';
import './LandingPage.css'

function LandingPage() {

    return (
        <div className='container' id='container'>
            <div id='box'>
                <div className='header-box'>
                    <div className='title'> Your music app</div>
                    <div className='caption'>Relax or get going with some of your favorite listens
                    </div>
                    <button className='glow-on-hover'>
                        <div className='appText'>Download on the App Store</div>
                    </button>
                </div>
            </div>
         <div className='footer'>
                <div className='column1'>
                    <div>
                        <h1 className='h1Caption'>Press play and enjoy </h1>
                        <p>Elevate your mood and reduce stress by playing and browsing through our site without any disruptions</p>
                    </div>
                </div>
                <div className='column2'>
                    <div>
                        <h1 className='h1Caption'>Track your listens</h1>
                        <p>Keep track of every song or album you've played with our built-in favorite's list</p>
                    </div>
                </div>
            <div className='column3'>
                <div>
                    <h1 className='h1Caption'>Join over 2 million</h1>
                    <p>Connect with 2 million people around the world who share similar interests</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default LandingPage;
