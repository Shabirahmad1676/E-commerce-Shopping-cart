import React, { useEffect, useState } from 'react'
import { ShoppingCartIcon,XIcon } from 'lucide-react'
import {useCart} from '../context/CartContext'
import CartItem from './CartItem'


const ShoppingCart = () => {
  const [isopen, setIsopen] = useState(false)
  const[cartItems,setCarItems] = useState([])
  const[totalprice,setTotalprice] = useState(0)

  const {allItem} = useCart()

  useEffect(()=>{
    const InCartItems = allItem.filter((item)=>item.inCart)
    setCarItems(InCartItems?.reverse())

    const price = InCartItems.reduce((accumulator,item)=>{
      return (accumulator += Math.ceil(item.price * item.quantity))
    },0)

    setTotalprice(price)

  },[allItem])

  return (
   <>
   <div className={`w-[300px] h-screen bg-gray-200 fixed ${isopen ? 'right-0' : '-right-[300px]'} top-0 z-30 border-l-4 border-red-200 rounded-tl-lg`}>
    <div className='w-full h-16 bg-white absolute left-0 top-0 z-10 grid place-items-center border rounded-lg'>
      <h1 className='text-xl text-gray-400'>Shopping Cart</h1>
      <button
      onClick={()=>setIsopen(false)}
       className='w-9 h-9 bg-yellow-800 absolute right-3 z-20 grid place-items-center border-2 rounded-full'>
        <XIcon className='text-white'/>
      </button>
    </div>
    <button
    onClick={()=>setIsopen(true)}
     className='w-9 h-9 bg-yellow-200 absolute -left-14 top-3 z-20 grid place-items-center border-2 rounded-full'>
      <ShoppingCartIcon/>
      <span className='w-6 h-6 bg-pink-300 absolute -bottom-4 -left-2 grid place-items-center border border-gray-200 rounded-full text-white'>1</span>
    </button>
    <div className='h-screen flex flex-col gap-y-3 overflow-y-scroll px-5 pb-24 pt-20'>
    {cartItems?.map((item)=>{
      return <CartItem key={item.id} item={item} fromCart={true} />
    })}
    </div>
      <div className='w-full h-20 bg-white absolute bottom-0 left-0 z-10 grid place-items-center border rounded-lg'>
        <h1 className='text-xl text-gray-500'>Total ${totalprice}</h1>
        <button className='rounded-md bg-blue-300 px-2 text-white '>Buy Now</button>
      </div>
    </div>
   </>
  )
}

export default ShoppingCart