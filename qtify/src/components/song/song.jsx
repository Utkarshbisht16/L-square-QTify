import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Create2 from "../create/create2"
import styles from "./song.module.css";
import  {useOutletContext} from 'react-router-dom';
import { fetchFilters } from '../../api/api';

export default function Song(){
    const {data} = useOutletContext();
    const {songs} = data;
    // console.log(songs);
    // console.log(topAlbums);
    // console.log(topAlbums);
    // let urltop = "https://qtify-backend-labs.crio.do/albums/top";
    // let urlnew = "https://qtify-backend-labs.crio.do/albums/new";
    return(
        <>
            <div className={styles.outer}>

                <Create2 data={songs} filterSource={fetchFilters}>Songs</Create2>

            </div>
        </>
    )
}


