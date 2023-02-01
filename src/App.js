import React, {useState} from 'react';
import CinemaCardList from "./components/CinemaCardList";
import DateOption from "./components/DateOption";
import SnackList from "./components/SnackList.jsx";
import Modal from "./components/Modal";
import  './styles/App.css'


function App() {

    const [cards, setCards] = useState([
        {id:1, address: 'KINO1', img_src: 'logo.jpg'},
        {id:2, address: 'KINO1', img_src: 'logo.jpg'},
        {id:3, address: 'KINO1', img_src: 'logo.jpg'},
        {id:4, address: 'KINO1', img_src: 'logo.jpg'},
        {id:5, address: 'KINO1', img_src: 'logo.jpg'}

    ])

    const [cartItems, setCartItems] = useState([]);
    const [isModalActive, setIsModalActive] = useState(false);
    const [cinemaCartItem, setCinemaCartItem] = useState({});
    const [selectedDay, setSelectedDay] = useState();

    const [snacks, setSnacks] = useState([
        {id:1, snack_name: 'Popcorn', img_src: 'popcorn.jpg', price: 200},
        {id:2, snack_name: 'Coca-Cola', img_src: 'cola.jpg' ,price: 110},
        {id:3, snack_name: 'Fanta', img_src: 'fanta.jpg', price: 100},
        {id:4, snack_name: 'Fuse tea', img_src: 'fusetea.jpg', price: 15},
        {id:5, snack_name: 'Tassay', img_src: 'tassay.jpg', price: 100}

    ])



    const addItem = (item) => {
        const exist = cartItems.find((x) => x.id === item.id);
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x.id === item.id ? { ...exist, quantity: exist.quantity + 1} : x
                )

            );

        } else {
            item.quantity = 1;
            setCartItems([...cartItems, { ...item}]);
        }

    };

    const removeItem = (item) => {
        const exist = cartItems.find((x) => x.id === item.id);
        if (exist.quantity === 1) {
            setCartItems(cartItems.filter((x) => x.id !== item.id));
        } else {
            setCartItems(
                cartItems.map((x) =>
                    x.id === item.id ? { ...item, quantity: exist.quantity - 1 } : x
                )
            );
        }
    };

    const addCinemaCartItem = (item) => {
        setCinemaCartItem(item);
        setIsModalActive(false);
        console.log(cinemaCartItem);

    }
    const selectDayOption = (day) => {
        setSelectedDay(day);
        console.log(selectedDay);
    }
    return (
      <div>
          <CinemaCardList cards ={cards} setActiveModal={setIsModalActive} addCinemaCart={addCinemaCartItem}></CinemaCardList>

          <SnackList snack_cards={snacks} addItem={addItem} removeItem={removeItem}></SnackList>
          <Modal active={isModalActive} setActive={setIsModalActive}>
              <DateOption setActiveModal={setIsModalActive} selectDay={selectDayOption}></DateOption>
          </Modal>
      </div>


  );
}

export default App;
