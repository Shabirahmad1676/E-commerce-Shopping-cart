import React, { useEffect } from 'react'
import CartItem from './components/CartItem'
import { useCart } from './context/CartContext'
import ShoppingCart from './components/ShoppingCart'

const App = () => {

  const {allItem,setItem} = useCart()

  useEffect(()=>{
    setItem()
  },[])

  useEffect(()=>{
    console.log(allItem);
  },[allItem])

  return (
    <div className='grid place-content-center py-20 '>
      <h1 className='text-3xl text-gray-500 text-center font-bold'>An E-commerce Shopping Cart</h1>
      <ShoppingCart/>
      <div className='grid grid-cols-3 place-items-start gap-10 mt-16'>
        {allItem?.map((item)=>(
          <CartItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default App