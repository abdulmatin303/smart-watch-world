import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='container header mt-4 mb-4'>
            <h1 className='text-secondary text-center fw-bold'>Smart Watch.<span className='text-warning'>bd World</span></h1>
            <h4 className='text-info mt-4'>You can choose any four watches</h4>
        </div>
    );
};

export default Header;