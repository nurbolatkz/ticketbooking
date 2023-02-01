import React from 'react';

const FilmTimes = ({filmTime}) =>{
    return (
        <div className='Time'>
            <button className='timebutton'>{filmTime}</button>            
        </div>
    )
}

const CinemaInfo = (props) => {
    return (
            <div class="film-card">
                <div class="film-card-body">
                    <div className='film-info'>
                        <h5 className='film-name'>{props.film_card.film_name}</h5>
                        <div className='oneline'>
                        <span className='lang'>Язык: {props.film_card.lang} </span>
                        <span className='age-access'>с {props.film_card.ageaccess} лет </span>
                        </div>
                        <hr className='line'></hr>
                    </div>
                    <div className='film-times'>
                        {props.film_card.times.map((time)=>
                            <FilmTimes filmTime = {time}></FilmTimes>)
                        }
                    </div>
                </div>
            </div>

    );
};

export default CinemaInfo;
