import React from 'react';
import Navbar from "./components/navbar/navbar.jsx"
import Hero from "./components/hero/hero.jsx"
import Cards from "./components/card/card.jsx"
import Create from "./components/create/create.jsx"
import Album from "./components/album/album.jsx"
function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Album/>
    </>
  );
}

export default App;
