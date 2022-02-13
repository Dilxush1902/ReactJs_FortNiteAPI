import React, {useContext} from 'react';
import {MdOutlineDeleteOutline} from "react-icons/md"
import {Shop} from "../../Additional/Provider/context";

const BasketItem = ({id,name,price,quantity}) => {
 const {filterToBasket,incrementToBasket,decrementToBasket}=useContext(Shop)
 return (
   <>
     <li className="list-group-item bg-dark d-flex align-items-center justify-content-between text-warning">
             <span>
              <span className="text-capitalize">{name} </span>
               x
              <span> {quantity} </span>
               =
              <span> {price} v</span>
             </span>
      <span>
              <button onClick={()=>incrementToBasket(id)} className="btn btn-outline-success mr-2"><b>+</b></button>
              <button onClick={()=>decrementToBasket(id)} className="btn btn-outline-secondary"><b>-</b></button>
             </span>
      <button onClick={()=>filterToBasket(id)} className="btn btn-outline-danger"><b><MdOutlineDeleteOutline/></b></button>
     </li>
   </>
 );
};

export default BasketItem;