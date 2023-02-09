import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'


function SearchBar() {
    const [Focused , updtFocus ] = useState(false)
    const inputFocusHandler = e =>{
        updtFocus(true)
    }

    return (
        <>
            <div>
                <form className={`flex justify-center items-center rounded-md px-[3px] py-[3px] ${Focused?'bg-orange-400':''}`}>
                    <select className='text-sm h-10 px-2 bg-zinc-200 outline-none text-gray-500 rounded-l-[4px] hover:text-gray-900 hover:bg-gray-300 hover:ease-in ' >
                        <option value="">All</option>
                        <option value="">All</option>
                        <option value="">All</option>
                        <option value="">All</option>
                    </select>
                    <input onFocus={inputFocusHandler} onBlur={()=>updtFocus(false)} type="text" name="search" className={`w-[880px] h-10 px-3 border-none ${Focused?'outline-none':''} `} />
                    <button className='w-7 bg-orange-300 pl-3 pr-7 py-3 rounded-r-[4px]'><BsSearch /></button>
                </form>
            </div>
        </>
    )
}

export default SearchBar