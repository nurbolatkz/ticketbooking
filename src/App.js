import React from 'react';
import CinemaCard from "./components/CinemaCard";
import  './styles/App.css'


function App() {
  return (
        <CinemaCard cinema_card = {{address: "Kino1", img_src: 'logo.jpg'}}/>
  );
}

export default App;
