import React, { useEffect, useState } from 'react'
import classes from './ImageCaraousel.module.css'

function ImageCarousel(props) {
    const [currentVal, updtCurrVal] = useState(0)
    const [indexVal, updtIndex] = useState(0)
    const Banner_Images = [
        {
            id: 0,
            img: "https://images.unsplash.com/photo-1627931314190-eb289c743d6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1954&q=80",
        },
        {
            id: 1,
            img: "https://images.unsplash.com/photo-1615003162333-d3ff3ce1f0f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1860&q=80",
        },
        {
            id: 2,
            img: "https://images.unsplash.com/photo-1533282960533-51328aa49826?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1842&q=80",
        },
        {
            id: 3,
            img: "https://images.unsplash.com/photo-1582748142027-7f44356fc398?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1905&q=80",
        },
    ];

    const manageLeft = props.onLeftClick
    const manageRight = props.onRightClick

    useEffect(()=>{
        if(manageRight){
            updtIndex(prevVal => prevVal + 1);
            props.getProp(false)
            transFormImage()
        }
        if(manageLeft){
            updtIndex(prevVal => prevVal - 1);
            props.getProp(false)
            transFormImage()
        }
    },[manageLeft , manageRight])

    useEffect(() => {
        const interval = setInterval(() => {
            updtIndex(prevVal => prevVal + 1)
            transFormImage()
        }, 7000);
        return () => clearInterval(interval);
    },[ , indexVal]);

    function transFormImage() {
        if (indexVal >= Banner_Images.length - 1) {
            updtIndex(0)
            console.log('idx set to 0')
        } else if (indexVal < 0) {
            updtIndex(Banner_Images.length - 1)
            console.log('idx at end')
        }
        updtCurrVal(indexVal * 1400)
    }

    const Styles = {
        transform: `translate(${-currentVal}px , 0px)`
    }


    return (
        <>
            <div className={`${classes.carousel} `}>
                <div className={classes.imageContainer} >
                    {Banner_Images.map(({ id, img }) => (
                        <img src={img} key={id} style={Styles} className={`transition-all duration-500 ease-in-out`} />
                    ))}
                </div>
            </div>

        </>
    )
}

export default ImageCarousel