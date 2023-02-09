import React, { useState } from 'react'
import Link from 'next/link'
import { AiFillCaretDown } from 'react-icons/ai'

function SignInOptions() {

  const [showOption , updtShowOptions] = useState(false)

  const showLoginOptions = e =>{
    e.preventDefault();
    updtShowOptions(prevVal => !prevVal)
  }

  const signInRedirect = e =>{
    e.preventDefault();
    updtShowOptions(prevVal => !prevVal)
  }

  const signUpRedirect = e =>{
    e.preventDefault();
    updtShowOptions(prevVal => !prevVal)
  }

  return (
    <>
      <div>
        <div className='text-white pl-7'>
          <button onClick={showLoginOptions} className='px-3 '>
            <p className='text-xs font-semibold pr-8'>Hello, sign in</p>
            <p className='flex items-center font-bold  text-sm'>Accounts & Lists<AiFillCaretDown size={'10px'} /></p>
          </button>
        </div>
        {showOption && <div className='absolute z-50'>
          <div className='w-44 h-44 mt-2 bg-white flex flex-col justify-center items-center'>
            <button onClick={signInRedirect} className='px-6 py-2 bg-gradient-to-b from-orange-200 to-yellow-500 font-semibold'><Link href={'/SignIn'}>Sign in</Link></button>
            {/* <button onClick={signUpRedirect} className='px-6 py-2 text-sm'>Sign Up</button> */}
            <Link href='/signup'>signUp</Link>
          </div>
        </div>}
      </div>
    </>
  )
}

export default SignInOptions