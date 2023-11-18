import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import {useState, useEffect} from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {green } from '@mui/material/colors';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
// import { useHistory, Link, Route, BrowserRouter} from "react-router-dom";
import "./header.css";
const theme = createTheme({
    palette: {
      primary: {
        main: '#000000',
        contrastText: '#1BEC1B'
      }, 
    },
  });
const Header = ({ children, hasHiddenAuthButtons }) => {
  const[s, setS] = useState(hasHiddenAuthButtons);

//   let name = localStorage.getItem('username');
//   let button;
//     if(s==='simple'){
//       // console.log('simple');
//       button = (
//         <div><Button
//             className="explore-button"
//             startIcon={<ArrowBackIcon />}
//             variant="text"
//             onClick={()=>{
//             //   history.push("/", { from: "Login" })s
//             }}
//           >
//             Back to explore
//           </Button></div>)
//     }else if(s === 'in'){
//       // console.log('in');
//       button = (
//         <div>
//         <Stack direction="row" spacing={2}>
//           <Avatar alt={localStorage.getItem("username")} src="avatar.png" />
//           <p>{localStorage.getItem('username')}</p>
//           <Button
//           className="explore-button"
//           variant="text"
//           onClick={()=>{
//             localStorage.clear()
//             // history.push("/login", { from: "Products" })
//           }}>
//             LOGOUT
//           </Button>
//         </Stack>
//       </div>)
//     }else if(s === 'out'){
//       // console.log('out');
//       button = (
//       <div>
//       <Button
//       className="button"
//       variant="text"
//       onClick={()=>{
//         // history.push("/login", { from: "Products" })
//       }}>
//         Login
//       </Button>
//       <Button
//       className="button"
//       variant="contained"
//       onClick={()=>{
//         // history.push("/register", { from: "Products" })
//       }}>
//         Register
//       </Button>
//     </div>)
//     }
  
  

//   const history = useHistory();
    return (
      <Box className="header">
        {/* <Box className="header-title">
            <img src="logo_light.svg" alt="QKart-icon"></img>
        </Box> */}
        {children}
        {/* {button} */}
        
    
    <ThemeProvider theme={theme}>
        <Button variant="contained">Give Feedback</Button>
    </ThemeProvider>
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
        <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search a song of your choice"
            inputProps={{ 'aria-label': 'search google maps' }}
        />
        <Divider sx={{ height: 28 }} orientation="vertical" />
        <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <SearchIcon />
        </IconButton>
    </Paper>
      </Box>
    );
};

export default Header;
