import { useCart } from "../context/CartContext"

const CartButton = ({item,fromCart}) => {

  const{addToCart,removeFromCart,updateQuality} = useCart()

  return (
    <div className={`absolute w-max top-4 right-2 ${fromCart && 'scale-90'}`}>
      <div className="space-x-2 ">
        {!item.inCart ? (
          <button 
            onClick={() => addToCart(item)}
            className='bg-zinc-400 px-2 py-1 rounded-md outline-none transition-colors hover:bg-zinc-500'
            type='button'
          >
            + Add To Cart
          </button>
        ) : (
          <div>
            <div className="flex">
              <button
                onClick={() => {
                  if (item.quantity === 1) {
                    removeFromCart(item)
                  } else {
                    updateQuality(-1, item)
                  }
                }}
                className="border rounded-lg px-3"
              >
                -
              </button>
              <p className="flex items-center gap-x-1 mx-1">
                <span className="min-w-7 bg-green-100 grid place-items-center border rounded-full">
                  {item.quantity}
                </span>
                <span className="text-xs">in Cart</span>
              </p>
              <button
                onClick={() => updateQuality(1, item)}
                className="border rounded-lg px-3">+
              </button>
            </div>
            <button
              onClick={() => removeFromCart(item)}
              className="bg-pink-200 mx-auto mt-2 block rounded-md px-2 py-1 text-xs text-white">
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default CartButton