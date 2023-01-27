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
    let counter = 0;
    let row  = [];

    for(let i = 0; i < cards.length; i++){

        if(counter === 2){
            cardFilterByTwoElements.push(row);
            counter = 0;
            row = [];
        };
        row.push(cards[i]);

        if(i === cards.length - 1){
            cardFilterByTwoElements.push(row);
        }
        counter++;

    }

    console.log(cardFilterByTwoElements);


    return (
        <div>
            {cardFilterByTwoElements.map((card) =>
                    <div className = 'row'>
                          <CinemaCard cinema_card ={card[0]} />
                        {card[1] &&
                            <CinemaCard cinema_card ={card[1]} />
                        }

                    </div>
            )}
        </div>

    );
};

export default CinemaCardlist;