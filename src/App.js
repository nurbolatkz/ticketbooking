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
        {id:1, snack_name: 'Popcorn', img_src: 'popcorn.jpg', quantity: 1},
        {id:2, snack_name: 'Coca-Cola', img_src: 'cola.jpg' ,quantity: 1},
        {id:3, snack_name: 'Fanta', img_src: 'fanta.jpg', quantity: 1},
        {id:4, snack_name: 'Fuse tea', img_src: 'fusetea.jpg', quantity: 1},
        {id:5, snack_name: 'Tassay', img_src: 'tassay.jpg', quantity: 1}

    ])
    const setVisibilitySnackCard = (element_id) => {
        let snack_card = document.getElementById(element_id)
        let snack_card_counter = snack_card.querySelector(".counter");
        let snack_card_select_btn = snack_card.querySelector('.select-btn');
        let snack_card_quantity_change_btns = snack_card.querySelector('.btn-container');

        snack_card_select_btn.style.visibility = 'hidden';
        snack_card_counter.style.visibility ='visible';
        snack_card_quantity_change_btns.style.visibility = 'visible';
        console.log(snack_card_counter);
    }

    const handleIncrement = (snack_item) => {

        let new_snacks = []
        for(let i = 0; i < snacks.length; i++){
            if(snacks[i].id === snack_item.id){
                snacks[i].quantity += 1;
            }
            new_snacks.push(snacks[i]);
        }
        setSnacks(new_snacks);
    }

    const handleDecrement = (snack_item) => {

        let new_snacks = []
        for(let i = 0; i < snacks.length; i++){
            if(snacks[i].id === snack_item.id){
                snacks[i].quantity -= 1;
            }
            new_snacks.push(snacks[i]);
        }
        setSnacks(new_snacks);
    }

    return (
      <div>
          <CinemaCardList cards ={cards} ></CinemaCardList>
          <DateOption></DateOption>
      </div>
        /*
          <SnackList snack_cards={snacks}
                     setVisibilityCard={setVisibilitySnackCard}
                     increment = {handleIncrement}
                     decrement ={handleDecrement}
          ></SnackList */

  );
}

export default App;
