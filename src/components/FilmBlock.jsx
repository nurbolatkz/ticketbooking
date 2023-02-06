import React from 'react';

const FilmBlock = (props) => {
    return(
        <div className='filmBlockBody'>
            <div className='filmInfoBody'>
                <img className='filmImage' src='babylon.jpg'></img>
                   <div className='filmInfoBlockOne'>
                        <span className='filmName'>{props.movie.film_name}</span><br></br>
                        <span className='filmLang'>Язык: {props.movie.lang}</span>
                   </div>
                   <div className='filmInfoBlockTwo'>
                        <span className='filmTime'>{props.movie.selectedTime}</span><br></br>
                        <span className='filmAgeAccess'>Возрастной рейтинг: с {props.movie.ageaccess} лет</span>
                   </div>
            </div>
        </div>
    )
}


export default FilmBlock;