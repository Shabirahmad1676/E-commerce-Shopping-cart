import React from 'react'
import CartButton from './CartButton'

const CartItem = ({item,fromCart}) => {
  const {id,name,imageUrl,price} = item
  return (
    <div 
    key={id}
    style={{ boxShadow: '0 4px 8px rgba(255, 105, 180, 0.7), 0 6px 20px rgba(30, 144, 255, 0.7)'}}
     className='group relative flex    rounded-md bg-white h-[230px]  w-[230px] items-center justify-center'>
      <img src={imageUrl} alt="" width={40} height={40} 
      className= {`${!fromCart && 'group-hover:-translate-y-2 transition-all'} duration-500`}
      />
     <div className='absolute bottom-5 left-4'>
     <h2 className={`${fromCart && 'text-xs'}`}>{name}</h2>
     <h2 className={`${fromCart && 'text-pink-500 text-xs'}`}>${price}</h2>
     </div>
     <CartButton item={item} fromCart={fromCart} />
    </div>
  )
}

export default CartItem