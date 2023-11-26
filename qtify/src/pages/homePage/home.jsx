import React from 'react';
import Hero from '../../components/hero/hero';
import Album from '../../components/album/album';
import  {useOutletContext} from 'react-router-dom';
import styles from "./home.module.css"

export default function HomePage(props){
    const {data} = useOutletContext();
    const {topAlbums, newAlbums} = data;
    
    return(
        <>
            <Hero/>
            <Album/>
        </>
    )
}