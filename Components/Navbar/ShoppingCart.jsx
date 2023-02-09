import React from 'react'
import { MdShoppingCart } from 'react-icons/md'

function ShoppingCart() {
  return (
    <>
        <div className='z-50'>
            <button className='flex flex-row justify-center items-center' >
                <span><MdShoppingCart color='white' size={'50px'} /></span>
                <p className='text-orange-500 font-bold text-lg -translate-x-7 -translate-y-2 '>0</p>
                <span className='text-white font-semibold'>Cart</span>
            </button>
        </div>
    </>
  )
}

export default ShoppingCart