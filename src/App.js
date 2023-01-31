import React, {useState} from 'react';
import CinemaCardList from "./components/CinemaCardList";
import DateOption from "./components/DateOption";
import FilmCardList from './components/FilmCardList';
import SnackList from "./components/SnackList.jsx";
import  './styles/App.css'


function App() {

    const [cards, setCards] = useState([
        {id:1, address: 'KINO1', img_src: 'logo.jpg'},
        {id:2, address: 'KINO1', img_src: 'logo.jpg'},
        {id:3, address: 'KINO1', img_src: 'logo.jpg'},
        {id:4, address: 'KINO1', img_src: 'logo.jpg'},
        {id:5, address: 'KINO1', img_src: 'logo.jpg'}

    ])
    const [fcards, setFCards] = useState([
        {id:1, film_name: 'Вавилон', times: ['20:30','21:10','21:40','22:00','00:00'], 
        lang: 'Русский', ageaccess: '16'},
        {id:2, film_name: 'Отзвуки прошлого', times: ['22:30','23:10',
        '23:40','00:00', '00:10'], lang: 'Русский', ageaccess: '18'},
    ])

    const [snacks, setSnacks] = useState([
        {id:1, snack_name: 'Popcorn', img_src: 'popcorn.jpg', price: 200},
        {id:2, snack_name: 'Coca-Cola', img_src: 'cola.jpg' ,price: 110},
        {id:3, snack_name: 'Fanta', img_src: 'fanta.jpg', price: 100},
        {id:4, snack_name: 'Fuse tea', img_src: 'fusetea.jpg', price: 15},
        {id:5, snack_name: 'Tassay', img_src: 'tassay.jpg', price: 100}

    ])


    return (
      <div>
          <CinemaCardList cards ={cards} ></CinemaCardList>
          <FilmCardList fcards = {fcards}></FilmCardList>
          <DateOption></DateOption>
          <SnackList snack_cards={snacks}></SnackList>
      </div>


  );
}

export default App;
