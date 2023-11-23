import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { CardActionArea } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styles from "./card.module.css";

export default function Cards(props){
    const theme = createTheme({
        palette: {
          primary: {
            main: '#121212',
          },
        },
      });
    return(
        <>
            <div className={styles.outer}>
            <Card sx={{ maxWidth: 159, maxHeight:205}}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="170"
                    image={props.image}
                    alt="green iguana"
                    />
                    <CardContent sx={{height:35, display:'flex', alignItems:'center'}}>
                    <ThemeProvider theme={theme}>
                    <Chip label={props.follows + " Follows"} className={styles.chipp} size="small" color="primary" />
                    </ThemeProvider>
                    </CardContent>
                </CardActionArea>
            </Card>
            <p className={styles.bottom}>{props.title}</p>
            </div>
        </>
    )
}
