import {toast} from "react-toastify";

export const reducer = (state,{type,payload}) => {
 switch (type) {
    case "ADD_TO_BASKET":{
     console.log(1)
     const orderIndex=state.order.findIndex(orderItem=>orderItem.id === payload.id);
     let newOrder=null;
     if (orderIndex < 0) {
        const newItem={...payload,quantity:1};
        newOrder=[...state.order, newItem];
      }
      else {
       newOrder=state.order.map((orderItem,index)=>{
          if (orderIndex === index) {
            return {...orderItem,quantity: ++orderItem.quantity}
          } else {
            return orderItem
          }
        })
      }
     toast.success("Add Basket !!!")
       return {...state,order:newOrder}
    }
    case "FILTER_TO_BASKET":{
      const newOrder=state.order.filter(item=>item.id !== payload.id)
     toast.error("Basket Remove !!!")
      return   {...state,order:newOrder}
    }
    case "INCR_TO_BASKET":{
      let orderIndex=state.order.findIndex(orderItem=>orderItem.id === payload.id);
      const newOrder=state.order.map((orderItem,index)=>{
        if (orderIndex === index) {
          return {...orderItem,quantity: ++orderItem.quantity}
        } else {
          return orderItem
        }
      })
      return {...state,order:newOrder};
    }
    case "DECR_TO_BASKET":{
      const orderIndex=state.order.findIndex(orderItem=>orderItem.id === payload.id);
      const newOrder=state.order.map((orderItem,index)=>{
        if (orderIndex === index) {
          return {...orderItem,quantity: orderItem.quantity>0 ? orderItem.quantity -1 : 0}
        } else {
          return orderItem
        }
      })
      return {...state,order:newOrder}
    }
    case "SET_SHOP":{
      console.log(payload)
     return  {
       ...state,
      shop:payload
      }
    }
   case "SET_LOADER":{
    return {...state,loader: true}
   }
    default:
      return state;
  }
}