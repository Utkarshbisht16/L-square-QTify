import styles from "./carouselLeft.module.css";
import React,{useEffect, useState} from 'react';
import {useSwiper} from 'swiper/react';

import {ReactComponent as Left} from '../../../assets/left.svg';

export default function CarouselLeft(){
    const swiper = useSwiper();
    const[isBeginning, setIsBeginning] = useState(swiper.isBeginning);

    useEffect(()=>{
        swiper.on("slideChange", function(){
            setIsBeginning(swiper.isBeginning);
        })
    },[])
    return(
        <div className={styles.left}>
            {!isBeginning && <Left onClick={()=> swiper.slidePrev()} />}
        </div>
    )
}