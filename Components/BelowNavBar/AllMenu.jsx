import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'

function AllMenu() {
    return (
        <>
            <div>
                <button>
                    <div className='flex'>
                        <RxHamburgerMenu color='white' size={'24px'} />
                        <p className='font-semibold text-sm pt-1'>All</p>
                    </div>
                </button>
            </div>
        </>
    )
}

export default AllMenu