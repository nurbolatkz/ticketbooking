import React, {useState} from 'react';
import CinemaCardList from "./components/CinemaCardList";
import DateOption from "./components/DateOption";
import  './styles/App.css'


function App() {

    const [cards, SetCards] = useState([
      {id:1, address: 'KINO1', img_src: 'logo.jpg'},
      {id:2, address: 'KINO1', img_src: 'logo.jpg'},
      {id:3, address: 'KINO1', img_src: 'logo.jpg'},
      {id:4, address: 'KINO1', img_src: 'logo.jpg'}
    ])



  return (
      <div>
          <CinemaCardList cards ={cards} ></CinemaCardList>
          <DateOption></DateOption>
      </div>

  );
}

export default App;
