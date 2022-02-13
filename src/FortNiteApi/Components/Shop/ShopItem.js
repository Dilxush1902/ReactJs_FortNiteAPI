import React, {useContext, useEffect} from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {Shop} from "../../Additional/Provider/context";
import AOS from "aos";
import "aos/dist/aos.css";

const ShopItem = ({id,name,description,full_background,releaseDate,type,price}) => {
 const {addToBasket}=useContext(Shop);
 useEffect(()=>{
  AOS.init({
   offset: 200,
   duration: 600,
   easing: 'ease-in-sine',
   delay: 100,
  })
 },[])
 return (
   <div data-aos="fade-up" className="card box_shadow bg_black" >
    <LazyLoadImage
      alt="img"
      style={{width:"100%"}}
      src={full_background}
      effect="blur"
    />
     <div className="card-body text-warning ">
      <h5 className="card-title"><span className="text-secondary">Name:</span> {name}</h5>
      <p className="card-text"><span className="text-secondary">Description:</span> {description}</p>
      <p>
       <span className="text-secondary">Price:</span>
       <span className="text-capitalize"> {price} v </span>
      </p>
      <div className="d-flex justify-content-between">
        <p>
         <span className="text-secondary">Type:</span>
         <span className="text-capitalize"> {type} </span>
        </p>
        <p>
         <span className="text-secondary">Date:</span> {releaseDate}</p>
      </div>

       <button onClick={()=>addToBasket({id,name,description,price})} className="yellow btn btn-outline-warning w-100">Buy</button>
     </div>
   </div>
 );
};

export default ShopItem;