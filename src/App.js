import React from 'react';
import CinemaCard from "./components/CinemaCard";
import CinemaInfo from "./components/CinemaInfo";
import  './styles/App.css'


function App() {
  return (
        <CinemaCard cinema_card = {{address: "Kino1", img_src: 'logo.jpg'}}/>
  )
  return(
    <CinemaInfo cinema_info = {{address: "Kino1", img_src: 'logo.jpg'}}/>
  );
}

export default App;
