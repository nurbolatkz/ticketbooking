import React from 'react';


const ShortInfoBtn = (props) => {
    return (
        <div className='selectedBody'>
            <div className='selected'>
                <span>{props.cinema_card.address}</span>
                <span>-</span>
                <span>{props.movie.film_name}</span>
                <span>-</span>
                <span>{props.movie.date}</span>
                <span>-</span>
                <span id='selected-movie-time'>{props.movie.selectedTime}</span>
                <span>-</span>
                <span>{props.movie.lang}</span>
                <span>-</span>
                <span>Зал 5</span>
            </div>
        </div>
    )
}

export default ShortInfoBtn;