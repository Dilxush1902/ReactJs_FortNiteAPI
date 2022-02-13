import React, {useContext} from 'react';
import BasketItem from "./BasketItem";
import {Shop} from "../../Additional/Provider/context";

const BasketList = () => {
 const {order}=useContext(Shop)
 const sumTotal = order.reduce((sum,a)=>{
  return sum + a.price * a.quantity
 },0)
 return (
   <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog box_shadow overflow-hidden">
     <div className="modal-content bg_black">
      <div className="modal-header border-warning">
       <h5 className="modal-title text-warning" id="exampleModalLabel te">Basket Item</h5>
       <button type="button " className="close " data-dismiss="modal" aria-label="Close">
        <span className="text-warning" aria-hidden="true">&times;</span>
       </button>
      </div>
      <div className="modal-body  ">
       <ul className="list-group bg-dark ">
        {order.length ? order.map(item=>(
          <BasketItem
            key={item.id}
            {...item}
          />
        )) : <li className="text-warning list-group-item bg-dark">Empty</li>}
       </ul>
      </div>
      <div className="modal-footer d-flex justify-content-start border-warning text-warning">
       <h5>Total Price: <b> {sumTotal} V</b></h5>
      </div>
     </div>
    </div>
   </div>
 );
};

export default BasketList;