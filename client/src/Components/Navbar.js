import React from 'react';
import { Link } from 'react-router-dom';
import AllFlights from './AllFlights';

function Navbar(props) {
    return (
        <nav>
            <div className='logo-container'>
                <img className='logo' src='logo.png' alt='log' />
                <div className='logo-name'>
                    <span className='logo-title logo-name-1'>Voyages</span>
                    <span className='logo-title logo-name-2'>Scouts</span>
                </div>
            </div>
            <div className='navbar-links'>
                <Link to='all-flights'>Tout nos vols</Link>
                <Link to='calendar'>Calendrier</Link>
                <Link to='contact-us'>Nous contacter</Link>
            </div>
            <div className='user-account'>
                <img className='notification-icon' alt='notification' src='notification.png' />
                <div className='user-navbar'>
                    <div className='user-picture'>
                        <img className='picture' alt='user-account' src='user-icon.png' />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;