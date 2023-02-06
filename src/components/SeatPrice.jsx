import React from 'react';
import { useNavigate } from "react-router-dom";
import {
    Link
} from "react-router-dom";
const SeatPrice = (props) => {
    const navigate = useNavigate();
    function navigateTo(path) {
        navigate(path);
    }
    function setTypeOfPlace(type){
        let price;
        if(type === "Взрослый"){
            const priceSpan = document.getElementById("priceOfPlaceForAdult");
            price = parseInt(priceSpan.innerHTML);

        }else{
            const priceSpan = document.getElementById("priceOfPlaceForStudent");
            price = parseInt(priceSpan.innerHTML);
        }
        props.setTypeOfPlace(type, price);
        navigateTo("/ticketbooking/payment");
    }


    return (
        <div className='seatPriceBody'>
            <div className='seatPriceTitle'>

                <Link to={`/ticketbooking/cinemas/${props.selectedMovie.id}/movies`}>
                    &larr;
                </Link>

                <label id='placeRowId'> 1 </label>  ряд
                <label id='placeColId'> 1 </label>  место
            </div>
            <div className='seatPriceElements'>
                <hr></hr>
                <div  onClick={() => setTypeOfPlace("Взрослый")}>
                    <text>Взрослый</text>
                    <span id='priceOfPlaceForAdult'>2000 тг</span>
                </div>

                <hr></hr>
                <div  onClick={() => setTypeOfPlace("Студенческий")}>
                    <text>Студенческий</text>
                    <span id='priceOfPlaceForStudent'>2000 тг</span>
                </div>

                <hr></hr>
                <text className='VIP'>VIP</text>
            </div>
        </div>
    )
}

export default SeatPrice;