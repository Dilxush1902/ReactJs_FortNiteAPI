import React, {useReducer, createContext} from "react";
import {reducer} from "./reducer";
export const Shop = createContext();
 const initialState={
  shop:[],
  order:[],
  loader:false
 }
export const ShopProvider = ({children}) => {
 const [count,dispatch]=useReducer(reducer,initialState);
 count.addToBasket =(item)=>{

   dispatch({type:'ADD_TO_BASKET',payload:item})
 }
 count.filterToBasket=(id)=>{
  dispatch({type:"FILTER_TO_BASKET",payload:{id:id}})
 }
 count.incrementToBasket=(id)=>{
  dispatch({type:"INCR_TO_BASKET",payload:{id:id}})
 }
 count.decrementToBasket=(id)=>{
  dispatch({type:"DECR_TO_BASKET",payload:{id:id}})
 }
 count.setShop=(data)=>{
  dispatch({type:"SET_SHOP",payload:data})
 }
 count.setLoader=()=>{
  dispatch({type:"SET_LOADER"})
 }
 return (
    <Shop.Provider value={count}>
     {children}
    </Shop.Provider>
  )
}