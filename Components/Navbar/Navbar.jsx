import React from 'react'

import AmazonLogo from './AmazonLogo'
import Location from './Location'
import SearchBar from './SearchBar';
import SignInOptions from './SignInOptions';
import ReturnAndOrders from './ReturnAndOrders';
import ShoppingCart from './ShoppingCart';

function Navbar() {
  return (
    <>
      <div >
        <nav className=' flex items-center px-6 w-full  bg-gray-900  h-16'>
          <div className='flex flex-row space-x-4 '>
            {/* Amazon Logo ------------------------------------------------ */}
            <AmazonLogo />
            {/* Location --------------------------------------------------- */}
            <Location />
            {/* Search------------------------------------------------------ */}
            <SearchBar />
            {/* SigninOptions ------------------------------------------------------ */}
            <SignInOptions />
            <ReturnAndOrders />
            <ShoppingCart />
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar