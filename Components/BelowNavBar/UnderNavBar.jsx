import React from 'react'
import AllMenu from './AllMenu';


function UnderNavBar() {
  return (
    <>
        <nav className='bg-slate-700 h-9 flex justify-start text-white items-center '>
            <div className='flex items-center space-x-2 font-semibold text-sm pl-5 '>
                <AllMenu />
                <button className='hover:border-[1px] px-3 py-1  hover:border-white'>Fresh</button>
                <button className='hover:border-[1px] px-3 py-1  hover:border-white'>GiftCard</button>
                <button className='hover:border-[1px] px-3 py-1  hover:border-white'>Buy Again</button>
                <button className='hover:border-[1px] px-3 py-1  hover:border-white'>Amazon Basics</button>
                <button className='hover:border-[1px] px-3 py-1  hover:border-white'>Amazon Business</button>
                <button className='hover:border-[1px] px-3 py-1  hover:border-white'>Trending</button>
            </div>
        </nav>
    </>
  )
}

export default UnderNavBar