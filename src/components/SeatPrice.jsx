import React from 'react';

const SeatPrice = ({props}) => {
    return (
        <div className='seatPriceBody'>
            <div className='seatPriceTitle'>
                <label id='placeRowId'> 1 </label>  ряд
                <label id='placeColId'> 1 </label>  место
            </div>
            <div className='seatPriceElements'>
                <hr></hr>
                    <text>Взрослый</text>
                    <span id='priceOfPlaceForAdult'>2000 тг</span>
                <hr></hr>
                    <text>Студенческий</text>
                    <span id='priceOfPlaceForStudent'>2000 тг</span>
                <hr></hr>
                    <text className='VIP'>VIP</text>
            </div>
        </div>
    )
}

export default SeatPrice;