import React, { useState } from 'react'

import ImageCarousel from './ImageCarousel'
import ItemBlocks from './ItemBlocks'

import { AiOutlineLeft } from 'react-icons/ai'
import { AiOutlineRight } from 'react-icons/ai'

function MainLandingPage() {

    const [leftClick , updtLeftClick] = useState(false);
    const [rightClick , updtRightClick] = useState(false);

    const carouselLeft = e => {
        e.preventDefault();
        updtLeftClick(true)
    }

    const carouselRight = e => {
        e.preventDefault();
        updtRightClick(true)
    }

    const recProp = (item) => {
        updtLeftClick(item)
        updtRightClick(item)
    }

    return (
        <>
            <section>
                <div className='flex justify-center'>
                    <div className='absolute -z-50'>
                        <ImageCarousel onLeftClick = {leftClick} onRightClick ={rightClick} getProp={recProp} />
                    </div>
                </div>
                <div className='flex justify-between px-40 '>
                    <div className='pt-16'>
                        <button onClick={carouselLeft}><AiOutlineLeft size={'40px'} /></button>
                    </div>
                    <div className='pt-16'>
                        <button onClick={carouselRight}><AiOutlineRight size={'40px'} /></button>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <ItemBlocks />
                </div>
            </section>
        </>
    )
}

export default MainLandingPage