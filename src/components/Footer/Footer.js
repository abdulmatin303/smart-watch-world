import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='container mx-auto mt-4'>
            <h2 className='text-warning'>ReactJS<span className='text-secondary'> Question</span></h2>
           <div className='border rounded'>
               <h4 className='text-center mt-2'>How React works?</h4>
               <p className='p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis suscipit sint ducimus, magnam corrupti maxime alias, dicta quo reiciendis quos totam in numquam molestias nam nisi voluptatem iure, odio rerum.</p>
           </div>
           <div className='border rounded mt-4 mb-4'>
               <h4 className='text-center mt-2'>How use state works?</h4>
               <p className='p-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, odit a itaque nam saepe nostrum excepturi autem veritatis minus harum culpa, tempore deserunt quibusdam velit reprehenderit modi ratione? Officia, atque?</p>
           </div>
        </div>
    );
};

export default Footer;