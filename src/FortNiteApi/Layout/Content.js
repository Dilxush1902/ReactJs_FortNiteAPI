import React, {useContext, useEffect} from 'react';
import {API} from "../Additional/Conferm/api";
import {KEY} from "../Additional/Conferm/key";
import ShopList from "../Components/Shop/ShopList";
import BasketList from "../Components/Basket/BasketList";
import Loader from "./Loader/Loader";
import {Shop} from "../Additional/Provider/context";

const Content = () => {
 const {setShop,loader,setLoader}=useContext(Shop)


 useEffect(()=>{
  fetch(API,{
   headers:{Authorization:KEY}
  })
    .then(res => res.json())
    .then(data => {
     setShop(data.featured)
     setTimeout(()=>{
      setLoader()
     },1000)
    })
 },[])

 return (
   <>
    {loader ?<ShopList/> : <Loader/>}
    <BasketList />
   </>
 );
};

export default Content;