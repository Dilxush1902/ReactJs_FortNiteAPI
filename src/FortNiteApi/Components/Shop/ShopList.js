import React, {useContext} from 'react';
import ShopItem from "./ShopItem";
import {Shop} from "../../Additional/Provider/context";
const ShopList = () => {
const {shop}=useContext(Shop)
 return (
   <div className="shop_list">
    {
     shop.map(item=>{
     return <ShopItem key={item.id} {...item} />
     })
    }
   </div>
 );
};

export default ShopList;