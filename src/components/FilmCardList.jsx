import React from 'react';
import CinemaInfo from "./CinemaInfo";

const FilmCardList = ({fcards, remove}) => {

    if (!fcards.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Film Cards не найдены!
            </h1>
        )
    }

    let cardFilterByTwoElements = [];
    let counter = 0;
    let row  = [];

    for(let i = 0; i < fcards.length; i++){

        if(counter === 2){
            cardFilterByTwoElements.push(row);
            counter = 0;
            row = [];
        };
        row.push(fcards[i]);

        if(i === fcards.length - 1){
            cardFilterByTwoElements.push(row);
        }
        counter++;
    }

    


    return (
        <div className='container'>
        <div class="header-container">
            <h1>KINO1</h1>
        </div>

            {cardFilterByTwoElements.map((fcard) =>
                    <div className = 'row'>
                          <CinemaInfo film_card ={fcard[0]} />
                        {fcard[1] &&
                            <CinemaInfo film_card ={fcard[1]} film_times = {fcard[1]} />
                        }
                    </div>
            )}
        </div>

    );
};

export default FilmCardList;
