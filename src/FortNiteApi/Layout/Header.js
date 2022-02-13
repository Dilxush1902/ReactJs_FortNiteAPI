import React, {useContext, useState} from 'react';
import Fade from 'react-reveal/Fade';
import {Shop} from "../Additional/Provider/context";

const Header = () => {
 const [navbar,setNavbar]=useState(false);
 const {order}=useContext(Shop)
 const changeScroll = () => {
   if (window.scrollY >= 80) {
    setNavbar(true);
   } else {
    setNavbar(false);
   }
 }
 window.addEventListener("scroll",changeScroll)

 return (
    <nav className={navbar ? "navbar navbar-expand-lg active navbar-dark": "navbar navbar-expand-lg  navbar-dark"}>
     <Fade top>
      <p className="navbar-brand text-warning m-0 ">FortNite Api</p>

     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
             aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"> </span>
     </button>

     <div className="collapse navbar-collapse" id="navbarSupportedContent">

      <div className="ml-auto">
       <button
         type="button"
         data-toggle="modal"
         data-target="#exampleModal"
         data-whatever="@mdo"
         className="w-100 m-auto btn btn-outline-warning"
       >
        <span className="pr-2">
         {order.length}
        </span>
        Add To Shopping
       </button>
      </div>
     </div>
     </Fade>
    </nav>
 );
};

export default Header;