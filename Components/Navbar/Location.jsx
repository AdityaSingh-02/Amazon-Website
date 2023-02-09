import React from 'react'
import { HiOutlineLocationMarker } from 'react-icons/hi'


function Location() {
    return (
        <>
            <div className='flex flex-col justify-center text-white'>
                <p className='text-xs pl-4 text-gray-300'>Deliver to</p>
                <span className='flex flex-row text-sm font-bold '><HiOutlineLocationMarker color='white' />Dehradun India</span>
            </div>
        </>
    )
}

export default Location