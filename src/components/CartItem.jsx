import React from 'react'
import CartButton from './CartButton'

const CartItem = ({item}) => {
  const {id,name,imageUrl,price} = item
  return (
    <div 
    key={id}
    style={{ boxShadow: '0 4px 8px rgba(255, 105, 180, 0.7), 0 6px 20px rgba(30, 144, 255, 0.7)'}}
     className='group relative flex flex-col gap-y-2 border  border-zinc-500 rounded-md bg-white h-[300px]  w-[250px] items-center justify-center'>
      <img src={imageUrl} alt="" width={80} height={80} 
      className='group-hover:-translate-y-2 transition-all duration-500'
      />
     <div className='absolute bottom-5 left-5'>
     <h2 className='text-zinc-600'>{name}</h2>
     <h2 className='text-pink-500'>${price}</h2>
     </div>
     <CartButton item={item}/>
    </div>
  )
}

export default CartItem