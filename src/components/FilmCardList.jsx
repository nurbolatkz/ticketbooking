import React from 'react';
import CinemaInfo from "./CinemaInfo";
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const FilmCardList = ({fcards, remove, cinema_cards}) => {
    const {cinemaId} = useParams();
    if (!fcards.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Film Cards не найдены!
            </h1>
        )
    }
    const cinema_card = cinema_cards.find(c => c.id === Number(cinemaId));

    let movies = fcards.find((x) => x.id === Number(cinemaId));

    for(let i = 0; i<fcards.length; i++){
  
        if(fcards[i].id == cinemaId){
            movies = fcards[i].movies
        }
    }
    if (!movies){
        return(
            <h1 style={{textAlign: 'center'}}>
            Movies не найдены!
        </h1>
        )
    }


    let cardFilterByTwoElements = [];
    let counter = 0;
    let row  = [];

    for(let i = 0; i < movies.length; i++){

        if(counter === 2){
            cardFilterByTwoElements.push(row);
            counter = 0;
            row = [];
        };
        row.push(movies[i]);

        if(i === movies.length - 1){
            cardFilterByTwoElements.push(row);
        }
        counter++;
    }
    console.log(cardFilterByTwoElements)

    


    return (
        <div className='container'>
        <div class="header-container">
            <h1>{cinema_card.address}</h1>
        </div>

            {cardFilterByTwoElements.map((fcard) =>
                    <div className = 'row'>
                          <CinemaInfo film_card ={fcard[0]} cinemaCard={cinema_card} />
                        {fcard[1] &&
                            <CinemaInfo film_card ={fcard[1]} film_times = {fcard[1]} cinemaCard={cinema_card}/>
                        }
                    </div>
            )}
        </div>

    );
};

export default FilmCardList;
