import React, {useState} from 'react';
import CinemaCardList from "./components/CinemaCardList";
import  './styles/App.css'


function App() {

    const [cards, SetCards] = useState([
      {id:1, address: 'KINO1', img_src: 'logo.jpg'},
      {id:2, address: 'KINO1', img_src: 'logo.jpg'},
      {id:3, address: 'KINO1', img_src: 'logo.jpg'},
      {id:4, address: 'KINO1', img_src: 'logo.jpg'}
    ])



  return (
      <CinemaCardList cards ={cards} ></CinemaCardList>
  );
}

export default App;
