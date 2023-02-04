import React from 'react';


const SelectPlace = (props) => {

    function Place(row, col, booked, price) {
        this.row = row;
        this.col = col;
        this.booked = booked;
        this.price = price;
    }
    let seatsObjArr = [];

    for(let i = 0; i < 13; i++){
        for(let j = 0; j < 8; j++){
            seatsObjArr.push(new Place(i, j, false, 1500));
        }
    }

    console.log(seatsObjArr);
    return (
        <div className='seatBody'>
            <div id="seats" className='seats-container'>

                    {seatsObjArr.map((seat) =>
                            <div className = 'row'>
                                <h5>{seat.col}</h5>
                            </div>
                        )}
            </div>
        </div>
    )
}


export default SelectPlace;