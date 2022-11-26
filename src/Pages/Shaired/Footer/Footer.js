import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='mt-32'>
            <footer className="footer p-20 bg-base-200 text-base-content">
                <div className='mt-9'>
                    <h1 className="text-4xl">CUTHBERT</h1>
                    <p><small>BUILD BY @QODEINTERACTIVE</small></p>
                </div>
                <div>
                    <span className="footer-title">INFORMATION</span>
                    <Link to='/' className="link link-hover">ABOUT US</Link>
                    <Link to='/' className="link link-hover">OUR TEAM</Link>
                    <Link to='/' className="link link-hover">CONTACT US</Link>
                    <Link to='/' className="link link-hover">PRICING PLANS</Link>
                </div>
                <div>
                    <span className="footer-title">SOCIAL</span>
                    <Link to='/' className="link link-hover">INSTAGRAM</Link>
                    <Link to='/' className="link link-hover">TWITTER</Link>
                    <Link to='/' className="link link-hover">BEHANCE</Link>
                    <Link to='/' className="link link-hover">PINTEREST</Link>
                    <Link to='/' className="link link-hover">DRIBBBLE</Link>
                </div>
                <div>
                    <span className="footer-title">CONTACT</span>
                    <Link to='/' className="link link-hover">HEADQUARTERS</Link>
                    <Link to='/' className="link link-hover">TEL + 45 66 12 00 12</Link>
                    <Link to='/' className="link link-hover">INFO@QODEINTERACTIVE</Link>
                    <Link to='/' className="link link-hover">BREDGADE 6, 1260</Link>
                    <Link to='/' className="link link-hover">KØBENHAVN, DK</Link>
                </div>
            </footer>
        </div>
    );
};

export default Footer;