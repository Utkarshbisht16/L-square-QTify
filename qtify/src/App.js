import React from 'react';
import Navbar from "./components/navbar/navbar.jsx"
import { StyledEngineProvider } from '@mui/material';
import {Outlet} from 'react-router-dom'
import { useState, useEffect } from 'react';
import Hero from './components/hero/hero.jsx';
import Album from './components/album/album.jsx';
import { fetchNewAlbums, fetchTopAlbums } from './api/api.js';

function App() {
  const [data, setData] = useState({});
  const generateData = (key, source) =>{
    source().then((data)=>{
      setData((prevState)=>{
        return {...prevState, [key]:data};
      })
    })
  }
  useEffect(()=>{
    generateData("topAlbums", fetchTopAlbums)
    generateData("newAlbums", fetchNewAlbums)
  },[])

  const {topAlbums = [], newAlbums = []} = data;
  return (
    <>
      <StyledEngineProvider injectFirst>
        <Navbar/>
        <Outlet context={{data : {topAlbums,newAlbums}}}/>
      </StyledEngineProvider>
    </>
  );
}

export default App;
