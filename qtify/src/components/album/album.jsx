import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Create from "../create/create"
import styles from "./album.module.css";
import  {useOutletContext} from 'react-router-dom';

export default function Album(){
    const {data} = useOutletContext();
    const {topAlbums, newAlbums} = data;
    // console.log(topAlbums);
    // console.log(topAlbums);
    // let urltop = "https://qtify-backend-labs.crio.do/albums/top";
    // let urlnew = "https://qtify-backend-labs.crio.do/albums/new";
    return(
        <>
            <div className={styles.outer}>
                {/* <Create data={topAlbums}>Top Albums</Create>
                <Create data={newAlbums}>New Albums</Create> */}
                <Create data={topAlbums}>Top Albums</Create>
                <Create data={newAlbums}>New Albums</Create>
                {/* <Create data={data}>Top Albums</Create>
                <Create data={data}>New Albums</Create> */}
            </div>
        </>
    )
}


