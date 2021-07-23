import React, { useState } from 'react';
import './LandingPage.css'

function LandingPage() {

    return (
        <div className='container' id='container'>
                <div className='header-box'>
                    <div className='title'> Your music app</div>
                    <div className='caption'>Relax or get going with some of your favorite listens
                    </div>
                        <button className='glow-on-hover'>
                            <div className='appText'>Download on the App Store</div>
                        </button>
                </div>
            <div className='footer'>
                <div className='column1'>
                    <div>
                        <img className='musicIcon' src='https://www.svgrepo.com/show/281164/headphones-listening.svg'></img>
                        <h1 className='h1Caption'>Press play and enjoy </h1>
                        <p className='pTag'>Elevate your mood and reduce stress by navigating our site without any disruptions</p>
                    </div>
                </div>
                <div className='column2'>
                    <div>
                        <img alt='magnify glass' className='trackingIcon' src='https://www.pinclipart.com/picdir/big/114-1145325_5-tracking-icon-courier-tracking-icon-clipart.png'></img>
                        <h1 className='h1Caption'>Track your listens</h1>
                        <p className='pTag'>Keep track of every song or album you've played with our built-in favorite's list</p>
                    </div>
                </div>
                <div className='column3'>
                    <div>
                        <img alt='crowd of people' className='crowdIcon' src='https://icon-library.com/images/crowd-icon-png/crowd-icon-png-16.jpg'></img>
                        <h1 className='h1Caption'>Join over 2 million</h1>
                        <p className='pTag'>Connect with 2 million people around the world who share similar interests</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;
