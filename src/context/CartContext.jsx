import { Children, createContext, useContext, useState } from "react";
import { allProducts } from "../assets/data";


const CartContext = createContext()


export const CartProvider = ({children})=>{

  const [allItem, setAllItem] = useState([])

  const setItem = ()=>{
    setAllItem(allProducts)
  }

  const addToCart = (item)=>{
    setAllItem((prevItems)=>{
      return prevItems.map((prevItem)=>{
        if(prevItem.inCart){
          return prevItem
        }
        return prevItem.id === item.id ? {...prevItem,inCart:true} : prevItem
      })
    })
  }

  const removeFromCart = (item)=>{
    setAllItem((prevItems)=>{
      return prevItems.map((prevItem)=>{
        return prevItem.id === item.id ? {...prevItem,inCart:false,quantity:1} : prevItem
      })
    })
  }

  const updateQuality = (amount,cartItem)=>{
    setAllItem((prevItems)=>{
      return prevItems.map((item)=>{
        return item.id === cartItem.id ? {...item,quantity:item.quantity + amount} : item
      })
    })
  }
 
  return(
    //it makes to use for every component which wrap inside this context
  <CartContext.Provider value={{allItem,setItem,addToCart,removeFromCart,updateQuality}}>
    {children}
  </CartContext.Provider>
  )
}


//this is like a custom hooks which use for eliminating repeatedly use of cartContext and usecontext it makes our code more clean and concise
export const useCart = ()=>{
  return useContext(CartContext)
}