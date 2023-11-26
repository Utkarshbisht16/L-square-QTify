
import styles from "./carousel.module.css";
import React,{useEffect} from 'react';
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import {Pagination, Navigation} from 'swiper';
import CarouselLeft from "./carouselLeft/carouselLeft";
import CarouselRight from "./carouselRight/carouselRight";
import "swiper/css";
import  {useOutletContext} from 'react-router-dom';


const Controls = ({data})=>{
    const swiper = useSwiper();
    useEffect(()=>{
        swiper.slideTo(0,1);
    },[data]);

    return <></>
}
export default function Carousel({data,renderComponent}){

    return(
        <div className={styles.wrapper}>
            <Swiper
                style={{padding:"0px 20px"}}
                initialSlide={0}
                modules={[Navigation]}
                slidesPerView={"auto"} 
                // slidesPerView={"auto"} 
                spaceBetween={40}
                allowTouchMove
            >   
                <Controls data={data}/>
                <CarouselLeft/>
                <CarouselRight/>
                {data.map((ele) => (
                    <SwiperSlide>{renderComponent(ele)}</SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
//line 14 problen !!!!!!!+=========