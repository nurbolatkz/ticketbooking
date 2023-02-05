import React, { useState, useEffect } from 'react';
import {
    createBrowserRouter,
    RouterProvider,
    Link
} from "react-router-dom";
import { useNavigate } from "react-router-dom";
/* ------ import component ------ */
import CinemaCardList from "./components/CinemaCardList";
import DateOption from "./components/DateOption";
import Modal from "./components/Modal";
import FilmBlock from './components/FilmBlock';
import SnackPage from './components/SnackPage';
import CinemaPlace from './components/CinemaPlace';
import FilmCardList from './components/FilmCardList';
import ShortInfoBtn from './components/ShortInfoBtn';
import AllInfo from './components/AllInfo';

import SeatPrice from './components/SeatPrice';

/* ------ import css ------ */
import './styles/App.css';


function App() {


    const [cards, setCards] = useState([

        {id:1, address: 'KINO1', img_src: 'logo.jpg'},
        {id:2, address: 'KINO2', img_src: 'logo.jpg'},
        {id:3, address: 'KINO3', img_src: 'logo.jpg'},
        {id:4, address: 'KINO4', img_src: 'logo.jpg'},
        {id:5, address: 'KINO5', img_src: 'logo.jpg'}

    ])

    /*
    const [cards, setCards] = useState([])
    useEffect(() => {
        fetch('http://localhost:8000/cinemas/', {
            method: 'GET',
            headers: {
                accept: 'application/json',
            },})
            .then(res => console.log(res))
            .then(data => {setCards(data)})
    })
*/
    const [fcards, setFCards] = useState([
        {
           id: 1,
            movies : [
                { id:1,
                    film_name: 'Вавилон',
                    date:'01.02.2023',
                    times: ['20:30','21:10','21:40','22:00','00:00'],
                    lang: 'Русский',
                    ageaccess: '16'},
                    {
                        id:2, 
                        film_name: 'Отзвуки прошлого',
                        date: '02.02.2023',
                        times: ['22:30','23:10', '23:40','00:00', '00:10'],
                        lang: 'Русский',
                        ageaccess: '18'
                    }

            ]
        },
        {
           id: 2,
            movies: [
                { id:1,
                    film_name: 'Вавилон',
                    date:'01.02.2023',
                    times: ['20:30','21:10','21:40','22:00','00:00'],
                    lang: 'Русский',
                    ageaccess: '16'},
                    {
                        id:2, 
                        film_name: 'Отзвуки прошлого',
                        date: '02.02.2023',
                        times: ['22:30','23:10', '23:40','00:00', '00:10'],
                        lang: 'Русский',
                        ageaccess: '18'
                    },
                    { id:3,
                        film_name: 'Вавилон',
                        date:'01.02.2023',
                        times: ['20:30','21:10','21:40','22:00','00:00'],
                        lang: 'Русский',
                        ageaccess: '16'},
                        {
                            id:4, 
                            film_name: 'Отзвуки прошлого',
                            date: '02.02.2023',
                            times: ['22:30','23:10', '23:40','00:00', '00:10'],
                            lang: 'Русский',
                            ageaccess: '18'
                        }
            ]
        }

    ])


    const [cartItems, setCartItems] = useState([]);
    const [isModalActive, setIsModalActive] = useState(false);
    const [cinemaCartItem, setCinemaCartItem] = useState({});
    const [selectedDay, setSelectedDay] = useState();
    const [selectedMovie, setSelectedMovie] =  useState({});
    const [selectedPlace, setSelectedPlace] = useState({});
    const [isSeatPriceActive, setIsSeatPriceActive] = useState(false);
    const [ticketDetails, setTicketDetails] = useState({cinemaCartItem: {},
                                                        selectedDay: {},
                                                        selectedMovie: {},
                                                        selectedPlace: {},
                                                        cartItems: []});


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
        setTicketDetails({...ticketDetails,cartItems: [...cartItems]});
        console.log(ticketDetails);

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
        setTicketDetails({...ticketDetails,cartItems: [...cartItems]});
        console.log(ticketDetails);

    };


    const addCinemaCartItem = (item) => {
        setCinemaCartItem(item);
        setIsModalActive(false);
        setTicketDetails({...ticketDetails,cinemaCartItem: item});

    }

    const selectDayOption = (day) => {
        setSelectedDay(day);
        setTicketDetails({...ticketDetails,selectedDay: day});
    }

    const setMovie = (movie)=>{
        setSelectedMovie(movie);
        setTicketDetails({...ticketDetails,selectedMovie: movie});
    }

    const setPlaceInfo = (placeInfo)=>{
        setIsSeatPriceActive(true);
        setSelectedPlace(placeInfo);
    }

    const addTypeOfSelecedPlace = (type, price)=>{
        selectedPlace.type = type;
        selectedPlace.price = price;
        setTicketDetails({...ticketDetails,selectedPlace: selectedPlace});
    }



    const router = createBrowserRouter([
        {
            path: "/",
            element:
                <>
                    <CinemaCardList cards ={cards} setActiveModal={setIsModalActive} addCinemaCart={addCinemaCartItem}></CinemaCardList>
                    <Modal active={isModalActive} setActive={setIsModalActive}>
                        <DateOption setActiveModal={setIsModalActive} selectDay={selectDayOption} cinema_cart={cinemaCartItem}></DateOption>
                    </Modal>
                </>,
        },
        {
            path: "/cinemas/:cinemaId/movies",
            element:
                <>
                    <FilmCardList fcards = {fcards}
                                 cinema_cards={cards}
                                  setSelectedMovie={setMovie}
                    ></FilmCardList>
                    <Link to="/places/">
                        <ShortInfoBtn cinema_card={cinemaCartItem}
                                      movie={selectedMovie}
                        >

                        </ShortInfoBtn>
                    </Link>

                </>
        },
        {
            path: "/payment",
            element:
                <>
                    <div className='filmBlockAll'>
                        <FilmBlock movie={selectedMovie}></FilmBlock>
                    </div>
                    <div className='allInfoBlockAll'>
                        <AllInfo place_detail={selectedPlace}></AllInfo>
                    </div>
                    <div className='snackBlockAll'>
                        <SnackPage snack_cards={snacks} addSnack={addItem} removeSnack={removeItem}></SnackPage>
                    </div>
                </>
        },
        {
            path: "/places",
            element:
                <>
                    <div className='filmBlockAll'>
                        <FilmBlock movie={selectedMovie}></FilmBlock>
                    </div>
                    <div className='cinemaPlaceBlockAll'>
                        <CinemaPlace setDetailOfPlace={setPlaceInfo} ></CinemaPlace>
                    </div>
                    <div className={isSeatPriceActive ? 'seatPriceBlockAll': 'hide-element'} >
                        <SeatPrice selectedMovie={cinemaCartItem} setTypeOfPlace={addTypeOfSelecedPlace}></SeatPrice>
                    </div>
                    <div className={!isSeatPriceActive ? 'seatPriceBlockAll': 'hide-element'}>
                        <ShortInfoBtn cinema_card={cinemaCartItem}
                                      movie={selectedMovie}>

                        </ShortInfoBtn>
                    </div>



                </>
        },
       

    ]);


    return (
       
        <RouterProvider router={router} />


  );
}

export default App;
