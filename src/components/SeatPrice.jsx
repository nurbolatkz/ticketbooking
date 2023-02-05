import React from 'react';

const SeatPrice = ({props}) => {
    return (
        <div className='seatPriceBody'>
            <div className='seatPriceTitle'>5 ряд 10 место</div>
            <div className='seatPriceElements'>
                <hr></hr>
                    <text>Взрослый</text>
                    <span>2000 тг</span>
                <hr></hr>
                    <text>Студенческий</text>
                    <span>2000 тг</span>
                <hr></hr>
                    <text className='VIP'>VIP</text>
            </div>
        </div>
    )
}

export default SeatPrice;