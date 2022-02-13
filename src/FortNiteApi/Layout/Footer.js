import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
 return (
   <div className="py-4 px-2 footer">
    <Fade bottom>
     <footer>
       <p className="text-warning p-0 m-0 copyright text-white">&copy; {new Date().getFullYear()} FortNite Api </p>
     </footer>
    </Fade>
   </div>
 );
};

export default Footer;