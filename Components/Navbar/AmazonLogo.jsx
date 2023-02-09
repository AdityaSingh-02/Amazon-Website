import React from 'react'
import Image from 'next/image'
import logo from '../Assets/logo.png'

function AmazonLogo() {
    return (
        <>
            <div className="logo pt-3 w-24">
                <Image src={logo} alt="Image" />
            </div>
        </>
    )
}

export default AmazonLogo