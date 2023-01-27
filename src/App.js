import React, {useState} from 'react';
import CinemaCardList from "./components/CinemaCardList";
import DateOption from "./components/DateOption";
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

    const [snacks, setSnacks] = useState([
        {id:1, snack_name: 'Popcorn', img_src: 'popcorn.jpg'},
        {id:2, snack_name: 'Coca-Cola', img_src: 'cola.jpg'},
        {id:3, snack_name: 'Fanta', img_src: 'fanta.jpg'},
        {id:4, snack_name: 'Fuse tea', img_src: 'fusetea.jpg'},
        {id:5, snack_name: 'Tassay', img_src: 'tassay.jpg'},

    ])




    return (
      <div>
          <CinemaCardList cards ={cards} ></CinemaCardList>
          <DateOption></DateOption>
          <SnackList snack_cards={snacks}></SnackList>
      </div>

  );
}

export default App;
