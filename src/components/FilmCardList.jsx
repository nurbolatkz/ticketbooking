import React from 'react';
import CinemaInfo from "./CinemaInfo";
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const FilmCardList = ({fcards, remove}) => {
    const {cinemaId} = useParams();
    if (!fcards.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Film Cards не найдены!
            </h1>
        )
    }

    let movies = fcards.find((x) => x.id === cinemaId);

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
