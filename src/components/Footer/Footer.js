import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='container mx-auto mt-4'>
            <h2 className='text-warning'>ReactJS<span className='text-secondary'> Question</span></h2>
           <div className='border rounded mt-4'>
               <h4 className='text-center mt-2'>How React works?</h4>
               <p className='p-4 fs-5'>React works using virtual dom. A virtual DOM is a lightweight JavaScript representation of the actual DOM.
               The update system of virtual DOM is faster than the update system of actual DOM. Because the virtual dom uses a diff algorithm. Diff algo finds out the update part, and pushes it to the dom, so it makes it faster. Goes over the virtual DOM, the diffing algorithm, optimizations that the diffing algorithm uses to speed up the process. There is also a bit on It some tools that we can use to optimize and speed up React app.</p>
           </div>
           <div className='border rounded mt-4 mb-4'>
               <h4 className='text-center mt-2'>How use state works?</h4>
               <p className='p-4 fs-5'>use State is a hook that allows us to have state variables in functional components and make enrich in functional component. We pass the initial state to this function and also returns a variable with the current state value. After any changes, it changes the view part of the component. Import react, useState from 'react'; function example() Declare a new state variable, which we'll call "count" const [count, setCount] = useState(0); we declare a state variable call count , and set it to 0.</p>
           </div>
        </div>
    );
};

export default Footer;