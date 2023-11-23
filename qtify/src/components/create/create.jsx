
import styles from "./create.module.css";
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Cards from "../card/card.jsx"
import { useEffect, useState } from 'react';
import { CardActionArea, Collapse, Hidden } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";
import Button from '@mui/material/Button';
import {
    CircularProgress,
    Grid,
    InputAdornment,
    TextField,
} from "@mui/material";

export default function Create({url,children}){
    
    const [post, setPost] = useState(null);
    const [col, setCol] = useState('wrap');
    const [x, setX] = useState({display:'flex', flexWrap:'nowrap', height:280, overflow:'Hidden'});
    console.log(post);
    useEffect(() => {
        axios.get(url).then((response) => {
            setPost(response.data);
        });
      }, []);
    const collapse = (e) =>{
        if(col === 'nowrap'){
            setCol('wrap')
            setX({display:'flex', flexWrap:'nowrap', height:280, overflow:'Hidden'});
        }else{
            setCol('nowrap')
            setX({display:'flex'});
        }
        
    }
    return(
        <>
            <div className={styles.outer}>
                <div className={styles.outer2}>
                    <p className={styles.text1}>{children}</p>
                    <h4 variant="text" onClick={collapse} className={styles.text2}>{col==='wrap' ? "Show All" : "Collapse"}</h4>
                </div>
                <div>
                {post ? <Grid container spacing={1} paddingX={1} marginY={1} sx={x}>
                    {post.length ? post.map(song => <Grid key={song.id} item xs={6} md={2}>
                    <Cards 
                        follows={song.follows} 
                        image={song.image} 
                        id={song.id} 
                        title={song.title}
                    />
                    </Grid>):null}
                    </Grid>:null}
                </div>
            </div>
        </>
    )
}
