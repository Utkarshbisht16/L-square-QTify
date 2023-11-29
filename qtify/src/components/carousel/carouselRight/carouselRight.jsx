import styles from "./carouselRight.module.css";
import React,{useEffect, useState} from 'react';
import {useSwiper} from 'swiper/react';

import {ReactComponent as Right} from '../../../assets/right.svg';

export default function CarouselRight(){
    const swiper = useSwiper();
    const[isEnd, setIsEnd] = useState(swiper.isEnd);

    useEffect(()=>{
        swiper.on("slideChange", function(){
            setIsEnd(swiper.isEnd);
            // console.log("is end", swiper.isEnd);
        })
    },[])
    return(
        <div className={styles.right}>
            {!isEnd && <Right onClick={()=> swiper.slideNext()} />}
        </div>
    )
}