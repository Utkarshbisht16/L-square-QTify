import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { CardActionArea } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Create from "../create/create"
import styles from "./album.module.css";

export default function Album(props){
    // const theme = createTheme({
    //     palette: {
    //       primary: {
    //         main: '#121212',
    //       },
    //     },
    //   });
    let urltop = "https://qtify-backend-labs.crio.do/albums/top";
    let urlnew = "https://qtify-backend-labs.crio.do/albums/new";
    return(
        <>
            <div className={styles.outer}>
                <Create url={urltop}>Top Albums</Create>
                <Create url={urlnew}>New Albums</Create>
            </div>
        </>
    )
}
