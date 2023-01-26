import React from 'react';
import CinemaCard from "./CinemaCard";

const CinemaCardlist = ({cards, remove}) => {

    if (!cards.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Cards не найдены!
            </h1>
        )
    }

    let cardFilterByTwoElements = [];

    for(let i = 0; i < cards.length; i++){
       let row = []
        for(let j = 0; j < 2; j++){
            if(cards[i]){
                row.push(cards[i]);
            }

        }
        cardFilterByTwoElements.push(row);
        row = []

     }


    return (
        <div>
            {cardFilterByTwoElements.map((card) =>
                    <div className = 'row'>
                          <CinemaCard cinema_card ={card[0]} />
                           <CinemaCard cinema_card ={card[1]} />
                    </div>
            )}
        </div>

    );
};

export default CinemaCardlist;